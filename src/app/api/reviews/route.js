import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { dbHelpers } from '../../../../lib/database';

const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-edu-infra-2024';

// POST - Submit new review
export async function POST(request) {
  try {
    const reviewData = await request.json();
    
    // Validate required fields
    const { name, email, rating, review_text } = reviewData;
    
    if (!name || !email || !rating || !review_text) {
      return NextResponse.json(
        { error: 'Name, email, rating, and review text are required' },
        { status: 400 }
      );
    }

    // Validate rating
    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: 'Rating must be between 1 and 5' },
        { status: 400 }
      );
    }

    // Save review to database
    const result = await dbHelpers.saveReview(reviewData);
    
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error('Error saving review:', error);
    return NextResponse.json(
      { error: 'Failed to submit review' },
      { status: 500 }
    );
  }
}

// GET - Fetch reviews (admin only)
export async function GET(request) {
  try {
    // Check authentication
    const token = request.cookies.get('admin-token')?.value;
    
    if (!token) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    try {
      jwt.verify(token, JWT_SECRET);
    } catch (error) {
      return NextResponse.json(
        { error: 'Invalid token' },
        { status: 401 }
      );
    }

    // Get status filter from query params
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');

    // Fetch reviews
    const reviews = await dbHelpers.getAllReviews(status);
    
    return NextResponse.json({ reviews });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return NextResponse.json(
      { error: 'Failed to fetch reviews' },
      { status: 500 }
    );
  }
} 