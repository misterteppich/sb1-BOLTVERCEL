import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Product } from '../types/product';
import { products } from '../data/products';

interface RelatedProductsProps {
  currentProductId: string;
  onProductSelect: (product: Product) => void;
}

export function RelatedProducts({ currentProductId, onProductSelect }: RelatedProductsProps) {
  // Filtere das aktuelle Produkt aus und wähle maximal 3 andere Produkte aus
  const relatedProducts = products
    .filter(product => product.id !== currentProductId)
    .slice(0, 3);

  if (relatedProducts.length === 0) return null;

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.currentTarget;
    target.onerror = null;
    target.style.display = 'none';
    
    // Create fallback element
    const fallback = document.createElement('div');
    fallback.className = 'bg-primary p-4 rounded-full w-full h-full flex items-center justify-center';
    fallback.innerHTML = `<span class="text-white font-bold text-xl">${target.alt.substring(6)}</span>`;
    
    // Safely append fallback
    if (target.parentElement) {
      target.parentElement.appendChild(fallback);
    }
  };

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold text-primary mb-6">Das könnte Sie auch interessieren</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedProducts.map((product) => (
          <div 
            key={product.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => onProductSelect(product)}
          >
            <div className="h-48 bg-gray-100 relative overflow-hidden">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-full object-cover"
                onError={handleImageError}
              />
              {product.badge && (
                <span className="absolute top-2 right-2 bg-secondary text-white text-xs font-bold px-2 py-1 rounded">
                  {product.badge}
                </span>
              )}
            </div>
            
            <div className="p-4">
              <h3 className="font-semibold text-primary mb-1">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
              
              <div className="flex items-center justify-between">
                <span className="font-bold text-primary">
                  {product.price.toLocaleString('de-DE', {
                    style: 'currency',
                    currency: 'EUR'
                  })}
                </span>
                <button className="text-secondary hover:text-secondary-dark flex items-center gap-1 text-sm font-medium">
                  <span>Details</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}