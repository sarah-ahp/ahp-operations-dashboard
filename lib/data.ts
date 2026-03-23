// AHP Dashboard data — auto-generated 2026-03-23T15:01:26.781357-04:00
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
  "lastRefreshed": "2026-03-23T15:01:26.781357-04:00",
  "todayLabel": "Monday, March 23",
  "serviceDay": {
    "done": 0,
    "total": 5
  },
  "invoiceSummary": {
    "totalOutstanding": 14959.0,
    "overdueCount": 1,
    "overdueTotal": 214.5,
    "currentCount": 41,
    "currentTotal": 14744.5
  },
  "taskSummary": {
    "geoffTotal": 33,
    "geoffOverdue": 20,
    "briTotal": 0,
    "briOverdue": 0
  },
  "procurementSummary": {
    "total": 13,
    "overdueCount": 6
  }
};

export const serviceStops: ServiceStop[] = [
  {
    "id": "UG7CmWUOVW6IU60QBSTH_1774267200000_3600",
    "title": "Service: ACCIONA Construction",
    "time": "",
    "done": false,
    "status": "pending"
  },
  {
    "id": "vLahE80jaUX9EU7cJ2MQ_1774274400000_3600",
    "title": "Service: Best Foot Forward",
    "time": "",
    "done": false,
    "status": "pending"
  },
  {
    "id": "KEnncAlxegJ7vW12fiSO_1774281600000_3600",
    "title": "Service: Iris O4W",
    "time": "",
    "done": false,
    "status": "pending"
  },
  {
    "id": "C6ZtBPF2RV4KqfzWtKeT_1774288800000_3600",
    "title": "Service: Communities In Schools",
    "time": "",
    "done": false,
    "status": "pending"
  },
  {
    "id": "JiSrTULdNilP4jt5QMS2",
    "title": "Plant Doctor: Omar",
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
    "overdue": true
  },
  {
    "id": "n2qY3M2GYGSXASfL8ra9",
    "title": "Verify Nick accounts - confirm paid, close out, notify Nick",
    "contact": "None None",
    "contactId": "oUjlVbarGtNSZbOnNtXp",
    "assignedTo": "Geoff",
    "due": "2026-03-16",
    "overdue": true
  },
  {
    "id": "i8blTJNclHQ44b500exY",
    "title": "Concord Group - get add-on plant list from Bri (due Mon Mar 16)",
    "contact": "None None",
    "contactId": "oUjlVbarGtNSZbOnNtXp",
    "assignedTo": "Geoff",
    "due": "2026-03-16",
    "overdue": true
  },
  {
    "id": "aBVl1tn87qwQaNOauUCf",
    "title": "Set up Concord Group recurring invoice (first invoice sent Mar 12)",
    "contact": "None None",
    "contactId": "oUjlVbarGtNSZbOnNtXp",
    "assignedTo": "Geoff",
    "due": "2026-03-16",
    "overdue": true
  },
  {
    "id": "9oEdYAhZy5C7DmOMJKgU",
    "title": "[UPSELL] Luna - outdoor container spring proposal (Bucket 2)",
    "contact": "None None",
    "contactId": "1hgIZJBoLujtw3CqZArM",
    "assignedTo": "Geoff",
    "due": "2026-03-17",
    "overdue": true
  },
  {
    "id": "O5raId6wOaguq09R3Lrh",
    "title": "[TSSI] Gather outdoor container measurements for spring refresh quote",
    "contact": "None None",
    "contactId": "TSSI7sfCGsrQMEArJoOt",
    "assignedTo": "Geoff",
    "due": "2026-03-17",
    "overdue": true
  },
  {
    "id": "K59ONuLXBPrIK9KTN84i",
    "title": "[UPSELL] TSSI - spring outdoor container refresh proposal",
    "contact": "None None",
    "contactId": "TSSI7sfCGsrQMEArJoOt",
    "assignedTo": "Geoff",
    "due": "2026-03-17",
    "overdue": true
  },
  {
    "id": "zk9OsTOowyYsXlqU3NFa",
    "title": "[Iris O4W] Spring planting proposal - build estimate from Bri info",
    "contact": "None None",
    "contactId": "QOmCg3mvOLmnJEJCFzX0",
    "assignedTo": "Geoff",
    "due": "2026-03-17",
    "overdue": true
  },
  {
    "id": "1wFgzJlaMyRqBtMP3Oxd",
    "title": "[Georgia Tech] Contact Essie re: snake plant refresh + 2026 invoice",
    "contact": "None None",
    "contactId": "rS8Oa8Nnpo4kZmsQl033",
    "assignedTo": "Geoff",
    "due": "2026-03-17",
    "overdue": true
  },
  {
    "id": "sIItLKZPId0JhJQsjthw",
    "title": "Georgia Tech - send 2026 invoice + add-on follow-up (get Bri email thread)",
    "contact": "None None",
    "contactId": "oUjlVbarGtNSZbOnNtXp",
    "assignedTo": "Geoff",
    "due": "2026-03-17",
    "overdue": true
  },
  {
    "id": "qKAGGrtvIDGekexgadMd",
    "title": "[UPSELL] Thadani - outdoor spring proposal package",
    "contact": "None None",
    "contactId": "65jP3WE1gqhGzJsc1unA",
    "assignedTo": "Geoff",
    "due": "2026-03-18",
    "overdue": true
  },
  {
    "id": "gDeaZA9snzljaCws8x4T",
    "title": "[UPSELL] Thadani - spring/summer garden proposal (Bucket 2, Apr 15 target)",
    "contact": "None None",
    "contactId": "65jP3WE1gqhGzJsc1unA",
    "assignedTo": "Geoff",
    "due": "2026-03-18",
    "overdue": true
  },
  {
    "id": "psEM8kAGpvYQIFBqRvjg",
    "title": "[Link] Source bird's nest fern - price and quote for second conference room",
    "contact": "None None",
    "contactId": "tZAK3p6WnjFZBEn2a1Wn",
    "assignedTo": "Geoff",
    "due": "2026-03-18",
    "overdue": true
  },
  {
    "id": "KuIa3ioNxxIHuE2BHdJ5",
    "title": "[Link] Source bird's nest fern for second conference room - price and quote",
    "contact": "None None",
    "contactId": "tZAK3p6WnjFZBEn2a1Wn",
    "assignedTo": "Geoff",
    "due": "2026-03-18",
    "overdue": true
  },
  {
    "id": "rIaYpZIRA8thLOujJg5O",
    "title": "[UPSELL] Client upgrade opportunity - follow up",
    "contact": "None None",
    "contactId": "rYdu5UrSCP2jm3InYKhy",
    "assignedTo": "Geoff",
    "due": "2026-03-20",
    "overdue": true
  },
  {
    "id": "oeYVb1PZBuxNjPOL8WNA",
    "title": "[UPSELL] Sky balcony - planter opportunity proposal",
    "contact": "None None",
    "contactId": "hhKmuCHJGLVHbxZa4Kyn",
    "assignedTo": "Geoff",
    "due": "2026-03-20",
    "overdue": true
  },
  {
    "id": "PlWM1QWvjwFKgkKFb1ko",
    "title": "[UPSELL] Aim Point - plant refresh/replacement package",
    "contact": "None None",
    "contactId": "DPV30fPRVBMezkLzcVbr",
    "assignedTo": "Geoff",
    "due": "2026-03-20",
    "overdue": true
  },
  {
    "id": "1eK8a1DclnS3zOwPtcZw",
    "title": "[UPSELL] Zalik 2nd residence - new install + service contract",
    "contact": "None None",
    "contactId": "RzTUIXjrgLXsoyiHwTZt",
    "assignedTo": "Geoff",
    "due": "2026-03-20",
    "overdue": true
  },
  {
    "id": "UuF5Yjtb3LwuJFdS6KFI",
    "title": "[UPSELL] Conference area - outdoor container upsell proposal",
    "contact": "None None",
    "contactId": "qwSaOos5rWsCsoiGwqoD",
    "assignedTo": "Geoff",
    "due": "2026-03-20",
    "overdue": true
  },
  {
    "id": "3xUBsbldyFteq3SYVSVz",
    "title": "[UPSELL] Conference area - plant replacement/refresh proposal",
    "contact": "None None",
    "contactId": "qwSaOos5rWsCsoiGwqoD",
    "assignedTo": "Geoff",
    "due": "2026-03-20",
    "overdue": true
  },
  {
    "id": "6gnqEjgDjAbXmR2bmomr",
    "title": "[UPSELL HIGH] pDVHWm1ZmQacQpO7AGTD: Add 2 window boxes of pothos plus 2 centerpiece plants to the indoor office, along w",
    "contact": "None None",
    "contactId": "pDVHWm1ZmQacQpO7AGTD",
    "assignedTo": "Geoff",
    "due": "2026-03-23",
    "overdue": false
  },
  {
    "id": "avJWF1SCuwRa6EARfSra",
    "title": "[UPSELL HIGH] S3mnzUwpkj0kg83z9jOm: Propose a full plant service package for the Scheller Tower Expansion — new space li",
    "contact": "None None",
    "contactId": "S3mnzUwpkj0kg83z9jOm",
    "assignedTo": "Geoff",
    "due": "2026-03-23",
    "overdue": false
  },
  {
    "id": "OaNZ9FI4ptfULgWNr6TP",
    "title": "[UPSELL HIGH] B2vYzALoWBC3I3ljsa9u: New café space presents an opportunity to add plants specifically designed for the c",
    "contact": "None None",
    "contactId": "B2vYzALoWBC3I3ljsa9u",
    "assignedTo": "Geoff",
    "due": "2026-03-23",
    "overdue": false
  },
  {
    "id": "w1nr1M2EKzqnbkYjbj8m",
    "title": "[S3mnzUwpkj0kg83z9jOm] Scheller Tower Expansion (location: Scheller Tower): Email Michael Dixon to follow up on plant se",
    "contact": "None None",
    "contactId": "S3mnzUwpkj0kg83z9jOm",
    "assignedTo": "Geoff",
    "due": "2026-03-30",
    "overdue": false
  },
  {
    "id": "MQGBNsCGG7xkdZPmAFz4",
    "title": "[S3mnzUwpkj0kg83z9jOm] Snake plants (location unspecified): Follow up with Michael Dixon via email to confirm replacemen",
    "contact": "None None",
    "contactId": "S3mnzUwpkj0kg83z9jOm",
    "assignedTo": "Geoff",
    "due": "2026-03-30",
    "overdue": false
  }
];

