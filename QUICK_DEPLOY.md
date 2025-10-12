# ⚡ Quick Deploy to Vercel

## 🚀 Deploy in 3 Steps

### Step 1: Build & Test Locally ✅

```bash
npm run build:vercel
```

**Expected output:** Build completes without errors

### Step 2: Choose Deployment Method

#### Option A: Vercel MCP (Easiest - You Have This!) ⭐

1. Use Vercel MCP tools in Builder.io
2. Click deploy
3. Done! ✨

#### Option B: Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

#### Option C: Git Push (Auto Deploy)

```bash
git add .
git commit -m "Deploy to Vercel"
git push origin main
```

### Step 3: Set Environment Variables

1. Go to Vercel Dashboard
2. Project Settings → Environment Variables
3. Add: `PING_MESSAGE` = `ping`
4. Redeploy if needed

## ✅ Pre-Flight Check

- [x] `npm run build:vercel` works
- [x] `vercel.json` exists
- [ ] Environment variables set
- [ ] Domain configured (optional)

## 🎯 Verify Deployment

After deploy, test:

- [ ] Homepage loads: `https://your-app.vercel.app`
- [ ] API works: `https://your-app.vercel.app/api/ping`
- [ ] Routes work: `https://your-app.vercel.app/about`
- [ ] No console errors

## 📊 What's Deployed

**Static Files:** `dist/spa/`

- index.html
- React bundle (optimized, code-split)
- CSS, fonts, images

**API Routes:** `api/`

- /api/ping (health check)
- /api/demo (example endpoint)

**Build:**

- Optimized: 38% smaller bundle
- Code-split: 5 chunks
- Gzipped: ~250 KB total

## 🆘 Quick Troubleshooting

**Build fails?**

```bash
npm install
npm run build:vercel
```

**API 404?**

- Check functions in `api/` folder
- Verify `vercel.json` rewrites

**Env vars not working?**

- Set in Vercel Dashboard
- Redeploy after adding

## 📚 Need More Info?

- Full Guide: [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md)
- Summary: [VERCEL_DEPLOYMENT_SUMMARY.md](./VERCEL_DEPLOYMENT_SUMMARY.md)
- Performance: [PERFORMANCE_OPTIMIZATION.md](./PERFORMANCE_OPTIMIZATION.md)

---

**You're ready! Pick a deployment method above and go! 🚀**
