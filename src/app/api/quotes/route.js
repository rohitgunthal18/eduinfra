import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { dbHelpers } from '../../../../lib/database';

const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-edu-infra-2024';

// Middleware to verify admin token
function verifyAdminToken(request) {
  const token = request.cookies.get('admin-token')?.value;
  
  if (!token) {
    return null;
  }

  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
}

// POST - Save new project quote
export async function POST(request) {
  try {
    const quoteData = await request.json();

    // Validate required fields
    const requiredFields = ['name', 'email', 'project_type', 'technology', 'complexity', 'timeline', 'budget'];
    for (const field of requiredFields) {
      if (!quoteData[field]) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        );
      }
    }

    // Save to database
    const result = await dbHelpers.saveProjectQuote(quoteData);

    return NextResponse.json({
      success: true,
      message: 'Quote request submitted successfully!',
      id: result.id
    });
  } catch (error) {
    console.error('Save quote error:', error);
    return NextResponse.json(
      { error: 'Failed to save quote request' },
      { status: 500 }
    );
  }
}

// GET - Get all quotes (admin only)
export async function GET(request) {
  try {
    // Verify admin authentication
    const admin = verifyAdminToken(request);
    if (!admin) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const url = new URL(request.url);
    const status = url.searchParams.get('status');

    const quotes = await dbHelpers.getAllQuotes(status);

    return NextResponse.json({
      success: true,
      quotes
    });
  } catch (error) {
    console.error('Get quotes error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch quotes' },
      { status: 500 }
    );
  }
} 