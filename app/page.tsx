'use client';

import { RefreshCw, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { workflows, hookItems, activities, calendarEvents } from '@/lib/data';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-4 py-3 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-slate-800">AHP Operations Dashboard</h1>
            <p className="text-sm text-slate-500">Atlanta Houseplants — Project Management</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-500">{new Date().toLocaleDateString()}</span>
            <button className="p-2 hover:bg-slate-100 rounded-lg">
              <RefreshCw className="w-5 h-5 text-slate-600" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4">
        {/* Calendar Strip */}
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-slate-700 mb-3">Next 7 Days</h2>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {calendarEvents.map((event) => (
              <div key={event.id} className="flex-shrink-0 bg-white border border-slate-200 rounded-lg p-3 min-w-[180px]">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant={
                    event.type === 'install' ? 'green' :
                    event.type === 'service' ? 'blue' :
                    event.type === 'meeting' ? 'yellow' : 'gray'
                  }>
                    {event.type}
                  </Badge>
                  <span className="text-xs text-slate-500">{event.time}</span>
                </div>
                <p className="font-medium text-slate-800 text-sm">{event.title}</p>
                <p className="text-xs text-slate-500">{event.date}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Active Workflows - 2 columns */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              Active Workflows
            </h2>
            {workflows.map((workflow) => (
              <Card key={workflow.id}>
                <CardContent>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-slate-800">{workflow.name}</h3>
                      <p className="text-sm text-slate-500">{workflow.client} • {workflow.owner}</p>
                    </div>
                    <Badge variant={workflow.status === 'active' ? 'green' : 'yellow'}>
                      {workflow.status}
                    </Badge>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="mb-3">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-600">{workflow.progress}% complete</span>
                      <span className="text-slate-500">Due: {workflow.deadline}</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-green-500 rounded-full"
                        style={{ width: `${workflow.progress}%` }}
                      />
                    </div>
                  </div>
                  
                  {/* Next action */}
                  <div className="bg-slate-50 rounded-lg p-3">
                    <p className="text-xs text-slate-500 mb-1">Next Action</p>
                    <p className="text-sm font-medium text-slate-800">{workflow.nextAction}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sidebar - 1 column */}
          <div className="space-y-6">
            {/* The Hook */}
            <div>
              <h2 className="text-lg font-semibold text-slate-800 flex items-center gap-2 mb-3">
                <AlertCircle className="w-5 h-5 text-red-500" />
                The Hook
              </h2>
              <Card>
                <CardContent className="p-0">
                  {hookItems.map((item, i) => (
                    <div 
                      key={item.id} 
                      className={`p-4 ${i !== hookItems.length - 1 ? 'border-b border-slate-100' : ''}`}
                    >
                      <div className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1 rounded border-slate-300" />
                        <div className="flex-1">
                          <p className="text-sm text-slate-800">{item.title}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant={
                              item.priority === 'high' ? 'red' :
                              item.priority === 'medium' ? 'yellow' : 'gray'
                            }>
                              {item.priority}
                            </Badge>
                            <span className="text-xs text-slate-400">{item.source}</span>
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
              <h2 className="text-lg font-semibold text-slate-800 flex items-center gap-2 mb-3">
                <Clock className="w-5 h-5 text-blue-500" />
                Activity Feed
              </h2>
              <Card>
                <CardContent className="p-0">
                  {activities.map((activity, i) => (
                    <div 
                      key={activity.id} 
                      className={`p-4 ${i !== activities.length - 1 ? 'border-b border-slate-100' : ''}`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-medium text-slate-600">
                          {activity.actor[0]}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-slate-800">{activity.action}</p>
                          <p className="text-xs text-slate-500">{activity.result}</p>
                          <p className="text-xs text-slate-400 mt-1">{activity.timestamp}</p>
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
