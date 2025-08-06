# 🏗️ Deployment Structure: Vercel + Render

## 📁 **File Structure Overview**

```
agency1/
├── 📁 FRONTEND (Vercel) 📁
│   ├── src/                    # Next.js app directory
│   │   ├── app/               # Pages and components
│   │   │   ├── page.tsx       # Homepage
│   │   │   ├── admin/         # Admin pages
│   │   │   ├── layout.tsx     # Root layout
│   │   │   └── globals.css    # Global styles
│   │   └── ...
│   ├── lib/
│   │   └── api.js             # API client (calls Render backend)
│   ├── public/                # Static assets
│   ├── package.json           # Frontend dependencies
│   ├── next.config.ts         # Next.js config
│   ├── vercel.json            # Vercel deployment config
│   └── ...
│
├── 📁 BACKEND (Render) 📁
│   ├── server.js              # Express server
│   ├── package.json           # Backend dependencies
│   ├── database.sqlite        # SQLite database
│   ├── README.md              # Backend documentation
│   └── env.example            # Environment variables template
│
├── render.yaml                # Render deployment config
├── DEPLOYMENT_GUIDE.md        # Complete deployment guide
├── QUICK_START.md            # Quick reference
└── DEPLOYMENT_STRUCTURE.md   # This file
```

---

## 🎯 **What Gets Deployed Where**

### **🚀 FRONTEND (Vercel)**
**Purpose**: Static website, UI, user interface

**Files Deployed**:
```
✅ src/                    # All Next.js pages and components
✅ lib/api.js             # API client for backend communication
✅ public/                # Static assets (images, icons)
✅ package.json           # Frontend dependencies
✅ next.config.ts         # Next.js configuration
✅ vercel.json            # Vercel deployment settings
```

**What It Does**:
- ✅ Serves the website UI
- ✅ Handles user interactions
- ✅ Makes API calls to Render backend
- ✅ Manages admin authentication (client-side)
- ✅ Displays forms and content

**Environment Variables**:
- `NEXT_PUBLIC_API_URL` - Points to your Render backend URL

---

### **⚙️ BACKEND (Render)**
**Purpose**: API server, database, business logic

**Files Deployed**:
```
✅ backend/server.js       # Express server with all API routes
✅ backend/package.json    # Backend dependencies
✅ backend/database.sqlite # SQLite database
✅ backend/README.md       # Backend documentation
```

**What It Does**:
- ✅ Handles all API requests
- ✅ Manages SQLite database
- ✅ Processes form submissions
- ✅ Handles admin authentication
- ✅ Stores quotes and reviews

**Environment Variables**:
- `JWT_SECRET` - For admin authentication
- `FRONTEND_URL` - For CORS (your Vercel URL)
- `NODE_ENV` - Production environment

---

## 🔄 **How They Work Together**

### **Data Flow**:
```
User → Vercel Frontend → API Call → Render Backend → SQLite Database
```

### **Example Flow**:
1. **User submits quote** on Vercel frontend
2. **Frontend calls** `apiClient.submitQuote()` 
3. **API client sends** request to Render backend
4. **Backend saves** to SQLite database
5. **Backend returns** success response
6. **Frontend shows** success message

---

## 📋 **API Endpoints (Render Backend)**

### **Public Endpoints** (No authentication):
- `POST /api/quotes` - Submit project quote
- `POST /api/reviews` - Submit review
- `GET /api/reviews/public` - Get approved reviews
- `GET /health` - Health check

### **Admin Endpoints** (Require authentication):
- `POST /api/admin/login` - Admin login
- `GET /api/quotes` - Get all quotes
- `PUT /api/quotes/:id` - Update quote status
- `DELETE /api/quotes/:id` - Delete quote
- `GET /api/reviews` - Get all reviews
- `PUT /api/reviews/:id` - Update review status
- `DELETE /api/reviews/:id` - Delete review

---

## 🔐 **Authentication Flow**

### **Admin Login**:
1. **Frontend** (Vercel): User enters credentials
2. **API Client**: Sends to `POST /api/admin/login`
3. **Backend** (Render): Validates credentials
4. **Backend**: Returns JWT token
5. **Frontend**: Stores token in localStorage
6. **Frontend**: Redirects to admin panel

### **Protected Requests**:
1. **Frontend**: Includes token in Authorization header
2. **Backend**: Validates token
3. **Backend**: Returns protected data

---

## 🗄️ **Database Structure (SQLite on Render)**

### **Tables**:
```sql
-- Admin users
admin_users (id, username, password, created_at)

-- Project quotes
project_quotes (id, name, email, phone, company, project_type, 
               technology, complexity, timeline, budget, 
               description, features, status, created_at, updated_at)

-- Reviews
reviews (id, name, email, phone, company, project_title, 
        rating, review_text, status, created_at, updated_at)
```

---

## 🚀 **Deployment URLs**

### **Expected URLs**:
- **Frontend**: `https://your-app.vercel.app`
- **Backend**: `https://eduinfra-backend.onrender.com`
- **Admin Panel**: `https://your-app.vercel.app/admin`

### **Health Checks**:
- **Frontend**: Visit your Vercel URL
- **Backend**: `https://your-backend.onrender.com/health`

---

## 💰 **Cost Breakdown**

| Service | What It Hosts | Free Tier | Cost |
|---------|---------------|-----------|------|
| **Vercel** | Frontend (Next.js) | 100GB bandwidth | $0/month |
| **Render** | Backend (Express + SQLite) | 750 hours/month | $0/month |

---

## 🔧 **Development vs Production**

### **Local Development**:
```bash
# Frontend (Vercel)
npm run dev          # Runs on http://localhost:3000

# Backend (Render)
cd backend
npm run dev          # Runs on http://localhost:3001
```

### **Production**:
- **Frontend**: Automatically deployed to Vercel
- **Backend**: Automatically deployed to Render
- **Database**: Persistent SQLite on Render

---

## 🎯 **Key Benefits of This Architecture**

### **Vercel Frontend**:
- ✅ **Fast**: Global CDN, edge caching
- ✅ **Optimized**: Built for Next.js
- ✅ **Free**: Generous free tier
- ✅ **Auto-deploy**: Git integration

### **Render Backend**:
- ✅ **SQLite Support**: Perfect for your database
- ✅ **Persistent**: Data survives restarts
- ✅ **Free**: 750 hours/month
- ✅ **Simple**: Easy deployment

### **Combined Benefits**:
- ✅ **Scalable**: Can upgrade either service independently
- ✅ **Cost-effective**: Both free tiers
- ✅ **Reliable**: Each service optimized for its purpose
- ✅ **Maintainable**: Clear separation of concerns

---

## 🎉 **Summary**

**Frontend (Vercel)**: Your website UI, forms, admin panel
**Backend (Render)**: Your API server, database, business logic

**They work together** to create a complete, functional website with:
- ✅ User-facing website
- ✅ Admin panel
- ✅ Form submissions
- ✅ Data persistence
- ✅ Authentication
- ✅ All for $0/month!

**Ready to deploy! 🚀** 