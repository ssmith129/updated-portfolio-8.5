# Vercel Deployment Guide

## 📋 Prerequisites

- [Vercel Account](https://vercel.com/signup)
- Node.js 18+ installed locally
- Git repository connected to Vercel

## 🚀 Deployment Methods

### Method 1: Vercel CLI (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy to Preview:**
   ```bash
   vercel
   ```

4. **Deploy to Production:**
   ```bash
   vercel --prod
   ```

### Method 2: Vercel Dashboard (Git Integration)

1. **Import Project:**
   - Go to [Vercel Dashboard](https://vercel.com/new)
   - Click "Import Project"
   - Select your Git repository

2. **Configure Build Settings:**
   - **Framework Preset:** Other
   - **Build Command:** `npm run build:vercel`
   - **Output Directory:** `dist/spa`
   - **Install Command:** `npm install`

3. **Add Environment Variables:**
   - Go to Project Settings → Environment Variables
   - Add: `PING_MESSAGE` = `ping` (or your custom value)

4. **Deploy:**
   - Click "Deploy"
   - Wait for build to complete

### Method 3: Vercel MCP Integration

Since you have Vercel MCP connected, you can deploy directly from the Builder.io interface using the Vercel tools.

## 🔧 Configuration Files

### `vercel.json`
- Defines build settings, rewrites, and headers
- Configures SPA routing fallback
- Sets up API route handling

### API Routes
All serverless functions are in the `api/` directory:
- `/api/ping` - Health check endpoint
- `/api/demo` - Demo endpoint
- `/api/placeholder/:width/:height` - Placeholder images (redirects to picsum.photos)

## 📝 Environment Variables

Set these in Vercel Dashboard (Project Settings → Environment Variables):

| Variable | Description | Default |
|----------|-------------|---------|
| `PING_MESSAGE` | Custom ping response message | `ping` |

## 🏗️ Build Process

1. **Build Command:** `npm run build:vercel`
   - Runs `vite build` to create production SPA
   - Outputs to `dist/spa`

2. **Output Structure:**
   ```
   dist/spa/
   ├── index.html
   ├── assets/
   │   ├── index-[hash].js
   │   └── index-[hash].css
   └── ...other static files
   ```

3. **Serverless Functions:**
   - Auto-detected from `api/` directory
   - Each `.ts` file becomes a serverless endpoint
   - Deployed as Edge Functions

## 🔍 Troubleshooting

### Build Fails
- Check Node.js version (requires 18+)
- Verify all dependencies are in `package.json`
- Run `npm install` and `npm run build:vercel` locally first

### API Routes 404
- Ensure functions are in `api/` directory
- Check `vercel.json` rewrites configuration
- Verify function exports default handler

### Environment Variables Not Working
- Add variables in Vercel Dashboard
- Redeploy after adding variables
- Check variable names match code

### SPA Routing Issues
- Verify `vercel.json` has SPA fallback rewrite
- Check React Router configuration
- Ensure all routes use browser history mode

## 📊 Performance Optimization

Your project includes:
- ✅ Static asset caching (1 year)
- ✅ Security headers (CSP, XSS protection)
- ✅ Gzip/Brotli compression (automatic)
- ✅ Edge Network distribution
- ✅ Serverless function optimization

## 🔗 Useful Links

- [Vercel Dashboard](https://vercel.com/dashboard)
- [Vercel Documentation](https://vercel.com/docs)
- [Serverless Functions Guide](https://vercel.com/docs/functions/serverless-functions)
- [Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)

## 📈 Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test API endpoints (`/api/ping`, `/api/demo`)
- [ ] Check environment variables work
- [ ] Test client-side routing
- [ ] Verify static assets load
- [ ] Check mobile responsiveness
- [ ] Test performance with Lighthouse
- [ ] Set up custom domain (optional)
- [ ] Configure analytics (optional)

## 🎯 Expected Results

After successful deployment:
- **Build Time:** ~1-2 minutes
- **Cold Start:** <500ms (serverless functions)
- **Page Load:** <2s (cached assets)
- **Global CDN:** Automatic edge distribution
- **SSL/HTTPS:** Automatic certificate
