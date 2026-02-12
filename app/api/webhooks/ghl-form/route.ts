import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    
    // Log the payload for debugging (in a real app, we'd store this)
    console.log('Received GHL Webhook:', JSON.stringify(payload, null, 2));

    // Basic extraction logic (to be expanded based on actual form structure)
    // We expect fields like "contact_id", "form_id", and custom fields map
    
    // TODO: In Phase 2, we will:
    // 1. Map specific form fields to Task objects
    // 2. Save these tasks to a database or persistent storage
    // 3. Trigger revalidation of the dashboard data

    return NextResponse.json({ 
      status: 'success', 
      message: 'Webhook received',
      timestamp: new Date().toISOString() 
    });
  } catch (error) {
    console.error('Webhook Error:', error);
    return NextResponse.json(
      { status: 'error', message: 'Invalid payload' },
      { status: 400 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ status: 'ready', service: 'AHP Operations Webhook' });
}
