// Static data refreshed from memory files - 3/16/2026, 05:00 PM

export interface Workflow {
  id: string;
  name: string;
  client: string;
  status: 'active' | 'waiting' | 'not-started' | 'completed';
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
    "id": "concord-group-feb-12",
    "name": "Install: Concord Group (Feb 12)",
    "client": "Concord Group (Feb 12)",
    "status": "active",
    "progress": 92,
    "nextAction": "Additional plants scope",
    "deadline": "2026-02-12",
    "owner": "Geoff",
    "steps": [
      {
        "name": "Proposal sent",
        "status": "done"
      },
      {
        "name": "Deposit received",
        "status": "done"
      },
      {
        "name": "Balance due",
        "status": "done"
      },
      {
        "name": "Order plants",
        "status": "done"
      },
      {
        "name": "Source planters",
        "status": "done"
      }
    ]
  },
  {
    "id": "floyd-medical-advocate-health-rome",
    "name": "Onboarding: Floyd Medical (Advocate Health Rome)",
    "client": "Floyd Medical (Advocate Health Rome)",
    "status": "active",
    "progress": 86,
    "nextAction": "Vendor onboarding complete",
    "deadline": "TBD",
    "owner": "Geoff",
    "steps": [
      {
        "name": "Contract signed",
        "status": "done"
      },
      {
        "name": "Initial install",
        "status": "done"
      },
      {
        "name": "Security paperwork",
        "status": "done"
      },
      {
        "name": "Service visit",
        "status": "done"
      },
      {
        "name": "Bromeliad count",
        "status": "done"
      }
    ]
  },
  {
    "id": "bri-finley-contractor",
    "name": "Onboarding: Bri Finley (Contractor)",
    "client": "Bri Finley (Contractor)",
    "status": "active",
    "progress": 83,
    "nextAction": "License verified",
    "deadline": "TBD",
    "owner": "Geoff",
    "steps": [
      {
        "name": "Contractor agreement",
        "status": "done"
      },
      {
        "name": "W-9 received",
        "status": "done"
      },
      {
        "name": "License verified",
        "status": "in-progress"
      },
      {
        "name": "Insurance verified",
        "status": "done"
      },
      {
        "name": "Training completed",
        "status": "done"
      }
    ]
  }
];

export const hookItems: HookItem[] = [];

export const activities: ActivityItem[] = [
  { id: 'a1', timestamp: '17:00', action: 'Dashboard refresh complete', actor: 'Hawk', result: '3 workflows, 0 hook items' },
  { id: 'a2', timestamp: '10:00', action: 'Hourly refresh triggered', actor: 'Cron', result: 'Success' },
  { id: 'a3', timestamp: '01:26', action: 'Mobile optimization', actor: 'Hawk', result: 'Verified' }
];

export const calendarEvents: CalendarEvent[] = [
  {
    "id": "c1",
    "title": "Hospital Walkthrough",
    "date": "Feb 20",
    "time": "TBD",
    "type": "service"
  }
];
