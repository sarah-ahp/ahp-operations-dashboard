// Static data refreshed from memory files - 2/11/2026, 11:15:00 AM

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

export const workflows: Workflow[] = [
  {
    id: 'w1',
    name: 'INSTALL: Concord Group',
    client: 'Concord Group',
    status: 'active',
    progress: 50,
    nextAction: 'Final confirmation (Debbie)',
    deadline: 'Feb 12',
    owner: 'Geoff',
    steps: [
      { name: 'Proposal sent', status: 'done' },
      { name: 'Deposit received', status: 'done' },
      { name: 'Planters sourced', status: 'in-progress' },
      { name: 'Execute install', status: 'pending' }
    ]
  },
  {
    id: 'w2',
    name: 'ONBOARDING: Floyd Medical',
    client: 'Floyd Medical',
    status: 'active',
    progress: 70,
    nextAction: 'Walk action plan w/ Stacey',
    deadline: 'Feb 20',
    owner: 'Geoff',
    steps: [
      { name: 'Contract signed', status: 'done' },
      { name: 'Security paperwork', status: 'done' },
      { name: 'Action plan emailed', status: 'done' },
      { name: 'Vendor onboarding', status: 'in-progress' }
    ]
  },
  {
    id: 'w3',
    name: 'ONBOARDING: Bri Finley',
    client: 'AHP',
    status: 'active',
    progress: 40,
    nextAction: 'Week 2 training',
    deadline: 'Mar 1',
    owner: 'Geoff',
    steps: [
      { name: 'Contract signed', status: 'done' },
      { name: 'Insurance verified', status: 'done' },
      { name: 'Training schedule', status: 'in-progress' },
      { name: 'Solo launch', status: 'pending' }
    ]
  }
];

export const hookItems: HookItem[] = [
  {
    "id": "h7",
    "title": "RESUME: The Hive architecture project",
    "priority": "high",
    "source": "the-hook",
    "added": "2026-02-11"
  },
  {
    "id": "h8",
    "title": "Call Debbie Heitzman - Concord confirm",
    "priority": "high",
    "source": "GHL",
    "added": "2026-02-11"
  }
];

export const activities: ActivityItem[] = [
  { id: 'a0', timestamp: '11:15', action: 'Dashboard systematic update', actor: 'Hawk', result: 'Workflow sync complete' },
  { id: 'a1', timestamp: '10:01', action: 'Dashboard systematic update', actor: 'Hawk', result: 'Data synced from memory' },
  { id: 'a2', timestamp: '10:00', action: 'Hourly refresh triggered', actor: 'Cron', result: 'Success' }
];

export const calendarEvents: CalendarEvent[] = [
  { id: 'c1', title: 'Concord Install', date: 'Feb 12', time: 'TBD', type: 'install' },
  { id: 'c2', title: 'Southland Order Deadline', date: 'Feb 13', time: '09:00', type: 'deadline' },
  { id: 'c3', title: 'Hospital Walkthrough', date: 'Feb 20', time: 'TBD', type: 'service' }
];
