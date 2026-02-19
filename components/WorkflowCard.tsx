'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Check, Clock, Hourglass, User } from 'lucide-react';
import { Workflow } from '@/lib/data';

interface WorkflowCardProps {
  workflow: Workflow;
}

export default function WorkflowCard({ workflow }: WorkflowCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const statusColors = {
    active: 'bg-green-100 text-green-800 border-green-200',
    waiting: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'not-started': 'bg-gray-100 text-gray-800 border-gray-200',
    completed: 'bg-blue-100 text-blue-800 border-blue-200',
  };

  const statusLabels = {
    active: 'In Progress',
    waiting: 'Waiting',
    'not-started': 'Not Started',
    completed: 'Completed',
  };

  const stepIcons = {
    done: <Check className="w-4 h-4 text-green-500" />,
    'in-progress': <Clock className="w-4 h-4 text-yellow-500" />,
    pending: <Hourglass className="w-4 h-4 text-gray-400" />,
  };

  const stepClasses = {
    done: 'bg-green-50 border-green-200',
    'in-progress': 'bg-yellow-50 border-yellow-200',
    pending: 'bg-gray-50 border-gray-200',
  };

  return (
    <div className="card hover:shadow-md transition-shadow">
      {/* Header Row */}
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-slate-900">{workflow.name}</h3>
            <span className={`badge ${statusColors[workflow.status]}`}>
              {statusLabels[workflow.status]}
            </span>
          </div>
          <p className="text-sm text-slate-500 mb-2">{workflow.client}</p>
          
          {/* Progress Bar */}
          <div className="flex items-center gap-3 mb-2">
            <div className="flex-1 bg-slate-200 rounded-full h-2">
              <div 
                className="bg-green-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${workflow.progress}%` }}
              />
            </div>
            <span className="text-sm font-medium text-slate-700">{workflow.progress}%</span>
          </div>
        </div>

        <div className="text-right ml-4">
          <div className="text-sm text-slate-500">Deadline</div>
          <div className="text-sm font-medium text-slate-900">{workflow.deadline}</div>
        </div>
      </div>

      {/* Next Action */}
      <div className="mt-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
        <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Next Action</p>
        <p className="text-sm font-medium text-slate-900">{workflow.nextAction}</p>
        <div className="flex items-center gap-1 mt-1">
          <User className="w-3 h-3 text-slate-400" />
          <span className="text-xs text-slate-500">{workflow.owner}</span>
        </div>
      </div>

      {/* Expand/Collapse */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-3 flex items-center gap-1 text-sm text-slate-500 hover:text-slate-700 transition-colors"
      >
        {isExpanded ? (
          <>
            <ChevronUp className="w-4 h-4" /> Hide steps
          </>
        ) : (
          <>
            <ChevronDown className="w-4 h-4" /> Show {workflow.steps.length} steps
          </>
        )}
      </button>

      {/* Steps List */}
      {isExpanded && (
        <div className="mt-4 space-y-2">
          {workflow.steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 p-2 rounded-lg border ${stepClasses[step.status]}`}
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white flex items-center justify-center border shadow-sm">
                {stepIcons[step.status]}
              </div>
              <span className="text-sm text-slate-900">{step.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
