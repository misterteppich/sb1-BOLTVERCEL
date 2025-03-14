import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { Product } from '../types/product';

interface WishlistButtonProps {
  onToggle?: () => void;
  count: number;
}

export function WishlistButton({ onToggle, count }: WishlistButtonProps) {
  return (
    <div className="relative cursor-pointer" onClick={onToggle}>
      <Heart className="h-6 w-6 text-primary hover:text-secondary" />
      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {count}
        </span>
      )}
    </div>
  );
}

export function useWishlist() {
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  useEffect(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      try {
        setWishlistItems(JSON.parse(savedWishlist));
      } catch (e) {
        console.error('Fehler beim Laden der Favoriten:', e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const toggleWishlist = () => {
    setIsWishlistOpen(!isWishlistOpen);
  };

  const addToWishlist = (product: Product) => {
    if (!wishlistItems.some(item => item.id === product.id)) {
      setWishlistItems([...wishlistItems, product]);
      
      const toast = document.createElement('div');
      const toastId = `wishlist-toast-${Date.now()}`;
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

  const removeFromWishlist = (productId: string) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== productId));
  };

  const isInWishlist = (productId: string) => {
    return wishlistItems.some(item => item.id === productId);
  };

  return {
    wishlistItems,
    isWishlistOpen,
    toggleWishlist,
    addToWishlist,
    removeFromWishlist,
    isInWishlist
  };
}