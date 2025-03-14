import React, { useState } from 'react';
import { Star, ShoppingCart, ArrowLeft, Heart, Share2 } from 'lucide-react';
import { Product } from '../types/product';

interface ProductDetailProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onBack: () => void;
  onAddToWishlist?: (product: Product) => void;
  isInWishlist?: boolean;
}

export function ProductDetail({ 
  product, 
  onAddToCart, 
  onBack, 
  onAddToWishlist, 
  isInWishlist = false 
}: ProductDetailProps) {
  const [imageError, setImageError] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'details' | 'reviews'>('description');
  const [showShareOptions, setShowShareOptions] = useState(false);

  const handleAddToCart = () => {
    // Füge das Produkt entsprechend der ausgewählten Menge zum Warenkorb hinzu
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product);
    }
  };

  const handleAddToWishlist = () => {
    if (onAddToWishlist) {
      onAddToWishlist(product);
    }
  };

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleShare = () => {
    setShowShareOptions(!showShareOptions);
  };

  const shareProduct = (platform: 'facebook' | 'twitter' | 'whatsapp' | 'email') => {
    const productUrl = window.location.href;
    const productName = encodeURIComponent(product.name);
    const productDescription = encodeURIComponent(product.description);
    
    let shareUrl = '';
    
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${productUrl}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${productName}&url=${productUrl}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${productName}%20-%20${productUrl}`;
        break;
      case 'email':
        shareUrl = `mailto:?subject=${productName}&body=${productDescription}%0A%0A${productUrl}`;
        break;
    }
    
    window.open(shareUrl, '_blank');
    setShowShareOptions(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <button 
        onClick={onBack}
        className="flex items-center text-secondary mb-4 hover:text-secondary-dark"
      >
        <ArrowLeft size={18} className="mr-1" />
        Zurück zu allen Produkten
      </button>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
            {!imageError ? (
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-full object-cover"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="bg-primary p-6 rounded-full">
                <span className="text-white text-3xl font-bold">{product.name.substring(6)}</span>
              </div>
            )}
          </div>
          
          {/* Zusätzliche Produktbilder (Platzhalter) */}
          <div className="grid grid-cols-4 gap-2 mt-4">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="w-full h-16 bg-gray-100 rounded cursor-pointer hover:opacity-80">
                {!imageError ? (
                  <img 
                    src={product.imageUrl} 
                    alt={`${product.name} Ansicht ${index}`} 
                    className="w-full h-full object-cover rounded"
                  />
                ) : (
                  <div className="bg-primary h-full w-full rounded flex items-center justify-center">
                    <span className="text-white font-bold">{index}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div>
          {product.badge && (
            <span className="inline-block bg-secondary text-white text-xs font-bold px-2 py-1 rounded mb-2">
              {product.badge}
            </span>
          )}
          
          <h1 className="text-3xl font-bold text-primary mb-2">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={18} 
                className={i < (product.rating || 5) ? "text-gold fill-gold" : "text-gray-300"} 
              />
            ))}
            <span className="text-sm text-gray-500 ml-2">({product.reviewCount || 0} Bewertungen)</span>
          </div>
          
          <p className="text-gray-700 mb-6">{product.description}</p>
          
          <div className="mb-6">
            <span className="text-2xl font-bold text-primary">
              {product.price.toLocaleString('de-DE', {
                style: 'currency',
                currency: 'EUR'
              })}
            </span>
            <span className="text-sm text-gray-500 ml-2">inkl. MwSt.</span>
          </div>
          
          <div className="flex items-center mb-6">
            <div className="flex items-center border border-gray-300 rounded-md mr-4">
              <button 
                onClick={decreaseQuantity}
                className="px-3 py-1 text-gray-600 hover:bg-gray-100"
              >
                -
              </button>
              <span className="px-4 py-1 border-x border-gray-300">{quantity}</span>
              <button 
                onClick={increaseQuantity}
                className="px-3 py-1 text-gray-600 hover:bg-gray-100"
              >
                +
              </button>
            </div>
            
            <button
              onClick={handleAddToCart}
              className="bg-secondary text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-secondary-dark transition-colors"
            >
              <ShoppingCart size={20} />
              <span>In den Warenkorb</span>
            </button>
          </div>
          
          <div className="flex gap-4 mb-8">
            <button
              onClick={handleAddToWishlist}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${
                isInWishlist 
                  ? 'border-red-300 text-red-500 bg-red-50' 
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Heart size={18} className={isInWishlist ? "fill-red-500" : ""} />
              <span>{isInWishlist ? 'In Favoriten' : 'Zu Favoriten hinzufügen'}</span>
            </button>
            
            <div className="relative">
              <button
                onClick={handleShare}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                <Share2 size={18} />
                <span>Teilen</span>
              </button>
              
              {showShareOptions && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg p-2 z-10 w-48">
                  <button 
                    onClick={() => shareProduct('facebook')} 
                    className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded flex items-center gap-2"
                  >
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                    </svg>
                    <span>Facebook</span>
                  </button>
                  <button 
                    onClick={() => shareProduct('twitter')} 
                    className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded flex items-center gap-2"
                  >
                    <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z" />
                    </svg>
                    <span>Twitter</span>
                  </button>
                  <button 
                    onClick={() => shareProduct('whatsapp')} 
                    className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded flex items-center gap-2"
                  >
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375c-.99-1.576-1.516-3.391-1.516-5.26 0-5.445 4.455-9.885 9.942-9.885 2.654 0 5.145 1.035 7.021 2.91 1.875 1.859 2.909 4.35 2.909 6.99-.004 5.444-4.46 9.885-9.935 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411" />
                    </svg>
                    <span>WhatsApp</span>
                  </button>
                  <button 
                    onClick={() => shareProduct('email')} 
                    className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded flex items-center gap-2"
                  >
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <span>E-Mail</span>
                  </button>
                </div>
              )}
            </div>
          </div>
          
          {/* Tabs für Produktdetails */}
          <div className="border-b border-gray-200 mb-4">
            <div className="flex space-x-8">
              <button
                className={`py-2 font-medium border-b-2 ${
                  activeTab === 'description' 
                    ? 'border-secondary text-secondary' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('description')}
              >
                Beschreibung
              </button>
              <button
                className={`py-2 font-medium border-b-2 ${
                  activeTab === 'details' 
                    ? 'border-secondary text-secondary' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('details')}
              >
                Details
              </button>
              <button
                className={`py-2 font-medium border-b-2 ${
                  activeTab === 'reviews' 
                    ? 'border-secondary text-secondary' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('reviews')}
              >
                Bewertungen
              </button>
            </div>
          </div>
          
          <div>
            {activeTab === 'description' && (
              <div className="text-gray-700">
                <p>{product.description}</p>
                {product.longDescription && (
                  <div className="mt-4 prose" dangerouslySetInnerHTML={{ __html: product.longDescription }} />
                )}
              </div>
            )}
            
            {activeTab === 'details' && (
              <div className="text-gray-700">
                <h3 className="text-lg font-semibold mb-2 text-primary">Anwendungshinweise</h3>
                <p>{product.details || 'Keine detaillierten Anwendungshinweise verfügbar.'}</p>
                
                <h3 className="text-lg font-semibold mt-4 mb-2 text-primary">Inhaltsstoffe</h3>
                <p>Hochwertige, natürliche Inhaltsstoffe, speziell abgestimmt auf Ihre individuellen Bedürfnisse.</p>
                
                <h3 className="text-lg font-semibold mt-4 mb-2 text-primary">Lieferumfang</h3>
                <p>1x {product.name} in der Standardgröße</p>
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div className="text-gray-700">
                <div className="flex items-center mb-4">
                  <div className="flex mr-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={24} 
                        className={i < (product.rating || 5) ? "text-gold fill-gold" : "text-gray-300"} 
                      />
                    ))}
                  </div>
                  <span className="text-lg font-medium">{product.rating || 5}/5</span>
                  <span className="text-gray-500 ml-2">({product.reviewCount || 0} Bewertungen)</span>
                </div>
                
                <p className="text-gray-600">
                  Lesen Sie alle Bewertungen in der Bewertungssektion.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}