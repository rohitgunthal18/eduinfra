# 🚀 Complete Deployment Guide: Frontend (Vercel) + Backend (Render)

This guide will walk you through deploying your EduInfra website with the frontend on Vercel and backend on Render.

## 📋 Pre-Deployment Checklist

### ✅ Required Accounts
- [ ] GitHub account
- [ ] Vercel account (free)
- [ ] Render account (free)

### ✅ Required Information
- [ ] Your GitHub repository URL
- [ ] Admin credentials (username: `admin`, password: `4482@AdmiN`)

---

## 🎯 STEP 1: PREPARE YOUR REPOSITORY

### 1.1 Push Your Code to GitHub
```bash
# If not already done, push your code to GitHub
git add .
git commit -m "Prepare for deployment: Frontend + Backend split"
git push origin main
```

### 1.2 Verify Repository Structure
Your repository should now have:
```
├── backend/           # Backend server (Render)
│   ├── server.js
│   ├── package.json
│   └── README.md
├── src/              # Frontend (Vercel)
├── lib/
│   └── api.js        # API client
├── vercel.json       # Vercel config
├── render.yaml       # Render config
└── package.json
```

---

## 🎯 STEP 2: DEPLOY BACKEND TO RENDER

### 2.1 Create Render Account
1. Go to [render.com](https://render.com)
2. Sign up with your GitHub account
3. Verify your email

### 2.2 Deploy Backend Service
1. **Click "New +" → "Web Service"**
2. **Connect your GitHub repository**
3. **Configure the service:**
   - **Name**: `eduinfra-backend`
   - **Environment**: `Node`
   - **Region**: Choose closest to your users
   - **Branch**: `main`
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

### 2.3 Set Environment Variables
In Render dashboard, go to your service → Environment:

| Variable | Value | Description |
|----------|-------|-------------|
| `NODE_ENV` | `production` | Environment |
| `JWT_SECRET` | `[Generate]` | Click "Generate" |
| `FRONTEND_URL` | `https://your-frontend-domain.vercel.app` | **Update after Vercel deployment** |

### 2.4 Deploy
1. Click "Create Web Service"
2. Wait for deployment (2-3 minutes)
3. **Copy your backend URL** (e.g., `https://eduinfra-backend.onrender.com`)

---

## 🎯 STEP 3: DEPLOY FRONTEND TO VERCEL

### 3.1 Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Sign up with your GitHub account
3. Import your repository

### 3.2 Configure Project
1. **Framework Preset**: Next.js (auto-detected)
2. **Root Directory**: `./` (root)
3. **Build Command**: `npm run build`
4. **Output Directory**: `.next`
5. **Install Command**: `npm install`

### 3.3 Set Environment Variables
In Vercel dashboard → Settings → Environment Variables:

| Variable | Value | Description |
|----------|-------|-------------|
| `NEXT_PUBLIC_API_URL` | `https://your-backend-url.onrender.com` | **Use your Render backend URL** |

### 3.4 Deploy
1. Click "Deploy"
2. Wait for deployment (1-2 minutes)
3. **Copy your frontend URL** (e.g., `https://your-app.vercel.app`)

---

## 🎯 STEP 4: CONNECT FRONTEND & BACKEND

### 4.1 Update Backend CORS
1. Go back to Render dashboard
2. Update `FRONTEND_URL` environment variable with your Vercel URL
3. Redeploy the backend service

### 4.2 Test the Connection
1. Visit your Vercel frontend URL
2. Try submitting a quote or review
3. Check if data appears in your admin panel

---

## 🎯 STEP 5: VERIFY DEPLOYMENT

### 5.1 Test Frontend Features
- [ ] Homepage loads correctly
- [ ] Quote form submission works
- [ ] Review form submission works
- [ ] Admin login works (`admin` / `4482@AdmiN`)

### 5.2 Test Backend API
Visit: `https://your-backend-url.onrender.com/health`
Should return: `{"status":"OK","message":"Backend is running"}`

### 5.3 Test Admin Panel
1. Go to `/admin` on your frontend
2. Login with: `admin` / `4482@AdmiN`
3. Check if quotes and reviews are visible

---

## 🔧 TROUBLESHOOTING

### Common Issues

#### ❌ Frontend can't connect to backend
**Solution:**
1. Check `NEXT_PUBLIC_API_URL` in Vercel
2. Verify backend URL is correct
3. Check CORS settings in backend

#### ❌ Backend deployment fails
**Solution:**
1. Check Render logs
2. Verify `package.json` in backend folder
3. Ensure all dependencies are listed

#### ❌ Database not working
**Solution:**
1. Check if SQLite file is included
2. Verify file permissions
3. Check Render logs for database errors

#### ❌ Admin login not working
**Solution:**
1. Check JWT_SECRET in Render
2. Verify admin credentials
3. Check browser console for errors

---

## 📊 MONITORING

### Vercel Monitoring
- **Analytics**: Built-in performance metrics
- **Logs**: Function execution logs
- **Uptime**: Automatic monitoring

### Render Monitoring
- **Logs**: Real-time application logs
- **Metrics**: CPU, memory usage
- **Uptime**: Health check monitoring

---

## 🔄 UPDATES & MAINTENANCE

### Frontend Updates
```bash
# Make changes locally
git add .
git commit -m "Update frontend"
git push origin main
# Vercel auto-deploys
```

### Backend Updates
```bash
# Make changes locally
git add .
git commit -m "Update backend"
git push origin main
# Render auto-deploys
```

### Database Backups
- Render provides automatic backups
- Download database file from Render dashboard
- Store in secure location

---

## 💰 COST ESTIMATION

| Service | Free Tier | Your Usage | Cost |
|---------|-----------|------------|------|
| **Vercel** | 100GB bandwidth | ✅ Within limits | $0/month |
| **Render** | 750 hours/month | ✅ Within limits | $0/month |
| **Total** | | | **$0/month** |

---

## 🎉 SUCCESS!

Your EduInfra website is now live with:
- ✅ **Frontend**: Vercel (fast, global CDN)
- ✅ **Backend**: Render (SQLite support)
- ✅ **Database**: Persistent SQLite
- ✅ **Admin Panel**: Fully functional
- ✅ **Forms**: Working quote & review submission

### Your URLs:
- **Frontend**: `https://your-app.vercel.app`
- **Backend**: `https://eduinfra-backend.onrender.com`
- **Admin**: `https://your-app.vercel.app/admin`

---

## 📞 SUPPORT

If you encounter issues:
1. Check the troubleshooting section above
2. Review Vercel/Render logs
3. Test locally first
4. Contact support if needed

**Happy deploying! 🚀** 