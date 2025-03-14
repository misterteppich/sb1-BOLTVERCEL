import React, { useState, useEffect } from 'react';
import { ShoppingCart, Filter, ChevronDown, ChevronUp, Search } from 'lucide-react';
import { Product } from '../types/product';
import { products } from '../data/products';
import { ProductCard } from './ProductCard';

interface ShopProps {
  onProductSelect: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

type SortOption = 'name' | 'price-asc' | 'price-desc' | 'rating';
type FilterCategory = 'all' | 'blutgruppe' | 'detox' | 'regeneration';

export function Shop({ onProductSelect, onAddToCart }: ShopProps) {
  const [sortBy, setSortBy] = useState<SortOption>('name');
  const [filterBy, setFilterBy] = useState<FilterCategory>('all');
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  
  useEffect(() => {
    let result = [...products];
    
    if (filterBy !== 'all') {
      result = result.filter(product => {
        if (filterBy === 'blutgruppe') {
          return product.name.includes('A') || product.name.includes('O');
        } else if (filterBy === 'detox') {
          return product.name.includes('DETOX');
        } else if (filterBy === 'regeneration') {
          return product.name.includes('WOUNDS') || product.name.includes('MULTI');
        }
        return true;
      });
    }
    
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        product => 
          product.name.toLowerCase().includes(query) || 
          product.description.toLowerCase().includes(query)
      );
    }
    
    result.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        default:
          return 0;
      }
    });
    
    setFilteredProducts(result);
  }, [sortBy, filterBy, searchQuery]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };
  
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-primary mb-8">Shop</h1>
        
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <form onSubmit={handleSearch} className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Suchen Sie nach Produkten..."
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            </div>
          </form>
          
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <Filter size={20} />
            <span>Filter & Sortierung</span>
            {showFilters ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
        
        {showFilters && (
          <div className="bg-gray-50 p-6 rounded-lg mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-primary mb-3">Filtern nach:</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="filter"
                    checked={filterBy === 'all'}
                    onChange={() => setFilterBy('all')}
                    className="mr-2"
                  />
                  Alle Produkte
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="filter"
                    checked={filterBy === 'blutgruppe'}
                    onChange={() => setFilterBy('blutgruppe')}
                    className="mr-2"
                  />
                  Blutgruppen-Produkte
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="filter"
                    checked={filterBy === 'detox'}
                    onChange={() => setFilterBy('detox')}
                    className="mr-2"
                  />
                  Entgiftung
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="filter"
                    checked={filterBy === 'regeneration'}
                    onChange={() => setFilterBy('regeneration')}
                    className="mr-2"
                  />
                  Regeneration
                </label>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-primary mb-3">Sortieren nach:</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="sort"
                    checked={sortBy === 'name'}
                    onChange={() => setSortBy('name')}
                    className="mr-2"
                  />
                  Name (A-Z)
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="sort"
                    checked={sortBy === 'price-asc'}
                    onChange={() => setSortBy('price-asc')}
                    className="mr-2"
                  />
                  Preis (aufsteigend)
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="sort"
                    checked={sortBy === 'price-desc'}
                    onChange={() => setSortBy('price-desc')}
                    className="mr-2"
                  />
                  Preis (absteigend)
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="sort"
                    checked={sortBy === 'rating'}
                    onChange={() => setSortBy('rating')}
                    className="mr-2"
                  />
                  Bewertung
                </label>
              </div>
            </div>
          </div>
        )}
        
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <ShoppingCart className="h-16 w-16 mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-600 mb-2">Keine Produkte gefunden</h2>
            <p className="text-gray-500">
              Versuchen Sie es mit anderen Suchbegriffen oder Filtern.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} onClick={() => onProductSelect(product)} className="cursor-pointer">
                <ProductCard
                  product={product}
                  onAddToCart={(p) => {
                    event?.stopPropagation();
                    onAddToCart(p);
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}