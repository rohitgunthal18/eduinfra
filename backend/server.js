const express = require('express');
const cors = require('cors');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Enhanced CORS configuration
app.use(cors({
  origin: [
    'https://eduinfra.vercel.app', 
    'http://localhost:3000',
    'https://eduinfra-git-main-rohitgunthal18.vercel.app',  // Vercel preview URLs
    'https://eduinfra-rohitgunthal18.vercel.app'  // Additional Vercel patterns
  ],
  credentials: true,
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  exposedHeaders: ['Content-Type', 'Authorization']
}));

// Add preflight handler for all routes
app.options('*', cors());

app.use(express.json());

// Add request logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path} - Origin: ${req.headers.origin}`);
  next();
});

// Database setup
const dbPath = path.join(__dirname, 'database.sqlite');
console.log('Database path:', dbPath);

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to SQLite database at:', dbPath);
  }
});

// Initialize database tables
db.serialize(() => {
  // Admin users table
  db.run(`CREATE TABLE IF NOT EXISTS admin_users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`, (err) => {
    if (err) {
      console.error('Error creating admin_users table:', err);
    } else {
      console.log('Admin users table ready');
    }
  });

  // Project quotes table
  db.run(`CREATE TABLE IF NOT EXISTS project_quotes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    company TEXT,
    project_type TEXT NOT NULL,
    technology TEXT NOT NULL,
    complexity TEXT NOT NULL,
    timeline TEXT NOT NULL,
    budget TEXT NOT NULL,
    description TEXT,
    features TEXT,
    status TEXT DEFAULT 'pending',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`, (err) => {
    if (err) {
      console.error('Error creating project_quotes table:', err);
    } else {
      console.log('Project quotes table ready');
    }
  });

  // Reviews table
  db.run(`CREATE TABLE IF NOT EXISTS reviews (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    company TEXT,
    project_title TEXT,
    rating INTEGER NOT NULL CHECK(rating >= 1 AND rating <= 5),
    review_text TEXT NOT NULL,
    status TEXT DEFAULT 'pending' CHECK(status IN ('pending', 'approved', 'rejected')),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`, (err) => {
    if (err) {
      console.error('Error creating reviews table:', err);
    } else {
      console.log('Reviews table ready');
    }
  });

  // Create default admin user
  const hashedPassword = bcrypt.hashSync('4482@AdmiN', 10);
  db.run(`INSERT OR IGNORE INTO admin_users (username, password) VALUES (?, ?)`, 
    ['admin', hashedPassword], 
    function(err) {
      if (err) {
        console.error('Error creating admin user:', err);
      } else if (this.changes > 0) {
        console.log('✓ Default admin user created successfully');
      } else {
        console.log('✓ Admin user already exists');
      }
    }
  );
});

