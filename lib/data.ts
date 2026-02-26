// Static data refreshed from memory files - 2/26/2026, 04:00 PM

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
    "progress": 75,
    "nextAction": "Add to service schedule",
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
    "progress": 80,
    "nextAction": "Complete layout (all floors)",
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
    "progress": 73,
    "nextAction": "License verified",
    "deadline": "2026-03-01",
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
        "name": "Week 1 training",
        "status": "done"
      }
    ]
  }
];

export const hookItems: HookItem[] = [
  {
    "id": "h1",
    "title": "Additional Plants",
    "priority": "medium",
    "source": "strategic",
    "added": "2026-02-26"
  },
  {
    "id": "h2",
    "title": "First Service Invoice",
    "priority": "medium",
    "source": "strategic",
    "added": "2026-02-26"
  },
  {
    "id": "h3",
    "title": "Upsell Follow-up",
    "priority": "medium",
    "source": "strategic",
    "added": "2026-02-26"
  },
  {
    "id": "h4",
    "title": "Nick's Files",
    "priority": "medium",
    "source": "strategic",
    "added": "2026-02-26"
  },
  {
    "id": "h5",
    "title": "Calendar Check",
    "priority": "medium",
    "source": "strategic",
    "added": "2026-02-26"
  },
  {
    "id": "h6",
    "title": "Final Prep",
    "priority": "medium",
    "source": "strategic",
    "added": "2026-02-26"
  }
];

export const activities: ActivityItem[] = [
  { id: 'a1', timestamp: '16:00', action: 'Dashboard refresh complete', actor: 'Hawk', result: '3 workflows, 6 hook items' },
  { id: 'a2', timestamp: '10:00', action: 'Hourly refresh triggered', actor: 'Cron', result: 'Success' },
  { id: 'a3', timestamp: '01:26', action: 'Mobile optimization', actor: 'Hawk', result: 'Verified' }
];

export const calendarEvents: CalendarEvent[] = [
  {
    "id": "c1",
    "title": "Geoff emails final action plan to Stacey",
    "date": "Feb 9",
    "time": "TBD",
    "type": "service"
  },
  {
    "id": "c2",
    "title": "✅ **Southland order SENT** (12:07 PM) — ",
    "date": "Feb 13",
    "time": "TBD",
    "type": "service"
  },
  {
    "id": "c3",
    "title": "Walk the action plan with Stacey + plant",
    "date": "Feb 20",
    "time": "TBD",
    "type": "service"
  }
];
