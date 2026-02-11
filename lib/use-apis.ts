'use client';

import { useState, useEffect } from 'react';
import { fetchCalendarEvents, CalendarEvent } from './api-calendar';
import { fetchSquareData, SquareSummary } from './api-square';

interface DashboardAPIData {
  calendar: CalendarEvent[];
  square: SquareSummary | null;
  loading: boolean;
  error: string | null;
  lastUpdated: string;
}

export function useDashboardAPIs() {
  const [data, setData] = useState<DashboardAPIData>({
    calendar: [],
    square: null,
    loading: true,
    error: null,
    lastUpdated: new Date().toISOString()
  });

  const refresh = async () => {
    setData(prev => ({ ...prev, loading: true }));
    
    try {
      const [calendar, square] = await Promise.all([
        fetchCalendarEvents(),
        fetchSquareData()
      ]);
      
      setData({
        calendar,
        square,
        loading: false,
        error: null,
        lastUpdated: new Date().toISOString()
      });
    } catch (err) {
      setData(prev => ({
        ...prev,
        loading: false,
        error: 'Failed to load live data'
      }));
    }
  };

  useEffect(() => {
    refresh();
    
    // Refresh every 5 minutes
    const interval = setInterval(refresh, 300000);
    
    return () => clearInterval(interval);
  }, []);

  return { ...data, refresh };
}
