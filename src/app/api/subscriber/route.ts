import { NextResponse } from 'next/server';
import { getSubscriberModel } from '@/models/Subscriber';
import { dbConnect } from '@/lib/mongoose';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    // Basic validation
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required.' },
        { status: 400 }
      );
    }

    const connection = await dbConnect('/subscriber');
    const Subscriber = getSubscriberModel(connection);

    // Check if subscriber already exists
    const existingSubscriber = await Subscriber.findOne({ email });
    if (existingSubscriber) {
      return NextResponse.json(
        { error: 'Email is already subscribed.' },
        { status: 400 }
      );
    }

    await Subscriber.create({
      email,
    });

    return NextResponse.json(
      { success: true, message: 'Subscribed successfully!' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error in subscriber API:', error);
    
    if (error.code === 11000) {
       return NextResponse.json(
        { error: 'Email is already subscribed.' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}
