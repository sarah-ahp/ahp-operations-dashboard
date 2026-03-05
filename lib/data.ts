// AHP Dashboard data — auto-generated 2026-03-05T17:00:15.366483-05:00
// DO NOT EDIT — regenerated every hour by scripts/refresh_dashboard.py

export interface ServiceStop {
  id: string; title: string; time: string; done: boolean; status: 'done' | 'pending';
}

export interface GHLTask {
  id: string; title: string; contact: string; contactId: string; assignedTo: string;
  due: string; overdue: boolean;
}

export interface Invoice {
  id: string; recipient: string; amount: number; due: string; overdue: boolean;
}

export interface ProcurementItem {
  id: string; client: string; plant: string; size: string;
  quantity: string; needBy: string; overdue: boolean; supplier: string;
}

export interface HookItem {
  id: string; title: string; priority: 'high' | 'medium' | 'low';
  firstThing: boolean; upsell: boolean; source: string; added: string;
}

export interface UpcomingStop {
  id: string; title: string; date: string; dateLabel: string; time: string;
}

export interface DashboardMeta {
  lastRefreshed: string;
  todayLabel: string;
  serviceDay: { done: number; total: number };
  invoiceSummary: {
    totalOutstanding: number; overdueCount: number; overdueTotal: number;
    currentCount: number; currentTotal: number;
  };
  taskSummary: {
    geoffTotal: number; geoffOverdue: number; briTotal: number; briOverdue: number;
  };
  procurementSummary: { total: number; overdueCount: number };
}

// Deep-link URL builders
export const GHL_BASE = 'https://app.gohighlevel.com/location/wTvEeXunnbLa5kBRFbc4';
export const ghlContactUrl = (contactId: string) =>
  `https://app.gohighlevel.com/location/wTvEeXunnbLa5kBRFbc4/contacts/detail/${contactId}`;
export const ghlCalendarUrl =
  'https://app.gohighlevel.com/location/wTvEeXunnbLa5kBRFbc4/calendar';
export const squareInvoiceUrl = (invoiceId: string) =>
  `https://squareup.com/dashboard/invoices/${invoiceId}`;
export const procurementSheetUrl =
  'https://docs.google.com/spreadsheets/d/1orZBHPXwYvUVngT9P4sOpoYKh2VKOMZbRd1WMOcshHg';

export const meta: DashboardMeta = {
  "lastRefreshed": "2026-03-05T17:00:15.366483-05:00",
  "todayLabel": "Thursday, March 5",
  "serviceDay": {
    "done": 0,
    "total": 6
  },
  "invoiceSummary": {
    "totalOutstanding": 14751.17,
    "overdueCount": 7,
    "overdueTotal": 1337.17,
    "currentCount": 45,
    "currentTotal": 13414.0
  },
  "taskSummary": {
    "geoffTotal": 0,
    "geoffOverdue": 0,
    "briTotal": 0,
    "briOverdue": 0
  },
  "procurementSummary": {
    "total": 3,
    "overdueCount": 0
  }
};

export const serviceStops: ServiceStop[] = [
  {
    "id": "KECakhZ9czBP7GWhZYrM",
    "title": "Service: Marriott Hotel",
    "time": "",
    "done": false,
    "status": "pending"
  },
  {
    "id": "x8tMJYkW0ZFbPRuTE5tY",
    "title": "Service: Michelin Connected Fleet",
    "time": "",
    "done": false,
    "status": "pending"
  },
  {
    "id": "hut7rp6ENDdRZ13S2BU7",
    "title": "Service: Onco Health",
    "time": "",
    "done": false,
    "status": "pending"
  },
  {
    "id": "HWNwf8i9KEIfFhHNZVUV",
    "title": "Service: Aimpoint Digital",
    "time": "",
    "done": false,
    "status": "pending"
  },
  {
    "id": "5biPPZDERo0V4bfv52wN",
    "title": "Service: Zalik Family Home",
    "time": "",
    "done": false,
    "status": "pending"
  },
  {
    "id": "d9YuvnbBJr6gRFrp506s",
    "title": "Service: Peach State Pizza",
    "time": "",
    "done": false,
    "status": "pending"
  }
];

export const geoffTasks: GHLTask[] = [];

export const briTasks: GHLTask[] = [];

