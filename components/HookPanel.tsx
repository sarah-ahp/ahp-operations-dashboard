'use client';

import { AlertCircle, AlertTriangle, Circle, CheckCircle } from 'lucide-react';
import { HookItem } from '@/lib/data';

interface HookPanelProps {
  items: HookItem[];
}

export default function HookPanel({ items }: HookPanelProps) {
  const priorityColors = {
    high: 'border-red-200 bg-red-50',
    medium: 'border-yellow-200 bg-yellow-50',
    low: 'border-slate-200 bg-slate-50',
  };

  const priorityBadges = {
    high: 'badge-red',
    medium: 'badge-yellow',
    low: 'badge-gray',
  };

  const priorityIcons = {
    high: <AlertCircle className="w-4 h-4 text-red-500" />,
    medium: <AlertTriangle className="w-4 h-4 text-yellow-500" />,
    low: <Circle className="w-4 h-4 text-slate-400" />,
  };

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">!</span>
          </div>
          <div>
            <h2 className="font-semibold text-slate-900">The Hook</h2>
            <p className="text-xs text-slate-500">{items.length} immediate actions</p>
          </div>
        </div>
        <span className="text-xs text-slate-400">From memory/the-hook</span>
      </div>

      <div className="space-y-2">
        {items.map((item) => (
          <div
            key={item.id}
            className={`p-3 rounded-lg border ${priorityColors[item.priority]} hover:shadow-sm transition-shadow cursor-pointer group`}
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-0.5">
                {priorityIcons[item.priority]}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-900 group-hover:text-slate-700">
                  {item.title}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span className={priorityBadges[item.priority]}>
                    {item.priority.toUpperCase()}
                  </span>
                  <span className="text-xs text-slate-400">{item.source}</span>
                </div>
              </div>
              <button className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <CheckCircle className="w-5 h-5 text-green-500 hover:text-green-600" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {items.length === 0 && (
        <div className="text-center py-8 text-slate-400">
          <CheckCircle className="w-8 h-8 mx-auto mb-2 text-green-400" />
          <p className="text-sm">Hook is clear!</p>
          <p className="text-xs">Nothing needs immediate attention</p>
        </div>
      )}

      <div className="mt-4 pt-4 border-t border-slate-100">
        <p className="text-xs text-slate-400 text-center">
          Last updated: {new Date().toLocaleString()}
        </p>
      </div>
    </div>
  );
}
