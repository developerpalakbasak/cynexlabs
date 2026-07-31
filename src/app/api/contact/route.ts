import { NextResponse } from 'next/server';
import Contact from '@/models/Contact';
import { dbConnect } from '@/lib/mongoose';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, plan, projectType, message } = body;

    // Basic validation
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: 'Full name, email, and message are required.' },
        { status: 400 }
      );
    }

    await dbConnect();

    const newContact = await Contact.create({
      fullName,
      email,
      phone,
      plan,
      projectType,
      message,
    });


    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in contact API:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}
