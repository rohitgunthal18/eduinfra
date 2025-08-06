// API Client for communicating with backend server
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

class ApiClient {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  // Helper method for making API requests
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    // Add authorization header if token exists
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('admin-token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'API request failed');
      }

      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // Health check
  async healthCheck() {
    return this.request('/health');
  }

  // Admin authentication
  async adminLogin(credentials) {
    const response = await this.request('/api/admin/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });

    // Store token in localStorage
    if (response.token && typeof window !== 'undefined') {
      localStorage.setItem('admin-token', response.token);
    }

    return response;
  }

  async adminLogout() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('admin-token');
    }
    return { success: true, message: 'Logged out successfully' };
  }

  // Project quotes
  async submitQuote(quoteData) {
    return this.request('/api/quotes', {
      method: 'POST',
      body: JSON.stringify(quoteData),
    });
  }

  async getQuotes(status = null) {
    const endpoint = status ? `/api/quotes?status=${status}` : '/api/quotes';
    return this.request(endpoint);
  }

  async getQuoteById(id) {
    return this.request(`/api/quotes/${id}`);
  }

  async updateQuoteStatus(id, status) {
    return this.request(`/api/quotes/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ status }),
    });
  }

  async deleteQuote(id) {
    return this.request(`/api/quotes/${id}`, {
      method: 'DELETE',
    });
  }

  // Reviews
  async submitReview(reviewData) {
    return this.request('/api/reviews', {
      method: 'POST',
      body: JSON.stringify(reviewData),
    });
  }

  async getReviews(status = null) {
    const endpoint = status ? `/api/reviews?status=${status}` : '/api/reviews';
    return this.request(endpoint);
  }

  async getPublicReviews() {
    return this.request('/api/reviews/public');
  }

  async getReviewById(id) {
    return this.request(`/api/reviews/${id}`);
  }

  async updateReviewStatus(id, status) {
    return this.request(`/api/reviews/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ status }),
    });
  }

  async deleteReview(id) {
    return this.request(`/api/reviews/${id}`, {
      method: 'DELETE',
    });
  }

  // Check if user is authenticated
  isAuthenticated() {
    if (typeof window === 'undefined') return false;
    const token = localStorage.getItem('admin-token');
    return !!token;
  }

  // Get stored token
  getToken() {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem('admin-token');
  }
}

// Create and export a singleton instance
const apiClient = new ApiClient();
export default apiClient; 