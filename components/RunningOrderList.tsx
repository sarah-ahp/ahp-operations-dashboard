'use client';

import { ShoppingCart, Plus, Check, Trash2, Package, Leaf, Droplets, Archive } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { useState } from 'react';

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

interface RunningOrderListProps {
  items?: OrderItem[];
}

const defaultItems: OrderItem[] = [
  { id: '1', name: 'Schefflera Amate 14"', quantity: 2, category: 'plants', source: 'Hospital replacement', addedBy: 'Bri', addedAt: 'Feb 11', urgent: true },
  { id: '2', name: 'Bromeliads 6"', quantity: 25, category: 'plants', source: 'Color rotation - Floyd Med', addedBy: 'Geoff', addedAt: 'Feb 10' },
  { id: '3', name: 'Orchids 5" (double)', quantity: 5, category: 'plants', source: 'C-Suite upgrade', addedBy: 'Nick', addedAt: 'Feb 9' },
  { id: '4', name: 'Potting soil - ProMix', quantity: 25, category: 'soil', source: 'General stock', addedBy: 'Geoff', addedAt: 'Feb 11' },
  { id: '5', name: 'Top dressing - Gold', quantity: 10, category: 'supplies', source: 'Top-ups', addedBy: 'Bri', addedAt: 'Feb 11' },
];

const categoryIcons = {
  plants: Leaf,
  supplies: Package,
  containers: Archive,
  soil: Droplets,
};

const categoryColors: Record<string, { badge: 'green' | 'blue' | 'yellow' | 'gray'; bg: string }> = {
  plants: { badge: 'green', bg: 'bg-green-50' },
  supplies: { badge: 'blue', bg: 'bg-blue-50' },
  containers: { badge: 'yellow', bg: 'bg-yellow-50' },
  soil: { badge: 'gray', bg: 'bg-gray-50' },
};

export function RunningOrderList({ items = defaultItems }: RunningOrderListProps) {
  const [orderItems, setOrderItems] = useState<OrderItem[]>(items);
  const [showAdd, setShowAdd] = useState(false);

  const categories = ['plants', 'supplies', 'containers', 'soil'] as const;

  const removeItem = (id: string) => {
    setOrderItems(prev => prev.filter(i => i.id !== id));
  };

  const exportList = () => {
    // Would export to clipboard/email/print
    alert('Order list exported! Ready for Southland.');
  };

  return (
    <div className="space-y-3">
      {/* Header with actions */}
      <div className="flex items-center justify-between">
        <Badge variant="green" className="text-xs">
          {orderItems.length} items
        </Badge>
        <div className="flex gap-1">
          <button
            onClick={() => setShowAdd(!showAdd)}
            className="p-1.5 hover:bg-green-100 rounded-lg transition-colors"
            title="Add item"
          >
            <Plus className="w-4 h-4 text-green-600" />
          </button>
          <button
            onClick={exportList}
            className="p-1.5 hover:bg-green-100 rounded-lg transition-colors"
            title="Export order"
          >
            <ShoppingCart className="w-4 h-4 text-green-600" />
          </button>
        </div>
      </div>

      {/* Add item form (simplified) */}
      {showAdd && (
        <Card className="border-green-200">
          <CardContent className="p-2">
            <p className="text-xs text-green-600/70 mb-2">Quick add (form integration coming)</p>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Item name"
                className="flex-1 text-xs px-2 py-1 border border-green-200 rounded focus:outline-none focus:border-green-400"
              />
              <input
                type="number"
                placeholder="Qty"
                className="w-16 text-xs px-2 py-1 border border-green-200 rounded focus:outline-none focus:border-green-400"
              />
            </div>
          </CardContent>
        </Card>
      )}

      {/* Items by category */}
      {categories.map(cat => {
        const catItems = orderItems.filter(i => i.category === cat);
        if (catItems.length === 0) return null;

        const Icon = categoryIcons[cat];
        const { badge, bg } = categoryColors[cat];

        return (
          <div key={cat} className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-medium text-green-700/70 uppercase tracking-wide">
              <Icon className="w-3 h-3" />
              {cat}
            </div>
            {catItems.map(item => (
              <Card key={item.id} className={`border-green-100 ${item.urgent ? 'border-l-2 border-l-red-400' : ''}`}>
                <CardContent className="p-2">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-sm font-medium text-green-900 leading-tight">
                          {item.name}
                        </span>
                        <Badge variant={badge} className="text-[10px]">
                          {item.quantity}
                        </Badge>
                        {item.urgent && (
                          <Badge variant="red" className="text-[10px]">urgent</Badge>
                        )}
                      </div>
                      <p className="text-[10px] text-green-600/60 mt-0.5">
                        {item.source} · {item.addedBy}
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-1 hover:bg-green-100 rounded transition-colors opacity-0 group-hover:opacity-100 hover:opacity-100"
                      style={{ opacity: 0.5 }}
                      title="Mark ordered"
                    >
                      <Check className="w-3.5 h-3.5 text-green-500" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        );
      })}

      {/* Empty state */}
      {orderItems.length === 0 && (
        <Card className="border-green-100 border-dashed">
          <CardContent className="p-4 text-center">
            <ShoppingCart className="w-8 h-8 text-green-200 mx-auto mb-2" />
            <p className="text-sm text-green-600/70">No items yet</p>
            <p className="text-xs text-green-500/50 mt-1">
              Service forms will auto-populate this
            </p>
          </CardContent>
        </Card>
      )}

      {/* Export button footer */}
      {orderItems.length > 0 && (
        <button
          onClick={exportList}
          className="w-full py-2 bg-green-600 hover:bg-green-500 text-white text-xs font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          <ShoppingCart className="w-3.5 h-3.5" />
          Ready to Order ({orderItems.length} items)
        </button>
      )}
    </div>
  );
}
