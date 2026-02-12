'use client';

import { useState, useEffect } from 'react';
import { ShoppingCart, Plus, Check, Package, Leaf, Droplets, Archive, RefreshCw } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

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

const categoryIcons = {
  plants: Leaf,
  supplies: Package,
  containers: Archive,
  soil: Droplets,
};

export function RunningOrderList() {
  const [orders, setOrders] = useState<OrderItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const response = await fetch('/api/orders');
      const data = await response.json();
      if (data.status === 'success') {
        setOrders(data.orders);
      }
    } catch (err) {
      console.error('Failed to fetch orders:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
    const interval = setInterval(fetchOrders, 30000);
    return () => clearInterval(interval);
  }, []);

  const exportList = () => {
    const text = orders.map(o => `${o.name} (${o.quantity}) - ${o.source}`).join('\n');
    navigator.clipboard.writeText(text);
    alert('Order list copied! Ready for Southland.');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <RefreshCw className="w-5 h-5 text-green-600 animate-spin" />
        <span className="ml-2 text-sm text-green-600">Loading orders...</span>
      </div>
    );
  }

  const categories = ['plants', 'supplies', 'containers', 'soil'] as const;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <Badge variant="green" className="text-xs">{orders.length} items</Badge>
        <button onClick={exportList} className="p-1.5 hover:bg-green-100 rounded-lg">
          <ShoppingCart className="w-4 h-4 text-green-600" />
        </button>
      </div>

      {categories.map(cat => {
        const catItems = orders.filter(i => i.category === cat);
        if (catItems.length === 0) return null;

        const Icon = categoryIcons[cat];

        return (
          <div key={cat} className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-medium text-green-700/70 uppercase">
              <Icon className="w-3 h-3" />{cat}
            </div>
            {catItems.map(item => (
              <Card key={item.id} className="border-green-100">
                <CardContent className="p-2">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-sm font-medium text-green-900">{item.name}</span>
                        <Badge variant="green" className="text-[10px]">{item.quantity}</Badge>
                        {item.urgent && <Badge variant="red" className="text-[10px]">urgent</Badge>}
                      </div>
                      <p className="text-[10px] text-green-600/60">{item.source} · {item.addedBy}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        );
      })}

      {orders.length === 0 && (
        <Card className="border-green-100 border-dashed">
          <CardContent className="p-4 text-center">
            <ShoppingCart className="w-8 h-8 text-green-200 mx-auto mb-2" />
            <p className="text-sm text-green-600/70">No items yet</p>
          </CardContent>
        </Card>
      )}

      {orders.length > 0 && (
        <button onClick={exportList} className="w-full py-2 bg-green-600 hover:bg-green-500 text-white text-xs font-medium rounded-lg">
          Ready to Order ({orders.length} items)
        </button>
      )}
    </div>
  );
}
