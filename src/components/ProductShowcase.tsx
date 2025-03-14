import React from 'react';
import { ArrowRight } from 'lucide-react';
import { products } from '../data/products';

interface ProductShowcaseProps {
  onProductSelect?: (productId: string) => void;
}

export function ProductShowcase({ onProductSelect }: ProductShowcaseProps = {}) {
  // Finde die entsprechenden Produkte anhand ihrer Namen
  const woundsProduct = products.find(p => p.name === 'NUTRIG WOUNDS');
  const multiProduct = products.find(p => p.name === 'NUTRIG MULTI+BCAA');
  const aProduct = products.find(p => p.name === 'NUTRIG A');

  const handleProductClick = (productId: string) => {
    if (onProductSelect) {
      onProductSelect(productId);
    }
  };

  return (
    <section id="product-highlights" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">Unsere Bestseller</h2>
        
        {/* NutriG Wounds */}
        <div className="mb-16 bg-gradient-to-r from-white to-teal-50 rounded-xl overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8">
              <h3 className="text-3xl font-bold text-primary mb-2">NutriG Wounds</h3>
              <p className="text-xl text-gray-600 mb-4">Ihre Unterstützung für Heilung und Regeneration</p>
              
              <p className="text-gray-700 mb-6">
                Diese einzigartige Kombination aus Kollagen, Glycin, Prolin, Lysin, Vitamin C, Zink und 
                Omega-3 fördert die Wundheilung, stärkt Gewebe und schützt vor Entzündungen. 
                Perfekt nach Operationen oder Verletzungen, um den Körper optimal zu versorgen.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-secondary bg-opacity-10 p-2 rounded-full mr-3">
                    <span className="text-secondary font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Regeneration</h4>
                    <p className="text-gray-600">Fördert Haut- und Gewebereparatur</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary bg-opacity-10 p-2 rounded-full mr-3">
                    <span className="text-secondary font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Immunsystem</h4>
                    <p className="text-gray-600">Stärkt die Abwehrkräfte</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary bg-opacity-10 p-2 rounded-full mr-3">
                    <span className="text-secondary font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Darmgesundheit</h4>
                    <p className="text-gray-600">Verbessert die Nährstoffaufnahme</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary bg-opacity-10 p-2 rounded-full mr-3">
                    <span className="text-secondary font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Entzündungshemmung</h4>
                    <p className="text-gray-600">Unterstützt Heilung und Zellschutz</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-primary">49,95 €</span>
                <button 
                  onClick={() => woundsProduct && handleProductClick(woundsProduct.id)}
                  className="bg-secondary hover:bg-secondary-dark text-white font-bold py-2 px-4 rounded-lg transition-colors flex items-center gap-2"
                >
                  <span>Mehr erfahren</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            <div className="flex items-center justify-center p-8 bg-teal-50">
              <div className="relative w-64 h-64">
                <img 
                  src="/images/nutrig-wounds.jpg" 
                  alt="NutriG Wounds Produkt" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = '';
                    if (target.parentElement) {
                      target.parentElement.innerHTML = `
                        <div class="w-64 h-64 bg-primary rounded-full flex items-center justify-center">
                          <span class="text-white text-3xl font-bold">WOUNDS</span>
                        </div>
                      `;
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* NutriG Multi + BCAA */}
        <div className="mb-16 bg-gradient-to-r from-teal-50 to-primary-light rounded-xl overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center justify-center p-8 bg-teal-50 order-2 md:order-1">
              <div className="relative w-64 h-64">
                <img 
                  src="/images/nutrig-multi-bcaa.jpg" 
                  alt="NutriG Multi+BCAA Produkt" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = '';
                    if (target.parentElement) {
                      target.parentElement.innerHTML = `
                        <div class="w-64 h-64 bg-primary rounded-full flex items-center justify-center">
                          <span class="text-white text-3xl font-bold">MULTI+BCAA</span>
                        </div>
                      `;
                    }
                  }}
                />
              </div>
            </div>
            
            <div className="p-8 order-1 md:order-2 text-white bg-primary-light">
              <h3 className="text-3xl font-bold mb-2">NutriG Multi + BCAA</h3>
              <p className="text-xl text-teal-100 mb-4">Die perfekte Rundum-Versorgung für Energie, Regeneration und Vitalität</p>
              
              <p className="text-gray-100 mb-6">
                Diese einzigartige Kombination aus Vitaminen, Mineralstoffen und BCAAs unterstützt Ihren Körper optimal: 
                von der Energieproduktion über den Zellschutz bis hin zur Muskelregeneration. Entwickelt für aktive 
                Menschen und zur Unterstützung nach bariatrischen Eingriffen.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-secondary p-2 rounded-full mr-3">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-teal-100">Mehr Energie & Fokus</h4>
                    <p className="text-gray-200">Dank Vitamin B-Komplex und BCAAs</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary p-2 rounded-full mr-3">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-teal-100">Starke Muskeln & schnelle Regeneration</h4>
                    <p className="text-gray-200">Mit Leucin, Isoleucin und Valin</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary p-2 rounded-full mr-3">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-teal-100">Gesundes Immunsystem & Zellschutz</h4>
                    <p className="text-gray-200">Durch Vitamin C, Zink und Selen</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-white">44,95 €</span>
                <button 
                  onClick={() => multiProduct && handleProductClick(multiProduct.id)}
                  className="bg-secondary hover:bg-secondary-dark text-white font-bold py-2 px-4 rounded-lg transition-colors flex items-center gap-2"
                >
                  <span>Mehr erfahren</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* NutriG A */}
        <div className="bg-gradient-to-r from-white to-teal-50 rounded-xl overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8">
              <h3 className="text-3xl font-bold text-primary mb-2">NutriG A</h3>
              <p className="text-xl text-gray-600 mb-4">Gezielt entwickelt für die Bedürfnisse der Blutgruppe A</p>
              
              <p className="text-gray-700 mb-6">
                Unsere speziell für die Blutgruppe A entwickelte Formel unterstützt Ihr Immunsystem, 
                fördert die Herz-Kreislauf-Gesundheit und hilft beim Stressabbau. Eine perfekte Kombination 
                aus Vitaminen, Mineralstoffen und Pflanzenextrakten für Ihr Wohlbefinden.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-secondary bg-opacity-10 p-2 rounded-full mr-3">
                    <span className="text-secondary font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Stärkung des Immunsystems</h4>
                    <p className="text-gray-600">Durch Vitamin C, Zink & Selen</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary bg-opacity-10 p-2 rounded-full mr-3">
                    <span className="text-secondary font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Herz-Kreislauf-Gesundheit</h4>
                    <p className="text-gray-600">Mit Niacin & Knoblauch</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary bg-opacity-10 p-2 rounded-full mr-3">
                    <span className="text-secondary font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Stressabbau & Energie</h4>
                    <p className="text-gray-600">Dank Vitamin B-Komplex & Magnesium</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-primary">39,95 €</span>
                <button 
                  onClick={() => aProduct && handleProductClick(aProduct.id)}
                  className="bg-secondary hover:bg-secondary-dark text-white font-bold py-2 px-4 rounded-lg transition-colors flex items-center gap-2"
                >
                  <span>Mehr erfahren</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            <div className="flex items-center justify-center p-8 bg-teal-50">
              <div className="relative w-64 h-64">
                <img 
                  src="/images/nutrig-a.jpg" 
                  alt="NutriG A Produkt" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = '';
                    if (target.parentElement) {
                      target.parentElement.innerHTML = `
                        <div class="w-64 h-64 bg-primary rounded-full flex items-center justify-center">
                          <span class="text-white text-3xl font-bold">A</span>
                        </div>
                      `;
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}