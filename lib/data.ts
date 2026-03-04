// AHP Dashboard data — auto-generated 2026-03-04T17:00:57.005725-05:00
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
  "lastRefreshed": "2026-03-04T17:00:57.005725-05:00",
  "todayLabel": "Wednesday, March 4",
  "serviceDay": {
    "done": 0,
    "total": 5
  },
  "invoiceSummary": {
    "totalOutstanding": 15370.83,
    "overdueCount": 5,
    "overdueTotal": 990.5,
    "currentCount": 49,
    "currentTotal": 14380.33
  },
  "taskSummary": {
    "geoffTotal": 13,
    "geoffOverdue": 4,
    "briTotal": 9,
    "briOverdue": 0
  },
  "procurementSummary": {
    "total": 0,
    "overdueCount": 0
  }
};

export const serviceStops: ServiceStop[] = [
  {
    "id": "XgLaQyQcrTLTOZdiDZYN",
    "title": "Service: WITH Agency",
    "time": "",
    "done": false,
    "status": "pending"
  },
  {
    "id": "uKlCRjyPPLrZO4ayFABt",
    "title": "Service: Shoob Residence",
    "time": "",
    "done": false,
    "status": "pending"
  },
  {
    "id": "y7mxEmrkyVkg0Y2TS5D0",
    "title": "Service: Link Logistics",
    "time": "",
    "done": false,
    "status": "pending"
  },
  {
    "id": "YNleTMz2elBktzvrhePi",
    "title": "Service: Thadani Residence",
    "time": "",
    "done": false,
    "status": "pending"
  },
  {
    "id": "vzW7MhPgeYjqWStKrSAW",
    "title": "Service: Gallery Residence",
    "time": "",
    "done": false,
    "status": "pending"
  }
];

export const geoffTasks: GHLTask[] = [
  {
    "id": "n2qY3M2GYGSXASfL8ra9",
    "title": "Verify Nick accounts - confirm paid, close out, notify Nick",
    "contact": "None None",
    "contactId": "oUjlVbarGtNSZbOnNtXp",
    "assignedTo": "Geoff",
    "due": "2026-03-02",
    "overdue": true
  },
  {
    "id": "sIItLKZPId0JhJQsjthw",
    "title": "Georgia Tech - add-on plants + send 2026 invoice",
    "contact": "None None",
    "contactId": "oUjlVbarGtNSZbOnNtXp",
    "assignedTo": "Geoff",
    "due": "2026-03-02",
    "overdue": true
  },
  {
    "id": "aBVl1tn87qwQaNOauUCf",
    "title": "Set up Concord Group recurring invoice",
    "contact": "None None",
    "contactId": "oUjlVbarGtNSZbOnNtXp",
    "assignedTo": "Geoff",
    "due": "2026-03-02",
    "overdue": true
  },
  {
    "id": "i8blTJNclHQ44b500exY",
    "title": "Scope Concord Group add-on plants",
    "contact": "None None",
    "contactId": "oUjlVbarGtNSZbOnNtXp",
    "assignedTo": "Geoff",
    "due": "2026-03-03",
    "overdue": true
  },
  {
    "id": "zxgV36ZKAvz8a8mKVMpO",
    "title": "Hire part-time backup for Bri - start recruiting",
    "contact": "None None",
    "contactId": "oUjlVbarGtNSZbOnNtXp",
    "assignedTo": "Geoff",
    "due": "2026-03-07",
    "overdue": false
  },
  {
    "id": "Afv7H12iMMpE4fyE4j5x",
    "title": "[UPSELL HIGH] e6OhX2i3s9qwdX4xxz54: Sell and install a replacement plant for the upstairs bathroom — client has already",
    "contact": "None None",
    "contactId": "e6OhX2i3s9qwdX4xxz54",
    "assignedTo": "Geoff",
    "due": "2026-03-10",
    "overdue": false
  },
  {
    "id": "lDqKDTO04Q8zq0W1odie",
    "title": "[UPSELL HIGH] QOmCg3mvOLmnJEJCFzX0: Seasonal spring planting refresh for Iris O4W — opportunity to propose and sell new",
    "contact": "None None",
    "contactId": "QOmCg3mvOLmnJEJCFzX0",
    "assignedTo": "Geoff",
    "due": "2026-03-10",
    "overdue": false
  },
  {
    "id": "vII1nwslZGC6kW2q6F9B",
    "title": "[CNu3USP1J0KKYBQFnRPp] Inner office plants (unspecified): Stephen to follow up with more info; coordinate with client to",
    "contact": "None None",
    "contactId": "CNu3USP1J0KKYBQFnRPp",
    "assignedTo": "Geoff",
    "due": "2026-03-16",
    "overdue": false
  },
  {
    "id": "1wFgzJlaMyRqBtMP3Oxd",
    "title": "[rS8Oa8Nnpo4kZmsQl033] Snake plants - CreateX offices, Biltmore building: Contact Essie (POC) to discuss potential repla",
    "contact": "None None",
    "contactId": "rS8Oa8Nnpo4kZmsQl033",
    "assignedTo": "Geoff",
    "due": "2026-03-16",
    "overdue": false
  },
  {
    "id": "zk9OsTOowyYsXlqU3NFa",
    "title": "[QOmCg3mvOLmnJEJCFzX0] Spring planting locations (outdoor/general): Visit Pike's Nursery to get price estimates for spri",
    "contact": "None None",
    "contactId": "QOmCg3mvOLmnJEJCFzX0",
    "assignedTo": "Geoff",
    "due": "2026-03-17",
    "overdue": false
  },
  {
    "id": "oXx2DmbHtL4bzmf3f493",
    "title": "[FU2BBWA0LJI7QLU8NVer] N/A — client contact update: Update account contact information with Peyton Wade's details and en",
    "contact": "None None",
    "contactId": "FU2BBWA0LJI7QLU8NVer",
    "assignedTo": "Geoff",
    "due": "2026-03-24",
    "overdue": false
  },
  {
    "id": "e2ANqx8cNCMeQkFEKXCd",
    "title": "Anderson Windows — Order new kitchen plants for July install",
    "contact": "None None",
    "contactId": "oUjlVbarGtNSZbOnNtXp",
    "assignedTo": "Geoff",
    "due": "2026-06-10",
    "overdue": false
  },
  {
    "id": "PXMn3y7WrudFiH5aKwGt",
    "title": "Anderson Windows — Install new kitchen plants (6-month contract rotation)",
    "contact": "None None",
    "contactId": "oUjlVbarGtNSZbOnNtXp",
    "assignedTo": "Geoff",
    "due": "2026-07-01",
    "overdue": false
  }
];

