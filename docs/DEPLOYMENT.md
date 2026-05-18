# Deployment Guide

Guide for deploying Auxplay to production.

## Prerequisites

- Git
- GitHub account
- Domain name (optional)
- SSL certificate (recommended)

## Option 1: GitHub Pages (Recommended)

### Setup
1. Go to repository Settings
2. Navigate to Pages
3. Select "Deploy from a branch"
4. Choose "main" branch and "/root" folder
5. Save

### Custom Domain
1. Add CNAME file to root
2. Update DNS settings
3. Enable HTTPS

### Deploy
```bash
git push origin main
# Site updates automatically
```

## Option 2: Vercel

### Setup
```bash
npm i -g vercel
vercel
```

### Environment Variables
```
VITE_API_URL=https://api.auxplay.io
VITE_WALLET_ADDRESS=0x...
VITE_CONTRACT_ADDRESS=0x...
```

### Deploy
```bash
vercel --prod
```

## Option 3: Netlify

### Connect Repository
1. Login to Netlify
2. Connect GitHub account
3. Select repository
4. Deploy

### Build Settings
```
Build command: (none for static)
Publish directory: .
```

## Option 4: Self-Hosted (VPS)

### Server Setup
```bash
# Update system
sudo apt update && sudo apt upgrade

# Install Nginx
sudo apt install nginx

# Install SSL certificate
sudo apt install certbot python3-certbot-nginx
```

### Nginx Configuration
```nginx
server {
    listen 80;
    server_name auxplay.io www.auxplay.io;
    
    root /var/www/auxplay;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Enable gzip compression
    gzip on;
    gzip_types text/plain text/css application/json;
}
```

### Deploy
```bash
# Clone repository
git clone https://github.com/xenon231tech/auxplay.git
cd auxplay

# Copy to web root
sudo cp -r . /var/www/auxplay

# Set permissions
sudo chown -R www-data:www-data /var/www/auxplay

# Enable SSL
sudo certbot --nginx -d auxplay.io

# Restart Nginx
sudo systemctl restart nginx
```

## CI/CD Pipeline

### GitHub Actions Workflow
```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to production
        run: |
          # Deploy script
```

## Monitoring

### Performance
- Set up monitoring (Sentry, LogRocket)
- Monitor Core Web Vitals
- Set up alerts

### Analytics
- Google Analytics 4
- Mixpanel
- Amplitude

### Uptime
- UptimeRobot
- StatusPage
- Datadog

## Security

- ✅ HTTPS/SSL enabled
- ✅ Security headers configured
- ✅ CORS properly set
- ✅ No sensitive data in code
- ✅ Regular security audits

## Troubleshooting

### 404 Errors on Refresh
Add rewrite rule to serve index.html for SPA.

### Slow Performance
Enable gzip compression and CDN caching.

### SSL Issues
Renew certificate before expiration.

## Rollback

```bash
# Revert to previous version
git revert [commit-hash]
git push origin main
```

## Maintenance

- Regular backups
- Update dependencies
- Monitor security
- Check analytics
- Gather user feedback

For questions, open an issue on GitHub!
