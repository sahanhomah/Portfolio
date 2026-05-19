# Deployment Guide

This guide covers deploying your portfolio to various platforms.

## Quick Start

### Production Build
```bash
npm run build
```

This creates an optimized `dist/` folder ready for deployment.

---

## Deployment Options

## 1. Vercel (Recommended - Most Popular)

**Pros:**
- Zero-configuration deployment
- Automatic SSL certificates
- Free tier with generous limits
- Excellent performance
- Built-in analytics

**Steps:**

1. **Create account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub, GitLab, or Bitbucket

2. **Connect repository**
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite

3. **Configure**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - (These are auto-detected)

4. **Deploy**
   - Click "Deploy"
   - Your site is live!

5. **Custom Domain**
   - Settings > Domains
   - Add your custom domain
   - Update DNS: Add CNAME pointing to Vercel

**Environment Variables:**
- Go to Settings > Environment Variables
- Add your secrets (API keys, etc.)

---

## 2. Netlify

**Pros:**
- Easy drag-and-drop deployment
- Excellent build system
- Fast CDN
- Forms support (paid)
- Great documentation

**Steps:**

1. **Create account**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub/GitLab

2. **Deploy from Git**
   - Click "New site from Git"
   - Connect your repository
   - Click "Authorize Netlify"

3. **Configure Build**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

4. **Manual Deployment (Alternative)**
   ```bash
   npm run build
   npx netlify-cli deploy --prod --dir=dist
   ```

5. **Custom Domain**
   - Domain settings
   - Add custom domain
   - Update DNS records as instructed

**Netlify Configuration File (netlify.toml):**
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 3. GitHub Pages

**Pros:**
- Free hosting
- Simple setup
- Uses your GitHub account

**Cons:**
- No serverless functions
- URL based on repository name

**Steps:**

1. **Keep the Vite base path set to your repo name**
   - This project uses `base: '/Portfolio/'` in `vite.config.js`.

2. **Use the GitHub Actions workflow**
   - The workflow at `.github/workflows/deploy.yml` runs `npm run build` and publishes `dist/`.

3. **Enable Pages**
   - Go to Settings > Pages
   - Source: **GitHub Actions**
   - Push to `main` or run the workflow manually from the Actions tab

5. **Subdomain**
   - Add `CNAME` file to `public/`:
   ```
   your-domain.com
   ```

---

## 4. AWS S3 + CloudFront

**Pros:**
- Highly scalable
- Full control
- Good for enterprise

**Cons:**
- More complex setup
- Requires AWS account

**Steps:**

1. **Create S3 bucket**
   - AWS S3 Console
   - Create bucket matching your domain
   - Enable static website hosting

2. **Upload files**
   ```bash
   npm run build
   aws s3 sync dist/ s3://your-bucket-name --delete
   ```

3. **CloudFront distribution**
   - Create distribution
   - Point to S3 bucket
   - Configure SSL certificate

4. **Add DNS records**
   - Add CNAME to Route53 or your DNS provider

---

## 5. Docker + Any Server

**Dockerfile:**
```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**nginx.conf:**
```nginx
server {
    listen 80;
    location / {
        root /usr/share/nginx/html;
        index index.html index.htm;
        try_files $uri $uri/ /index.html;
    }
}
```

**Build and run:**
```bash
docker build -t portfolio-website .
docker run -p 80:80 portfolio-website
```

---

## Environment Variables

Create `.env.local` for sensitive data:

```bash
VITE_EMAILJS_SERVICE_ID=your_id
VITE_EMAILJS_TEMPLATE_ID=your_id
VITE_EMAILJS_PUBLIC_KEY=your_key
```

**In components:**
```javascript
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
```

---

## Performance Tips

### 1. Optimize Images
- Use WebP format
- Compress images
- Implement lazy loading

### 2. Minify Assets
```bash
npm run build  # Already minifies with Vite
```

### 3. Enable GZIP Compression
- Most platforms do this automatically
- Verify in browser DevTools

### 4. Cache Strategy
- Set long cache headers for static assets
- Use versioned file names (automatic with Vite)

### 5. CDN Usage
- All mentioned platforms use CDNs
- Consider Cloudflare for additional optimization

---

## SSL Certificates

All platforms provide free SSL:
- **Vercel**: Automatic
- **Netlify**: Automatic
- **GitHub Pages**: Automatic

### GitHub Pages + EmailJS

If you deploy with GitHub Pages, add these repository secrets so the workflow can build the contact form correctly:

```text
VITE_EMAILJS_PUBLIC_KEY
VITE_EMAILJS_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID
VITE_EMAILJS_RECIPIENT
```

The workflow injects them during `npm run build`, and Vite bakes them into the static bundle.
- **AWS**: Use ACM (free)

---

## Domain Registration

Popular providers:
- Namecheap
- GoDaddy
- Route53 (AWS)
- Google Domains
- Cloudflare

**Steps:**
1. Register domain
2. Get nameservers from hosting provider
3. Update domain nameservers
4. Wait 24-48 hours for DNS propagation

---

## Monitoring & Analytics

### Analytics Options

1. **Google Analytics**
   ```javascript
   // Add to main.jsx
   import ReactGA from 'react-ga4';
   ReactGA.initialize(import.meta.env.VITE_GOOGLE_ANALYTICS_ID);
   ```

2. **Vercel Analytics** (if using Vercel)
   - Automatic on Vercel

3. **Netlify Analytics** (paid)
   - Enable in dashboard

---

## Troubleshooting

### 404 Errors on Refresh
**Cause:** Routing not configured correctly

**Solutions:**
- Vercel/Netlify: Auto-configured
- GitHub Pages: Set `base` in vite.config.js
- Self-hosted: Configure web server redirects

### Build Fails
```bash
# Clear cache
rm -rf node_modules .npm
npm ci
npm run build
```

### Slow Performance
- Check bundle size: `npm run build`
- Use DevTools Network tab
- Optimize images
- Check server response times

### Not Seeing Changes
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+F5)
- Check build logs

---

## Maintenance

### Regular Updates
```bash
npm update
npm audit
npm run build
```

### Backup
- Keep GitHub repository up-to-date
- Push all changes regularly

### Security
- Keep dependencies updated
- Never commit `.env` files
- Use environment variables for secrets

---

## Need Help?

- Check hosting platform documentation
- Review Vite docs: https://vitejs.dev
- React docs: https://react.dev
- Tailwind docs: https://tailwindcss.com

---

**Happy deploying! 🚀**
