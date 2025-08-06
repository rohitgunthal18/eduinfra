const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcryptjs');
const path = require('path');

// Database path
const dbPath = path.join(process.cwd(), 'database.sqlite');
console.log('Database path:', dbPath);

// Initialize database
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to SQLite database at:', dbPath);
  }
});

// Create tables
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

  // Create reviews table
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

  // Create default admin user (username: admin, password: 4482@AdmiN)
  console.log('Creating admin user...');
  const hashedPassword = bcrypt.hashSync('4482@AdmiN', 10);
  console.log('Hashed password created');
  
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
      console.log('Authenticating admin:', username);
      db.get(
        'SELECT * FROM admin_users WHERE username = ?',
        [username],
        (err, row) => {
          if (err) {
            console.error('Database query error:', err);
            reject(err);
          } else if (row) {
            console.log('Admin user found in database');
            const passwordMatch = bcrypt.compareSync(password, row.password);
            console.log('Password match:', passwordMatch);
            if (passwordMatch) {
              console.log('✓ Authentication successful');
              resolve(row);
            } else {
              console.log('✗ Password mismatch');
              resolve(null);
            }
          } else {
            console.log('✗ Admin user not found in database');
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

  // Get all project quotes
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

  // === REVIEW MANAGEMENT ===
  
  // Save new review
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

module.exports = { db, dbHelpers }; 