export const briTasks: GHLTask[] = [];

export const invoices: Invoice[] = [
  {
    "id": "inv:0-ChDJAhhd7diMomLmb9fXnGj4EI0N",
    "recipient": "Tim Harris",
    "amount": 214.5,
    "due": "2026-03-02",
    "overdue": true
  },
  {
    "id": "inv:0-ChAr7uxEEBs06dW31c-Y7HFtEI0N",
    "recipient": "Atrium Health Floyd",
    "amount": 2400.0,
    "due": "2026-04-30",
    "overdue": false
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
  },
  {
    "id": "inv:0-ChAa5y4Ukqxd2isjrwTd9a4_EI0N",
    "recipient": "Equity Residential AP",
    "amount": 184.17,
    "due": "2026-03-30",
    "overdue": false
  },
  {
    "id": "inv:0-ChBVBG4_ZQoEHIMOLleMrkIsEI0N",
    "recipient": "Dionne Thomas",
    "amount": 162.5,
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
    "overdue": true,
    "supplier": ""
  },
  {
    "id": "1003",
    "client": "dMFg921y4yw5gYWTwFp5",
    "plant": "Saucers or pikes (container accessories)",
    "size": "Unknown - to match existing containers",
    "quantity": "1",
    "needBy": "2026-03-18",
    "overdue": true,
    "supplier": ""
  },
  {
    "id": "1004",
    "client": "scYgB7xiQESLpvqmhyQq",
    "plant": "Schefflera",
    "size": "Floor",
    "quantity": "1",
    "needBy": "2026-03-20",
    "overdue": true,
    "supplier": ""
  },
  {
    "id": "1005",
    "client": "l5kT0vO1MF3QgFzpkaGT",
    "plant": "Color refresh plants (specific varieties TBD per Bri's list)",
    "size": "TBD per Bri's list",
    "quantity": "0",
    "needBy": "2026-03-20",
    "overdue": true,
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
    "id": "1008",
    "client": "pDVHWm1ZmQacQpO7AGTD",
    "plant": "Pothos",
    "size": "Window Box",
    "quantity": "2",
    "needBy": "2026-03-30",
    "overdue": false,
    "supplier": ""
  },
  {
    "id": "1009",
    "client": "pDVHWm1ZmQacQpO7AGTD",
    "plant": "Unknown - centerpiece plant",
    "size": "TBD",
    "quantity": "2",
    "needBy": "2026-03-30",
    "overdue": false,
    "supplier": ""
  },
  {
    "id": "1010",
    "client": "S3mnzUwpkj0kg83z9jOm",
    "plant": "Snake Plant",
    "size": "Unknown",
    "quantity": "1",
    "needBy": "2026-03-30",
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
    "title": "Mon Mar 23",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-23"
  },
  {
    "id": "h2",
    "title": "Thu Mar 19",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-23"
  },
  {
    "id": "h3",
    "title": "Fri Mar 20",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-23"
  },
  {
    "id": "h4",
    "title": "Fri Mar 27",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-23"
  },
  {
    "id": "h5",
    "title": "Fri Mar 27",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-23"
  },
  {
    "id": "h6",
    "title": "Fri Apr 3",
    "priority": "medium",
    "firstThing": false,
    "upsell": false,
    "source": "the-hook",
    "added": "2026-03-23"
  }
];

