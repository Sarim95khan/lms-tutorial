import { db } from '@/db/schema/prisma';
import { auth } from '@clerk/nextjs';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, response: NextResponse) {
  return NextResponse.json({ msg: 'API GET HIT' });
}

export async function POST(request: NextRequest) {
  try {
    const { userId } = auth();
    const { title } = await request.json();

    if (!userId) return new NextResponse('Internal Error', { status: 401 });

    const course = await db.course.create({
      data: {
        userId,
        title,
      },
    });

    return NextResponse.json(course);
  } catch (error) {
    console.log('Courses: ', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
