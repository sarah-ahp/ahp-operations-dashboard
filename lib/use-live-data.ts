'use client';

import { useState, useEffect } from 'react';
import type { Workflow, HookItem, ActivityItem, CalendarEvent } from './data-live';
import { fetchGHLData, GHLSummary } from './ghl-client';
import { fetchSquareData, SquareSummary } from './api-square';

interface DashboardData {
  workflows: Workflow[];
  hookItems: HookItem[];
  activities: ActivityItem[];
  calendarEvents: CalendarEvent[];
  // Live API data
  ghl?: GHLSummary;
  square?: SquareSummary;
  loading: boolean;
  error: string | null;
  lastUpdated: string;
}

// Initial static data - will be enhanced with live data
const initialData: DashboardData = {
  workflows: [
    {
      id: 'concord-feb12',
      name: 'Concord Group Install',
      client: 'Concord Group',
      status: 'active',
      progress: 60,
      nextAction: 'Source planters from Pike Nursery',
      deadline: '2026-02-12',
      owner: 'Geoff'
    },
    {
      id: 'advocate-health',
      name: 'Floyd Medical Vendor Onboarding',
      client: 'Advocate Health Rome',
      status: 'active',
      progress: 75,
      nextAction: 'Walk 90-day plan with Stacey',
      deadline: '2026-02-20',
      owner: 'Bri/Geoff'
    }
  ],
  hookItems: [
    { id: 'h1', title: 'Finalize Concord planter order', priority: 'high', source: 'the-hook', added: '2026-02-11' },
    { id: 'h2', title: 'Bri training check-in acknowledgment', priority: 'high', source: 'the-hook', added: '2026-02-11' },
    { id: 'h3', title: 'Schedule Feb 20 hospital walk', priority: 'medium', source: 'workflows', added: '2026-02-11' }
  ],
  activities: [
    { id: 'a1', timestamp: '01:26', action: 'Dashboard deployed with live updates', actor: 'Hawk', result: 'Auto-refresh enabled' },
    { id: 'a2', timestamp: '01:20', action: 'Email sent with dashboard link', actor: 'Hawk', result: 'Delivered' },
    { id: 'a3', timestamp: '00:35', action: 'Workspace cleanup completed', actor: 'Hawk', result: '14MB freed' }
  ],
  calendarEvents: [
    { id: 'c1', title: 'Bri Acknowledgment', date: 'Feb 11', time: '08:13', type: 'meeting' },
    { id: 'c2', title: 'Concord Install', date: 'Feb 12', time: 'TBD', type: 'install' },
    { id: 'c3', title: 'Hospital Service', date: 'Feb 13', time: '09:00', type: 'service' }
  ],
  loading: false,
  error: null,
  lastUpdated: new Date().toISOString()
};

export function useLiveData(refreshInterval = 3600000) { // Default 1 hour
  const [data, setData] = useState<DashboardData>(initialData);

  const refresh = async () => {
    setData(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      // Fetch live data in parallel
      const [ghlData, squareData] = await Promise.all([
        fetchGHLData().catch(err => {
          console.warn('GHL fetch failed:', err);
          return undefined;
        }),
        fetchSquareData().catch(err => {
          console.warn('Square fetch failed:', err);
          return undefined;
        })
      ]);
      
      setData(prev => ({
        ...prev,
        ghl: ghlData,
        square: squareData,
        loading: false,
        error: null,
        lastUpdated: new Date().toISOString()
      }));
    } catch (err) {
      setData(prev => ({
        ...prev,
        loading: false,
        error: 'Failed to refresh live data'
      }));
    }
  };

  useEffect(() => {
    // Initial fetch
    refresh();
    
    // Auto-refresh every interval
    const interval = setInterval(refresh, refreshInterval);
    
    // Also refresh when tab becomes visible
    const handleVisibility = () => {
      if (document.visibilityState === 'visible') {
        refresh();
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);
    
    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [refreshInterval]);

  return { data, refresh };
}
