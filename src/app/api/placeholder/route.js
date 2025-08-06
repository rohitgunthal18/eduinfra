import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ 
    message: 'API routes moved to backend server',
    backend: process.env.NEXT_PUBLIC_API_URL || 'https://eduinfra-backend.onrender.com'
  });
} 