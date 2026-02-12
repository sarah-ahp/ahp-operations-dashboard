'use client';

import { RefreshCw, Leaf, Briefcase, ShoppingCart, AlertCircle, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useLiveData } from '@/lib/use-live-data';
import { HandoffBoard } from '@/components/HandoffBoard';
import { RunningOrderList } from '@/components/RunningOrderList';

export default function Dashboard() {
  const { data, refresh } = useLiveData(300000); // Refresh every 5 minutes
  const { hookItems, activities, calendarEvents, lastUpdated, loading } = data;
  
  // Transform workflows/tasks into HandoffBoard format if needed, 
  // but for Phase 1 we use the defaultTasks in the component or pass data if available.
  // The HandoffBoard component currently has default data which matches the user's current context.
  // In Phase 2 we will pass real prop data.

  return (
    <div className="min-h-screen bg-green-50/50">
      {/* Header */}
      <header className="bg-white border-b border-green-100 px-3 py-2 sm:px-4 sm:py-3 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
            <div>
              <h1 className="text-base sm:text-xl font-bold text-green-900">AHP Dashboard</h1>
              <p className="hidden sm:block text-xs sm:text-sm text-green-600/70">Operations Command Center</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-right">
            <span className="text-[10px] sm:text-xs text-green-600/50">
              Updated: {new Date(lastUpdated).toLocaleTimeString(undefined, {hour: 'numeric', minute: '2-digit'})}
            </span>
            <span className="text-xs sm:text-sm text-green-600/70 hidden sm:inline">{new Date().toLocaleDateString(undefined, {month: 'short', day: 'numeric'})}</span>
            <button 
              onClick={refresh}
              disabled={loading}
              className={`p-1.5 sm:p-2 hover:bg-green-50 rounded-lg transition-colors ${loading ? 'animate-spin' : ''}`}
            >
              <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5 text-green-700" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-3 sm:p-4">
        {/* Calendar Strip */}
        <div className="mb-4 sm:mb-6">
          <h2 className="text-xs sm:text-sm font-semibold text-green-800 mb-2 sm:mb-3">Next 7 Days</h2>
          <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 -mx-3 px-3 sm:mx-0 sm:px-0 calendar-strip">
            {calendarEvents.map((event) => (
              <div key={event.id} className="flex-shrink-0 bg-white border border-green-100 rounded-lg p-2 sm:p-3 min-w-[140px] sm:min-w-[180px] shadow-sm">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
                  <Badge variant={
                    event.type === 'install' ? 'green' :
                    event.type === 'service' ? 'blue' :
                    event.type === 'meeting' ? 'yellow' : 'gray'
                  }>
                    <span className="text-[10px] sm:text-xs">{event.type}</span>
                  </Badge>
                  <span className="text-[10px] sm:text-xs text-green-600/60">{event.time}</span>
                </div>
                <p className="font-medium text-green-900 text-xs sm:text-sm leading-tight">{event.title}</p>
                <p className="text-[10px] sm:text-xs text-green-600/60 mt-0.5">{event.date}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Main Column: Handoff Board (Replaces Active Workflows) */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            <h2 className="text-base sm:text-lg font-semibold text-green-900 flex items-center gap-2">
              <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
              The Handoff Board
            </h2>
            <HandoffBoard />
          </div>

          {/* Sidebar Column */}
          <div className="space-y-4 sm:space-y-6">
            {/* Running Order List (Replaces Financials/CRM) */}
            <div>
              <h2 className="text-base sm:text-lg font-semibold text-green-900 flex items-center gap-2 mb-2 sm:mb-3">
                <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
                Running Order List
              </h2>
              <RunningOrderList />
            </div>

            {/* The Hook */}
            <div>
              <h2 className="text-base sm:text-lg font-semibold text-green-900 flex items-center gap-2 mb-2 sm:mb-3">
                <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                The Hook
              </h2>
              <Card className="border-green-100">
                <CardContent className="p-0">
                  {hookItems.map((item, i) => (
                    <div 
                      key={item.id} 
                      className={`p-3 sm:p-4 ${i !== hookItems.length - 1 ? 'border-b border-green-50' : ''}`}
                    >
                      <div className="flex items-start gap-2 sm:gap-3">
                        <input type="checkbox" className="mt-1 rounded border-green-300 w-4 h-4 cursor-pointer" />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs sm:text-sm text-green-900 leading-snug">{item.title}</p>
                          <div className="flex items-center gap-1.5 sm:gap-2 mt-1.5 flex-wrap">
                            <Badge variant={
                              item.priority === 'high' ? 'red' :
                              item.priority === 'medium' ? 'yellow' : 'gray'
                            } className="text-[10px] sm:text-xs">
                              {item.priority}
                            </Badge>
                            <span className="text-[10px] text-green-600/50">{item.source}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Activity Feed */}
            <div>
              <h2 className="text-base sm:text-lg font-semibold text-green-900 flex items-center gap-2 mb-2 sm:mb-3">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                Activity Feed
              </h2>
              <Card className="border-green-100">
                <CardContent className="p-0">
                  {activities.map((activity, i) => (
                    <div 
                      key={activity.id} 
                      className={`p-3 sm:p-4 ${i !== activities.length - 1 ? 'border-b border-green-50' : ''}`}
                    >
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-100 flex items-center justify-center text-xs font-medium text-green-700 flex-shrink-0">
                          {activity.actor[0]}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs sm:text-sm font-medium text-green-900">{activity.action}</p>
                          <p className="text-[10px] sm:text-xs text-green-700/70">{activity.result}</p>
                          <p className="text-[10px] text-green-600/50 mt-0.5">{activity.timestamp}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