// Database helper functions
const dbHelpers = {
  // Admin authentication
  authenticateAdmin: (username, password) => {
    return new Promise((resolve, reject) => {
      db.get(
        'SELECT * FROM admin_users WHERE username = ?',
        [username],
        (err, row) => {
          if (err) {
            reject(err);
          } else if (row) {
            const passwordMatch = bcrypt.compareSync(password, row.password);
            if (passwordMatch) {
              resolve(row);
            } else {
              resolve(null);
            }
          } else {
            resolve(null);
          }
        }
      );
    });
  },

  // Save project quote
  saveProjectQuote: (quoteData) => {
    return new Promise((resolve, reject) => {
      const {
        name, email, phone, company, project_type, technology, 
        complexity, timeline, budget, description, features
      } = quoteData;

      db.run(
        `INSERT INTO project_quotes 
         (name, email, phone, company, project_type, technology, complexity, timeline, budget, description, features)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [name, email, phone, company, project_type, technology, complexity, timeline, budget, description, features],
        function(err) {
          if (err) {
            reject(err);
          } else {
            resolve({ id: this.lastID, success: true });
          }
        }
      );
    });
  },

  // Get all quotes with optional status filter
  getAllQuotes: (status = null) => {
    return new Promise((resolve, reject) => {
      let query = 'SELECT * FROM project_quotes';
      let params = [];
      
      if (status) {
        query += ' WHERE status = ?';
        params.push(status);
      }
      
      query += ' ORDER BY created_at DESC';
      
      db.all(query, params, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  },

  // Get quote by ID
  getQuoteById: (id) => {
    return new Promise((resolve, reject) => {
      db.get(
        'SELECT * FROM project_quotes WHERE id = ?',
        [id],
        (err, row) => {
          if (err) {
            reject(err);
          } else {
            resolve(row);
          }
        }
      );
    });
  },

  // Update quote status
  updateQuoteStatus: (id, status) => {
    return new Promise((resolve, reject) => {
      db.run(
        'UPDATE project_quotes SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
        [status, id],
        function(err) {
          if (err) {
            reject(err);
          } else {
            resolve({ success: true, changes: this.changes });
          }
        }
      );
    });
  },

  // Delete quote
  deleteQuote: (id) => {
    return new Promise((resolve, reject) => {
      db.run(
        'DELETE FROM project_quotes WHERE id = ?',
        [id],
        function(err) {
          if (err) {
            reject(err);
          } else {
            resolve({ success: true, changes: this.changes });
          }
        }
      );
    });
  },

  // Save review
  saveReview: (reviewData) => {
    return new Promise((resolve, reject) => {
      const { name, email, phone, company, project_title, rating, review_text } = reviewData;
      
      db.run(
        `INSERT INTO reviews (name, email, phone, company, project_title, rating, review_text) 
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [name, email, phone || null, company || null, project_title || null, rating, review_text],
        function(err) {
          if (err) {
            reject(err);
          } else {
            resolve({ 
              success: true, 
              reviewId: this.lastID,
              message: 'Review submitted successfully! It will be published after approval.' 
            });
          }
        }
      );
    });
  },

  // Get all reviews with optional status filter
  getAllReviews: (status = null) => {
    return new Promise((resolve, reject) => {
      let query = 'SELECT * FROM reviews';
      let params = [];
      
      if (status) {
        query += ' WHERE status = ?';
        params.push(status);
      }
      
      query += ' ORDER BY created_at DESC';
      
      db.all(query, params, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  },

  // Get review by ID
  getReviewById: (id) => {
    return new Promise((resolve, reject) => {
      db.get(
        'SELECT * FROM reviews WHERE id = ?',
        [id],
        (err, row) => {
          if (err) {
            reject(err);
          } else {
            resolve(row);
          }
        }
      );
    });
  },

  // Update review status
  updateReviewStatus: (id, status) => {
    return new Promise((resolve, reject) => {
      db.run(
        'UPDATE reviews SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
        [status, id],
        function(err) {
          if (err) {
            reject(err);
          } else {
            resolve({ success: true, changes: this.changes });
          }
        }
      );
    });
  },

  // Delete review
  deleteReview: (id) => {
    return new Promise((resolve, reject) => {
      db.run(
        'DELETE FROM reviews WHERE id = ?',
        [id],
        function(err) {
          if (err) {
            reject(err);
          } else {
            resolve({ success: true, changes: this.changes });
          }
        }
      );
    });
  }
};

// JWT Secret
const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-edu-infra-2024';

// Middleware to verify admin token
function verifyAdminToken(req) {
  const token = req.headers.authorization?.replace('Bearer ', '');
  
  if (!token) {
    return null;
  }

  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
}

// API Routes

// Health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Backend is running',
    timestamp: new Date().toISOString(),
    cors_origins: [
      'https://eduinfra.vercel.app', 
      'http://localhost:3000',
      'https://eduinfra-git-main-rohitgunthal18.vercel.app',
      'https://eduinfra-rohitgunthal18.vercel.app'
    ]
  });
});

// Test CORS endpoint
app.get('/api/test-cors', (req, res) => {
  res.json({ 
    message: 'CORS is working!',
    origin: req.headers.origin,
    timestamp: new Date().toISOString()
  });
});

// Admin authentication
app.post('/api/admin/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }

    const admin = await dbHelpers.authenticateAdmin(username, password);

    if (!admin) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: admin.id, username: admin.username },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      success: true,
      message: 'Login successful',
      admin: { id: admin.id, username: admin.username },
      token
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Project quotes
app.post('/api/quotes', async (req, res) => {
  try {
    const quoteData = req.body;

    const requiredFields = ['name', 'email', 'project_type', 'technology', 'complexity', 'timeline', 'budget'];
    for (const field of requiredFields) {
      if (!quoteData[field]) {
        return res.status(400).json({ error: `${field} is required` });
      }
    }

    const result = await dbHelpers.saveProjectQuote(quoteData);

    res.json({
      success: true,
      message: 'Quote request submitted successfully!',
      id: result.id
    });
  } catch (error) {
    console.error('Save quote error:', error);
    res.status(500).json({ error: 'Failed to save quote request' });
  }
});

app.get('/api/quotes', async (req, res) => {
  try {
    const admin = verifyAdminToken(req);
    if (!admin) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const status = req.query.status;
    const quotes = await dbHelpers.getAllQuotes(status);

    res.json({
      success: true,
      quotes
    });
  } catch (error) {
    console.error('Get quotes error:', error);
    res.status(500).json({ error: 'Failed to fetch quotes' });
  }
});

