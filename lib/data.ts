// AHP Dashboard data — auto-generated 2026-03-13T13:01:19.334227-04:00
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
  "lastRefreshed": "2026-03-13T13:01:19.334227-04:00",
  "todayLabel": "Friday, March 13",
  "serviceDay": {
    "done": 0,
    "total": 1
  },
  "invoiceSummary": {
    "totalOutstanding": 13511.0,
    "overdueCount": 3,
    "overdueTotal": 591.5,
    "currentCount": 43,
    "currentTotal": 12919.5
  },
  "taskSummary": {
    "geoffTotal": 28,
    "geoffOverdue": 0,
    "briTotal": 31,
    "briOverdue": 0
  },
  "procurementSummary": {
    "total": 10,
    "overdueCount": 2
  }
};

export const serviceStops: ServiceStop[] = [
  {
    "id": "g3rwWMdAmahY7QCt3rLd_1773403200000_21600",
    "title": "Service: Andersen Windows & Doors",
    "time": "",
    "done": false,
    "status": "pending"
  }
];

export const geoffTasks: GHLTask[] = [
  {
    "id": "vII1nwslZGC6kW2q6F9B",
    "title": "[Matsuda] Stephen to follow up - confirm add-on interest (ask Bri)",
    "contact": "None None",
    "contactId": "CNu3USP1J0KKYBQFnRPp",
    "assignedTo": "Geoff",
    "due": "2026-03-16",
    "overdue": false
  },
  {
    "id": "n2qY3M2GYGSXASfL8ra9",
    "title": "Verify Nick accounts - confirm paid, close out, notify Nick",
    "contact": "None None",
    "contactId": "oUjlVbarGtNSZbOnNtXp",
    "assignedTo": "Geoff",
    "due": "2026-03-16",
    "overdue": false
  },
  {
    "id": "i8blTJNclHQ44b500exY",
    "title": "Concord Group - get add-on plant list from Bri (due Mon Mar 16)",
    "contact": "None None",
    "contactId": "oUjlVbarGtNSZbOnNtXp",
    "assignedTo": "Geoff",
    "due": "2026-03-16",
    "overdue": false
  },
  {
    "id": "aBVl1tn87qwQaNOauUCf",
    "title": "Set up Concord Group recurring invoice (first invoice sent Mar 12)",
    "contact": "None None",
    "contactId": "oUjlVbarGtNSZbOnNtXp",
    "assignedTo": "Geoff",
    "due": "2026-03-16",
    "overdue": false
  },
  {
    "id": "9oEdYAhZy5C7DmOMJKgU",
    "title": "[UPSELL] Luna - outdoor container spring proposal (Bucket 2)",
    "contact": "None None",
    "contactId": "1hgIZJBoLujtw3CqZArM",
    "assignedTo": "Geoff",
    "due": "2026-03-17",
    "overdue": false
  },
  {
    "id": "O5raId6wOaguq09R3Lrh",
    "title": "[TSSI] Gather outdoor container measurements for spring refresh quote",
    "contact": "None None",
    "contactId": "TSSI7sfCGsrQMEArJoOt",
    "assignedTo": "Geoff",
    "due": "2026-03-17",
    "overdue": false
  },
  {
    "id": "K59ONuLXBPrIK9KTN84i",
    "title": "[UPSELL] TSSI - spring outdoor container refresh proposal",
    "contact": "None None",
    "contactId": "TSSI7sfCGsrQMEArJoOt",
    "assignedTo": "Geoff",
    "due": "2026-03-17",
    "overdue": false
  },
  {
    "id": "zk9OsTOowyYsXlqU3NFa",
    "title": "[Iris O4W] Spring planting proposal - build estimate from Bri info",
    "contact": "None None",
    "contactId": "QOmCg3mvOLmnJEJCFzX0",
    "assignedTo": "Geoff",
    "due": "2026-03-17",
    "overdue": false
  },
  {
    "id": "1wFgzJlaMyRqBtMP3Oxd",
    "title": "[Georgia Tech] Contact Essie re: snake plant refresh + 2026 invoice",
    "contact": "None None",
    "contactId": "rS8Oa8Nnpo4kZmsQl033",
    "assignedTo": "Geoff",
    "due": "2026-03-17",
    "overdue": false
  },
  {
    "id": "sIItLKZPId0JhJQsjthw",
    "title": "Georgia Tech - send 2026 invoice + add-on follow-up (get Bri email thread)",
    "contact": "None None",
    "contactId": "oUjlVbarGtNSZbOnNtXp",
    "assignedTo": "Geoff",
    "due": "2026-03-17",
    "overdue": false
  },
  {
    "id": "qKAGGrtvIDGekexgadMd",
    "title": "[UPSELL] Thadani - outdoor spring proposal package",
    "contact": "None None",
    "contactId": "65jP3WE1gqhGzJsc1unA",
    "assignedTo": "Geoff",
    "due": "2026-03-18",
    "overdue": false
  },
  {
    "id": "gDeaZA9snzljaCws8x4T",
    "title": "[UPSELL] Thadani - spring/summer garden proposal (Bucket 2, Apr 15 target)",
    "contact": "None None",
    "contactId": "65jP3WE1gqhGzJsc1unA",
    "assignedTo": "Geoff",
    "due": "2026-03-18",
    "overdue": false
  },
  {
    "id": "psEM8kAGpvYQIFBqRvjg",
    "title": "[Link] Source bird's nest fern - price and quote for second conference room",
    "contact": "None None",
    "contactId": "tZAK3p6WnjFZBEn2a1Wn",
    "assignedTo": "Geoff",
    "due": "2026-03-18",
    "overdue": false
  },
  {
    "id": "KuIa3ioNxxIHuE2BHdJ5",
    "title": "[Link] Source bird's nest fern for second conference room - price and quote",
    "contact": "None None",
    "contactId": "tZAK3p6WnjFZBEn2a1Wn",
    "assignedTo": "Geoff",
    "due": "2026-03-18",
    "overdue": false
  },
  {
    "id": "rIaYpZIRA8thLOujJg5O",
    "title": "[UPSELL] Client upgrade opportunity - follow up",
    "contact": "None None",
    "contactId": "rYdu5UrSCP2jm3InYKhy",
    "assignedTo": "Geoff",
    "due": "2026-03-20",
    "overdue": false
  },
  {
    "id": "oeYVb1PZBuxNjPOL8WNA",
    "title": "[UPSELL] Sky balcony - planter opportunity proposal",
    "contact": "None None",
    "contactId": "hhKmuCHJGLVHbxZa4Kyn",
    "assignedTo": "Geoff",
    "due": "2026-03-20",
    "overdue": false
  },
  {
    "id": "PlWM1QWvjwFKgkKFb1ko",
    "title": "[UPSELL] Aim Point - plant refresh/replacement package",
    "contact": "None None",
    "contactId": "DPV30fPRVBMezkLzcVbr",
    "assignedTo": "Geoff",
    "due": "2026-03-20",
    "overdue": false
  },
  {
    "id": "1eK8a1DclnS3zOwPtcZw",
    "title": "[UPSELL] Zalik 2nd residence - new install + service contract",
    "contact": "None None",
    "contactId": "RzTUIXjrgLXsoyiHwTZt",
    "assignedTo": "Geoff",
    "due": "2026-03-20",
    "overdue": false
  },
  {
    "id": "UuF5Yjtb3LwuJFdS6KFI",
    "title": "[UPSELL] Conference area - outdoor container upsell proposal",
    "contact": "None None",
    "contactId": "qwSaOos5rWsCsoiGwqoD",
    "assignedTo": "Geoff",
    "due": "2026-03-20",
    "overdue": false
  },
  {
    "id": "3xUBsbldyFteq3SYVSVz",
    "title": "[UPSELL] Conference area - plant replacement/refresh proposal",
    "contact": "None None",
    "contactId": "qwSaOos5rWsCsoiGwqoD",
    "assignedTo": "Geoff",
    "due": "2026-03-20",
    "overdue": false
  },
  {
    "id": "sN96JEO1X5S0P7Cvwvtb",
    "title": "[Admin] Update contact sheet with new property manager name and phone",
    "contact": "None None",
    "contactId": "1hgIZJBoLujtw3CqZArM",
    "assignedTo": "Geoff",
    "due": "2026-03-31",
    "overdue": false
  },
  {
    "id": "oXx2DmbHtL4bzmf3f493",
    "title": "[Admin] Update contact sheet with new property manager name and phone",
    "contact": "None None",
    "contactId": "FU2BBWA0LJI7QLU8NVer",
    "assignedTo": "Geoff",
    "due": "2026-03-31",
    "overdue": false
  },
  {
    "id": "Wt8IOJnJNi3pMiY9yVWN",
    "title": "[Admin] Coordinate mats and watering pans with client",
    "contact": "None None",
    "contactId": "rYdu5UrSCP2jm3InYKhy",
    "assignedTo": "Geoff",
    "due": "2026-04-01",
    "overdue": false
  },
  {
    "id": "mcnjxjv6ZNhAA0mBS60A",
    "title": "[UPSELL] Physician Center - secure signed scope for mother's garden (construction ends Apr)",
    "contact": "None None",
    "contactId": "scYgB7xiQESLpvqmhyQq",
    "assignedTo": "Geoff",
    "due": "2026-04-01",
    "overdue": false
  },
  {
    "id": "XsViUk48ulIJPsKBIDhD",
    "title": "[UPSELL] Physician Center - entrance refresh proposal (construction ends Apr)",
    "contact": "None None",
    "contactId": "scYgB7xiQESLpvqmhyQq",
    "assignedTo": "Geoff",
    "due": "2026-04-01",
    "overdue": false
  }
];

