// Static data extracted from memory/workflows.md - Feb 10, 2026

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
    id: 'concord-feb12',
    name: 'Concord Group Install',
    client: 'Concord Group',
    status: 'active',
    progress: 60,
    nextAction: 'Source planters from Pike Nursery',
    deadline: '2026-02-12',
    owner: 'Geoff',
    steps: [
      { name: 'Proposal sent', status: 'done' },
      { name: 'Deposit received', status: 'done' },
      { name: 'Order plants', status: 'done' },
      { name: 'Source planters', status: 'in-progress' },
      { name: 'Execute install', status: 'pending' },
    ]
  },
  {
    id: 'advocate-health',
    name: 'Floyd Medical Vendor Onboarding',
    client: 'Advocate Health Rome',
    status: 'active',
    progress: 75,
    nextAction: 'Walk 90-day plan with Stacey',
    deadline: '2026-02-20',
    owner: 'Bri/Geoff',
    steps: [
      { name: 'Contract signed', status: 'done' },
      { name: 'Initial install', status: 'done' },
      { name: 'Security paperwork', status: 'done' },
      { name: 'Action plan emailed', status: 'done' },
      { name: 'Walk with Stacey', status: 'pending' },
    ]
  },
];

export const hookItems: HookItem[] = [
  { id: 'h1', title: 'Finalize Concord planter order', priority: 'high', source: 'the-hook', added: '2026-02-10' },
  { id: 'h2', title: 'Bri training check-in acknowledgment', priority: 'high', source: 'the-hook', added: '2026-02-10' },
  { id: 'h3', title: 'Schedule Feb 20 hospital walk', priority: 'medium', source: 'workflows', added: '2026-02-10' },
];

export const activities: ActivityItem[] = [
  { id: 'a1', timestamp: '23:51', action: 'Workspace self-clean executed', actor: 'Hawk', result: '43 files deleted, 14 MB freed' },
  { id: 'a2', timestamp: '23:20', action: 'Bri acknowledgment scheduled', actor: 'Hawk', result: 'Queued for Feb 11, 8:13 AM' },
  { id: 'a3', timestamp: '22:42', action: 'Nick hospital layouts processed', actor: 'Hawk', result: 'Saved to Drive, acknowledged' },
];

export const calendarEvents: CalendarEvent[] = [
  { id: 'c1', title: 'Bri Acknowledgment', date: 'Feb 11', time: '08:13', type: 'meeting' },
  { id: 'c2', title: 'Concord Install', date: 'Feb 12', time: 'TBD', type: 'install' },
  { id: 'c3', title: 'Hospital Service', date: 'Feb 13', time: '09:00', type: 'service' },
];