export const invoices: Invoice[] = [
  {
    "id": "inv:0-ChAGO4-OOPK0kwlbuNQURNGVEI0N",
    "recipient": "Amy Geddes",
    "amount": 299.0,
    "due": "2026-03-02",
    "overdue": true
  },
  {
    "id": "inv:0-ChDJAhhd7diMomLmb9fXnGj4EI0N",
    "recipient": "Tim Harris",
    "amount": 214.5,
    "due": "2026-03-02",
    "overdue": true
  },
  {
    "id": "inv:0-ChAw2aJsNyMJGhmURdvcebrlEI0N",
    "recipient": "Chris Tully",
    "amount": 214.5,
    "due": "2026-03-02",
    "overdue": true
  },
  {
    "id": "inv:0-ChDXiTuAHIEZzYjn7Pi89aDlEI0N",
    "recipient": "Equity Residential AP",
    "amount": 184.17,
    "due": "2026-03-02",
    "overdue": true
  },
  {
    "id": "inv:0-ChBkzxSNBsUdDoG0xl8EA-Z5EI0N",
    "recipient": "Dionne Thomas",
    "amount": 162.5,
    "due": "2026-03-02",
    "overdue": true
  },
  {
    "id": "inv:0-ChD7F3FbhsGeIwCh4jgVO2xpEI0N",
    "recipient": "Jamie Sims",
    "amount": 162.5,
    "due": "2026-03-02",
    "overdue": true
  },
  {
    "id": "inv:0-ChAXMmSZ7tYSvNILy3D9tDNXEI0N",
    "recipient": "Machae Davis",
    "amount": 100.0,
    "due": "2026-03-02",
    "overdue": true
  },
  {
    "id": "inv:0-ChBspI9ez_-fCknXIi9elohpEI0N",
    "recipient": "Atrium Health Floyd",
    "amount": 2400.0,
    "due": "2026-04-02",
    "overdue": false
  },
  {
    "id": "inv:0-ChCLLszmpheM8tDKp_CmR0QnEI0N",
    "recipient": "Rick Dunlap",
    "amount": 1922.5,
    "due": "2026-04-03",
    "overdue": false
  },
  {
    "id": "inv:0-ChCMb-OIS_Yme2o_5-nOa_5ZEI0N",
    "recipient": "Thadani House",
    "amount": 429.0,
    "due": "2026-03-31",
    "overdue": false
  },
  {
    "id": "inv:0-ChCJZitNk1ZaiBjnR5_O7oImEI0N",
    "recipient": "Sabrina Inman",
    "amount": 325.0,
    "due": "2026-04-30",
    "overdue": false
  },
  {
    "id": "inv:0-ChC9pMlqYYcaCEuAoOYPlNpMEI0N",
    "recipient": "Equity Residential AP",
    "amount": 325.0,
    "due": "2026-04-30",
    "overdue": false
  },
  {
    "id": "inv:0-ChBRcCcY21v2GLeM5LHRZYmiEI0N",
    "recipient": "Sabrina Inman",
    "amount": 325.0,
    "due": "2026-03-30",
    "overdue": false
  },
  {
    "id": "inv:0-ChCgQ-Q3Gtqs2z3chfQDap3DEI0N",
    "recipient": "Equity Residential AP",
    "amount": 325.0,
    "due": "2026-03-30",
    "overdue": false
  },
  {
    "id": "inv:0-ChAHgoHx9jkPflUP8ZbQM3THEI0N",
    "recipient": "Amy Geddes",
    "amount": 299.0,
    "due": "2026-04-30",
    "overdue": false
  },
  {
    "id": "inv:0-ChAlzHZ45A9oxHOREa_41lJuEI0N",
    "recipient": "Amy Geddes",
    "amount": 299.0,
    "due": "2026-03-30",
    "overdue": false
  },
  {
    "id": "inv:0-ChBCJgT1EsnyltM-MvFvfRdQEI0N",
    "recipient": "Christian Cawthon",
    "amount": 231.83,
    "due": "2026-04-30",
    "overdue": false
  },
  {
    "id": "inv:0-ChDOIkXt32aE80_SYIhHRfPVEI0N",
    "recipient": "Chris Bentley",
    "amount": 225.33,
    "due": "2026-04-30",
    "overdue": false
  },
  {
    "id": "inv:0-ChBC2WoO5qVXn5zZQXUAgFyuEI0N",
    "recipient": "Acciona Construction USA",
    "amount": 214.5,
    "due": "2026-06-30",
    "overdue": false
  },
  {
    "id": "inv:0-ChBkNQ7U0_bC13n09Y8Y2LJNEI0N",
    "recipient": "Debbie Heitzman",
    "amount": 214.5,
    "due": "2026-04-30",
    "overdue": false
  },
  {
    "id": "inv:0-ChD9VP0BoeVP_VZrkOoXfRfPEI0N",
    "recipient": "Stephen Clausen",
    "amount": 214.5,
    "due": "2026-04-03",
    "overdue": false
  },
  {
    "id": "inv:0-ChCp2ZHVTHFRP5rOKIBW665bEI0N",
    "recipient": "Ali Gould",
    "amount": 214.5,
    "due": "2026-04-03",
    "overdue": false
  },
  {
    "id": "inv:0-ChD4GvxDlnYAC7ZeopspqPIiEI0N",
    "recipient": "Chris Tully",
    "amount": 214.5,
    "due": "2026-04-30",
    "overdue": false
  },
  {
    "id": "inv:0-ChDck6cRkZPWdvdJRlC4XrY2EI0N",
    "recipient": "Joe Ventura",
    "amount": 214.5,
    "due": "2026-03-31",
    "overdue": false
  },
  {
    "id": "inv:0-ChAxghJ3IjdzTwePWqddoNqaEI0N",
    "recipient": "Lori George",
    "amount": 214.5,
    "due": "2026-03-31",
    "overdue": false
  },
  {
    "id": "inv:0-ChB-a0RjHgxaqkw3-aYtY6_jEI0N",
    "recipient": "Meredith Bouloux",
    "amount": 214.5,
    "due": "2026-04-14",
    "overdue": false
  },
  {
    "id": "inv:0-ChA2gzKgcikyIBsFLD8IquIBEI0N",
    "recipient": "Radhika Patel",
    "amount": 214.5,
    "due": "2026-04-30",
    "overdue": false
  },
  {
    "id": "inv:0-ChC8P0Ym7kNcaFZT5cZC6S5TEI0N",
    "recipient": "Tim Harris",
    "amount": 214.5,
    "due": "2026-04-30",
    "overdue": false
  },
  {
    "id": "inv:0-ChBiIdRjeK4CakUFPjQEyEwmEI0N",
    "recipient": "Rick Dunlap",
    "amount": 214.5,
    "due": "2026-04-30",
    "overdue": false
  },
  {
    "id": "inv:0-ChBYJQdTIxxVlDkIICgLbIITEI0N",
    "recipient": "CDI, Glenridge LLC",
    "amount": 214.5,
    "due": "2026-04-14",
    "overdue": false
  }
];

