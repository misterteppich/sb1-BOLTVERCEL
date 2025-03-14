import React, { useState } from 'react';
import { ShoppingCart, Star, Info, Eye, Heart } from 'lucide-react';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [showDetails, setShowDetails] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToCartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
  };

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    
    if (!isFavorite) {
      const toast = document.createElement('div');
      const toastId = `toast-${Date.now()}`;
      toast.id = toastId;
      toast.className = 'fixed top-20 right-4 bg-primary text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-fade-in-out';
      toast.textContent = `${product.name} wurde zu Favoriten hinzugefügt`;
      document.body.appendChild(toast);
      
      setTimeout(() => {
        const toastElement = document.getElementById(toastId);
        if (toastElement && toastElement.parentNode) {
          toastElement.parentNode.removeChild(toastElement);
        }
      }, 3000);
    }
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <div className="w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
          {!imageError ? (
            <img 
              src={product.imageUrl} 
              alt={product.name} 
              className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="bg-primary p-4 rounded-full">
              <span className="text-white text-xl font-bold">{product.name.substring(6)}</span>
            </div>
          )}
          
          {isHovered && (
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
              <button className="bg-white text-primary hover:bg-primary hover:text-white p-2 rounded-full transition-colors">
                <Eye size={20} />
              </button>
            </div>
          )}
        </div>
        {product.badge && (
          <span className="absolute top-2 right-2 bg-secondary text-white text-xs font-bold px-2 py-1 rounded">
            {product.badge}
          </span>
        )}
        
        <button 
          onClick={toggleFavorite}
          className="absolute top-2 left-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
        >
          <Heart 
            size={18} 
            className={isFavorite ? "text-red-500 fill-red-500" : "text-gray-400"} 
          />
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-primary">{product.name}</h3>
        <p className="text-gray-600 text-sm mt-1 h-12 overflow-hidden">{product.description}</p>
        
        <div className="flex items-center mt-2">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className={i < (product.rating || 5) ? "text-gold fill-gold" : "text-gray-300"} 
            />
          ))}
          <span className="text-sm text-gray-500 ml-1">({product.reviewCount || 0})</span>
        </div>
        
        {product.details && (
          <div className="mt-2">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setShowDetails(!showDetails);
              }}
              className="text-secondary text-sm flex items-center gap-1 hover:text-secondary-dark"
            >
              <Info size={14} />
              <span>{showDetails ? 'Details ausblenden' : 'Details anzeigen'}</span>
            </button>
            
            {showDetails && (
              <div className="mt-2 text-sm text-gray-600 bg-gray-50 p-2 rounded">
                {product.details}
              </div>
            )}
          </div>
        )}
        
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-primary">
            {product.price.toLocaleString('de-DE', {
              style: 'currency',
              currency: 'EUR'
            })}
          </span>
          <button
            onClick={handleAddToCartClick}
            className="bg-secondary text-white px-3 py-2 rounded-lg flex items-center gap-1 hover:bg-secondary-dark transition-colors"
          >
            <ShoppingCart size={18} />
            <span>In den Warenkorb</span>
          </button>
        </div>
      </div>
    </div>
  );
}