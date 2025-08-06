import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { dbHelpers } from '../../../../../lib/database';

const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-edu-infra-2024';

export async function POST(request) {
  try {
    console.log('=== Admin Login Attempt ===');
    const { username, password } = await request.json();
    console.log('Login request for username:', username);

    if (!username || !password) {
      console.log('❌ Missing username or password');
      return NextResponse.json(
        { error: 'Username and password are required' },
        { status: 400 }
      );
    }

    // Authenticate admin
    console.log('Attempting authentication...');
    const admin = await dbHelpers.authenticateAdmin(username, password);

    if (!admin) {
      console.log('❌ Authentication failed - Invalid credentials');
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    console.log('✅ Authentication successful for user:', admin.username);

    // Generate JWT token
    const token = jwt.sign(
      { id: admin.id, username: admin.username },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    console.log('✅ JWT token generated');

    // Set cookie
    const response = NextResponse.json({
      success: true,
      message: 'Login successful',
      admin: { id: admin.id, username: admin.username }
    });

    response.cookies.set('admin-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
      path: '/'
    });

    console.log('✅ Cookie set, login complete');
    return response;
  } catch (error) {
    console.error('❌ Login API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 