import React from 'react';
import { X, Heart, Trash2, ShoppingCart } from 'lucide-react';
import { Product } from '../types/product';

interface WishlistProps {
  isOpen: boolean;
  onClose: () => void;
  items: Product[];
  onRemoveItem: (productId: string) => void;
  onClearWishlist: () => void;
  onAddToCart: (product: Product) => void;
}

export function Wishlist({ isOpen, onClose, items, onRemoveItem, onClearWishlist, onAddToCart }: WishlistProps) {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Wishlist-Panel */}
      <div className="fixed inset-y-0 right-0 max-w-md w-full bg-white shadow-xl flex flex-col">
        {/* Header */}
        <div className="px-4 py-6 bg-primary text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6" />
            <h2 className="text-xl font-bold">Favoriten</h2>
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
              <Heart className="h-16 w-16 mb-4" />
              <p className="text-lg font-medium">Ihre Favoritenliste ist leer</p>
              <p className="mt-1">Fügen Sie Produkte zu Ihren Favoriten hinzu</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((product) => (
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
                    <p className="text-gray-500 text-sm">
                      {product.price.toLocaleString('de-DE', {
                        style: 'currency',
                        currency: 'EUR'
                      })}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => onAddToCart(product)}
                      className="text-secondary hover:text-secondary-dark"
                      title="In den Warenkorb"
                    >
                      <ShoppingCart className="h-5 w-5" />
                    </button>
                    <button 
                      onClick={() => onRemoveItem(product.id)}
                      className="text-gray-400 hover:text-red-500"
                      title="Aus Favoriten entfernen"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Footer */}
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={onClearWishlist}
            className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={items.length === 0}
          >
            <Trash2 size={16} />
            <span>Favoriten leeren</span>
          </button>
        </div>
      </div>
    </div>
  );
}