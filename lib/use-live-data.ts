'use client';

import { useState } from 'react';
import {
  meta, serviceStops, geoffTasks, briTasks,
  invoices, procurement, hookItems, upcomingStops,
  type DashboardMeta, type ServiceStop, type GHLTask,
  type Invoice, type ProcurementItem, type HookItem, type UpcomingStop,
} from './data';

export type { DashboardMeta, ServiceStop, GHLTask, Invoice, ProcurementItem, HookItem, UpcomingStop };

export interface DashboardData {
  meta: DashboardMeta;
  serviceStops: ServiceStop[];
  geoffTasks: GHLTask[];
  briTasks: GHLTask[];
  invoices: Invoice[];
  procurement: ProcurementItem[];
  hookItems: HookItem[];
  upcomingStops: UpcomingStop[];
  loading: boolean;
}

const staticData: DashboardData = {
  meta,
  serviceStops,
  geoffTasks,
  briTasks,
  invoices,
  procurement,
  hookItems,
  upcomingStops,
  loading: false,
};

export function useLiveData() {
  const [data, setData] = useState<DashboardData>(staticData);

  // Data is baked in at build time (refresh_dashboard.py → data.ts → Vercel deploy).
  // The "refresh" button reloads the page so the user gets the latest deployed bundle.
  const refresh = () => {
    setData(prev => ({ ...prev, loading: true }));
    window.location.reload();
  };

  return { data, refresh };
}
