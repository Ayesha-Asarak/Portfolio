# Deployment Guide

This guide will help you deploy Ayesha Asarak's portfolio website to various hosting platforms.

## Prerequisites

Make sure you have built the project:

```bash
npm run build
```

This creates a `dist` folder with production-ready files.

## Deployment Options

### 1. Vercel (Recommended)

Vercel offers free hosting with automatic deployments from GitHub.

**Steps:**

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"

**Custom Domain:**
- Go to Project Settings > Domains
- Add your custom domain
- Update DNS records as instructed

### 2. Netlify

Another excellent free hosting option.

**Steps:**

1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Choose your repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Click "Deploy site"

### 3. GitHub Pages

Free hosting directly from your GitHub repository.

**Steps:**

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Update `vite.config.js`:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/repository-name/'
})
```

4. Deploy:
```bash
npm run deploy
```

### 4. Firebase Hosting

Google's hosting platform with free tier.

**Steps:**

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login:
```bash
firebase login
```

3. Initialize:
```bash
firebase init hosting
```

4. Configure:
   - Public directory: `dist`
   - Single-page app: `Yes`
   - GitHub auto deploys: `Optional`

5. Deploy:
```bash
npm run build
firebase deploy
```

### 5. Custom Server (VPS/Dedicated)

For hosting on your own server (DigitalOcean, AWS, etc.)

**Using Nginx:**

1. Build the project:
```bash
npm run build
```

2. Upload `dist` folder to server:
```bash
scp -r dist/* user@your-server:/var/www/portfolio
```

3. Configure Nginx:
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/portfolio;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

4. Restart Nginx:
```bash
sudo systemctl restart nginx
```

## Environment Variables

If you need to add environment variables:

1. Create `.env` file in project root:
```env
VITE_API_URL=https://api.example.com
VITE_CONTACT_EMAIL=ayeshaasarak@gmail.com
```

2. Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

3. For production, add these in your hosting platform's environment settings

## Custom Domain

After deployment, you can add a custom domain:

1. Purchase domain from registrar (Namecheap, GoDaddy, etc.)
2. Update DNS records:
   - For Vercel/Netlify: Follow their DNS instructions
   - For custom server: Point A record to server IP

**Example DNS Records:**
```
Type    Name    Value
A       @       your.server.ip
CNAME   www     your-site.vercel.app
```

## SSL Certificate

Most hosting platforms provide free SSL automatically. For custom servers:

**Using Let's Encrypt:**
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

## Post-Deployment Checklist

- [ ] Test all navigation links
- [ ] Check responsive design on mobile
- [ ] Verify contact form functionality
- [ ] Test external links (LinkedIn, GitHub)
- [ ] Check page load speed
- [ ] Verify SSL certificate
- [ ] Test on different browsers
- [ ] Add to Google Search Console
- [ ] Submit sitemap for SEO

## Troubleshooting

**Issue: Blank page after deployment**
- Check browser console for errors
- Verify `base` URL in vite.config.js
- Ensure all assets are loading correctly

**Issue: 404 on page refresh**
- Configure server for SPA routing
- Check hosting platform's redirect rules

**Issue: Slow load times**
- Enable compression on server
- Use CDN for assets
- Optimize images further

## Monitoring

Consider adding:
- Google Analytics for traffic tracking
- Sentry for error monitoring
- Uptime monitoring (UptimeRobot, Pingdom)

## Updates

To update the deployed site:

1. Make changes locally
2. Test: `npm run dev`
3. Build: `npm run build`
4. Deploy using your chosen method

For CI/CD, most platforms auto-deploy on git push to main branch.
