'use client';

import {
  RefreshCw, Leaf, AlertTriangle, CheckCircle2, Clock,
  DollarSign, ShoppingCart, TrendingUp, User, Calendar,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLiveData } from '@/lib/use-live-data';
import type { GHLTask, Invoice, ProcurementItem, HookItem } from '@/lib/use-live-data';
import {
  ghlContactUrl, ghlCalendarUrl, squareInvoiceUrl, procurementSheetUrl,
} from '@/lib/data';

// ── HELPERS ───────────────────────────────────────────────────────

function fmtDollars(n: number) {
  return '$' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function fmtDue(iso: string) {
  if (!iso) return '';
  try {
    const [, m, d] = iso.split('-');
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return `${months[parseInt(m)-1]} ${parseInt(d)}`;
  } catch { return iso; }
}

// ── SERVICE STRIP ──────────────────────────────────────────────────

function ServiceStrip({ stops, done, total }: {
  stops: { id: string; title: string; time: string; done: boolean }[];
  done: number; total: number;
}) {
  if (total === 0) {
    return (
      <div className="text-sm text-green-600/60 py-2">No service stops scheduled today.</div>
    );
  }
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 -mx-3 px-3 sm:mx-0 sm:px-0">
      {stops.map(stop => (
        <a
          key={stop.id}
          href={ghlCalendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex-shrink-0 rounded-lg border px-3 py-2 min-w-[130px] sm:min-w-[160px] shadow-sm transition-colors hover:border-green-300 ${
            stop.done
              ? 'bg-green-50 border-green-200'
              : 'bg-white border-green-100'
          }`}
        >
          <div className="flex items-center gap-1.5 mb-1">
            {stop.done
              ? <CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
              : <Clock className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
            }
            <span className="text-[10px] text-green-600/60">{stop.time}</span>
          </div>
          <p className={`text-xs font-medium leading-tight ${stop.done ? 'text-green-600/70 line-through' : 'text-green-900'}`}>
            {stop.title}
          </p>
        </a>
      ))}
    </div>
  );
}

// ── TASK ROW ───────────────────────────────────────────────────────

function TaskRow({ task }: { task: GHLTask }) {
  const href = task.contactId ? ghlContactUrl(task.contactId) : undefined;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-start gap-2 py-2 border-b border-green-50 last:border-0 ${href ? 'hover:bg-green-50/60 -mx-1 px-1 rounded cursor-pointer' : ''}`}
    >
      {task.overdue
        ? <AlertTriangle className="w-3.5 h-3.5 text-red-400 mt-0.5 flex-shrink-0" />
        : <Clock className="w-3.5 h-3.5 text-amber-400 mt-0.5 flex-shrink-0" />
      }
      <div className="flex-1 min-w-0">
        <p className={`text-xs leading-snug ${task.overdue ? 'text-red-700 font-medium' : 'text-green-900'}`}>
          {task.title}
        </p>
        <p className="text-[10px] text-green-600/50 truncate">{task.contact}</p>
      </div>
      {task.due && (
        <span className={`text-[10px] whitespace-nowrap flex-shrink-0 ${task.overdue ? 'text-red-400 font-semibold' : 'text-green-600/50'}`}>
          {task.overdue ? '⚠ ' : ''}{fmtDue(task.due)}
        </span>
      )}
    </a>
  );
}

function TasksPanel({ title, tasks, total, overdue }: {
  title: string; tasks: GHLTask[]; total: number; overdue: number;
}) {
  return (
    <Card className="border-green-100">
      <CardContent className="p-3 sm:p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-green-600" />
            <span className="font-semibold text-green-900 text-sm">{title}</span>
          </div>
          <div className="flex gap-1.5">
            <Badge variant="yellow" className="text-[10px]">{total} open</Badge>
            {overdue > 0 && <Badge variant="red" className="text-[10px]">{overdue} overdue</Badge>}
          </div>
        </div>
        {tasks.length === 0 ? (
          <p className="text-xs text-green-600/50">No open tasks</p>
        ) : (
          <div>
            {tasks.slice(0, 12).map(t => <TaskRow key={t.id} task={t} />)}
            {tasks.length > 12 && (
              <p className="text-[10px] text-green-600/40 pt-2">+{tasks.length - 12} more</p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// ── HOOK PANEL ─────────────────────────────────────────────────────

function HookPanel({ items }: { items: HookItem[] }) {
  const firstThings = items.filter(i => i.firstThing);
  const upsells     = items.filter(i => i.upsell && !i.firstThing);
  const rest        = items.filter(i => !i.firstThing && !i.upsell);

  return (
    <Card className="border-green-100">
      <CardContent className="p-3 sm:p-4">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-base">🪝</span>
          <span className="font-semibold text-green-900 text-sm">The Hook</span>
          <Badge variant="gray" className="text-[10px] ml-auto">{items.length} open</Badge>
        </div>

        {firstThings.length > 0 && (
          <div className="mb-2">
            {firstThings.map(item => (
              <div key={item.id} className="flex items-start gap-2 py-1.5 border-b border-red-50">
                <span className="text-[10px] text-red-500 font-bold flex-shrink-0 mt-0.5">★</span>
                <p className="text-xs font-semibold text-red-700 leading-snug">{item.title}</p>
              </div>
            ))}
          </div>
        )}

        {upsells.length > 0 && (
          <div className="mb-2">
            {upsells.map(item => (
              <div key={item.id} className="flex items-start gap-2 py-1.5 border-b border-emerald-50">
                <span className="text-[10px] text-emerald-600 font-bold flex-shrink-0 mt-0.5">$$</span>
                <p className="text-xs text-emerald-800 leading-snug">{item.title.replace(/^UPSELL\s*—?\s*/i, '')}</p>
              </div>
            ))}
          </div>
        )}

        {rest.slice(0, 10).map((item, i) => (
          <div key={item.id} className={`flex items-start gap-2 py-1.5 ${i < rest.slice(0,10).length - 1 ? 'border-b border-green-50' : ''}`}>
            <span className="text-[10px] text-green-400 flex-shrink-0 mt-0.5">·</span>
            <p className="text-xs text-green-800 leading-snug">{item.title}</p>
          </div>
        ))}
        {rest.length > 10 && (
          <p className="text-[10px] text-green-600/40 pt-1">+{rest.length - 10} more</p>
        )}
      </CardContent>
    </Card>
  );
}

// ── INVOICE PANEL ──────────────────────────────────────────────────

function InvoicePanel({ invoices, summary }: {
  invoices: Invoice[];
  summary: { totalOutstanding: number; overdueCount: number; overdueTotal: number; currentCount: number; currentTotal: number };
}) {
  const overdue = invoices.filter(i => i.overdue);
  const current = invoices.filter(i => !i.overdue);

  return (
    <Card className="border-green-100">
      <CardContent className="p-3 sm:p-4">
        <div className="flex items-center gap-2 mb-1">
          <DollarSign className="w-4 h-4 text-green-600" />
          <span className="font-semibold text-green-900 text-sm">Money</span>
        </div>
        <p className="text-xl font-bold text-green-900 mb-3">
          {fmtDollars(summary.totalOutstanding)}
          <span className="text-xs font-normal text-green-600/60 ml-1">outstanding</span>
        </p>

        {overdue.length > 0 && (
          <div className="mb-3">
            <p className="text-[10px] font-semibold text-red-500 uppercase tracking-wide mb-1.5">
              Overdue — collect ({overdue.length})
            </p>
            {overdue.slice(0, 7).map(inv => (
              <a
                key={inv.id}
                href={squareInvoiceUrl(inv.id)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-1 border-b border-red-50 last:border-0 hover:bg-red-50/50 -mx-1 px-1 rounded"
              >
                <span className="text-xs text-red-700 truncate mr-2">{inv.recipient}</span>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="text-xs font-medium text-red-600">{fmtDollars(inv.amount)}</span>
                  <span className="text-[10px] text-red-400">{fmtDue(inv.due)}</span>
                </div>
              </a>
            ))}
            {overdue.length > 7 && (
              <p className="text-[10px] text-red-400 pt-1">+{overdue.length - 7} more overdue</p>
            )}
          </div>
        )}

        {current.length > 0 && (
          <a
            href="https://squareup.com/dashboard/invoices"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-green-50/60 hover:bg-green-100/60 rounded-lg p-2 text-xs text-green-700"
          >
            {current.length} current — {fmtDollars(summary.currentTotal)} on schedule ↗
          </a>
        )}

        {invoices.length === 0 && (
          <p className="text-xs text-green-600/50">All paid up</p>
        )}
      </CardContent>
    </Card>
  );
}

// ── PROCUREMENT PANEL ──────────────────────────────────────────────

function ProcurementPanel({ items, summary }: {
  items: ProcurementItem[];
  summary: { total: number; overdueCount: number };
}) {
  const overdue = items.filter(i => i.overdue);
  const rest    = items.filter(i => !i.overdue);

  return (
    <Card className="border-green-100">
      <CardContent className="p-3 sm:p-4">
        <div className="flex items-center gap-2 mb-3">
          <ShoppingCart className="w-4 h-4 text-green-600" />
          <a
            href={procurementSheetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-green-900 text-sm hover:text-green-600"
          >
            Procurement ↗
          </a>
          <div className="flex gap-1 ml-auto">
            <Badge variant="yellow" className="text-[10px]">{summary.total} needed</Badge>
            {summary.overdueCount > 0 && (
              <Badge variant="red" className="text-[10px]">{summary.overdueCount} overdue</Badge>
            )}
          </div>
        </div>

        {summary.total === 0 ? (
          <p className="text-xs text-green-600/50">Nothing to order</p>
        ) : (
          <div>
            {overdue.slice(0, 5).map((item, i) => (
              <div key={item.id} className="flex items-start gap-2 py-1.5 border-b border-red-50 last:border-0">
                <span className="text-[10px] text-red-500 font-bold flex-shrink-0 mt-0.5">!</span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-red-700 font-medium leading-snug">
                    {item.plant}{item.size ? ` (${item.size})` : ''} × {item.quantity}
                  </p>
                  <p className="text-[10px] text-red-400">{item.client}</p>
                </div>
              </div>
            ))}
            {rest.slice(0, 5).map((item, i) => (
              <div key={item.id} className="flex items-start gap-2 py-1.5 border-b border-green-50 last:border-0">
                <span className="text-[10px] text-green-400 flex-shrink-0 mt-0.5">·</span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-green-800 leading-snug">
                    {item.plant}{item.size ? ` (${item.size})` : ''} × {item.quantity}
                  </p>
                  <p className="text-[10px] text-green-600/50">{item.client}{item.needBy ? ` · ${fmtDue(item.needBy)}` : ''}</p>
                </div>
              </div>
            ))}
            {summary.total > 10 && (
              <p className="text-[10px] text-green-600/40 pt-1.5">
                +{summary.total - 10} more — see weekly order email
              </p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// ── UPCOMING PANEL ─────────────────────────────────────────────────

function UpcomingPanel({ stops }: { stops: { id: string; title: string; dateLabel: string; time: string }[] }) {
  return (
    <Card className="border-green-100">
      <CardContent className="p-3 sm:p-4">
        <div className="flex items-center gap-2 mb-3">
          <Calendar className="w-4 h-4 text-green-600" />
          <span className="font-semibold text-green-900 text-sm">Next 7 Days</span>
        </div>
        {stops.length === 0 ? (
          <p className="text-xs text-green-600/50">No upcoming stops</p>
        ) : (
          <div>
            {stops.map((stop, i) => (
              <div key={stop.id} className={`flex items-center gap-2 py-1.5 ${i < stops.length - 1 ? 'border-b border-green-50' : ''}`}>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-green-900 leading-snug truncate">{stop.title}</p>
                  <p className="text-[10px] text-green-600/50">{stop.dateLabel}{stop.time ? ` · ${stop.time}` : ''}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// ── MAIN DASHBOARD ─────────────────────────────────────────────────

export default function Dashboard() {
  const { data, refresh } = useLiveData();
  const { meta, serviceStops, geoffTasks, briTasks, invoices, procurement, hookItems, upcomingStops, loading } = data;

  const refreshedAt = new Date(meta.lastRefreshed).toLocaleTimeString(undefined, {
    hour: 'numeric', minute: '2-digit', timeZone: 'America/New_York',
  });

  const upsellTasks = geoffTasks.filter(t => t.title.startsWith('[UPSELL'));

  return (
    <div className="min-h-screen bg-green-50/30">

      {/* HEADER */}
      <header className="bg-white border-b border-green-100 px-3 py-2 sm:px-6 sm:py-3 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="w-5 h-5 text-green-600" />
            <div>
              <h1 className="text-base sm:text-lg font-bold text-green-900">AHP Operations</h1>
              <p className="hidden sm:block text-xs text-green-600/60">Atlanta Houseplants</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-medium text-green-900">{meta.todayLabel}</p>
              <p className="text-[10px] text-green-600/50">Data from {refreshedAt}</p>
            </div>
            <button
              onClick={refresh}
              disabled={loading}
              title="Reload for latest data"
              className={`p-2 hover:bg-green-50 rounded-lg transition-colors ${loading ? 'animate-spin' : ''}`}
            >
              <RefreshCw className="w-4 h-4 text-green-700" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-3 sm:p-6 space-y-4 sm:space-y-6">

        {/* TODAY'S SERVICE */}
        <section>
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-sm font-semibold text-green-800">Today's Service</h2>
            <div className="flex gap-1.5">
              <Badge variant={meta.serviceDay.done === meta.serviceDay.total && meta.serviceDay.total > 0 ? 'green' : 'yellow'} className="text-[10px]">
                {meta.serviceDay.done}/{meta.serviceDay.total} done
              </Badge>
            </div>
          </div>
          <ServiceStrip
            stops={serviceStops}
            done={meta.serviceDay.done}
            total={meta.serviceDay.total}
          />
        </section>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">

          {/* LEFT — Tasks + Upsell (2 cols) */}
          <div className="lg:col-span-2 space-y-4">

            {/* Geoff's Tasks */}
            <TasksPanel
              title="Geoff's Tasks"
              tasks={geoffTasks.filter(t => !t.title.startsWith('[UPSELL'))}
              total={meta.taskSummary.geoffTotal - upsellTasks.length}
              overdue={meta.taskSummary.geoffOverdue}
            />

            {/* Bri's Tasks */}
            <TasksPanel
              title="Bri's Tasks"
              tasks={briTasks}
              total={meta.taskSummary.briTotal}
              overdue={meta.taskSummary.briOverdue}
            />

            {/* Upsell Opportunities */}
            {upsellTasks.length > 0 && (
              <Card className="border-emerald-200 bg-emerald-50/50">
                <CardContent className="p-3 sm:p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="w-4 h-4 text-emerald-600" />
                    <span className="font-semibold text-emerald-900 text-sm">Revenue Opportunities</span>
                    <Badge variant="green" className="text-[10px] ml-auto">{upsellTasks.length} high potential</Badge>
                  </div>
                  {upsellTasks.map((t, i) => (
                    <div key={t.id} className={`flex items-start gap-2 py-2 ${i < upsellTasks.length - 1 ? 'border-b border-emerald-100' : ''}`}>
                      <span className="text-emerald-600 font-bold text-xs mt-0.5">$$</span>
                      <div>
                        <p className="text-xs font-medium text-emerald-900">{t.title.replace(/^\[UPSELL[^\]]*\]\s*/, '')}</p>
                        <p className="text-[10px] text-emerald-600/70">Follow up by {fmtDue(t.due)}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-4">
            <HookPanel items={hookItems} />
            <InvoicePanel invoices={invoices} summary={meta.invoiceSummary} />
            <ProcurementPanel items={procurement} summary={meta.procurementSummary} />
            <UpcomingPanel stops={upcomingStops} />
          </div>
        </div>

      </main>
    </div>
  );
}
