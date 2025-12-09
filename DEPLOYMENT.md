# 🚀 Deployment Guide for KidSteps

## Deploy to Render (Recommended for this project)

Render provides free hosting with excellent Next.js support.

### Deploy to Render

1. **Push your code to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit: KidSteps e-commerce platform"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. **Create a Render account:**
   - Go to [render.com](https://render.com) and sign up
   - Connect your GitHub account

3. **Create a new Web Service:**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Configure:
     - **Name**: kidsteps-ecommerce
     - **Environment**: Node
     - **Build Command**: `npm install && npm run build`
     - **Start Command**: `npm start`
     - **Plan**: Free

4. **Add Environment Variables:**
   - NODE_ENV: production
   - NODE_VERSION: 18.17.0

5. **Deploy:**
   - Click "Create Web Service"
   - Your app will be live at: `https://kidsteps-ecommerce.onrender.com`

### Auto-deploy on updates

Render automatically deploys when you push to your main branch!

---

## Quick Deploy to Vercel (Alternative)

Vercel is another excellent platform for deploying Next.js applications.

### Option 1: Deploy with Vercel CLI

1. **Install Vercel CLI:**
```bash
npm i -g vercel
```

2. **Login to Vercel:**
```bash
vercel login
```

3. **Deploy:**
```bash
vercel
```

4. **Deploy to Production:**
```bash
vercel --prod
```

### Option 2: Deploy via GitHub

1. **Push your code to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit: KidSteps e-commerce platform"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and configure everything
   - Click "Deploy"

3. **Your site will be live in minutes!**

## Deploy to Netlify

1. **Install Netlify CLI:**
```bash
npm install -g netlify-cli
```

2. **Build the project:**
```bash
npm run build
```

3. **Deploy:**
```bash
netlify deploy --prod
```

## Deploy to AWS Amplify

1. **Install Amplify CLI:**
```bash
npm install -g @aws-amplify/cli
```

2. **Initialize Amplify:**
```bash
amplify init
```

3. **Add hosting:**
```bash
amplify add hosting
```

4. **Publish:**
```bash
amplify publish
```

## Environment Variables

If you need to set environment variables:

1. **Vercel:**
   - Go to Project Settings → Environment Variables
   - Add your variables

2. **Netlify:**
   - Go to Site Settings → Build & Deploy → Environment
   - Add your variables

3. **Local Development:**
   - Copy `.env.example` to `.env.local`
   - Fill in your values

## Custom Domain

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

### Netlify
1. Go to Domain Settings
2. Add custom domain
3. Configure DNS

## Performance Optimization

Before deploying, ensure:

- [ ] All images are optimized
- [ ] Unnecessary console.logs removed
- [ ] Environment variables properly set
- [ ] Build runs without errors
- [ ] All pages load correctly

## Post-Deployment Checklist

- [ ] Test all pages and links
- [ ] Verify responsive design on mobile
- [ ] Check loading times
- [ ] Test navigation
- [ ] Verify product pages work
- [ ] Test search functionality
- [ ] Check team slider animation

## Troubleshooting

### Build Failures

If build fails:
1. Check `npm run build` locally
2. Verify all dependencies are in package.json
3. Check for TypeScript errors
4. Review build logs

### Images Not Loading

Ensure image domains are configured in `next.config.ts`:
```typescript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
    },
  ],
}
```

### TypeScript Errors

Run locally:
```bash
npx tsc --noEmit
```

## Support

For deployment issues, contact any team member or refer to:
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)

---

**Built by Group 3 - CSC 414 Electronic Commerce**
