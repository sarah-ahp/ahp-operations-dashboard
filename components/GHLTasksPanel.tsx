'use client';

import { CheckCircle2, Circle, AlertCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import type { GHLTask, GHLSummary } from '@/lib/ghl-client';

interface GHLTasksPanelProps {
  data: GHLSummary | null | undefined;
}

export function GHLTasksPanel({ data }: GHLTasksPanelProps) {
  if (!data) {
    return (
      <Card className="border-green-100">
        <CardContent className="p-4">
          <p className="text-sm text-green-700/50">Loading tasks...</p>
        </CardContent>
      </Card>
    );
  }

  const { activeTasks, stats } = data;
  
  return (
    <div className="space-y-3">
      {/* Stats Summary */}
      <div className="grid grid-cols-3 gap-2">
        <Card className="border-green-100 bg-green-50/30">
          <CardContent className="p-2 sm:p-3 text-center">
            <p className="text-lg sm:text-xl font-bold text-green-900">{stats.totalTasks}</p>
            <p className="text-[10px] sm:text-xs text-green-700/60">Active</p>
          </CardContent>
        </Card>
        <Card className="border-green-100 bg-orange-50/30">
          <CardContent className="p-2 sm:p-3 text-center">
            <p className="text-lg sm:text-xl font-bold text-orange-600">{stats.overdueTasks}</p>
            <p className="text-[10px] sm:text-xs text-orange-700/60">Overdue</p>
          </CardContent>
        </Card>
        <Card className="border-green-100 bg-blue-50/30">
          <CardContent className="p-2 sm:p-3 text-center">
            <p className="text-lg sm:text-xl font-bold text-blue-600">{stats.activeOpportunities}</p>
            <p className="text-[10px] sm:text-xs text-blue-700/60">Deals</p>
          </CardContent>
        </Card>
      </div>

      {/* Tasks List */}
      <Card className="border-green-100">
        <CardContent className="p-0">
          {activeTasks.slice(0, 5).map((task: GHLTask, i) => (
            <div 
              key={task.id} 
              className={`p-3 sm:p-4 ${i !== activeTasks.length - 1 ? 'border-b border-green-50' : ''}`}
            >
              <div className="flex items-start gap-2 sm:gap-3">
                <Circle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm text-green-900 leading-snug">{task.title}</p>
                  {task.description && (
                    <p className="text-[10px] sm:text-xs text-green-700/50 mt-0.5">{task.description}</p>
                  )}
                  <div className="flex items-center gap-1.5 sm:gap-2 mt-1.5 flex-wrap">
                    <Badge 
                      variant={task.priority === 'high' ? 'red' : task.priority === 'medium' ? 'yellow' : 'gray'}
                      className="text-[10px] sm:text-xs"
                    >
                      {task.priority}
                    </Badge>
                    {task.dueDate && (
                      <span className="text-[10px] sm:text-xs text-green-600/50">
                        Due {task.dueDate}
                      </span>
                    )}
                    {task.assignedTo && (
                      <span className="text-[10px] sm:text-xs text-green-600/40">
                        @{task.assignedTo}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Pipeline Value */}
      <Card className="border-green-100 bg-gradient-to-r from-green-50/50 to-emerald-50/50">
        <CardContent className="p-3 sm:p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs sm:text-sm text-green-700/70">Pipeline Value</span>
            <span className="text-lg sm:text-xl font-bold text-green-900">
              ${stats.totalPipelineValue.toLocaleString()}
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
