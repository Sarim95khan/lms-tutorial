import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, response: NextResponse) {
  return NextResponse.json({ msg: 'API GET HIT' });
}

export async function POST(request: NextRequest) {
  const req = await request.json();
  return NextResponse.json({ req, msg: 'API hit' });
}
