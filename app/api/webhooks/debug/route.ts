import { NextResponse } from 'next/server';

// In-memory log of recent webhooks
const webhookLog: any[] = [];

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const entry = {
      timestamp: new Date().toISOString(),
      payload: payload
    };
    webhookLog.unshift(entry);
    // Keep only last 10
    if (webhookLog.length > 10) webhookLog.pop();
    
    return NextResponse.json({ status: 'logged', timestamp: entry.timestamp });
  } catch (error) {
    return NextResponse.json({ status: 'error', error: String(error) });
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'ready',
    recentWebhooks: webhookLog,
    count: webhookLog.length
  });
}
