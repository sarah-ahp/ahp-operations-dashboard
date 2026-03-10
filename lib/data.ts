// AHP Dashboard data — auto-generated 2026-03-10T11:01:41.039673-04:00
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
  "lastRefreshed": "2026-03-10T11:01:41.039673-04:00",
  "todayLabel": "Tuesday, March 10",
  "serviceDay": {
    "done": 0,
    "total": 4
  },
  "invoiceSummary": {
    "totalOutstanding": 14090.0,
    "overdueCount": 4,
    "overdueTotal": 890.5,
    "currentCount": 44,
    "currentTotal": 13199.5
  },
  "taskSummary": {
    "geoffTotal": 28,
    "geoffOverdue": 6,
    "briTotal": 26,
    "briOverdue": 8
  },
  "procurementSummary": {
    "total": 9,
    "overdueCount": 2
  }
};

export const serviceStops: ServiceStop[] = [
  {
    "id": "Rmc19MbeFRX9Stwguenn_1773144000000_7200",
    "title": "Service: Archer Western",
    "time": "",
    "done": false,
    "status": "pending"
  },
  {
    "id": "K4XKlsT21SdI3axdi5jn_1773151200000_3600",
    "title": "Service: Concord Group",
    "time": "",
    "done": false,
    "status": "pending"
  },
  {
    "id": "HnfCbi8WuWvWdx9VtOTL_1773158400000_3600",
    "title": "Service: One Street Residential",
    "time": "",
    "done": false,
    "status": "pending"
  },
  {
    "id": "1kS0FgU3TdHM8WVFdSEy_1773165600000_3600",
    "title": "Service: Luna Upper Westside",
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
    "id": "6votc4BDCi4Pwet4n2rI",
    "title": ":",
    "contact": "None None",
    "contactId": "scYgB7xiQESLpvqmhyQq",
    "assignedTo": "Geoff",
    "due": "2026-03-07",
    "overdue": true
  },
  {
    "id": "VoCfhW33xXc14BjVifOl",
    "title": "[qwSaOos5rWsCsoiGwqoD] Replacement plants (large conference area and terrace): Create and deliver replacement plant list",
    "contact": "None None",
    "contactId": "qwSaOos5rWsCsoiGwqoD",
    "assignedTo": "Geoff",
    "due": "2026-03-09",
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
    "id": "mcnjxjv6ZNhAA0mBS60A",
    "title": "[UPSELL HIGH] scYgB7xiQESLpvqmhyQq: Secure a signed scope of work for the mother's garden planting project, including pl",
    "contact": "None None",
    "contactId": "scYgB7xiQESLpvqmhyQq",
    "assignedTo": "Geoff",
    "due": "2026-03-13",
    "overdue": false
  },
  {
    "id": "XsViUk48ulIJPsKBIDhD",
    "title": "[UPSELL HIGH] scYgB7xiQESLpvqmhyQq: Propose formal approval and implementation of the entrance refresh design, potential",
    "contact": "None None",
    "contactId": "scYgB7xiQESLpvqmhyQq",
    "assignedTo": "Geoff",
    "due": "2026-03-13",
    "overdue": false
  },
  {
    "id": "GlmxvjTtg4QHBidtvrAZ",
    "title": "[UPSELL MEDIUM] scYgB7xiQESLpvqmhyQq: Leverage high satisfaction to propose adding plants to additional high-traffic are",
    "contact": "None None",
    "contactId": "scYgB7xiQESLpvqmhyQq",
    "assignedTo": "Geoff",
    "due": "2026-03-13",
    "overdue": false
  },
  {
    "id": "PlWM1QWvjwFKgkKFb1ko",
    "title": "[UPSELL MEDIUM] DPV30fPRVBMezkLzcVbr: Sell a plant refresh or replacement package to Aim Point Digital to update aging f",
    "contact": "None None",
    "contactId": "DPV30fPRVBMezkLzcVbr",
    "assignedTo": "Geoff",
    "due": "2026-03-13",
    "overdue": false
  },
  {
    "id": "vYM1N2N5Y08mZ06BHh1U",
    "title": "[UPSELL HIGH] l5kT0vO1MF3QgFzpkaGT: Fulfill a client-requested seasonal color refresh at Peach State Pizza — procure and",
    "contact": "None None",
    "contactId": "l5kT0vO1MF3QgFzpkaGT",
    "assignedTo": "Geoff",
    "due": "2026-03-13",
    "overdue": false
  },
  {
    "id": "1eK8a1DclnS3zOwPtcZw",
    "title": "[UPSELL HIGH] RzTUIXjrgLXsoyiHwTZt: New plant installation and ongoing service contract for a second residence on the Za",
    "contact": "None None",
    "contactId": "RzTUIXjrgLXsoyiHwTZt",
    "assignedTo": "Geoff",
    "due": "2026-03-13",
    "overdue": false
  },
  {
    "id": "UuF5Yjtb3LwuJFdS6KFI",
    "title": "[UPSELL MEDIUM] qwSaOos5rWsCsoiGwqoD: Positive performance of outdoor containers suggests client receptiveness to expand",
    "contact": "None None",
    "contactId": "qwSaOos5rWsCsoiGwqoD",
    "assignedTo": "Geoff",
    "due": "2026-03-13",
    "overdue": false
  },
  {
    "id": "3xUBsbldyFteq3SYVSVz",
    "title": "[UPSELL HIGH] qwSaOos5rWsCsoiGwqoD: Client engagement around plant replacement opens door to upsell upgraded or expanded",
    "contact": "None None",
    "contactId": "qwSaOos5rWsCsoiGwqoD",
    "assignedTo": "Geoff",
    "due": "2026-03-13",
    "overdue": false
  },
  {
    "id": "oeYVb1PZBuxNjPOL8WNA",
    "title": "[UPSELL MEDIUM] hhKmuCHJGLVHbxZa4Kyn: The sky balcony planter was previously empty and has now been filled with leftover",
    "contact": "None None",
    "contactId": "hhKmuCHJGLVHbxZa4Kyn",
    "assignedTo": "Geoff",
    "due": "2026-03-16",
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
    "overdue": true
  },
  {
    "id": "zCQGAannE3QmlgLUIr4Z",
    "title": "[65jP3WE1gqhGzJsc1unA] Large planters (specific plants unspecified): Inspect all large planters for drainage adequacy; a",
    "contact": "None None",
    "contactId": "65jP3WE1gqhGzJsc1unA",
    "assignedTo": "Bri",
    "due": "2026-03-07",
    "overdue": true
  },
  {
    "id": "7IOGsccodoBIAXdcN7Ma",
    "title": "[tZAK3p6WnjFZBEn2a1Wn] Ficus - main conference room: Monitor treatment response; re-apply insecticidal soap if needed an",
    "contact": "None None",
    "contactId": "tZAK3p6WnjFZBEn2a1Wn",
    "assignedTo": "Bri",
    "due": "2026-03-07",
    "overdue": true
  },
  {
    "id": "1Y2jxZoSVMSMDec38jO8",
    "title": "[qwSaOos5rWsCsoiGwqoD] Palms (large conference area): Monitor treated palms and prepare for full replacement within the",
    "contact": "None None",
    "contactId": "qwSaOos5rWsCsoiGwqoD",
    "assignedTo": "Bri",
    "due": "2026-03-09",
    "overdue": true
  },
  {
    "id": "UERKoFn6wjFkhSHhvgaM",
    "title": "[DScML9nk0qrXGK4mc3vA] Plants in cubicle area, left side of building: Allow plants to dry out completely before watering",
    "contact": "None None",
    "contactId": "DScML9nk0qrXGK4mc3vA",
    "assignedTo": "Bri",
    "due": "2026-03-09",
    "overdue": true
  },
  {
    "id": "WC1S8SLSzMoxQkswnfc6",
    "title": "[mrZSBZyJc1pHfoNxUJqz] ZZ Plant (location unspecified): Monitor plant closely at next visit for signs of decline, root r",
    "contact": "None None",
    "contactId": "mrZSBZyJc1pHfoNxUJqz",
    "assignedTo": "Bri",
    "due": "2026-03-12",
    "overdue": false
  },
  {
    "id": "bOSXTKPBtCqDxC35I0rJ",
    "title": "[QEBQUDX00CESSP2Vb0ry] Pothos - kitchen: Inspect pothos for any remaining or recurring mealybugs and reapply insecticida",
    "contact": "None None",
    "contactId": "QEBQUDX00CESSP2Vb0ry",
    "assignedTo": "Bri",
    "due": "2026-03-12",
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
    "id": "j4ciXoRY5g5tu1sGZeSt",
    "title": "[scYgB7xiQESLpvqmhyQq] Multiple plants - various locations: Identify affected plants during next visit and recommend rep",
    "contact": "None None",
    "contactId": "scYgB7xiQESLpvqmhyQq",
    "assignedTo": "Bri",
    "due": "2026-03-20",
    "overdue": false
  },
  {
    "id": "Wkt7W0wXNhKcMcqcCQWZ",
    "title": "[scYgB7xiQESLpvqmhyQq] Schefflera (leggy) - by Santa's office: Assess plant for replacement; flag as non-urgent but sche",
    "contact": "None None",
    "contactId": "scYgB7xiQESLpvqmhyQq",
    "assignedTo": "Bri",
    "due": "2026-03-20",
    "overdue": false
  },
  {
    "id": "5bXhPK8Iyda5Kf0MrExh",
    "title": "[MQhzd2oSqaZK08L7ImW2] Peace Lilies (location not specified): Continue using tap water conditioner at each visit; monito",
    "contact": "None None",
    "contactId": "MQhzd2oSqaZK08L7ImW2",
    "assignedTo": "Bri",
    "due": "2026-03-20",
    "overdue": false
  },
  {
    "id": "5YU0Re0TIJ7qR3WsNgnm",
    "title": "[qwSaOos5rWsCsoiGwqoD] Color bowls (near terrace): Monitor color bowls in new sunny terrace location to confirm improved",
    "contact": "None None",
    "contactId": "qwSaOos5rWsCsoiGwqoD",
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
  },
  {
    "id": "Fq4nWNEdqiJzoe67SwMg",
    "title": "[scYgB7xiQESLpvqmhyQq] Mother's garden - outdoor area: Schedule garden cleaning and planting visit with Stacy for end of",
    "contact": "None None",
    "contactId": "scYgB7xiQESLpvqmhyQq",
    "assignedTo": "Bri",
    "due": "2026-03-27",
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

export const hookItems: HookItem[] = [];

export const upcomingStops: UpcomingStop[] = [
  {
    "id": "uW5KI6edLKe6JFNs291K_1773230400000_3600",
    "title": "Service: Link Logistics",
    "date": "",
    "dateLabel": "",
    "time": ""
  },
  {
    "id": "zh7xrs7lrIKVtcl0bcr5_1773237600000_3600",
    "title": "Service: Heritage Distribution",
    "date": "",
    "dateLabel": "",
    "time": ""
  },
  {
    "id": "K5mR7HdWkjmORzlON4Kn_1773244800000_3600",
    "title": "Service: Thadani Residence",
    "date": "",
    "dateLabel": "",
    "time": ""
  },
  {
    "id": "PZgkyiLG9LiBMtQ5rVtC_1773252000000_3600",
    "title": "Service: Ventura Residence",
    "date": "",
    "dateLabel": "",
    "time": ""
  },
  {
    "id": "a09NOj3hg2BXBo2BRcgr_1773324000000_3600",
    "title": "Service: Edward Jones",
    "date": "",
    "dateLabel": "",
    "time": ""
  },
  {
    "id": "g3rwWMdAmahY7QCt3rLd_1773403200000_21600",
    "title": "Service: Andersen Windows & Doors",
    "date": "",
    "dateLabel": "",
    "time": ""
  },
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
    "id": "QcGmTvp2jYhPzB2rpXVy",
    "title": "Service: Matsuda Eyewear",
    "date": "",
    "dateLabel": "",
    "time": ""
  }
];