export const briTasks: GHLTask[] = [
  {
    "id": "eX2jGjkROb5bH621gtWq",
    "title": "[casd0VMuTqGUrhXiPuH4] Dracaenas (location unspecified): Monitor dracaenas at next visit for signs of continued or worse",
    "contact": "None None",
    "contactId": "casd0VMuTqGUrhXiPuH4",
    "assignedTo": "Bri",
    "due": "2026-03-16",
    "overdue": false
  },
  {
    "id": "WC1S8SLSzMoxQkswnfc6",
    "title": "[mrZSBZyJc1pHfoNxUJqz] ZZ Plant (location unspecified): Monitor plant closely at next visit for signs of decline, root r",
    "contact": "None None",
    "contactId": "mrZSBZyJc1pHfoNxUJqz",
    "assignedTo": "Bri",
    "due": "2026-03-16",
    "overdue": false
  },
  {
    "id": "bOSXTKPBtCqDxC35I0rJ",
    "title": "[QEBQUDX00CESSP2Vb0ry] Pothos - kitchen: Inspect pothos for any remaining or recurring mealybugs and reapply insecticida",
    "contact": "None None",
    "contactId": "QEBQUDX00CESSP2Vb0ry",
    "assignedTo": "Bri",
    "due": "2026-03-16",
    "overdue": false
  },
  {
    "id": "1Y2jxZoSVMSMDec38jO8",
    "title": "[qwSaOos5rWsCsoiGwqoD] Palms (large conference area): Monitor treated palms and prepare for full replacement within the",
    "contact": "None None",
    "contactId": "qwSaOos5rWsCsoiGwqoD",
    "assignedTo": "Bri",
    "due": "2026-03-16",
    "overdue": false
  },
  {
    "id": "UERKoFn6wjFkhSHhvgaM",
    "title": "[DScML9nk0qrXGK4mc3vA] Plants in cubicle area, left side of building: Allow plants to dry out completely before watering",
    "contact": "None None",
    "contactId": "DScML9nk0qrXGK4mc3vA",
    "assignedTo": "Bri",
    "due": "2026-03-16",
    "overdue": false
  },
  {
    "id": "zCQGAannE3QmlgLUIr4Z",
    "title": "[65jP3WE1gqhGzJsc1unA] Large planters (specific plants unspecified): Inspect all large planters for drainage adequacy; a",
    "contact": "None None",
    "contactId": "65jP3WE1gqhGzJsc1unA",
    "assignedTo": "Bri",
    "due": "2026-03-16",
    "overdue": false
  },
  {
    "id": "7IOGsccodoBIAXdcN7Ma",
    "title": "[tZAK3p6WnjFZBEn2a1Wn] Ficus - main conference room: Monitor treatment response; re-apply insecticidal soap if needed an",
    "contact": "None None",
    "contactId": "tZAK3p6WnjFZBEn2a1Wn",
    "assignedTo": "Bri",
    "due": "2026-03-16",
    "overdue": false
  },
  {
    "id": "UcoGREGed1fEfiEZBUzP",
    "title": "[QOmCg3mvOLmnJEJCFzX0] Outdoor planters: Monitor outdoor planters at next visit to confirm neem oil treatment is control",
    "contact": "None None",
    "contactId": "QOmCg3mvOLmnJEJCFzX0",
    "assignedTo": "Bri",
    "due": "2026-03-16",
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
    "id": "DoCeLF18KmvIksNXw2Oz",
    "title": "[rS8Oa8Nnpo4kZmsQl033] Ags - Commercialization building: Continue mealybug treatment with insecticidal soap at next serv",
    "contact": "None None",
    "contactId": "rS8Oa8Nnpo4kZmsQl033",
    "assignedTo": "Bri",
    "due": "2026-03-16",
    "overdue": false
  },
  {
    "id": "5b2WG1vtD7WhCrg3FhOj",
    "title": "[aStxefelt15SI3RkLyFf] Outdoor planters with violas: Continue monitoring and treating with neem oil; replace damaged or",
    "contact": "None None",
    "contactId": "aStxefelt15SI3RkLyFf",
    "assignedTo": "Bri",
    "due": "2026-03-16",
    "overdue": false
  },
  {
    "id": "z0ochSrtPL3g2DF5CFAd",
    "title": "[aStxefelt15SI3RkLyFf] Lemon lime dracaena, 28th floor: Continue monitoring and treating with insecticidal soap; replace",
    "contact": "None None",
    "contactId": "aStxefelt15SI3RkLyFf",
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
    "id": "dgm6rDRXsLPVU8xAKKiB",
    "title": "[Dhl6BUgjO1vttwXFcxoU] Banana fig – conference room: Monitor and re-treat soft scale at next visit; confirm insecticidal",
    "contact": "None None",
    "contactId": "Dhl6BUgjO1vttwXFcxoU",
    "assignedTo": "Bri",
    "due": "2026-03-19",
    "overdue": false
  },
  {
    "id": "GjqLHI7g7ybFjcqjGiaX",
    "title": "[Dhl6BUgjO1vttwXFcxoU] Money tree – elevator lobby: Monitor and re-treat thrips at next visit; confirm insecticidal soap",
    "contact": "None None",
    "contactId": "Dhl6BUgjO1vttwXFcxoU",
    "assignedTo": "Bri",
    "due": "2026-03-19",
    "overdue": false
  },
  {
    "id": "U35xCY2VF6D3fzJSVu6f",
    "title": "[Dhl6BUgjO1vttwXFcxoU] Fern – private office: Monitor and re-treat mealy bugs at next visit; confirm insecticidal soap a",
    "contact": "None None",
    "contactId": "Dhl6BUgjO1vttwXFcxoU",
    "assignedTo": "Bri",
    "due": "2026-03-19",
    "overdue": false
  },
  {
    "id": "FRENPCzyyIsKmXjk4R2d",
    "title": "[jyGWRgsucfPTH2cGwb2W] Ficus – bedroom: Relocate ficus away from the vent; develop and implement the plan discussed with",
    "contact": "None None",
    "contactId": "jyGWRgsucfPTH2cGwb2W",
    "assignedTo": "Bri",
    "due": "2026-03-19",
    "overdue": false
  },
  {
    "id": "nDwPYr9HFZtp5C3Wrw0k",
    "title": "[65jP3WE1gqhGzJsc1unA] Vikram's plants (specific plants unspecified): Identify which plants are suitable for propagation",
    "contact": "None None",
    "contactId": "65jP3WE1gqhGzJsc1unA",
    "assignedTo": "Bri",
    "due": "2026-03-19",
    "overdue": false
  },
  {
    "id": "XQbuPWxODaJfqgkBgD1H",
    "title": "[FU2BBWA0LJI7QLU8NVer] Howard's yucca cane (relocated from Tio Lucho's to Sweet Auburn BBQ): Verify yucca cane is settli",
    "contact": "None None",
    "contactId": "FU2BBWA0LJI7QLU8NVer",
    "assignedTo": "Bri",
    "due": "2026-03-19",
    "overdue": false
  },
  {
    "id": "j4ciXoRY5g5tu1sGZeSt",
    "title": "[scYgB7xiQESLpvqmhyQq] Multiple plants - various locations: Identify affected plants during next visit and recommend rep",
    "contact": "None None",
    "contactId": "scYgB7xiQESLpvqmhyQq",
    "assignedTo": "Bri",
    "due": "2026-03-20",
    "overdue": false
  },
  {
    "id": "agNndU1bnDpoB9NX9bw0",
    "title": "[mrZSBZyJc1pHfoNxUJqz] Money Trees in meeting room: Assess light levels in meeting room and consider relocating plants t",
    "contact": "None None",
    "contactId": "mrZSBZyJc1pHfoNxUJqz",
    "assignedTo": "Bri",
    "due": "2026-03-23",
    "overdue": false
  },
  {
    "id": "3XXSLvP4KPsJKdrUtmfM",
    "title": "[BqGcdA7dcNWIBdQ54VbA] Selloum Philodendron: Continue monitoring for spider mite activity at next visit; reapply insecti",
    "contact": "None None",
    "contactId": "BqGcdA7dcNWIBdQ54VbA",
    "assignedTo": "Bri",
    "due": "2026-03-23",
    "overdue": false
  },
  {
    "id": "5bXhPK8Iyda5Kf0MrExh",
    "title": "[MQhzd2oSqaZK08L7ImW2] Peace Lilies (location not specified): Continue using tap water conditioner at each visit; monito",
    "contact": "None None",
    "contactId": "MQhzd2oSqaZK08L7ImW2",
    "assignedTo": "Bri",
    "due": "2026-03-23",
    "overdue": false
  },
  {
    "id": "5YU0Re0TIJ7qR3WsNgnm",
    "title": "[qwSaOos5rWsCsoiGwqoD] Color bowls (near terrace): Monitor color bowls in new sunny terrace location to confirm improved",
    "contact": "None None",
    "contactId": "qwSaOos5rWsCsoiGwqoD",
    "assignedTo": "Bri",
    "due": "2026-03-23",
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
  }
];

