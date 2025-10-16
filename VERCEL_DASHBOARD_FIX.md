# 🚨 CRITICAL: Vercel Dashboard Manual Fix Required

## The Problem

Vercel is using **cached legacy "builds" configuration** from the dashboard, not from `vercel.json`. This is why you're seeing:

```
WARN! Due to 'builds' existing in your configuration file...
Error: Build "src" is "index.html" but expected "package.json" or "build.sh"
```

## ✅ SOLUTION: Manual Dashboard Override

### Step 1: Go to Vercel Project Settings

1. Open: https://vercel.com/dashboard
2. Select your project: `portfolio-website`
3. Click **Settings** (top navigation)

### Step 2: Clear Legacy Build Configuration

1. **Navigate to: Settings → General**

2. **Scroll to "Build & Development Settings"**

3. **CRITICAL: Override these settings manually:**

   ```
   Framework Preset:     Other
   Build Command:        npm run build:vercel
   Output Directory:     dist/spa
   Install Command:      npm install
   Root Directory:       (leave empty or ./)
   ```

4. **Toggle "Override" if available** - This forces Vercel to use these settings instead of any cached config

5. **Click "Save"**

### Step 3: Check for Legacy Builds Config

1. Still in Settings → General
2. Scroll down to look for any section labeled:
   - "Builds" (legacy)
   - "Build Configuration" (old format)
   - Any JSON editor showing `builds: [...]`

3. **If found:** Remove or clear the `builds` array

4. **If you see:**
   ```json
   {
     "builds": [
       { "src": "index.html", ... }
     ]
   }
   ```
   **DELETE THIS ENTIRE SECTION**

### Step 4: Clear All Caches

1. **Go to: Settings → Functions** (if exists)
   - Disable any custom build settings

2. **Go to: Deployments**
   - Find the latest deployment
   - Click the three dots menu (•••)
   - Select "Redeploy"
   - ✅ **CHECK "Clear Build Cache"**
   - ✅ **CHECK "Clear Function Cache"** (if available)
   - Click "Redeploy"

### Step 5: Alternative - Environment Variable Override

If the above doesn't work, try forcing via environment variables:

1. **Settings → Environment Variables**
2. **Add:**
   ```
   VERCEL_BUILD_COMMAND = npm run build:vercel
   VERCEL_OUTPUT_DIR = dist/spa
   ```
3. **Redeploy**

## 🔍 How to Verify It's Fixed

After redeploying, the build log should show:

✅ **Correct Output:**

```
Running "vercel build"
Detected package.json
Installing packages...
Running build command: npm run build:vercel
> vite build
✓ built in 12s
Build Completed
```

❌ **Wrong Output (means still using cached config):**

```
WARN! Due to 'builds' existing...
Error: Build "src" is "index.html"...
```

## 🚀 Nuclear Option (If Nothing Works)

### Delete and Recreate Project

1. **Backup Environment Variables:**
   - Settings → Environment Variables
   - Copy all variables

2. **Delete Project:**
   - Settings → General → Scroll to bottom
   - Click "Delete Project"
   - Confirm deletion

3. **Reimport Fresh:**
   - Go to: https://vercel.com/new
   - Import your GitHub repo
   - **IMPORTANT:** When configuring, set:
     ```
     Framework:       Other
     Build Command:   npm run build:vercel
     Output Dir:      dist/spa
     Install Command: npm install
     ```
   - Deploy

4. **Restore Environment Variables**

## 📋 Checklist

Before you start:

- [ ] Committed latest changes to GitHub
- [ ] Have access to Vercel Dashboard
- [ ] Know your environment variables (backup)

Dashboard fixes:

- [ ] Opened Vercel project settings
- [ ] Set Build Command: `npm run build:vercel`
- [ ] Set Output Directory: `dist/spa`
- [ ] Set Framework: `Other` or `null`
- [ ] Removed any legacy "builds" configuration
- [ ] Clicked "Save"
- [ ] Redeployed with "Clear Build Cache" checked

Verification:

- [ ] No "builds" warning in build logs
- [ ] Build command shows: `npm run build:vercel`
- [ ] Build completes successfully
- [ ] Site loads at deployment URL

## 🆘 Still Not Working?

### Check Git Repository

The Vercel dashboard might be pulling from an old commit:

```bash
# Check what's in your repository
git log --oneline -5
git show HEAD:vercel.json
```

Make sure your latest vercel.json is committed and pushed:

```bash
git add vercel.json
git commit -m "Fix: Remove legacy builds config"
git push origin main
```

### Contact Vercel Support

If you've tried everything:

1. Go to: https://vercel.com/support
2. Provide:
   - Project name: `portfolio-website`
   - Error: "Legacy builds configuration causing deployment failure"
   - What you've tried: "Cleared cache, updated vercel.json, overrode dashboard settings"
   - Request: "Please clear all cached build configurations for this project"

## 📝 Technical Explanation

**Why This Happens:**

1. **Legacy Format (v1/v2):** Used `builds` array

   ```json
   {
     "builds": [{ "src": "index.html", "use": "@vercel/static" }]
   }
   ```

2. **Modern Format:** Uses top-level build settings

   ```json
   {
     "buildCommand": "npm run build:vercel",
     "outputDirectory": "dist/spa"
   }
   ```

3. **Vercel Priority:**
   - Dashboard settings (cached)
   - Then vercel.json
   - Then package.json scripts

4. **The Fix:**
   - Override dashboard settings manually
   - Remove any cached "builds" arrays
   - Force use of modern build configuration

## ✅ Final Confirmation

After successful deployment, you should see:

```
Build Time: ~10-15s
Output: dist/spa/
Deploy Status: ✓ Ready
URL: https://your-project.vercel.app
```

No warnings, no errors about "builds" configuration.

---

**TL;DR:** Go to Vercel Dashboard → Settings → Build & Development Settings → Manually set Build Command to `npm run build:vercel` and Output Directory to `dist/spa` → Save → Redeploy with Clear Cache ✅
