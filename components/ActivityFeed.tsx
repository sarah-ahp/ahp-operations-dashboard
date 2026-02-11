'use client';

import { Activity } from 'lucide-react';
import { ActivityItem } from '@/lib/data';

interface ActivityFeedProps {
  items: ActivityItem[];
}

export default function ActivityFeed({ items }: ActivityFeedProps) {
  return (
    <div className="card">
      <div className="flex items-center gap-2 mb-4">
        <Activity className="w-5 h-5 text-slate-600" />
        <h2 className="font-semibold text-slate-900">Recent Activity</h2>
        <span className="badge-gray">{items.length}</span>
      </div>

      <div className="space-y-3">
        {items.map((item, index) => (
          <div 
            key={item.id}
            className={`flex gap-3 ${index !== items.length - 1 ? 'pb-3 border-b border-slate-100' : ''}`}
          >
            <div className="flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-xs font-medium text-blue-700">
                  {item.actor.charAt(0)}
                </span>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-slate-900">
                <span className="font-medium">{item.action}</span>
              </p>
              <p className="text-xs text-slate-500 mt-0.5">{item.result}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-slate-400">{item.timestamp}</span>
                <span className="text-xs text-slate-400">•</span>
                <span className="text-xs text-slate-400">{item.actor}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-center">
        <button className="text-sm text-slate-500 hover:text-slate-700 transition-colors">
          View all activity
        </button>
      </div>
    </div>
  );
}