app.get('/api/quotes/:id', async (req, res) => {
  try {
    const admin = verifyAdminToken(req);
    if (!admin) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const quote = await dbHelpers.getQuoteById(req.params.id);

    if (!quote) {
      return res.status(404).json({ error: 'Quote not found' });
    }

    res.json({
      success: true,
      quote
    });
  } catch (error) {
    console.error('Get quote error:', error);
    res.status(500).json({ error: 'Failed to fetch quote' });
  }
});

app.put('/api/quotes/:id', async (req, res) => {
  try {
    const admin = verifyAdminToken(req);
    if (!admin) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const { status } = req.body;
    const result = await dbHelpers.updateQuoteStatus(req.params.id, status);

    res.json({
      success: true,
      message: 'Quote status updated successfully'
    });
  } catch (error) {
    console.error('Update quote error:', error);
    res.status(500).json({ error: 'Failed to update quote' });
  }
});

app.delete('/api/quotes/:id', async (req, res) => {
  try {
    const admin = verifyAdminToken(req);
    if (!admin) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const result = await dbHelpers.deleteQuote(req.params.id);

    res.json({
      success: true,
      message: 'Quote deleted successfully'
    });
  } catch (error) {
    console.error('Delete quote error:', error);
    res.status(500).json({ error: 'Failed to delete quote' });
  }
});

// Reviews
app.post('/api/reviews', async (req, res) => {
  try {
    const reviewData = req.body;
    
    const { name, email, rating, review_text } = reviewData;
    
    if (!name || !email || !rating || !review_text) {
      return res.status(400).json({ error: 'Name, email, rating, and review text are required' });
    }

    if (rating < 1 || rating > 5) {
      return res.status(400).json({ error: 'Rating must be between 1 and 5' });
    }

    const result = await dbHelpers.saveReview(reviewData);
    
    res.status(201).json(result);
  } catch (error) {
    console.error('Error saving review:', error);
    res.status(500).json({ error: 'Failed to submit review' });
  }
});

app.get('/api/reviews', async (req, res) => {
  try {
    const admin = verifyAdminToken(req);
    if (!admin) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    const status = req.query.status;
    const reviews = await dbHelpers.getAllReviews(status);
    
    res.json({ reviews });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
});

app.get('/api/reviews/public', async (req, res) => {
  try {
    const reviews = await dbHelpers.getAllReviews('approved');
    
    const publicReviews = reviews.map(review => ({
      id: review.id,
      name: review.name,
      company: review.company,
      project_title: review.project_title,
      rating: review.rating,
      review_text: review.review_text,
      created_at: review.created_at
    }));
    
    res.json({ reviews: publicReviews });
  } catch (error) {
    console.error('Error fetching public reviews:', error);
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
});

app.get('/api/reviews/:id', async (req, res) => {
  try {
    const admin = verifyAdminToken(req);
    if (!admin) {
      return res.status(401).json({ error: 'Authentication required' });
    }
    
    const review = await dbHelpers.getReviewById(req.params.id);
    
    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }
    
    res.json({ review });
  } catch (error) {
    console.error('Error fetching review:', error);
    res.status(500).json({ error: 'Failed to fetch review' });
  }
});

app.put('/api/reviews/:id', async (req, res) => {
  try {
    const admin = verifyAdminToken(req);
    if (!admin) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    const { status } = req.body;
    const result = await dbHelpers.updateReviewStatus(req.params.id, status);

    res.json({
      success: true,
      message: 'Review status updated successfully'
    });
  } catch (error) {
    console.error('Error updating review:', error);
    res.status(500).json({ error: 'Failed to update review' });
  }
});

app.delete('/api/reviews/:id', async (req, res) => {
  try {
    const admin = verifyAdminToken(req);
    if (!admin) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    const result = await dbHelpers.deleteReview(req.params.id);

    res.json({
      success: true,
      message: 'Review deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting review:', error);
    res.status(500).json({ error: 'Failed to delete review' });
  }
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Global error handler:', err);
  res.status(500).json({ 
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
  });
});

// 404 handler
app.use('*', (req, res) => {
  console.log(`404 - Route not found: ${req.method} ${req.originalUrl}`);
  res.status(404).json({ 
    error: 'Route not found',
    path: req.originalUrl,
    method: req.method
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Backend server running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
  console.log(`🌐 CORS enabled for: https://eduinfra.vercel.app`);
  console.log(`📅 Server started at: ${new Date().toISOString()}`);
}); 