export const upcomingStops: UpcomingStop[] = [
  {
    "id": "Rmc19MbeFRX9Stwguenn_1774353600000_7200",
    "title": "Service: Archer Western",
    "date": "",
    "dateLabel": "",
    "time": ""
  },
  {
    "id": "K4XKlsT21SdI3axdi5jn_1774360800000_3600",
    "title": "Service: Concord Group",
    "date": "",
    "dateLabel": "",
    "time": ""
  },
  {
    "id": "HnfCbi8WuWvWdx9VtOTL_1774368000000_3600",
    "title": "Service: One Street Residential",
    "date": "",
    "dateLabel": "",
    "time": ""
  },
  {
    "id": "1kS0FgU3TdHM8WVFdSEy_1774375200000_3600",
    "title": "Service: Luna Upper Westside",
    "date": "",
    "dateLabel": "",
    "time": ""
  },
  {
    "id": "uW5KI6edLKe6JFNs291K_1774440000000_3600",
    "title": "Service: Link Logistics",
    "date": "",
    "dateLabel": "",
    "time": ""
  },
  {
    "id": "zh7xrs7lrIKVtcl0bcr5_1774447200000_3600",
    "title": "Service: Heritage Distribution",
    "date": "",
    "dateLabel": "",
    "time": ""
  },
  {
    "id": "K5mR7HdWkjmORzlON4Kn_1774454400000_3600",
    "title": "Service: Thadani Residence",
    "date": "",
    "dateLabel": "",
    "time": ""
  },
  {
    "id": "PZgkyiLG9LiBMtQ5rVtC_1774461600000_3600",
    "title": "Service: Ventura Residence",
    "date": "",
    "dateLabel": "",
    "time": ""
  },
  {
    "id": "g3rwWMdAmahY7QCt3rLd_1774612800000_21600",
    "title": "Service: Andersen Windows & Doors",
    "date": "",
    "dateLabel": "",
    "time": ""
  },
  {
    "id": "wAaJzKEU96PuThXyYkKt_1774872000000_3600",
    "title": "Service: Perkins and Will",
    "date": "",
    "dateLabel": "",
    "time": ""
  },
  {
    "id": "aWEhD1y56UHVoAMTNWv8_1774879200000_3600",
    "title": "Service: Loria Ansley",
    "date": "",
    "dateLabel": "",
    "time": ""
  },
  {
    "id": "jFRtWj6Utr38ZKxrkzTc_1774886400000_3600",
    "title": "Service: GA Tech - Office of Commercialization",
    "date": "",
    "dateLabel": "",
    "time": ""
  },
  {
    "id": "RoQ0sfteBdf95Ic6bff8",
    "title": "Service + 🌿 INSTALL: Andersen Windows & Doors",
    "date": "",
    "dateLabel": "",
    "time": ""
  },
  {
    "id": "tCOn1dfsREXSIFV7d8lw",
    "title": "Service: Matsuda Eyewear",
    "date": "",
    "dateLabel": "",
    "time": ""
  }
];
