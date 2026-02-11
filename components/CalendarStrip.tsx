'use client';

import { Calendar, Clock, Wrench, User, Building } from 'lucide-react';
import { CalendarEvent } from '@/lib/data';

interface CalendarStripProps {
  events: CalendarEvent[];
}

export default function CalendarStrip({ events }: CalendarStripProps) {
  const typeIcons = {
    install: <Building className="w-4 h-4" />,
    service: <Wrench className="w-4 h-4" />,
    meeting: <User className="w-4 h-4" />,
    deadline: <Calendar className="w-4 h-4" />,
  };

  const typeColors = {
    install: 'bg-blue-100 text-blue-800 border-blue-200',
    service: 'bg-green-100 text-green-800 border-green-200',
    meeting: 'bg-purple-100 text-purple-800 border-purple-200',
    deadline: 'bg-red-100 text-red-800 border-red-200',
  };

  const typeLabels = {
    install: 'Install',
    service: 'Service',
    meeting: 'Meeting',
    deadline: 'Deadline',
  };

  // Get next 7 events
  const nextEvents = events.slice(0, 7);

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-slate-600" />
          <h2 className="font-semibold text-slate-900">Upcoming</h2>
          <span className="badge-gray">{nextEvents.length}</span>
        </div>
        <button className="text-sm text-slate-500 hover:text-slate-700 transition-colors">
          View full calendar
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
        {nextEvents.map((event) => {
          const eventDate = new Date(event.date);
          const today = new Date();
          const diffDays = Math.ceil((eventDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
          
          return (
            <div 
              key={event.id}
              className="p-3 rounded-lg border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all cursor-pointer"
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`px-2 py-0.5 rounded text-xs font-medium ${typeColors[event.type]}`}>
                  {typeLabels[event.type]}
                </span>
                {diffDays <= 1 && (
                  <span className="text-xs font-semibold text-red-600">
                    {diffDays === 0 ? 'TODAY' : 'TOMORROW'}
                  </span>
                )}
              </div>
              
              <p className="text-sm font-medium text-slate-900 line-clamp-2">
                {event.title}
              </p>
              
              <div className="flex items-center gap-1 mt-2 text-xs text-slate-500">
                <Clock className="w-3 h-3" />
                <span>{event.time}</span>
              </div>
              
              <div className="mt-2 text-xs text-slate-400">
                {eventDate.toLocaleDateString('en-US', {
                  weekday: 'short',
                  month: 'short',
                  day: 'numeric'
                })}
              </div>
            </div>
          );
        })}
      </div>

      {nextEvents.length === 0 && (
        <div className="text-center py-8 text-slate-400">
          <Calendar className="w-8 h-8 mx-auto mb-2" />
          <p className="text-sm">No upcoming events</p>
        </div>
      )}
    </div>
  );
}
