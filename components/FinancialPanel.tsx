'use client';

import { DollarSign, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import type { SquareSummary } from '@/lib/api-square';

interface FinancialPanelProps {
  data: SquareSummary | null | undefined;
}

export function FinancialPanel({ data }: FinancialPanelProps) {
  if (!data) {
    return (
      <Card className="border-green-100">
        <CardContent className="p-4">
          <p className="text-sm text-green-700/50">Loading financial data...</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-3">
      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        <Card className="border-green-100 bg-green-50/30">
          <CardContent className="p-3 sm:p-4">
            <div className="flex items-center gap-2 mb-1">
              <DollarSign className="w-4 h-4 text-green-600" />
              <span className="text-[10px] sm:text-xs text-green-700/70">Outstanding</span>
            </div>
            <p className="text-lg sm:text-2xl font-bold text-green-900">
              ${data.totalOutstanding.toLocaleString()}
            </p>
          </CardContent>
        </Card>
        
        <Card className={`border-green-100 ${data.overdueCount > 0 ? 'bg-orange-50/30' : ''}`}>
          <CardContent className="p-3 sm:p-4">
            <div className="flex items-center gap-2 mb-1">
              {data.overdueCount > 0 ? (
                <AlertCircle className="w-4 h-4 text-orange-600" />
              ) : (
                <CheckCircle2 className="w-4 h-4 text-green-600" />
              )}
              <span className="text-[10px] sm:text-xs text-green-700/70">
                {data.overdueCount > 0 ? 'Overdue' : 'Unpaid'}
              </span>
            </div>
            <p className="text-lg sm:text-2xl font-bold text-green-900">
              {data.unpaidCount}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Invoice List */}
      <Card className="border-green-100">
        <CardContent className="p-0">
          {data.invoices.map((inv, i) => (
            <div 
              key={inv.id} 
              className={`p-3 sm:p-4 ${i !== data.invoices.length - 1 ? 'border-b border-green-50' : ''}`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm font-medium text-green-900 truncate">
                    {inv.customerName}
                  </p>
                  <p className="text-[10px] sm:text-xs text-green-700/60">
                    {inv.invoiceNumber} · Due {inv.dueDate}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm sm:text-base font-semibold text-green-900">
                    ${inv.amount.toLocaleString()}
                  </p>
                  <Badge 
                    variant={inv.status === 'overdue' ? 'red' : 'yellow'}
                    className="text-[10px]"
                  >
                    {inv.status}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
