import { NextResponse } from 'next/server';

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

// In-memory store with default items
const orderStore: OrderItem[] = [
  {
    id: 'order-default-1',
    name: 'Schefflera Amate 14"',
    quantity: 2,
    category: 'plants',
    source: 'Hospital replacement',
    addedBy: 'Bri',
    addedAt: new Date().toISOString(),
    urgent: true
  },
  {
    id: 'order-default-2',
    name: 'Bromeliads 6"',
    quantity: 25,
    category: 'plants',
    source: 'Color rotation - Floyd Med',
    addedBy: 'Geoff',
    addedAt: new Date().toISOString()
  },
  {
    id: 'order-default-3',
    name: 'Orchids 5" (double)',
    quantity: 5,
    category: 'plants',
    source: 'C-Suite upgrade',
    addedBy: 'Nick',
    addedAt: new Date().toISOString()
  },
  {
    id: 'order-default-4',
    name: 'Potting soil - ProMix',
    quantity: 25,
    category: 'soil',
    source: 'General stock',
    addedBy: 'Geoff',
    addedAt: new Date().toISOString()
  },
  {
    id: 'order-default-5',
    name: 'Top dressing - Gold',
    quantity: 10,
    category: 'supplies',
    source: 'Top-ups',
    addedBy: 'Bri',
    addedAt: new Date().toISOString()
  }
];

export async function GET() {
  return NextResponse.json({
    status: 'success',
    orders: orderStore,
    count: orderStore.length
  });
}

export async function POST(request: Request) {
  try {
    const order = await request.json();
    order.id = `order-${Date.now()}`;
    order.addedAt = new Date().toISOString();
    orderStore.push(order);
    
    return NextResponse.json({
      status: 'success',
      order: order
    });
  } catch (error) {
    return NextResponse.json(
      { status: 'error', message: 'Failed to add order' },
      { status: 400 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    const index = orderStore.findIndex(o => o.id === id);
    if (index > -1) {
      orderStore.splice(index, 1);
      return NextResponse.json({ status: 'success', message: 'Order deleted' });
    }
    return NextResponse.json({ status: 'error', message: 'Order not found' }, { status: 404 });
  } catch (error) {
    return NextResponse.json(
      { status: 'error', message: 'Failed to delete order' },
      { status: 400 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const { id, updates } = await request.json();
    const index = orderStore.findIndex(o => o.id === id);
    if (index > -1) {
      orderStore[index] = { ...orderStore[index], ...updates };
      return NextResponse.json({ status: 'success', order: orderStore[index] });
    }
    return NextResponse.json({ status: 'error', message: 'Order not found' }, { status: 404 });
  } catch (error) {
    return NextResponse.json(
      { status: 'error', message: 'Failed to update order' },
      { status: 400 }
    );
  }
}
