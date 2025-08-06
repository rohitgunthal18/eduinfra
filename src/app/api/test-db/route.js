import { NextResponse } from 'next/server';
import { dbHelpers } from '../../../../lib/database';

export async function GET() {
  try {
    // Test database connection and admin user
    const admin = await dbHelpers.authenticateAdmin('admin', '4482@AdmiN');
    
    return NextResponse.json({
      success: true,
      message: 'Database connection successful',
      adminExists: !!admin,
      adminInfo: admin ? { id: admin.id, username: admin.username } : null
    });
  } catch (error) {
    console.error('Database test error:', error);
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
} 