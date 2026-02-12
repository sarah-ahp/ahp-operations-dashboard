'use client';

import { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle2, Clock, User, ArrowRight, Ban, RefreshCw } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

interface TaskItem {
  id: string;
  project: string;
  owner: string;
  status: 'active' | 'pending' | 'blocked' | 'scheduled';
  action: string;
  due: string;
  source?: string;
  createdAt?: string;
}

const defaultTasks: TaskItem[] = [
  { id: '1', project: 'Concord Install', owner: 'Geoff', status: 'active', action: 'Execute install + collect balance', due: 'Thu 10:30 AM' },
  { id: '2', project: 'Floyd Med Order', owner: 'Sarah', status: 'pending', action: 'Send PO to Chris by Friday', due: 'Fri EOD' },
  { id: '3', project: 'Bri Training W2', owner: 'Geoff + Bri', status: 'active', action: 'Shadow install → lunch debrief', due: 'Thu PM' },
  { id: '4', project: 'Hospital Walk', owner: 'Geoff + Bri', status: 'scheduled', action: 'Present 90-day plan to Stacey', due: 'Feb 20' },
];

export function HandoffBoard() {
  const [tasks, setTasks] = useState<TaskItem[]>(defaultTasks);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTasks = async () => {
    try {
      const response = await fetch('/api/tasks');
      const data = await response.json();
      if (data.status === 'success' && data.tasks.length > 0) {
        setTasks(data.tasks);
      }
      setError(null);
    } catch (err) {
      setError('Failed to load tasks');
      console.error('Failed to fetch tasks:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
    // Poll every 30 seconds for new tasks
    const interval = setInterval(fetchTasks, 30000);
    return () => clearInterval(interval);
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <Clock className="w-4 h-4 text-yellow-600" />;
      case 'pending': return <ArrowRight className="w-4 h-4 text-blue-600" />;
      case 'blocked': return <Ban className="w-4 h-4 text-red-600" />;
      case 'scheduled': return <CheckCircle2 className="w-4 h-4 text-green-600" />;
      default: return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { variant: 'yellow' | 'blue' | 'red' | 'green'; label: string }> = {
      active: { variant: 'yellow', label: 'Active' },
      pending: { variant: 'blue', label: 'Pending' },
      blocked: { variant: 'red', label: 'Blocked' },
      scheduled: { variant: 'green', label: 'Scheduled' },
    };
    const config = variants[status] || { variant: 'yellow', label: status };
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <RefreshCw className="w-5 h-5 text-green-600 animate-spin" />
        <span className="ml-2 text-sm text-green-600">Loading tasks...</span>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <Card key={task.id} className="border-green-100 hover:border-green-300 transition-colors cursor-pointer">
          <CardContent className="p-3">
            <div className="flex items-start gap-3">
              <div className="mt-0.5">{getStatusIcon(task.status)}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="font-semibold text-green-900 text-sm truncate">{task.project}</h3>
                  {getStatusBadge(task.status)}
                </div>
                <p className="text-xs text-green-700/70 mb-1">{task.action}</p>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1 text-green-600/60">
                    <User className="w-3 h-3" />
                    <span>{task.owner}</span>
                  </div>
                  <span className={`font-medium ${
                    task.status === 'blocked' ? 'text-red-600' : 
                    task.due.includes('Thu') ? 'text-yellow-600' : 'text-green-600/70'
                  }`}>
                    {task.due}
                  </span>
                </div>
                {task.source && (
                  <p className="text-[10px] text-green-500/50 mt-1">{task.source}</p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