export const procurement: ProcurementItem[] = [
  {
    "id": "1001",
    "client": "tZAK3p6WnjFZBEn2a1Wn",
    "plant": "Ficus (replacement TBD if treatment fails)",
    "size": "TBD",
    "quantity": "1",
    "needBy": "2026-03-07",
    "overdue": false,
    "supplier": ""
  },
  {
    "id": "1002",
    "client": "tZAK3p6WnjFZBEn2a1Wn",
    "plant": "Replacement plant TBD (to replace bird's nest fern)",
    "size": "TBD",
    "quantity": "1",
    "needBy": "2026-03-18",
    "overdue": false,
    "supplier": ""
  },
  {
    "id": "1003",
    "client": "dMFg921y4yw5gYWTwFp5",
    "plant": "Saucers or pikes (container accessories)",
    "size": "Unknown - to match existing containers",
    "quantity": "1",
    "needBy": "2026-03-18",
    "overdue": false,
    "supplier": ""
  }
];

export const hookItems: HookItem[] = [
  {
    "id": "h1",
    "title": "Procure materials — Rick (Marriott) outdoor planters",
    "priority": "high",
    "firstThing": true,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-05"
  },
  {
    "id": "h2",
    "title": "Finish appointments in Square",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-05"
  },
  {
    "id": "h3",
    "title": "Concord Group first service invoice → Allie",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-05"
  },
  {
    "id": "h4",
    "title": "Create recurring invoice for Concord Group",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-05"
  },
  {
    "id": "h5",
    "title": "UPSELL — Iris O4W: Spring refresh",
    "priority": "high",
    "firstThing": false,
    "upsell": true,
    "source": "the-hook",
    "added": "2026-03-05"
  },
  {
    "id": "h6",
    "title": "Scope Concord Group add-on plants",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-05"
  },
  {
    "id": "h7",
    "title": "Month-end invoice audit",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-05"
  },
  {
    "id": "h8",
    "title": "Verify Nick's accounts — close out if paid",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-05"
  },
  {
    "id": "h9",
    "title": "Cancel Hitchcock insurance",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-05"
  },
  {
    "id": "h10",
    "title": "Georgia Tech — reach out re: add-on plants",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-05"
  },
  {
    "id": "h11",
    "title": "Send Georgia Tech 2026 invoice",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-05"
  },
  {
    "id": "h12",
    "title": "Bank of America estimate — Carol's lead",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-05"
  },
  {
    "id": "h13",
    "title": "Physician Building Entrance",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-05"
  },
  {
    "id": "h14",
    "title": "Rome Hospital — bromeliad rotation planning",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-05"
  },
  {
    "id": "h15",
    "title": "Rome Hospital — 90-day action plan budget",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-05"
  },
  {
    "id": "h16",
    "title": "Update AHP website",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-05"
  },
  {
    "id": "h17",
    "title": "Nick's Plant Doctor accounts — 2FA transfer",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-05"
  },
  {
    "id": "h18",
    "title": "Bri operations setup",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-05"
  },
  {
    "id": "h19",
    "title": "Hire 1 part-time person to back up Bri",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-05"
  },
  {
    "id": "h20",
    "title": "UPSELL — Thadani Residence: Propose summer garden design/install package",
    "priority": "high",
    "firstThing": false,
    "upsell": true,
    "source": "the-hook",
    "added": "2026-03-05"
  },
  {
    "id": "h21",
    "title": "UPSELL — [⚠️ Account unknown — GHL ID: TSSI7sfCGsrQMEArJoOt]: Spring outdoor container refresh",
    "priority": "high",
    "firstThing": false,
    "upsell": true,
    "source": "the-hook",
    "added": "2026-03-05"
  }
];

