// Live data fetchers - reads from memory files
export interface Workflow {
  id: string;
  name: string;
  client: string;
  status: 'active' | 'waiting' | 'not-started';
  progress: number;
  nextAction: string;
  deadline: string;
  owner: string;
}

export interface HookItem {
  id: string;
  title: string;
  priority: 'high' | 'medium' | 'low';
  source: string;
  added: string;
}

export interface ActivityItem {
  id: string;
  timestamp: string;
  action: string;
  actor: string;
  result: string;
}

export interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  type: 'install' | 'service' | 'meeting' | 'deadline';
}

// Parse workflows from markdown
function parseWorkflows(content: string): Workflow[] {
  const workflows: Workflow[] = [];
  
  // Find workflow sections (## patterns with tables)
  const workflowMatches = content.match(/## [^\n]+\n[\s\S]*?(?=## |$)/g) || [];
  
  for (const section of workflowMatches) {
    const nameMatch = section.match(/## (.*?)(?:\n|$)/);
    if (!nameMatch) continue;
    
    const name = nameMatch[1].trim();
    if (name.includes('ACTIVE') || name.includes('WORKFLOW')) continue; // Skip headers
    
    // Look for status badges
    const statusMatch = section.match(/([🔲⏳✅])\s*[A-Z]/);
    const status = statusMatch ? 
      (statusMatch[1] === '✅' ? 'not-started' : 
       statusMatch[1] === '⏳' ? 'waiting' : 'active') : 'active';
    
    // Count done vs total from table
    const doneCount = (section.match(/✅/g) || []).length;
    const pendingCount = (section.match(/⏳/g) || []).length;
    const notStartedCount = (section.match(/🔲/g) || []).length;
    const total = doneCount + pendingCount + notStartedCount;
    const progress = total > 0 ? Math.round((doneCount / total) * 100) : 0;
    
    // Find deadline
    const dateMatch = section.match(/\*\*(\d{4}-\d{2}-\d{2})\*\*|\b(\d{4}-\d{2}-\d{2})\b/);
    const deadline = dateMatch ? (dateMatch[1] || dateMatch[2]) : 'TBD';
    
    // Next action (first pending step)
    const nextMatch = section.match(/[⏳🔲].*?([^\n|]+)(?:\n|$)/);
    const nextAction = nextMatch ? nextMatch[1].trim().slice(0, 60) : 'Review workflow';
    
    workflows.push({
      id: name.toLowerCase().replace(/\s+/g, '-'),
      name: name.replace(/^(🟢|🔵|⚪)\s*/, ''),
      client: section.match(/\*\*Client:\*\*\s*(.+)/)?.[1] || 'Internal',
      status: status as any,
      progress,
      nextAction,
      deadline,
      owner: section.match(/\*\*Owner:\*\*\s*(.+)/)?.[1] || 'Geoff'
    });
  }
  
  return workflows.slice(0, 5); // Top 5 active
}

// Parse The Hook
function parseHook(content: string): HookItem[] {
  const items: HookItem[] = [];
  const lines = content.split('\n');
  
  for (const line of lines) {
    // Match priority markers
    const match = line.match(/^(\[([x\s])\]|-)\s*(.+?)(?:\s+-\s*(high|medium|low))?(?:\s*#(.+))?/i);
    if (match) {
      const title = match[3].trim();
      const priority = (match[4] || 'medium').toLowerCase() as any;
      
      items.push({
        id: `h${items.length + 1}`,
        title: title.slice(0, 100),
        priority,
        source: match[5] || 'the-hook',
        added: new Date().toISOString().split('T')[0]
      });
    }
  }
  
  return items.slice(0, 8);
}

// Parse activities
function parseActivities(content: string): ActivityItem[] {
  const items: ActivityItem[] = [];
  const lines = content.split('\n').filter(l => l.trim().startsWith('-'));
  
  let id = 1;
  for (const line of lines.slice(-10).reverse()) { // Last 10
    const match = line.match(/-\s*(\d{2}:\d{2})\s*-\s*(.+?)(?:\s*-\s*(.+))?$/);
    if (match) {
      items.push({
        id: `a${id++}`,
        timestamp: match[1],
        action: match[2].trim().slice(0, 50),
        actor: 'Hawk',
        result: match[3]?.trim() || 'Completed'
      });
    }
  }
  
  return items;
}

// Static data fallback (for build)
export const staticWorkflows: Workflow[] = [
  {
    id: 'concord-feb12',
    name: 'Concord Group Install',
    client: 'Concord Group',
    status: 'active',
    progress: 60,
    nextAction: 'Source planters from Pike Nursery',
    deadline: '2026-02-12',
    owner: 'Geoff'
  },
  {
    id: 'advocate-health',
    name: 'Floyd Medical Vendor Onboarding',
    client: 'Advocate Health Rome',
    status: 'active',
    progress: 75,
    nextAction: 'Walk 90-day plan with Stacey',
    deadline: '2026-02-20',
    owner: 'Bri/Geoff'
  }
];

export const staticHookItems: HookItem[] = [
  { id: 'h1', title: 'Finalize Concord planter order', priority: 'high', source: 'the-hook', added: '2026-02-11' },
  { id: 'h2', title: 'Bri training check-in acknowledgment', priority: 'high', source: 'the-hook', added: '2026-02-11' },
  { id: 'h3', title: 'Schedule Feb 20 hospital walk', priority: 'medium', source: 'workflows', added: '2026-02-11' }
];

export const staticActivities: ActivityItem[] = [
  { id: 'a1', timestamp: '01:26', action: 'Dashboard deployed', actor: 'Hawk', result: 'Live at vercel.app' },
  { id: 'a2', timestamp: '00:35', action: 'Workspace cleanup', actor: 'Hawk', result: '43 files deleted' }
];

export const staticCalendarEvents: CalendarEvent[] = [
  { id: 'c1', title: 'Bri Acknowledgment', date: 'Feb 11', time: '08:13', type: 'meeting' },
  { id: 'c2', title: 'Concord Install', date: 'Feb 12', time: 'TBD', type: 'install' },
  { id: 'c3', title: 'Hospital Service', date: 'Feb 13', time: '09:00', type: 'service' }
];

// Export static data as default
export const workflows = staticWorkflows;
export const hookItems = staticHookItems;
export const activities = staticActivities;
export const calendarEvents = staticCalendarEvents;
