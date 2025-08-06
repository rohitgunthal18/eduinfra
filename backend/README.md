# EduInfra Backend API

This is the backend API server for the EduInfra website, designed to run on Render.

## 🚀 Quick Start

### Local Development

1. **Install dependencies:**
```bash
cd backend
npm install
```

2. **Set up environment variables:**
```bash
cp env.example .env
# Edit .env with your values
```

3. **Start the server:**
```bash
npm run dev
```

The server will run on `http://localhost:3001`

### Production Deployment

This backend is designed to be deployed on Render.

## 📋 API Endpoints

### Health Check
- `GET /health` - Server health check

### Admin Authentication
- `POST /api/admin/login` - Admin login

### Project Quotes
- `POST /api/quotes` - Create new quote
- `GET /api/quotes` - Get all quotes (admin only)
- `GET /api/quotes/:id` - Get specific quote (admin only)
- `PUT /api/quotes/:id` - Update quote status (admin only)
- `DELETE /api/quotes/:id` - Delete quote (admin only)

### Reviews
- `POST /api/reviews` - Submit new review
- `GET /api/reviews` - Get all reviews (admin only)
- `GET /api/reviews/public` - Get approved reviews (public)
- `GET /api/reviews/:id` - Get specific review (admin only)
- `PUT /api/reviews/:id` - Update review status (admin only)
- `DELETE /api/reviews/:id` - Delete review (admin only)

## 🔧 Environment Variables

- `PORT` - Server port (default: 3001)
- `NODE_ENV` - Environment (production/development)
- `JWT_SECRET` - JWT signing secret
- `FRONTEND_URL` - Frontend domain for CORS

## 🗄️ Database

Uses SQLite with the following tables:
- `admin_users` - Admin authentication
- `project_quotes` - Project quote submissions
- `reviews` - Customer reviews

## 🔐 Security

- JWT-based authentication for admin routes
- CORS configured for frontend domain
- Password hashing with bcrypt
- Input validation on all endpoints

## 📦 Dependencies

- Express.js - Web framework
- SQLite3 - Database
- bcryptjs - Password hashing
- jsonwebtoken - JWT authentication
- cors - Cross-origin resource sharing
- dotenv - Environment variables 