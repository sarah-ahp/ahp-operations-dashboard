// Static data refreshed from memory files - 2/11/2026, 12:02:00 PM

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
    progress: 60,
    nextAction: 'Source planters from Pike Nursery',
    deadline: 'Feb 12',
    owner: 'Geoff',
    steps: [
      { name: 'Proposal sent', status: 'done' },
      { name: 'Deposit received', status: 'done' },
      { name: 'Order plants', status: 'done' },
      { name: 'Source planters', status: 'in-progress' },
      { name: 'Execute install', status: 'pending' }
    ]
  },
  {
    id: 'w2',
    name: 'ONBOARDING: Floyd Medical',
    client: 'Floyd Medical',
    status: 'active',
    progress: 75,
    nextAction: 'Walk action plan w/ Stacey',
    deadline: 'Feb 20',
    owner: 'Geoff',
    steps: [
      { name: 'Contract signed', status: 'done' },
      { name: 'Security paperwork', status: 'done' },
      { name: 'Action plan emailed', status: 'done' },
      { name: 'Layouts submitted', status: 'done' },
      { name: 'Vendor onboarding', status: 'in-progress' }
    ]
  },
  {
    id: 'w3',
    name: 'ONBOARDING: Bri Finley',
    client: 'AHP',
    status: 'active',
    progress: 45,
    nextAction: 'Week 2 training',
    deadline: 'Mar 1',
    owner: 'Geoff',
    steps: [
      { name: 'Contract signed', status: 'done' },
      { name: 'Insurance verified', status: 'done' },
      { name: 'Time tracking setup', status: 'done' },
      { name: 'Training schedule', status: 'in-progress' },
      { name: 'Solo launch', status: 'pending' }
    ]
  }
];

export const hookItems: HookItem[] = [
  {
    "id": "h2",
    "title": "Pike Nursery trip — Black Phoenix planters",
    "priority": "high",
    "source": "the-hook",
    "added": "2026-02-11"
  },
  {
    "id": "h4",
    "title": "Hospital — finalize Southland order (25 bromeliads)",
    "priority": "high",
    "source": "the-hook",
    "added": "2026-02-11"
  },
  {
    "id": "h7",
    "title": "RESUME: The Hive architecture project",
    "priority": "high",
    "source": "the-hook",
    "added": "2026-02-11"
  }
];

export const activities: ActivityItem[] = [
  { id: 'a0', timestamp: '12:02', action: 'Dashboard systematic update', actor: 'Hawk', result: 'Workflow sync complete' },
  { id: 'a1', timestamp: '11:58', action: 'Concord coordination', actor: 'Geoff', result: 'Plants confirmed at Southland' },
  { id: 'a2', timestamp: '11:15', action: 'Dashboard systematic update', actor: 'Hawk', result: 'Data synced from memory' }
];

export const calendarEvents: CalendarEvent[] = [
  { id: 'c1', title: 'Concord Install', date: 'Feb 12', time: 'TBD', type: 'install' },
  { id: 'c2', title: 'Southland Order Deadline', date: 'Feb 13', time: '09:00', type: 'deadline' },
  { id: 'c3', title: 'Hospital Walkthrough', date: 'Feb 20', time: 'TBD', type: 'service' }
];
