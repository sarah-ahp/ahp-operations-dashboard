// Square API integration for invoice data
// Uses stored credentials from credentials/square-*.json

export interface Invoice {
  id: string;
  invoiceNumber: string;
  customerName: string;
  amount: number;
  status: 'paid' | 'unpaid' | 'overdue' | 'draft';
  dueDate: string;
  description: string;
}

export interface SquareSummary {
  totalOutstanding: number;
  unpaidCount: number;
  overdueCount: number;
  recentPayments: number;
  invoices: Invoice[];
}

export async function fetchSquareData(): Promise<SquareSummary> {
  // Mock data for now - V2 would call actual Square API
  // via serverless function with stored token
  
  const mockInvoices: Invoice[] = [
    {
      id: 'inv-1',
      invoiceNumber: 'AHP-2026-0212',
      customerName: 'Concord Group',
      amount: 1569.50,
      status: 'unpaid',
      dueDate: '2026-02-12',
      description: 'Balance due after install'
    },
    {
      id: 'inv-2', 
      invoiceNumber: 'AHP-2026-0206',
      customerName: 'Floyd Medical',
      amount: 2400.00,
      status: 'unpaid',
      dueDate: '2026-02-15',
      description: 'Monthly service (pending vendor onboarding)'
    }
  ];
  
  const unpaid = mockInvoices.filter(i => i.status === 'unpaid');
  const overdue = mockInvoices.filter(i => i.status === 'overdue');
  
  return {
    totalOutstanding: unpaid.reduce((sum, i) => sum + i.amount, 0),
    unpaidCount: unpaid.length,
    overdueCount: overdue.length,
    recentPayments: 0,
    invoices: mockInvoices
  };
}

// Full integration requires:
// 1. Square API endpoint: /v2/invoices
// 2. Pagination for large datasets
// 3. Refresh token handling
// 4. Categorize by status