export const briTasks: GHLTask[] = [
  {
    "id": "DoCeLF18KmvIksNXw2Oz",
    "title": "[rS8Oa8Nnpo4kZmsQl033] Ags - Commercialization building: Continue mealybug treatment with insecticidal soap at next serv",
    "contact": "None None",
    "contactId": "rS8Oa8Nnpo4kZmsQl033",
    "assignedTo": "Bri",
    "due": "2026-03-05",
    "overdue": false
  },
  {
    "id": "5b2WG1vtD7WhCrg3FhOj",
    "title": "[aStxefelt15SI3RkLyFf] Outdoor planters with violas: Continue monitoring and treating with neem oil; replace damaged or",
    "contact": "None None",
    "contactId": "aStxefelt15SI3RkLyFf",
    "assignedTo": "Bri",
    "due": "2026-03-05",
    "overdue": false
  },
  {
    "id": "z0ochSrtPL3g2DF5CFAd",
    "title": "[aStxefelt15SI3RkLyFf] Lemon lime dracaena, 28th floor: Continue monitoring and treating with insecticidal soap; replace",
    "contact": "None None",
    "contactId": "aStxefelt15SI3RkLyFf",
    "assignedTo": "Bri",
    "due": "2026-03-05",
    "overdue": false
  },
  {
    "id": "UcoGREGed1fEfiEZBUzP",
    "title": "[QOmCg3mvOLmnJEJCFzX0] Outdoor planters: Monitor outdoor planters at next visit to confirm neem oil treatment is control",
    "contact": "None None",
    "contactId": "QOmCg3mvOLmnJEJCFzX0",
    "assignedTo": "Bri",
    "due": "2026-03-06",
    "overdue": false
  },
  {
    "id": "fFKl3P75gb0rU9OUETaR",
    "title": "[rS8Oa8Nnpo4kZmsQl033] Hawaiian pothos - Commercialization building: Continue monitoring and providing care to support o",
    "contact": "None None",
    "contactId": "rS8Oa8Nnpo4kZmsQl033",
    "assignedTo": "Bri",
    "due": "2026-03-16",
    "overdue": false
  },
  {
    "id": "nxIRhbduDVdEAWGewtwA",
    "title": "[6J5c86gM95qGVJ9SuU1U] Ficus trees, all floors: Continue rotating ficus trees on all floors at each service visit",
    "contact": "None None",
    "contactId": "6J5c86gM95qGVJ9SuU1U",
    "assignedTo": "Bri",
    "due": "2026-03-16",
    "overdue": false
  },
  {
    "id": "XQbuPWxODaJfqgkBgD1H",
    "title": "[FU2BBWA0LJI7QLU8NVer] Howard's yucca cane (relocated from Tio Lucho's to Sweet Auburn BBQ): Verify yucca cane is settli",
    "contact": "None None",
    "contactId": "FU2BBWA0LJI7QLU8NVer",
    "assignedTo": "Bri",
    "due": "2026-03-17",
    "overdue": false
  },
  {
    "id": "YZ6CYb8jrh0tjgoZFnxO",
    "title": "[CNu3USP1J0KKYBQFnRPp] Money tree: Monitor growth progress following rotation; continue rotating at future visits to enc",
    "contact": "None None",
    "contactId": "CNu3USP1J0KKYBQFnRPp",
    "assignedTo": "Bri",
    "due": "2026-03-23",
    "overdue": false
  },
  {
    "id": "VbMRax4KQgNUpp2D7bpy",
    "title": "[6J5c86gM95qGVJ9SuU1U] ZZ plants, 5th floor: Monitor ZZ plants on 5th floor at next visit for continued overgrowth; prun",
    "contact": "None None",
    "contactId": "6J5c86gM95qGVJ9SuU1U",
    "assignedTo": "Bri",
    "due": "2026-03-23",
    "overdue": false
  }
];

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
    "id": "inv:0-ChBkzxSNBsUdDoG0xl8EA-Z5EI0N",
    "recipient": "Dionne Thomas",
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
    "id": "inv:0-ChBzpk9PFk7J6zdnof9NWrzMEI0N",
    "recipient": "Dianne Orr",
    "amount": 429.0,
    "due": "2026-04-14",
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
    "id": "inv:0-ChDXEuaWiYIBX7VTP1s8vwgOEI0N",
    "recipient": "Chris Bentley",
    "amount": 225.33,
    "due": "2026-03-30",
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

