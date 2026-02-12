import { NextResponse } from 'next/server';

interface TaskItem {
  id: string;
  project: string;
  owner: string;
  status: 'active' | 'pending' | 'blocked' | 'scheduled';
  action: string;
  due: string;
  source: string;
  createdAt: string;
}

interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  category: 'plants' | 'supplies' | 'containers' | 'soil';
  source: string;
  addedBy: string;
  addedAt: string;
  urgent?: boolean;
}

// In-memory store (will persist during Vercel function lifecycle)
const taskStore: TaskItem[] = [];
const orderStore: OrderItem[] = [];

// Extract task from form submission
function extractTaskFromForm(formData: any): TaskItem | null {
  const formName = formData.form_name || formData.name || '';
  const customFields = formData.custom_fields || formData.customFields || {};
  const contactName = formData.contact?.name || formData.contact_name || 'Unknown';
  const locationName = formData.location?.name || formData.location_name || 'Unknown Location';
  
  // AHP Service Completion Form parsing
  if (formName.toLowerCase().includes('service') || formName.toLowerCase().includes('completion')) {
    const actions: string[] = [];
    let project = locationName;
    let owner = 'Geoff';
    let due = 'ASAP';
    
    // Extract common fields
    const replacements = customFields['replacements_needed'] || customFields['plants_to_replace'];
    const supplies = customFields['supplies_needed'] || customFields['low_supplies'];
    const treatment = customFields['special_treatment'] || customFields['treatment'];
    const urgency = customFields['urgency'] || customFields['priority'];
    
    if (replacements) {
      actions.push(`Replace: ${replacements}`);
      owner = 'Sarah';
    }
    
    if (supplies) {
      actions.push(`Order supplies: ${supplies}`);
      owner = 'Sarah';
    }
    
    if (treatment) {
      actions.push(`Treatment: ${treatment}`);
      owner = 'Nick';
    }
    
    if (urgency === 'high' || urgency === 'urgent') {
      due = '24 hours';
    }
    
    if (actions.length === 0) return null;
    
    return {
      id: `task-${Date.now()}`,
      project: project,
      owner: owner,
      status: 'pending',
      action: actions.join(' | '),
      due: due,
      source: `Service form - ${contactName}`,
      createdAt: new Date().toISOString()
    };
  }
  
  // Plant Replacement Form
  if (formName.toLowerCase().includes('replacement')) {
    const plantType = customFields['plant_type'] || customFields['replacement'] || 'Plants';
    const quantity = customFields['quantity'] || customFields['count'] || '1';
    const size = customFields['size'] || '';
    
    return {
      id: `task-${Date.now()}`,
      project: locationName,
      owner: 'Sarah',
      status: 'pending',
      action: `Procure ${quantity} ${plantType} ${size}`,
      due: '3 days',
      source: `Replacement form - ${contactName}`,
      createdAt: new Date().toISOString()
    };
  }
  
  // New Install Form
  if (formName.toLowerCase().includes('install')) {
    return {
      id: `task-${Date.now()}`,
      project: `Install - ${locationName}`,
      owner: 'Geoff',
      status: 'active',
      action: 'Schedule install with client',
      due: '1 week',
      source: `Install form - ${contactName}`,
      createdAt: new Date().toISOString()
    };
  }
  
  return null;
}

// Extract order item from form
function extractOrderFromForm(formData: any): OrderItem | null {
  const formName = formData.form_name || formData.name || '';
  const customFields = formData.custom_fields || formData.customFields || {};
  const submittedBy = formData.contact?.name || formData.submitted_by || 'Field Tech';
  const locationName = formData.location?.name || formData.location_name || 'Unknown';
  
  // Look for order-related fields
  const orderNeeded = customFields['order_needed'] || customFields['need_to_order'];
  const lowStock = customFields['low_stock'] || customFields['running_low'];
  const items = customFields['items_needed'] || customFields['plants_needed'] || customFields['supplies_needed'];
  
  if (orderNeeded || lowStock || items) {
    const itemText = items || orderNeeded || lowStock;
    const qtyMatch = itemText.match(/\((\d+)\)/);
    const quantity = qtyMatch ? parseInt(qtyMatch[1]) : 1;
    const name = itemText.replace(/\(\d+\)/, '').trim();
    
    let category: OrderItem['category'] = 'plants';
    const lowerName = name.toLowerCase();
    if (lowerName.includes('soil') || lowerName.includes('pro-mix')) category = 'soil';
    else if (lowerName.includes('container') || lowerName.includes('pot') || lowerName.includes('planter')) category = 'containers';
    else if (lowerName.includes('fertilizer') || lowerName.includes('top dress') || lowerName.includes('supplies')) category = 'supplies';
    
    return {
      id: `order-${Date.now()}`,
      name: name,
      quantity: quantity,
      category: category,
      source: locationName,
      addedBy: submittedBy,
      addedAt: new Date().toISOString(),
      urgent: lowerName.includes('urgent') || lowerName.includes('asap')
    };
  }
  
  return null;
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    
    console.log('Received GHL Webhook:', JSON.stringify(payload, null, 2));
    
    const results = {
      taskCreated: false,
      orderCreated: false,
      task: null as TaskItem | null,
      order: null as OrderItem | null
    };
    
    // Extract task from form
    const task = extractTaskFromForm(payload);
    if (task) {
      taskStore.push(task);
      results.taskCreated = true;
      results.task = task;
      console.log('Task created:', task);
    }
    
    // Extract order from form
    const order = extractOrderFromForm(payload);
    if (order) {
      orderStore.push(order);
      results.orderCreated = true;
      results.order = order;
      console.log('Order created:', order);
    }
    
    return NextResponse.json({
      status: 'success',
      message: 'Webhook processed',
      results,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Webhook Error:', error);
    return NextResponse.json(
      { status: 'error', message: 'Invalid payload', error: String(error) },
      { status: 400 }
    );
  }
}

// Get current tasks and orders
export async function GET() {
  return NextResponse.json({
    status: 'ready',
    service: 'AHP Operations Webhook',
    tasks: taskStore,
    orders: orderStore,
    taskCount: taskStore.length,
    orderCount: orderStore.length
  });
}
