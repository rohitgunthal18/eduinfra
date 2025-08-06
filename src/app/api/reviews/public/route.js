import { NextResponse } from 'next/server';
import { dbHelpers } from '../../../../../lib/database';

// GET - Fetch approved reviews for public display
export async function GET(request) {
  try {
    // Only fetch approved reviews
    const reviews = await dbHelpers.getAllReviews('approved');
    
    // Format reviews for public display (remove sensitive info if any)
    const publicReviews = reviews.map(review => ({
      id: review.id,
      name: review.name,
      company: review.company,
      project_title: review.project_title,
      rating: review.rating,
      review_text: review.review_text,
      created_at: review.created_at
    }));
    
    return NextResponse.json({ reviews: publicReviews });
  } catch (error) {
    console.error('Error fetching public reviews:', error);
    return NextResponse.json(
      { error: 'Failed to fetch reviews' },
      { status: 500 }
    );
  }
} 