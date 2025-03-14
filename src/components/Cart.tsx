import React from 'react';
import { X, ShoppingBag, Trash2 } from 'lucide-react';
import { Product } from '../types/product';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: Product[];
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  onCheckout: () => void;
}

export function Cart({ isOpen, onClose, items, onRemoveItem, onClearCart, onCheckout }: CartProps) {
  // Berechne den Gesamtpreis
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const shipping = 6.50; // Fixed shipping cost
  const total = subtotal + shipping;
  
  // Gruppiere die Produkte nach ID und zähle die Anzahl
  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.id]) {
      acc[item.id] = {
        product: item,
        count: 0
      };
    }
    acc[item.id].count += 1;
    return acc;
  }, {} as Record<string, { product: Product, count: number }>);
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Warenkorb-Panel */}
      <div className="fixed inset-y-0 right-0 max-w-md w-full bg-white shadow-xl flex flex-col">
        {/* Header */}
        <div className="px-4 py-6 bg-primary text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-6 w-6" />
            <h2 className="text-xl font-bold">Warenkorb</h2>
            <span className="bg-secondary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center ml-2">
              {items.length}
            </span>
          </div>
          <button 
            onClick={onClose}
            className="text-white hover:text-gray-300"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        {/* Inhalt */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <ShoppingBag className="h-16 w-16 mb-4" />
              <p className="text-lg font-medium">Ihr Warenkorb ist leer</p>
              <p className="mt-1">Fügen Sie Produkte hinzu, um zu bestellen</p>
            </div>
          ) : (
            <div className="space-y-4">
              {Object.values(groupedItems).map(({ product, count }) => (
                <div key={product.id} className="flex items-center gap-4 p-3 border border-gray-200 rounded-lg">
                  <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center overflow-hidden">
                    <img 
                      src={product.imageUrl} 
                      alt={product.name} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = '';
                        target.parentElement!.innerHTML = `<div class="bg-primary p-2 rounded-full w-full h-full flex items-center justify-center"><span class="text-white font-bold">${product.name.substring(0, 2)}</span></div>`;
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-primary">{product.name}</h3>
                    <div className="flex justify-between items-center">
                      <p className="text-gray-500 text-sm">
                        {product.price.toLocaleString('de-DE', {
                          style: 'currency',
                          currency: 'EUR'
                        })}
                      </p>
                      <div className="flex items-center">
                        <span className="text-gray-500 text-sm mr-2">Menge: {count}</span>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => onRemoveItem(product.id)}
                    className="text-gray-400 hover:text-red-500"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Footer mit Gesamtpreis und Checkout-Button */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex justify-between mb-2">
            <span>Zwischensumme</span>
            <span>{subtotal.toFixed(2)} €</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Versand</span>
            <span>{shipping.toFixed(2)} €</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-700 font-medium">Gesamtsumme:</span>
            <span className="text-xl font-bold text-primary">
              {total.toLocaleString('de-DE', {
                style: 'currency',
                currency: 'EUR'
              })}
            </span>
          </div>
          
          <div className="space-y-2">
            <button
              onClick={onCheckout}
              className="w-full bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={items.length === 0}
            >
              Zur Kasse
            </button>
            
            <button
              onClick={onClearCart}
              className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={items.length === 0}
            >
              <Trash2 size={16} />
              <span>Warenkorb leeren</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}