export const invoices: Invoice[] = [
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
  },
  {
    "id": "inv:0-ChBVIoctAEOvVUqvdFK7eTITEI0N",
    "recipient": "Tim Harris",
    "amount": 214.5,
    "due": "2026-03-30",
    "overdue": false
  },
  {
    "id": "inv:0-ChAb7V1vVJjcN2iakK8Qvsn8EI0N",
    "recipient": "Meredith Bouloux",
    "amount": 214.5,
    "due": "2026-03-14",
    "overdue": false
  },
  {
    "id": "inv:0-ChCX2_FcMrfJDJtNnck4ZHRIEI0N",
    "recipient": "Chris Tully",
    "amount": 214.5,
    "due": "2026-03-30",
    "overdue": false
  },
  {
    "id": "inv:0-ChCbVb7JchS6v2teD29xbmLzEI0N",
    "recipient": "Equity Residential AP",
    "amount": 184.17,
    "due": "2026-04-30",
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
    "overdue": true,
    "supplier": ""
  },
  {
    "id": "1006",
    "client": "qwSaOos5rWsCsoiGwqoD",
    "plant": "TBD — high humidity and salt tolerant species (e.g., Kentia Palm, Dracaena, Foxtail Fern)",
    "size": "TBD — floor size likely given conference area context",
    "quantity": "1",
    "needBy": "2026-03-09",
    "overdue": true,
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
    "id": "1004",
    "client": "scYgB7xiQESLpvqmhyQq",
    "plant": "Schefflera",
    "size": "Floor",
    "quantity": "1",
    "needBy": "2026-03-20",
    "overdue": false,
    "supplier": ""
  },
  {
    "id": "1005",
    "client": "l5kT0vO1MF3QgFzpkaGT",
    "plant": "Color refresh plants (specific varieties TBD per Bri's list)",
    "size": "TBD per Bri's list",
    "quantity": "0",
    "needBy": "2026-03-20",
    "overdue": false,
    "supplier": ""
  },
  {
    "id": "1007",
    "client": "rYdu5UrSCP2jm3InYKhy",
    "plant": "Replacement mats and watering pans",
    "size": "Unknown - to be confirmed with client",
    "quantity": "1",
    "needBy": "2026-03-26",
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
  },
  {
    "id": "27db29ed-bf76-4f19-af8f-7132139dcee3",
    "client": "Advocate Health Rome Hospital",
    "plant": "ZZ plant (low light option; alternatives: Cast Iron plant or 'Janet Craig' Dracaena)",
    "size": "14 inch",
    "quantity": "1",
    "needBy": "2026-04-03",
    "overdue": false,
    "supplier": "Southland Greenhouse"
  },
  {
    "id": "19840a8d-6197-4fe6-a97d-97caf627f2d4",
    "client": "Advocate Health Rome Hospital",
    "plant": "Schefflera (leggy; replacement needed)",
    "size": "",
    "quantity": "1",
    "needBy": "2026-04-03",
    "overdue": false,
    "supplier": "Southland Greenhouse"
  }
];

