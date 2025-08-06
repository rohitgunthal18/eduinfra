import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { dbHelpers } from '../../../../../lib/database';

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

// PUT - Update quote status
export async function PUT(request, { params }) {
  try {
    // Verify admin authentication
    const admin = verifyAdminToken(request);
    if (!admin) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { status } = await request.json();
    const { id } = params;

    if (!status || !['pending', 'approved', 'rejected', 'completed'].includes(status)) {
      return NextResponse.json(
        { error: 'Invalid status' },
        { status: 400 }
      );
    }

    const result = await dbHelpers.updateQuoteStatus(id, status);

    if (result.changes === 0) {
      return NextResponse.json(
        { error: 'Quote not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Quote status updated successfully'
    });
  } catch (error) {
    console.error('Update quote error:', error);
    return NextResponse.json(
      { error: 'Failed to update quote' },
      { status: 500 }
    );
  }
}

// DELETE - Delete quote
export async function DELETE(request, { params }) {
  try {
    // Verify admin authentication
    const admin = verifyAdminToken(request);
    if (!admin) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { id } = params;
    const result = await dbHelpers.deleteQuote(id);

    if (result.changes === 0) {
      return NextResponse.json(
        { error: 'Quote not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Quote deleted successfully'
    });
  } catch (error) {
    console.error('Delete quote error:', error);
    return NextResponse.json(
      { error: 'Failed to delete quote' },
      { status: 500 }
    );
  }
}

// GET - Get specific quote
export async function GET(request, { params }) {
  try {
    // Verify admin authentication
    const admin = verifyAdminToken(request);
    if (!admin) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { id } = params;
    const quote = await dbHelpers.getQuoteById(id);

    if (!quote) {
      return NextResponse.json(
        { error: 'Quote not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      quote
    });
  } catch (error) {
    console.error('Get quote error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch quote' },
      { status: 500 }
    );
  }
} 