// AHP Dashboard data — auto-generated 2026-03-06T10:00:49.322126-05:00
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
  "lastRefreshed": "2026-03-06T10:00:49.322126-05:00",
  "todayLabel": "Friday, March 6",
  "serviceDay": {
    "done": 0,
    "total": 1
  },
  "invoiceSummary": {
    "totalOutstanding": 14751.17,
    "overdueCount": 7,
    "overdueTotal": 1337.17,
    "currentCount": 45,
    "currentTotal": 13414.0
  },
  "taskSummary": {
    "geoffTotal": 17,
    "geoffOverdue": 4,
    "briTotal": 14,
    "briOverdue": 3
  },
  "procurementSummary": {
    "total": 4,
    "overdueCount": 0
  }
};

export const serviceStops: ServiceStop[] = [
  {
    "id": "NaA17pUY5Y81MRR8Poy8",
    "title": "Service: Advocate Health Rome Hospital",
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
    "id": "lDqKDTO04Q8zq0W1odie",
    "title": "[UPSELL HIGH] QOmCg3mvOLmnJEJCFzX0: Seasonal spring planting refresh for Iris O4W — opportunity to propose and sell new",
    "contact": "None None",
    "contactId": "QOmCg3mvOLmnJEJCFzX0",
    "assignedTo": "Geoff",
    "due": "2026-03-10",
    "overdue": false
  },
  {
    "id": "qKAGGrtvIDGekexgadMd",
    "title": "[UPSELL MEDIUM] 65jP3WE1gqhGzJsc1unA: Offer a formal propagation and grow-out service, or upsell rooted propagations as",
    "contact": "None None",
    "contactId": "65jP3WE1gqhGzJsc1unA",
    "assignedTo": "Geoff",
    "due": "2026-03-11",
    "overdue": false
  },
  {
    "id": "gDeaZA9snzljaCws8x4T",
    "title": "[UPSELL HIGH] 65jP3WE1gqhGzJsc1unA: Propose a summer garden design and installation package for the Thadani estate — cou",
    "contact": "None None",
    "contactId": "65jP3WE1gqhGzJsc1unA",
    "assignedTo": "Geoff",
    "due": "2026-03-11",
    "overdue": false
  },
  {
    "id": "KuIa3ioNxxIHuE2BHdJ5",
    "title": "[UPSELL MEDIUM] tZAK3p6WnjFZBEn2a1Wn: Sell and install a new plant in the second conference room as a direct swap for th",
    "contact": "None None",
    "contactId": "tZAK3p6WnjFZBEn2a1Wn",
    "assignedTo": "Geoff",
    "due": "2026-03-11",
    "overdue": false
  },
  {
    "id": "K59ONuLXBPrIK9KTN84i",
    "title": "[UPSELL HIGH] TSSI7sfCGsrQMEArJoOt: Spring outdoor container refresh or replanting service — scope and pricing to be det",
    "contact": "None None",
    "contactId": "TSSI7sfCGsrQMEArJoOt",
    "assignedTo": "Geoff",
    "due": "2026-03-11",
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
    "id": "psEM8kAGpvYQIFBqRvjg",
    "title": "[tZAK3p6WnjFZBEn2a1Wn] Bird's nest fern - second conference room (next to Hoya): Source pricing and select an appropriat",
    "contact": "None None",
    "contactId": "tZAK3p6WnjFZBEn2a1Wn",
    "assignedTo": "Geoff",
    "due": "2026-03-18",
    "overdue": false
  },
  {
    "id": "O5raId6wOaguq09R3Lrh",
    "title": "[TSSI7sfCGsrQMEArJoOt] Outdoor containers: Gather all measurements of outdoor containers on next visit and prepare a pri",
    "contact": "None None",
    "contactId": "TSSI7sfCGsrQMEArJoOt",
    "assignedTo": "Geoff",
    "due": "2026-03-18",
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
    "overdue": true
  },
  {
    "id": "5b2WG1vtD7WhCrg3FhOj",
    "title": "[aStxefelt15SI3RkLyFf] Outdoor planters with violas: Continue monitoring and treating with neem oil; replace damaged or",
    "contact": "None None",
    "contactId": "aStxefelt15SI3RkLyFf",
    "assignedTo": "Bri",
    "due": "2026-03-05",
    "overdue": true
  },
  {
    "id": "z0ochSrtPL3g2DF5CFAd",
    "title": "[aStxefelt15SI3RkLyFf] Lemon lime dracaena, 28th floor: Continue monitoring and treating with insecticidal soap; replace",
    "contact": "None None",
    "contactId": "aStxefelt15SI3RkLyFf",
    "assignedTo": "Bri",
    "due": "2026-03-05",
    "overdue": true
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
    "id": "zCQGAannE3QmlgLUIr4Z",
    "title": "[65jP3WE1gqhGzJsc1unA] Large planters (specific plants unspecified): Inspect all large planters for drainage adequacy; a",
    "contact": "None None",
    "contactId": "65jP3WE1gqhGzJsc1unA",
    "assignedTo": "Bri",
    "due": "2026-03-07",
    "overdue": false
  },
  {
    "id": "7IOGsccodoBIAXdcN7Ma",
    "title": "[tZAK3p6WnjFZBEn2a1Wn] Ficus - main conference room: Monitor treatment response; re-apply insecticidal soap if needed an",
    "contact": "None None",
    "contactId": "tZAK3p6WnjFZBEn2a1Wn",
    "assignedTo": "Bri",
    "due": "2026-03-07",
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
    "id": "FRENPCzyyIsKmXjk4R2d",
    "title": "[jyGWRgsucfPTH2cGwb2W] Ficus – bedroom: Relocate ficus away from the vent; develop and implement the plan discussed with",
    "contact": "None None",
    "contactId": "jyGWRgsucfPTH2cGwb2W",
    "assignedTo": "Bri",
    "due": "2026-03-18",
    "overdue": false
  },
  {
    "id": "nDwPYr9HFZtp5C3Wrw0k",
    "title": "[65jP3WE1gqhGzJsc1unA] Vikram's plants (specific plants unspecified): Identify which plants are suitable for propagation",
    "contact": "None None",
    "contactId": "65jP3WE1gqhGzJsc1unA",
    "assignedTo": "Bri",
    "due": "2026-03-18",
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
  },
  {
    "id": "ttuMDX9ADeUSEs013yWa",
    "title": "[AejoIdkJBeFAaO5bUQhl] All plants - account-wide: Schedule fertilizer application in spring to compensate for dark offic",
    "contact": "None None",
    "contactId": "AejoIdkJBeFAaO5bUQhl",
    "assignedTo": "Bri",
    "due": "2026-03-25",
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
  },
  {
    "id": "19f43f6a-5de8-4c9a-b7b5-2048012fbdae",
    "client": "Marriott Perimeter Center",
    "plant": "Tropical floor plant (palm alternative, humidity/salt tolerant)",
    "size": "10 inch",
    "quantity": "4",
    "needBy": "2026-04-02",
    "overdue": false,
    "supplier": "Southland Greenhouse"
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
    "added": "2026-03-06"
  },
  {
    "id": "h2",
    "title": "Finish appointments in Square",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-06"
  },
  {
    "id": "h3",
    "title": "Concord Group first service invoice → Allie",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-06"
  },
  {
    "id": "h4",
    "title": "Create recurring invoice for Concord Group",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-06"
  },
  {
    "id": "h5",
    "title": "UPSELL — Iris O4W: Spring refresh",
    "priority": "high",
    "firstThing": false,
    "upsell": true,
    "source": "the-hook",
    "added": "2026-03-06"
  },
  {
    "id": "h6",
    "title": "Scope Concord Group add-on plants",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-06"
  },
  {
    "id": "h7",
    "title": "Month-end invoice audit",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-06"
  },
  {
    "id": "h8",
    "title": "Verify Nick's accounts — close out if paid",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-06"
  },
  {
    "id": "h9",
    "title": "Cancel Hitchcock insurance",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-06"
  },
  {
    "id": "h10",
    "title": "Georgia Tech — reach out re: add-on plants",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-06"
  },
  {
    "id": "h11",
    "title": "Send Georgia Tech 2026 invoice",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-06"
  },
  {
    "id": "h12",
    "title": "Bank of America estimate — Carol's lead",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-06"
  },
  {
    "id": "h13",
    "title": "Physician Building Entrance",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-06"
  },
  {
    "id": "h14",
    "title": "Rome Hospital — bromeliad rotation planning",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-06"
  },
  {
    "id": "h15",
    "title": "Rome Hospital — 90-day action plan budget",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-06"
  },
  {
    "id": "h16",
    "title": "Update AHP website",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-06"
  },
  {
    "id": "h17",
    "title": "Nick's Plant Doctor accounts — 2FA transfer",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-06"
  },
  {
    "id": "h18",
    "title": "Bri operations setup",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-06"
  },
  {
    "id": "h19",
    "title": "Hire 1 part-time person to back up Bri",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-06"
  },
  {
    "id": "h20",
    "title": "UPSELL — Thadani Residence: Propose summer garden design/install package",
    "priority": "high",
    "firstThing": false,
    "upsell": true,
    "source": "the-hook",
    "added": "2026-03-06"
  },
  {
    "id": "h21",
    "title": "UPSELL — [⚠️ Account unknown — GHL ID: TSSI7sfCGsrQMEArJoOt]: Spring outdoor container refresh",
    "priority": "high",
    "firstThing": false,
    "upsell": true,
    "source": "the-hook",
    "added": "2026-03-06"
  }
];

export const upcomingStops: UpcomingStop[] = [
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
  },
  {
    "id": "g3rwWMdAmahY7QCt3rLd",
    "title": "Service: Andersen Windows & Doors",
    "date": "",
    "dateLabel": "",
    "time": ""
  }
];
