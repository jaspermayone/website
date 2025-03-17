import { NextRequest, NextResponse } from 'next/server';
import { getAnalytics } from '@/lib/analytics';

// A simple API key check for basic protection
// In production, use a more secure authentication method
const API_KEY = process.env.ANALYTICS_API_KEY || 'change-me-in-production';

export async function GET(request: NextRequest) {
  // Check for API key in header or query param
  const authHeader = request.headers.get('authorization');
  const apiKey = authHeader?.replace('Bearer ', '') || 
                request.nextUrl.searchParams.get('key');
  
  if (apiKey !== API_KEY) {
    return NextResponse.json(
      { error: 'Unauthorized. Invalid or missing API key.' },
      { status: 401 }
    );
  }
  
  try {
    const analyticsData = await getAnalytics();
    return NextResponse.json(analyticsData);
  } catch (error) {
    console.error('Error fetching analytics:', error);
    return NextResponse.json(
      { error: 'Failed to fetch analytics data' },
      { status: 500 }
    );
  }
}