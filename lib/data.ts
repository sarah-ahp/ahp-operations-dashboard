// Static data refreshed from memory files - 2/18/2026, 2:00:01 PM

export interface Workflow {
  id: string;
  name: string;
  client: string;
  status: 'active' | 'waiting' | 'not-started';
  progress: number;
  nextAction: string;
  deadline: string;
  owner: string;
  steps: WorkflowStep[];
}

export interface WorkflowStep {
  name: string;
  status: 'done' | 'in-progress' | 'pending';
}

export interface HookItem {
  id: string;
  title: string;
  priority: 'high' | 'medium' | 'low';
  source: string;
  added: string;
}

export interface ActivityItem {
  id: string;
  timestamp: string;
  action: string;
  actor: string;
  result: string;
}

export interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  type: 'install' | 'service' | 'meeting' | 'deadline';
}

export const workflows: Workflow[] = [];

export const hookItems: HookItem[] = [
  {
    "id": "h2",
    "title": "Amazon Order — Hospital Planters",
    "priority": "high",
    "source": "the-hook",
    "added": "2026-02-18"
  },
  {
    "id": "h6",
    "title": "Design: Service Form & Workflows",
    "priority": "high",
    "source": "the-hook",
    "added": "2026-02-18"
  }
];

export const activities: ActivityItem[] = [
  { id: 'a1', timestamp: '14:00', action: 'Dashboard systematic update', actor: 'Hawk', result: 'Data synced from memory' },
  { id: 'a2', timestamp: '10:00', action: 'Hourly refresh triggered', actor: 'Cron', result: 'Success' },
  { id: 'a3', timestamp: '01:26', action: 'Mobile optimization', actor: 'Hawk', result: 'Verified' }
];

export const calendarEvents: CalendarEvent[] = [
  { id: 'c1', title: 'Concord Install', date: 'Feb 12', time: 'TBD', type: 'install' },
  { id: 'c2', title: 'Southland Order Deadline', date: 'Feb 13', time: '09:00', type: 'deadline' },
  { id: 'c3', title: 'Hospital Walkthrough', date: 'Feb 20', time: 'TBD', type: 'service' }
];