export const upcomingStops: UpcomingStop[] = [
  {
    "id": "NaA17pUY5Y81MRR8Poy8",
    "title": "Service: Advocate Health Rome Hospital",
    "date": "",
    "dateLabel": "",
    "time": ""
  },
  {
    "id": "UG7CmWUOVW6IU60QBSTH",
    "title": "Service: ACCIONA Construction",
    "date": "",
    "dateLabel": "",
    "time": ""
  },
  {
    "id": "vLahE80jaUX9EU7cJ2MQ",
    "title": "Service: Best Foot Forward",
    "date": "",
    "dateLabel": "",
    "time": ""
  },
  {
    "id": "KEnncAlxegJ7vW12fiSO",
    "title": "Service: Iris O4W",
    "date": "",
    "dateLabel": "",
    "time": ""
  },
  {
    "id": "C6ZtBPF2RV4KqfzWtKeT",
    "title": "Service: Communities In Schools",
    "date": "",
    "dateLabel": "",
    "time": ""
  },
  {
    "id": "Rmc19MbeFRX9Stwguenn",
    "title": "Service: Archer Western",
    "date": "",
    "dateLabel": "",
    "time": ""
  },
  {
    "id": "K4XKlsT21SdI3axdi5jn",
    "title": "Service: Concord Group",
    "date": "",
    "dateLabel": "",
    "time": ""
  },
  {
    "id": "HnfCbi8WuWvWdx9VtOTL",
    "title": "Service: One Street Residential",
    "date": "",
    "dateLabel": "",
    "time": ""
  },
  {
    "id": "1kS0FgU3TdHM8WVFdSEy",
    "title": "Service: Luna Upper Westside",
    "date": "",
    "dateLabel": "",
    "time": ""
  },
  {
    "id": "uW5KI6edLKe6JFNs291K",
    "title": "Service: Link Logistics",
    "date": "",
    "dateLabel": "",
    "time": ""
  },
  {
    "id": "zh7xrs7lrIKVtcl0bcr5",
    "title": "Service: Heritage Distribution",
    "date": "",
    "dateLabel": "",
    "time": ""
  },
  {
    "id": "K5mR7HdWkjmORzlON4Kn",
    "title": "Service: Thadani Residence",
    "date": "",
    "dateLabel": "",
    "time": ""
  },
  {
    "id": "PZgkyiLG9LiBMtQ5rVtC",
    "title": "Service: Ventura Residence",
    "date": "",
    "dateLabel": "",
    "time": ""
  },
  {
    "id": "a09NOj3hg2BXBo2BRcgr",
    "title": "Service: Edward Jones",
    "date": "",
    "dateLabel": "",
    "time": ""
  }
];
