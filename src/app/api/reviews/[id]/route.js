import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { dbHelpers } from '../../../../../lib/database';

const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-edu-infra-2024';

// Verify admin authentication
function verifyAdminAuth(request) {
  const token = request.cookies.get('admin-token')?.value;
  
  if (!token) {
    throw new Error('Authentication required');
  }

  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    throw new Error('Invalid token');
  }
}

// GET - Get specific review
export async function GET(request, { params }) {
  try {
    verifyAdminAuth(request);
    
    const review = await dbHelpers.getReviewById(params.id);
    
    if (!review) {
      return NextResponse.json(
        { error: 'Review not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ review });
  } catch (error) {
    if (error.message === 'Authentication required' || error.message === 'Invalid token') {
      return NextResponse.json(
        { error: error.message },
        { status: 401 }
      );
    }
    
    console.error('Error fetching review:', error);
    return NextResponse.json(
      { error: 'Failed to fetch review' },
      { status: 500 }
    );
  }
}

// PUT - Update review status
export async function PUT(request, { params }) {
  try {
    verifyAdminAuth(request);
    
    const { status } = await request.json();
    
    if (!status || !['pending', 'approved', 'rejected'].includes(status)) {
      return NextResponse.json(
        { error: 'Valid status is required (pending, approved, rejected)' },
        { status: 400 }
      );
    }
    
    const result = await dbHelpers.updateReviewStatus(params.id, status);
    
    if (result.changes === 0) {
      return NextResponse.json(
        { error: 'Review not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ 
      success: true, 
      message: `Review ${status} successfully` 
    });
  } catch (error) {
    if (error.message === 'Authentication required' || error.message === 'Invalid token') {
      return NextResponse.json(
        { error: error.message },
        { status: 401 }
      );
    }
    
    console.error('Error updating review:', error);
    return NextResponse.json(
      { error: 'Failed to update review' },
      { status: 500 }
    );
  }
}

// DELETE - Delete review
export async function DELETE(request, { params }) {
  try {
    verifyAdminAuth(request);
    
    const result = await dbHelpers.deleteReview(params.id);
    
    if (result.changes === 0) {
      return NextResponse.json(
        { error: 'Review not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Review deleted successfully' 
    });
  } catch (error) {
    if (error.message === 'Authentication required' || error.message === 'Invalid token') {
      return NextResponse.json(
        { error: error.message },
        { status: 401 }
      );
    }
    
    console.error('Error deleting review:', error);
    return NextResponse.json(
      { error: 'Failed to delete review' },
      { status: 500 }
    );
  }
} 