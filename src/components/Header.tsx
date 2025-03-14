import React, { useState, useEffect } from 'react';
import { ShoppingCart, Search, User, Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { WishlistButton } from './WishlistButton';

interface HeaderProps {
  cartItemCount: number;
  wishlistCount: number;
  onShowAboutMe: () => void;
  onShowProducts: () => void;
  onShowHome: () => void;
  onShowContact: () => void;
  onShowReviews: () => void;
  onShowShop: () => void;
  onCartClick: () => void;
  onWishlistClick: () => void;
}

export function Header({ 
  cartItemCount, 
  wishlistCount,
  onShowAboutMe, 
  onShowProducts, 
  onShowHome, 
  onShowContact,
  onShowReviews,
  onShowShop,
  onCartClick,
  onWishlistClick
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (searchOpen) {
      setSearchQuery('');
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchOpen(false);
    setSearchQuery('');
  };

  const scrollToHighlights = () => {
    const highlightsSection = document.getElementById('product-highlights');
    if (highlightsSection) {
      highlightsSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      onShowHome();
      setTimeout(() => {
        const section = document.getElementById('product-highlights');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`bg-white sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={onShowHome}>
            <Logo size="small" />
            <span className="text-xl font-bold text-primary">Nutrigenetic</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" onClick={onShowHome} className="text-primary hover:text-secondary font-medium">Startseite</a>
            <a href="#" onClick={scrollToHighlights} className="text-primary hover:text-secondary font-medium">Highlights</a>
            <a href="#" onClick={onShowShop} className="text-primary hover:text-secondary font-medium">Shop</a>
            <a href="#" onClick={onShowProducts} className="text-primary hover:text-secondary font-medium">Produkte</a>
            <a href="#" onClick={onShowReviews} className="text-primary hover:text-secondary font-medium">Bewertungen</a>
            <a href="#" onClick={onShowAboutMe} className="text-primary hover:text-secondary font-medium">Über uns</a>
            <a href="#" onClick={onShowContact} className="text-primary hover:text-secondary font-medium">Kontakt</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button onClick={toggleSearch} className="text-primary hover:text-secondary">
              <Search className="h-5 w-5" />
            </button>
            <WishlistButton onToggle={onWishlistClick} count={wishlistCount} />
            <User className="h-5 w-5 text-primary hover:text-secondary cursor-pointer" />
            <div className="relative cursor-pointer" onClick={onCartClick}>
              <ShoppingCart className="h-6 w-6 text-primary hover:text-secondary" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </div>
            <button 
              className="md:hidden text-primary"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-2">
          <div className="px-4 space-y-1">
            <a 
              href="#" 
              onClick={() => { onShowHome(); toggleMobileMenu(); }}
              className="block py-2 text-primary hover:text-secondary"
            >
              Startseite
            </a>
            <a 
              href="#" 
              onClick={scrollToHighlights}
              className="block py-2 text-primary hover:text-secondary"
            >
              Highlights
            </a>
            <a 
              href="#" 
              onClick={() => { onShowShop(); toggleMobileMenu(); }}
              className="block py-2 text-primary hover:text-secondary"
            >
              Shop
            </a>
            <a 
              href="#" 
              onClick={() => { onShowProducts(); toggleMobileMenu(); }}
              className="block py-2 text-primary hover:text-secondary"
            >
              Produkte
            </a>
            <a 
              href="#" 
              onClick={() => { onShowReviews(); toggleMobileMenu(); }}
              className="block py-2 text-primary hover:text-secondary"
            >
              Bewertungen
            </a>
            <a 
              href="#" 
              onClick={() => { onShowAboutMe(); toggleMobileMenu(); }}
              className="block py-2 text-primary hover:text-secondary"
            >
              Über uns
            </a>
            <a 
              href="#" 
              onClick={() => { onShowContact(); toggleMobileMenu(); }}
              className="block py-2 text-primary hover:text-secondary"
            >
              Kontakt
            </a>
          </div>
        </div>
      )}

      {searchOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md p-4 z-50">
          <form onSubmit={handleSearch} className="flex">
            <input
              type="text"
              placeholder="Suchen Sie nach Produkten..."
              className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-secondary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            <button
              type="submit"
              className="bg-secondary text-white p-2 rounded-r-md hover:bg-secondary-dark"
            >
              <Search className="h-5 w-5" />
            </button>
          </form>
        </div>
      )}
    </header>
  );
}