// Static data refreshed from memory files - 2/13/2026, 8:00:01 AM

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
    "id": "h1",
    "title": "Hospital — finalize Southland order",
    "priority": "high",
    "source": "the-hook",
    "added": "2026-02-13"
  },
  {
    "id": "h2",
    "title": "Floyd Medical — Invoice Process",
    "priority": "high",
    "source": "the-hook",
    "added": "2026-02-13"
  },
  {
    "id": "h3",
    "title": "Anderson Windows — Send Invoice",
    "priority": "high",
    "source": "the-hook",
    "added": "2026-02-13"
  }
];

export const activities: ActivityItem[] = [
  { id: 'a1', timestamp: '8:00', action: 'Dashboard systematic update', actor: 'Hawk', result: 'Data synced from memory' },
  { id: 'a2', timestamp: '10:00', action: 'Hourly refresh triggered', actor: 'Cron', result: 'Success' },
  { id: 'a3', timestamp: '01:26', action: 'Mobile optimization', actor: 'Hawk', result: 'Verified' }
];

export const calendarEvents: CalendarEvent[] = [
  { id: 'c1', title: 'Concord Install', date: 'Feb 12', time: 'TBD', type: 'install' },
  { id: 'c2', title: 'Southland Order Deadline', date: 'Feb 13', time: '09:00', type: 'deadline' },
  { id: 'c3', title: 'Hospital Walkthrough', date: 'Feb 20', time: 'TBD', type: 'service' }
];