export const hookItems: HookItem[] = [
  {
    "id": "h1",
    "title": "Omar — Friend's House",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-13"
  },
  {
    "id": "h2",
    "title": "Omar — Plant Doctor Visit",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-13"
  },
  {
    "id": "h3",
    "title": "Rick (Marriott deposit)",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-13"
  },
  {
    "id": "h4",
    "title": "Loria Ansley",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-13"
  },
  {
    "id": "h5",
    "title": "Luna Upper Westside",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-13"
  },
  {
    "id": "h6",
    "title": "Iris O4W",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-13"
  },
  {
    "id": "h7",
    "title": "Thadani Residence",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-13"
  },
  {
    "id": "h8",
    "title": "Physician Center",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-13"
  },
  {
    "id": "h9",
    "title": "Zalik Residence (2nd)",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-13"
  },
  {
    "id": "h10",
    "title": "Georgia Tech",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-13"
  },
  {
    "id": "h11",
    "title": "Plant Doctor leads",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-13"
  },
  {
    "id": "h12",
    "title": "Meredith situation",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-13"
  },
  {
    "id": "h13",
    "title": "Nick accounts close-out",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-13"
  },
  {
    "id": "h14",
    "title": "Month-end invoice audit",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-13"
  }
];

export const upcomingStops: UpcomingStop[] = [
  {
    "id": "wAaJzKEU96PuThXyYkKt_1773662400000_3600",
    "title": "Service: Perkins and Will",
    "date": "",
    "dateLabel": "",
    "time": ""
  },
  {
    "id": "aWEhD1y56UHVoAMTNWv8_1773669600000_3600",
    "title": "Service: Loria Ansley",
    "date": "",
    "dateLabel": "",
    "time": ""
  },
  {
    "id": "jFRtWj6Utr38ZKxrkzTc_1773676800000_3600",
    "title": "Service: GA Tech - Office of Commercialization",
    "date": "",
    "dateLabel": "",
    "time": ""
  },
  {
    "id": "QAS0lE6o5lq8koZiGUuU_1773752400000_3600",
    "title": "Service: Iris O4W",
    "date": "",
    "dateLabel": "",
    "time": ""
  },
  {
    "id": "aKVjS9ebG6lmx9ixSjkS_1773759600000_3600",
    "title": "Service: Bouloux Residence",
    "date": "",
    "dateLabel": "",
    "time": ""
  },
  {
    "id": "2Zx4bJqgF8UjnYAY3qSr_1773770400000_3600",
    "title": "Service: Sweet Auburn BBQ",
    "date": "",
    "dateLabel": "",
    "time": ""
  },
  {
    "id": "N7XMXdA8qqeCcN3NExO0_1773774000000_3600",
    "title": "Service: Tio Luchos",
    "date": "",
    "dateLabel": "",
    "time": ""
  },
  {
    "id": "hakDWcwAk0rHVJlIGoiq_1773838800000_3600",
    "title": "Service: WITH/Agency",
    "date": "",
    "dateLabel": "",
    "time": ""
  },
  {
    "id": "sBackdXtayYajQhbAvgt_1773842400000_3600",
    "title": "Service: Shoob Residence",
    "date": "",
    "dateLabel": "",
    "time": ""
  },
  {
    "id": "0uzv6oEMniAVzSwZNh0M_1773849600000_3600",
    "title": "Service: Link Logistics",
    "date": "",
    "dateLabel": "",
    "time": ""
  },
  {
    "id": "V6hrF2OpnMC3zNPcTl1b_1773856800000_3600",
    "title": "Service: Thadani Residence",
    "date": "",
    "dateLabel": "",
    "time": ""
  },
  {
    "id": "7ZQ1Z0uWoH6s1x4u6MCP_1773864000000_3600",
    "title": "Service: Gallery Residence",
    "date": "",
    "dateLabel": "",
    "time": ""
  },
  {
    "id": "bKUJAiqURL9Y4gtVQ0vV_1773921600000_3600",
    "title": "Service: Marriott Hotel - Perimeter Center",
    "date": "",
    "dateLabel": "",
    "time": ""
  },
  {
    "id": "69hOEAgMbS25uzyfYFBh_1773930600000_3600",
    "title": "Service: Michelin Connected Fleet",
    "date": "",
    "dateLabel": "",
    "time": ""
  }
];
