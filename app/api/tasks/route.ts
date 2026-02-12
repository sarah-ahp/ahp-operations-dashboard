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

// In-memory store (shared with webhook)
const taskStore: TaskItem[] = [
  {
    id: 'default-1',
    project: 'Concord Install',
    owner: 'Geoff',
    status: 'active',
    action: 'Execute install + collect balance',
    due: 'Thu 10:30 AM',
    source: 'Manual entry',
    createdAt: new Date().toISOString()
  },
  {
    id: 'default-2',
    project: 'Floyd Med Order',
    owner: 'Sarah',
    status: 'pending',
    action: 'Send PO to Chris by Friday',
    due: 'Fri EOD',
    source: 'Manual entry',
    createdAt: new Date().toISOString()
  },
  {
    id: 'default-3',
    project: 'Bri Training W2',
    owner: 'Geoff + Bri',
    status: 'active',
    action: 'Shadow install → lunch debrief',
    due: 'Thu PM',
    source: 'Manual entry',
    createdAt: new Date().toISOString()
  },
  {
    id: 'default-4',
    project: 'Hospital Walk',
    owner: 'Geoff + Bri',
    status: 'scheduled',
    action: 'Present 90-day plan to Stacey',
    due: 'Feb 20',
    source: 'Manual entry',
    createdAt: new Date().toISOString()
  }
];

export async function GET() {
  return NextResponse.json({
    status: 'success',
    tasks: taskStore,
    count: taskStore.length
  });
}

export async function POST(request: Request) {
  try {
    const task = await request.json();
    task.id = `task-${Date.now()}`;
    task.createdAt = new Date().toISOString();
    taskStore.push(task);
    
    return NextResponse.json({
      status: 'success',
      task: task
    });
  } catch (error) {
    return NextResponse.json(
      { status: 'error', message: 'Failed to add task' },
      { status: 400 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    const index = taskStore.findIndex(t => t.id === id);
    if (index > -1) {
      taskStore.splice(index, 1);
      return NextResponse.json({ status: 'success', message: 'Task deleted' });
    }
    return NextResponse.json({ status: 'error', message: 'Task not found' }, { status: 404 });
  } catch (error) {
    return NextResponse.json(
      { status: 'error', message: 'Failed to delete task' },
      { status: 400 }
    );
  }
}
