// GoHighLevel API v2 Integration
// Uses stored credentials from credentials/ghl-*.json

export interface GHLTask {
  id: string;
  title: string;
  description?: string;
  status: 'completed' | 'incomplete';
  dueDate?: string;
  assignedTo?: string;
  priority?: 'high' | 'medium' | 'low';
}

export interface GHLOpportunity {
  id: string;
  name: string;
  status: string;
  pipelineId: string;
  stageId: string;
  value?: number;
  contactName?: string;
  assignedTo?: string;
  createdAt: string;
  updatedAt: string;
}

export interface GHLServiceOrder {
  id: string;
  name: string;
  status: 'pending' | 'completed' | 'cancelled';
  clientName: string;
  serviceDate?: string;
  notes?: string;
}

export interface GHLSummary {
  activeTasks: GHLTask[];
  opportunities: GHLOpportunity[];
  serviceOrders: GHLServiceOrder[];
  stats: {
    totalTasks: number;
    overdueTasks: number;
    activeOpportunities: number;
    totalPipelineValue: number;
  };
}

// Base URL for GHL API v2
const GHL_BASE_URL = 'https://services.leadconnectorhq.com';

// Mock data for development - replace with actual API calls
export async function fetchGHLData(): Promise<GHLSummary> {
  // In production, this would:
  // 1. Read token from credentials/ghl-token.json
  // 2. Get location ID from credentials/ghl-config.json
  // 3. Call GHL API endpoints
  
  const mockTasks: GHLTask[] = [
    {
      id: 'task-1',
      title: 'Order 25 bromeliads for Floyd Medical',
      description: 'Southland Nursery - due Feb 13',
      status: 'incomplete',
      dueDate: '2026-02-13',
      assignedTo: 'Geoff',
      priority: 'high'
    },
    {
      id: 'task-2',
      title: 'Call Debbie Heitzman - Concord install confirmation',
      description: 'Confirm Feb 12 install time',
      status: 'incomplete',
      dueDate: '2026-02-11',
      assignedTo: 'Geoff',
      priority: 'high'
    },
    {
      id: 'task-3',
      title: 'Source Phoenix planters from Pike',
      description: 'Black planters for Concord',
      status: 'incomplete',
      dueDate: '2026-02-11',
      assignedTo: 'Geoff',
      priority: 'medium'
    },
    {
      id: 'task-4',
      title: 'Bri Week 2 training schedule',
      description: 'Coordinate with Nick for Feb 10-14',
      status: 'incomplete',
      dueDate: '2026-02-10',
      assignedTo: 'Geoff',
      priority: 'medium'
    }
  ];
  
  const mockOpportunities: GHLOpportunity[] = [
    {
      id: 'opp-1',
      name: 'Concord Group Install',
      status: 'open',
      pipelineId: 'installs',
      stageId: 'in-progress',
      value: 3139,
      contactName: 'Debbie Heitzman',
      assignedTo: 'Geoff',
      createdAt: '2026-02-05',
      updatedAt: '2026-02-09'
    },
    {
      id: 'opp-2',
      name: 'Floyd Medical Onboarding',
      status: 'open',
      pipelineId: 'onboarding',
      stageId: 'vendor-paperwork',
      value: 79200,
      contactName: 'Stacey',
      assignedTo: 'Geoff',
      createdAt: '2026-01-15',
      updatedAt: '2026-02-06'
    },
    {
      id: 'opp-3',
      name: 'Link Logistics Thank You',
      status: 'open',
      pipelineId: 'follow-up',
      stageId: 'pending',
      contactName: 'Link Logistics',
      assignedTo: 'Geoff',
      createdAt: '2026-02-09',
      updatedAt: '2026-02-09'
    }
  ];
  
  const mockServiceOrders: GHLServiceOrder[] = [
    {
      id: 'order-1',
      name: 'Floyd Medical Service Visit',
      status: 'pending',
      clientName: 'Floyd Medical',
      serviceDate: '2026-02-20',
      notes: 'Walk 90-day plan with Stacey'
    },
    {
      id: 'order-2',
      name: 'Concord Install',
      status: 'pending',
      clientName: 'Concord Group',
      serviceDate: '2026-02-12',
      notes: 'Pike planters + Southland plants'
    }
  ];
  
  const incomplete = mockTasks.filter(t => t.status === 'incomplete');
  const now = new Date();
  
  return {
    activeTasks: incomplete,
    opportunities: mockOpportunities.filter(o => o.status === 'open'),
    serviceOrders: mockServiceOrders.filter(s => s.status === 'pending'),
    stats: {
      totalTasks: incomplete.length,
      overdueTasks: incomplete.filter(t => t.dueDate && new Date(t.dueDate) < now).length,
      activeOpportunities: mockOpportunities.filter(o => o.status === 'open').length,
      totalPipelineValue: mockOpportunities.reduce((sum, o) => sum + (o.value || 0), 0)
    }
  };
}

// Full API integration requires:
// 1. OAuth token management (credentials/ghl-tokens.json)
// 2. Location ID configuration
// 3. Rate limiting (10 req/sec per location)
// 4. Pagination handling for large datasets
// 5. Error handling and retry logic
