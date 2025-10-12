# 🔧 Vercel Deployment Error Fix

## Error Encountered

```
Error: Build "src" is "index.html" but expected "package.json" or "build.sh"
WARN! Due to `builds` existing in your configuration file...
```

## Root Cause

Vercel is using cached or legacy build configuration instead of the updated `vercel.json`.

## ✅ Fixed Files

- [x] Updated `vercel.json` with modern configuration
- [x] Removed legacy `routes` configuration
- [x] Added explicit `version: 2` and `installCommand`

## 🚀 Solution - 2 Methods

### Method 1: Clear Vercel Cache & Redeploy (Recommended)

1. **Go to Vercel Dashboard:**
   - Visit: https://vercel.com/dashboard
   - Select your project

2. **Clear Build Cache:**
   - Go to Settings → General
   - Scroll to "Build & Development Settings"
   - **Important Settings:**
     - Framework Preset: **Other** (or leave blank)
     - Build Command: `npm run build:vercel`
     - Output Directory: `dist/spa`
     - Install Command: `npm install`

3. **Remove Legacy Configurations:**
   - Go to Settings → General
   - Look for any "Legacy" or "Builds" configuration
   - Remove/disable if present

4. **Redeploy:**
   - Go to Deployments
   - Click "Redeploy" on latest deployment
   - Check "Clear Build Cache"
   - Click "Redeploy"

### Method 2: Delete & Reimport Project (If Method 1 Fails)

1. **Delete Current Deployment:**
   - Vercel Dashboard → Project Settings
   - Scroll to bottom → Delete Project
   - Confirm deletion

2. **Reimport from GitHub:**
   - Go to https://vercel.com/new
   - Import your repository
   - Configure settings:
     - Framework: Other
     - Build Command: `npm run build:vercel`
     - Output Directory: `dist/spa`
     - Install Command: `npm install`

3. **Deploy:**
   - Click "Deploy"
   - Should work now!

## 📋 Vercel Dashboard Settings Checklist

Go to: Project Settings → General → Build & Development Settings

**Required Settings:**

```
Framework Preset:       Other (or blank)
Build Command:          npm run build:vercel
Output Directory:       dist/spa
Install Command:        npm install
Node.js Version:        20.x (or 18.x)
```

**Environment Variables (if needed):**

```
PING_MESSAGE = ping
```

## 🔍 Verify Configuration

### 1. Check vercel.json (Local)

```bash
cat vercel.json | grep -E "buildCommand|outputDirectory|version"
```

Expected output:

```json
"version": 2,
"buildCommand": "npm run build:vercel",
"outputDirectory": "dist/spa",
```

### 2. Test Build Locally

```bash
npm run build:vercel
```

Should output:

```
✓ built in X.XXs
dist/spa/index.html
dist/spa/assets/...
```

### 3. Verify Deployment

After redeploying, check:

- [ ] Build completes successfully
- [ ] No "builds" warnings
- [ ] Site loads at deployment URL
- [ ] API routes work: `/api/ping`, `/api/demo`

## 🐛 Troubleshooting

### Still Getting "builds" Warning?

**Solution A: Manual Override**

1. Vercel Dashboard → Settings
2. Look for "Override" or "Custom Configuration" toggle
3. Enable and set explicitly:
   - Build Command: `npm run build:vercel`
   - Output Directory: `dist/spa`

**Solution B: Use Vercel CLI**

```bash
# Delete .vercel folder
rm -rf .vercel

# Redeploy fresh
vercel --prod
```

**Solution C: Check for Hidden Configs**

```bash
# Search for any legacy configs
find . -name "vercel.json" -o -name "now.json"
cat .vercelignore 2>/dev/null || echo "No .vercelignore"
```

### Build Succeeds but Site Blank?

Check rewrites in vercel.json:

```json
"rewrites": [
  {
    "source": "/(.*)",
    "destination": "/index.html"
  }
]
```

### API Routes 404?

Ensure functions in `api/` directory:

```bash
ls -la api/
# Should show: demo.ts, ping.ts
```

## 📊 Expected Build Output

```
Running build in Washington, D.C., USA (East) – iad1
Cloning github.com/ssmith129/portfolio-website...
Running "vercel build"
> npm run build:vercel
> vite build
✓ 1723 modules transformed
✓ built in 12s
Build completed successfully
```

## ✅ Quick Fix Commands

```bash
# 1. Verify vercel.json is correct
cat vercel.json

# 2. Test build locally
npm run build:vercel

# 3. If using Vercel CLI, clear and redeploy
rm -rf .vercel
vercel --prod

# 4. If using Git, force new deployment
git commit --allow-empty -m "Fix Vercel config"
git push origin main
```

## 🎯 Final Steps

After applying fix:

1. **Redeploy in Vercel Dashboard:**
   - Deployments → Redeploy
   - ✅ Check "Clear Build Cache"
   - Click Redeploy

2. **Verify Build Log:**
   - Should show: `Running "vercel build"`
   - Should run: `npm run build:vercel`
   - Should output: `dist/spa/`
   - No warnings about "builds"

3. **Test Deployment:**
   - Visit deployment URL
   - Check homepage loads
   - Test `/api/ping`
   - Test routing

## 📞 Still Having Issues?

1. **Check Build Logs** in Vercel Dashboard
2. **Clear Browser Cache** and test again
3. **Use Vercel Support:** https://vercel.com/support
4. **Try Method 2** (delete & reimport)

---

**After Fix:** Build should complete in ~10-15 seconds with no errors! 🎉
