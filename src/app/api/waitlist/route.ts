import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { brandName, instagram, category, whatsapp } = body;

    // Check if Supabase environment variables are configured
    if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      console.error('Supabase credentials are not configured in .env.local');
      return NextResponse.json(
        { error: 'Server configuration error. Database credentials are missing.' },
        { status: 500 }
      );
    }

    // Validate fields
    if (!brandName || !instagram || !category || !whatsapp) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    const normalizedInsta = instagram.trim().replace(/^@/, '').toLowerCase();
    // Generate a unique fallback email to satisfy database NOT NULL/UNIQUE constraints
    const normalizedEmail = `seller_${normalizedInsta}@atlas-placeholder.com`;

    // Check if instagram is already registered
    const { data: instaCheck, error: instaCheckError } = await supabase
      .from('waitlist')
      .select('instagram')
      .or(`instagram.ilike.${normalizedInsta},instagram.ilike.@${normalizedInsta}`)
      .maybeSingle();

    if (instaCheckError) {
      console.error('Database error checking Instagram:', instaCheckError);
      return NextResponse.json(
        { error: 'Database validation check failed.' },
        { status: 500 }
      );
    }

    if (instaCheck) {
      return NextResponse.json(
        { error: 'This Instagram handle has already joined the waitlist.' },
        { status: 409 }
      );
    }

    // Insert new entry into Supabase
    const { data: newEntry, error: insertError } = await supabase
      .from('waitlist')
      .insert({
        brand_name: brandName.trim(),
        instagram: instagram.trim(),
        category,
        email: normalizedEmail,
        whatsapp: whatsapp.trim()
      })
      .select('waitlist_number')
      .single();

    if (insertError) {
      console.error('Error inserting waitlist entry:', insertError);

      // Handle race condition/uniqueness violation
      if (insertError.code === '23505') {
        return NextResponse.json(
          { error: 'This Instagram handle has already joined the waitlist.' },
          { status: 409 }
        );
      }

      return NextResponse.json(
        { error: 'Failed to join waitlist. Please try again.' },
        { status: 500 }
      );
    }

    if (!newEntry) {
      return NextResponse.json(
        { error: 'Failed to retrieve waitlist number.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Successfully registered for waitlist',
      waitlistNumber: Number(newEntry.waitlist_number),
    });
  } catch (error) {
    console.error('Waitlist API Error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}