export const procurement: ProcurementItem[] = [];

export const hookItems: HookItem[] = [
  {
    "id": "h1",
    "title": "Procure materials — Rick (Marriott) outdoor planters",
    "priority": "high",
    "firstThing": true,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-04"
  },
  {
    "id": "h2",
    "title": "Finish appointments in Square",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-04"
  },
  {
    "id": "h3",
    "title": "Concord Group first service invoice → Allie",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-04"
  },
  {
    "id": "h4",
    "title": "Create recurring invoice for Concord Group",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-04"
  },
  {
    "id": "h5",
    "title": "UPSELL — QOmCg3mvOLmnJEJCFzX0: Spring refresh (Iris O4W)",
    "priority": "high",
    "firstThing": false,
    "upsell": true,
    "source": "the-hook",
    "added": "2026-03-04"
  },
  {
    "id": "h6",
    "title": "Scope Concord Group add-on plants",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-04"
  },
  {
    "id": "h7",
    "title": "Month-end invoice audit",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-04"
  },
  {
    "id": "h8",
    "title": "Verify Nick's accounts — close out if paid",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-04"
  },
  {
    "id": "h9",
    "title": "Cancel Hitchcock insurance",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-04"
  },
  {
    "id": "h10",
    "title": "Georgia Tech — reach out re: add-on plants",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-04"
  },
  {
    "id": "h11",
    "title": "Send Georgia Tech 2026 invoice",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-04"
  },
  {
    "id": "h12",
    "title": "Bank of America estimate — Carol's lead",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-04"
  },
  {
    "id": "h13",
    "title": "Physician Building Entrance",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-04"
  },
  {
    "id": "h14",
    "title": "Rome Hospital — bromeliad rotation planning",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-04"
  },
  {
    "id": "h15",
    "title": "Rome Hospital — 90-day action plan budget",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-04"
  },
  {
    "id": "h16",
    "title": "Update AHP website",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-04"
  },
  {
    "id": "h17",
    "title": "Nick's Plant Doctor accounts — 2FA transfer",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-04"
  },
  {
    "id": "h18",
    "title": "Bri operations setup",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-04"
  },
  {
    "id": "h19",
    "title": "Hire 1 part-time person to back up Bri",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-04"
  }
];

export const upcomingStops: UpcomingStop[] = [
  {
    "id": "KECakhZ9czBP7GWhZYrM",
    "title": "Service: Marriott Hotel",
    "date": "",
    "dateLabel": "",
    "time": ""
  },
  {
    "id": "x8tMJYkW0ZFbPRuTE5tY",
    "title": "Service: Michelin Connected Fleet",
    "date": "",
    "dateLabel": "",
    "time": ""
  },
  {
    "id": "hut7rp6ENDdRZ13S2BU7",
    "title": "Service: Onco Health",
    "date": "",
    "dateLabel": "",
    "time": ""
  },
  {
    "id": "HWNwf8i9KEIfFhHNZVUV",
    "title": "Service: Aimpoint Digital",
    "date": "",
    "dateLabel": "",
    "time": ""
  },
  {
    "id": "5biPPZDERo0V4bfv52wN",
    "title": "Service: Zalik Family Home",
    "date": "",
    "dateLabel": "",
    "time": ""
  },
  {
    "id": "d9YuvnbBJr6gRFrp506s",
    "title": "Service: Peach State Pizza",
    "date": "",
    "dateLabel": "",
    "time": ""
  },
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
  }
];
