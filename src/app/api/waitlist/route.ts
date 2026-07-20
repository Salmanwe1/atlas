import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { brandName, instagram, category, email, whatsapp } = body;

    // Validate fields
    if (!brandName || !instagram || !category || !email || !whatsapp) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const dataDirectory = path.join(process.cwd(), 'src', 'data');
    const filePath = path.join(dataDirectory, 'waitlist.json');

    // Create the directory if it doesn't exist
    if (!fs.existsSync(dataDirectory)) {
      fs.mkdirSync(dataDirectory, { recursive: true });
    }

    let waitlist = [];

    // Read existing file if it exists
    if (fs.existsSync(filePath)) {
      try {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        waitlist = JSON.parse(fileContent);
      } catch (err) {
        console.error('Error reading waitlist.json:', err);
        waitlist = [];
      }
    }

    // Check if email or instagram is already registered
    const normalizedEmail = email.trim().toLowerCase();
    const normalizedInsta = instagram.trim().replace(/^@/, '').toLowerCase();

    const exists = waitlist.some((item: any) => {
      const itemEmail = item.email ? item.email.trim().toLowerCase() : '';
      const itemInsta = item.instagram ? item.instagram.trim().replace(/^@/, '').toLowerCase() : '';
      return itemEmail === normalizedEmail || itemInsta === normalizedInsta;
    });

    if (exists) {
      return NextResponse.json(
        { error: 'This email or Instagram handle has already joined the waitlist.' },
        { status: 409 }
      );
    }

    const newEntry = {
      id: Date.now().toString(),
      brandName: brandName.trim(),
      instagram: instagram.trim(),
      category,
      email: normalizedEmail,
      whatsapp: whatsapp.trim(),
      createdAt: new Date().toISOString(),
      waitlistNumber: waitlist.length + 101, // Offset waitlist numbers to sound like an exclusive founding circle
    };

    waitlist.push(newEntry);

    // Save back to file
    fs.writeFileSync(filePath, JSON.stringify(waitlist, null, 2), 'utf8');

    return NextResponse.json({
      success: true,
      message: 'Successfully registered for waitlist',
      waitlistNumber: newEntry.waitlistNumber,
    });
  } catch (error: any) {
    console.error('Waitlist API Error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
