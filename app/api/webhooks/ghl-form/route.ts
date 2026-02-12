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

// In-memory store
const taskStore: TaskItem[] = [];
const orderStore: OrderItem[] = [];
const webhookLog: any[] = [];

// Extract task from form submission
function extractTaskFromForm(formData: any): TaskItem | null {
  const formName = formData.formName || formData.form_name || formData.name || '';
  const customFields = formData.customFields || formData.custom_fields || formData.submittedValues || {};
  const contactName = formData.contact?.name || formData.contact_name || formData.fullName || 'Unknown';
  const locationName = formData.location?.name || formData.location_name || formData.companyName || 'Unknown Location';
  
  console.log('Parsing form:', formName);
  console.log('Custom fields:', JSON.stringify(customFields, null, 2));
  
  // AHP Service Completion Form
  if (formName.toLowerCase().includes('service') || formName.toLowerCase().includes('completion')) {
    const actions: string[] = [];
    let project = locationName;
    let owner = 'Geoff';
    let due = 'ASAP';
    
    const replacements = customFields['replacements_needed'] || customFields['plants_to_replace'] || customFields['Replacements'];
    const supplies = customFields['supplies_needed'] || customFields['low_supplies'] || customFields['Supplies'];
    const treatment = customFields['special_treatment'] || customFields['treatment'] || customFields['Treatment'];
    const urgency = customFields['urgency'] || customFields['priority'] || customFields['Urgency'];
    
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
    if (urgity === 'high' || urgency === 'urgent') {
      due = '24 hours';
    }
    
    if (actions.length > 0) {
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
  
  return null;
}

// Extract order item
function extractOrderFromForm(formData: any): OrderItem | null {
  const customFields = formData.customFields || formData.custom_fields || formData.submittedValues || {};
  const submittedBy = formData.contact?.name || formData.fullName || 'Field Tech';
  const locationName = formData.location?.name || formData.companyName || 'Unknown';
  
  const orderNeeded = customFields['order_needed'] || customFields['need_to_order'] || customFields['Items needed'];
  const lowStock = customFields['low_stock'] || customFields['running_low'];
  const items = customFields['items_needed'] || customFields['plants_needed'] || customFields['supplies_needed'] || customFields['Order'];
  
  if (orderNeeded || lowStock || items) {
    const itemText = items || orderNeeded || lowStock || JSON.stringify(customFields).substring(0, 100);
    const qtyMatch = itemText.match(/\((\d+)\)/);
    const quantity = qtyMatch ? parseInt(qtyMatch[1]) : 1;
    const name = itemText.replace(/\(\d+\)/, '').trim() || 'Items from form';
    
    let category: OrderItem['category'] = 'plants';
    const lowerName = name.toLowerCase();
    if (lowerName.includes('soil')) category = 'soil';
    else if (lowerName.includes('container')) category = 'containers';
    else if (lowerName.includes('supply')) category = 'supplies';
    
    return {
      id: `order-${Date.now()}`,
      name: name.substring(0, 50),
      quantity: quantity,
      category: category,
      source: locationName,
      addedBy: submittedBy,
      addedAt: new Date().toISOString(),
      urgent: lowerName.includes('urgent')
    };
  }
  
  return null;
}

export async function POST(request: Request) {
  try {
    const rawBody = await request.text();
    const payload = JSON.parse(rawBody);
    
    // Log webhook
    const logEntry = {
      timestamp: new Date().toISOString(),
      payload: payload
    };
    webhookLog.unshift(logEntry);
    if (webhookLog.length > 5) webhookLog.pop();
    
    console.log('Webhook received:', JSON.stringify(payload, null, 2));
    
    const results = {
      taskCreated: false,
      orderCreated: false,
      task: null as TaskItem | null,
      order: null as OrderItem | null
    };
    
    // Try to extract task
    const task = extractTaskFromForm(payload);
    if (task) {
      taskStore.push(task);
      results.taskCreated = true;
      results.task = task;
      console.log('Task created:', task);
    }
    
    // Try to extract order
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
      receivedPayload: payload,
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

export async function GET() {
  return NextResponse.json({
    status: 'ready',
    service: 'AHP Operations Webhook',
    tasks: taskStore,
    orders: orderStore,
    recentWebhooks: webhookLog,
    taskCount: taskStore.length,
    orderCount: orderStore.length,
    webhookCount: webhookLog.length
  });
}
