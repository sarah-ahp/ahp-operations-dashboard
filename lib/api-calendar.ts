// Google Calendar API integration
// Uses stored credentials from credentials/google-oauth-tokens.json

export interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  type: 'install' | 'service' | 'meeting' | 'deadline' | 'personal';
  location?: string;
  description?: string;
}

// For static export, we'll fetch client-side
// In production, this would call a backend API
export async function fetchCalendarEvents(): Promise<CalendarEvent[]> {
  // Mock live data for now - in V2 this calls actual Google Calendar API
  // via a serverless function or backend
  
  const now = new Date();
  const events: CalendarEvent[] = [
    {
      id: 'cal-1',
      title: 'Bri Training Check-in',
      date: 'Feb 11',
      time: '08:13',
      type: 'meeting',
      description: 'Acknowledgment email auto-sending'
    },
    {
      id: 'cal-2',
      title: 'Concord Group Install',
      date: 'Feb 12',
      time: 'TBD',
      type: 'install',
      location: '2859 Paces Ferry Rd SE, Ste 725'
    },
    {
      id: 'cal-3',
      title: 'Floyd Medical Service',
      date: 'Feb 13',
      time: '09:00',
      type: 'service',
      location: 'Advocate Health Rome'
    },
    {
      id: 'cal-4',
      title: 'Walk 90-Day Plan',
      date: 'Feb 20',
      time: 'TBD',
      type: 'meeting',
      location: 'Stacey - NE Building'
    }
  ];
  
  return events;
}

// Full integration would require:
// 1. Backend API route (/api/calendar)
// 2. Server-side token refresh
// 3. Calendar.list API call
// 4. Filter for next 7 days
// 5. Categorize by event type
