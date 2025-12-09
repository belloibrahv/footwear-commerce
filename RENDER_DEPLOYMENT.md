# 🚀 Complete Render Deployment Guide for KidSteps

## Prerequisites

- GitHub account
- Render account (free at render.com)
- Your KidSteps project code

## Step-by-Step Deployment

### 1. Initialize Git Repository (if not already done)

```bash
cd /Users/kudiratbello/Tasued/group-3/footwear-commerce
git init
git add .
git commit -m "Initial commit: KidSteps e-commerce platform ready for deployment"
git branch -M main
```

### 2. Create GitHub Repository

1. Go to [github.com](https://github.com) and create a new repository
2. Name it: `kidsteps-ecommerce`
3. Don't initialize with README (we already have files)
4. Copy the repository URL

### 3. Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/kidsteps-ecommerce.git
git push -u origin main
```

### 4. Deploy to Render

#### A. Create Render Account
1. Go to [render.com](https://render.com)
2. Click "Get Started for Free"
3. Sign up with GitHub (recommended) or email

#### B. Connect GitHub Repository
1. Click "New +" in the Render dashboard
2. Select "Web Service"
3. Click "Connect account" to connect GitHub
4. Find and select your `kidsteps-ecommerce` repository

#### C. Configure Web Service

**Basic Settings:**
- **Name**: `kidsteps-ecommerce` (or your preferred name)
- **Region**: Choose closest to your target audience (e.g., Oregon, Frankfurt, Singapore)
- **Branch**: `main`
- **Root Directory**: Leave blank
- **Environment**: `Node`
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`

**Instance Type:**
- Select **Free** (perfect for this project)

**Environment Variables:**
Click "Add Environment Variable" and add:
- **Key**: `NODE_ENV` → **Value**: `production`
- **Key**: `NODE_VERSION` → **Value**: `18.17.0`

#### D. Deploy
1. Review your settings
2. Click "Create Web Service"
3. Render will start building your app (takes 2-5 minutes)

### 5. Access Your Live Site

Once deployment completes:
- Your site URL: `https://kidsteps-ecommerce.onrender.com`
- Status: Active ✓
- Free tier includes:
  - SSL certificate (HTTPS)
  - Automatic deployments
  - 750 hours/month free

## Features on Render

✅ **Automatic Deployments**: Push to GitHub → Auto-deploy  
✅ **Free SSL**: HTTPS enabled automatically  
✅ **Custom Domains**: Add your own domain  
✅ **Environment Variables**: Securely manage configs  
✅ **Build Logs**: Debug deployment issues  
✅ **Rollback**: Revert to previous deployments  

## Post-Deployment Configuration

### Add Custom Domain (Optional)

1. Go to your service → "Settings" tab
2. Scroll to "Custom Domain"
3. Click "Add Custom Domain"
4. Enter your domain (e.g., `kidsteps.com`)
5. Configure DNS records as instructed

### Configure DNS
Add these records to your domain provider:

```
Type: CNAME
Name: www
Value: kidsteps-ecommerce.onrender.com
```

## Troubleshooting

### Build Failures

**Error: Module not found**
- Check package.json has all dependencies
- Run `npm install` locally to verify

**Error: Build exceeded memory**
- Free tier has 512MB RAM
- Remove unused dependencies
- Optimize images

**TypeScript errors**
- Run `npm run build` locally first
- Fix all TypeScript errors before deploying

### Site is Slow

Free tier spins down after 15 min of inactivity:
- First request may take 30-60 seconds
- Upgrade to paid plan for always-on service

### Images Not Loading

Ensure `next.config.ts` allows external images:
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

## Auto-Deploy on Updates

### Enable Automatic Deployments

Already enabled by default! Every push to `main` triggers deployment:

```bash
# Make changes to your code
git add .
git commit -m "Update: Added new features"
git push origin main

# Render automatically deploys 🚀
```

### Manual Deploy

If auto-deploy is disabled:
1. Go to Render dashboard
2. Click your service
3. Click "Manual Deploy" → "Deploy latest commit"

## Monitoring

### View Logs

1. Go to your service in Render
2. Click "Logs" tab
3. See real-time application logs

### Check Metrics

- Request count
- Response times
- Memory usage
- Deployment history

## Testing Your Deployment

### Pre-Deployment Checklist

```bash
# Build locally first
npm run build

# Start production server locally
npm start

# Test the site at http://localhost:3000
```

Verify:
- [ ] Homepage loads
- [ ] Product pages work
- [ ] Shopping cart functions
- [ ] Checkout flow works
- [ ] All images display
- [ ] Mobile responsive
- [ ] No console errors

### Post-Deployment Testing

Visit your live site and test:

1. **Navigation**: All links work
2. **Products**: Browse products, filters work
3. **Product Details**: Individual product pages load
4. **Shopping Cart**: Add/remove items
5. **Checkout**: Complete purchase flow
6. **Order History**: View past orders
7. **Team Page**: Slider works
8. **Mobile**: Test on phone/tablet

## Performance Optimization

### Before Deploying

1. **Remove console.logs:**
```bash
# Search for console.logs
grep -r "console.log" app components
```

2. **Optimize images:**
- Use Next.js Image component
- Compress images
- Use appropriate sizes

3. **Minimize bundle:**
- Remove unused imports
- Use dynamic imports for large components

### After Deployment

1. **Monitor performance:**
   - Use Render metrics
   - Check Google PageSpeed Insights
   - Test loading times

2. **Optimize if needed:**
   - Enable caching
   - Use CDN for static assets
   - Implement lazy loading

## Cost Management

### Free Tier Limits

- ✅ 750 hours/month (enough for 1 site)
- ✅ Automatic SSL
- ✅ Custom domains
- ⚠️ Spins down after 15 min inactivity
- ⚠️ 512MB RAM

### Upgrade Options

**Starter Plan ($7/month)**:
- Always online (no spin down)
- 512MB RAM
- Better performance

**Standard Plan ($25/month)**:
- 2GB RAM
- Enhanced performance
- Priority support

## Backup & Recovery

### Download Deployment

```bash
# Clone from GitHub
git clone https://github.com/YOUR_USERNAME/kidsteps-ecommerce.git

# Install dependencies
cd kidsteps-ecommerce
npm install

# Run locally
npm run dev
```

### Rollback to Previous Version

1. Go to Render dashboard
2. Click your service
3. Go to "Events" tab
4. Find previous successful deployment
5. Click "Rollback to this deployment"

## Security Best Practices

1. **Environment Variables:**
   - Store secrets in Render environment variables
   - Never commit `.env` files

2. **Dependencies:**
   - Keep dependencies updated
   - Run `npm audit` regularly

3. **HTTPS:**
   - Always use HTTPS (automatic on Render)
   - Redirect HTTP to HTTPS

## Support & Resources

### Official Documentation

- [Render Docs](https://render.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Render Community](https://community.render.com)

### Common Commands

```bash
# View deployment status
git log --oneline -5

# Force redeploy
git commit --allow-empty -m "Trigger deploy"
git push origin main

# Check Node version
node --version

# Clean install
rm -rf node_modules package-lock.json
npm install
```

### Getting Help

1. **Render Support:**
   - Community forum: community.render.com
   - Email: support@render.com

2. **Team Support:**
   - Contact any Group 3 member
   - Check GitHub issues

## Success Metrics

After deployment, your site should have:

✅ **Performance:**
- Page load < 3 seconds
- Mobile responsive
- No JavaScript errors

✅ **Functionality:**
- All pages accessible
- Shopping cart works
- Checkout completes
- Orders saved

✅ **SEO:**
- Meta tags present
- Open Graph tags
- Proper heading structure

## Next Steps

1. **Test thoroughly** on the live site
2. **Share the URL** with stakeholders
3. **Monitor** performance and errors
4. **Iterate** based on feedback
5. **Maintain** with regular updates

---

## 🎉 Congratulations!

Your KidSteps e-commerce platform is now live on Render!

**Live URL**: `https://kidsteps-ecommerce.onrender.com`

Share it proudly! 🚀

---

**Built with ❤️ by Group 3 - CSC 414 Electronic Commerce**  
*Tai Solarin University of Education*
