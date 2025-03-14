import React from 'react';
import { ProductCard } from './ProductCard';
import { Product } from '../types/product';

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onProductSelect: (product: Product) => void;
}

export function ProductGrid({ products, onAddToCart, onProductSelect }: ProductGridProps) {
  // Berechne die Anzahl der Produkte in der ersten Reihe
  const firstRowCount = 3;
  const firstRowProducts = products.slice(0, firstRowCount);
  const secondRowProducts = products.slice(firstRowCount);

  return (
    <div className="space-y-6">
      {/* Erste Reihe mit 3 Produkten */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {firstRowProducts.map((product) => (
          <div key={product.id} onClick={() => onProductSelect(product)} className="cursor-pointer">
            <ProductCard
              product={product}
              onAddToCart={(p) => {
                // Verhindert, dass das Klickereignis zum übergeordneten Element weitergeleitet wird
                event?.stopPropagation();
                onAddToCart(p);
              }}
            />
          </div>
        ))}
      </div>
      
      {/* Zweite Reihe mit 2 Produkten, zentriert */}
      {secondRowProducts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:w-2/3 mx-auto">
          {secondRowProducts.map((product) => (
            <div key={product.id} onClick={() => onProductSelect(product)} className="cursor-pointer">
              <ProductCard
                product={product}
                onAddToCart={(p) => {
                  // Verhindert, dass das Klickereignis zum übergeordneten Element weitergeleitet wird
                  event?.stopPropagation();
                  onAddToCart(p);
                }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}