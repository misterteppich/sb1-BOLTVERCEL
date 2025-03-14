import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ProductGrid } from './components/ProductGrid';
import { ProductDetail } from './components/ProductDetail';
import { Testimonials } from './components/Testimonials';
import { AboutMe } from './components/AboutMe';
import { Footer } from './components/Footer';
import { PaymentMethods } from './components/PaymentMethods';
import { FAQ } from './components/FAQ';
import { Cart } from './components/Cart';
import { Modal } from './components/Modal';
import { Checkout } from './components/Checkout';
import { Newsletter } from './components/Newsletter';
import { ContactForm } from './components/ContactForm';
import { Reviews } from './components/Reviews';
import { ProductShowcase } from './components/ProductShowcase';
import { Shop } from './components/Shop';
import { StripeCheckout } from './components/StripeCheckout';
import { products } from './data/products';
import { Product } from './types/product';
import { Wishlist } from './components/Wishlist';
import { useWishlist } from './components/WishlistButton';
import { RelatedProducts } from './components/RelatedProducts';

function App() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showAboutMe, setShowAboutMe] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'products' | 'contact' | 'reviews' | 'shop'>('home');
  const [showCheckoutModal, setShowCheckoutModal] = useState<boolean>(false);
  const [isCheckout, setIsCheckout] = useState<boolean>(false);
  const [showCookieConsent, setShowCookieConsent] = useState<boolean>(false);
  const [checkoutStep, setCheckoutStep] = useState<'customer-info' | 'payment'>('customer-info');
  const [customerData, setCustomerData] = useState<any>(null);
  
  const { 
    wishlistItems, 
    isWishlistOpen, 
    toggleWishlist, 
    addToWishlist, 
    removeFromWishlist, 
    isInWishlist 
  } = useWishlist();

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookieConsent');
    if (!hasConsent) {
      setShowCookieConsent(true);
    }
  }, []);

  const handleCookieConsent = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowCookieConsent(false);
  };

  const handleAddToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
    
    const toast = document.createElement('div');
    const toastId = `cart-toast-${Date.now()}`;
    toast.id = toastId;
    toast.className = 'fixed top-20 right-4 bg-secondary text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-fade-in-out';
    toast.textContent = `${product.name} wurde zum Warenkorb hinzugefügt`;
    document.body.appendChild(toast);
    
    setTimeout(() => {
      const toastElement = document.getElementById(toastId);
      if (toastElement && toastElement.parentNode) {
        toastElement.parentNode.removeChild(toastElement);
      }
    }, 3000);
  };

  const handleRemoveFromCart = (productId: string) => {
    const indexToRemove = cartItems.findIndex(item => item.id === productId);
    
    if (indexToRemove !== -1) {
      const newCartItems = [...cartItems];
      newCartItems.splice(indexToRemove, 1);
      setCartItems(newCartItems);
    }
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckout(true);
    setCheckoutStep('customer-info');
    window.scrollTo(0, 0);
  };

  const handleCustomerInfoSubmit = (data: any) => {
    setCustomerData(data);
    setCheckoutStep('payment');
    window.scrollTo(0, 0);
  };

  const handleCompleteCheckout = () => {
    setShowCheckoutModal(true);
    setTimeout(() => {
      setCartItems([]);
      setIsCheckout(false);
      setShowCheckoutModal(false);
      setCheckoutStep('customer-info');
      setCustomerData(null);
    }, 3000);
  };

  const handleBackToCart = () => {
    setIsCheckout(false);
    setIsCartOpen(true);
  };

  const handleBackToCustomerInfo = () => {
    setCheckoutStep('customer-info');
  };

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setShowAboutMe(false);
    setCurrentPage('products');
    window.scrollTo(0, 0);
  };

  const handleBackToProducts = () => {
    setSelectedProduct(null);
  };

  const handleShowAboutMe = () => {
    setSelectedProduct(null);
    setShowAboutMe(true);
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  const handleShowProducts = () => {
    setShowAboutMe(false);
    setCurrentPage('products');
    window.scrollTo(0, 0);
  };

  const handleShowHome = () => {
    setShowAboutMe(false);
    setSelectedProduct(null);
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  const handleShowContact = () => {
    setShowAboutMe(false);
    setSelectedProduct(null);
    setCurrentPage('contact');
    window.scrollTo(0, 0);
  };

  const handleShowReviews = () => {
    setShowAboutMe(false);
    setSelectedProduct(null);
    setCurrentPage('reviews');
    window.scrollTo(0, 0);
  };

  const handleShowShop = () => {
    setShowAboutMe(false);
    setSelectedProduct(null);
    setCurrentPage('shop');
    window.scrollTo(0, 0);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const allProducts = products;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        cartItemCount={cartItems.length} 
        wishlistCount={wishlistItems.length}
        onShowAboutMe={handleShowAboutMe}
        onShowProducts={handleShowProducts}
        onShowHome={handleShowHome}
        onShowContact={handleShowContact}
        onShowReviews={handleShowReviews}
        onShowShop={handleShowShop}
        onCartClick={toggleCart}
        onWishlistClick={toggleWishlist}
      />
      
      {!isCheckout && currentPage === 'home' && <Hero />}
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isCheckout ? (
          checkoutStep === 'customer-info' ? (
            <Checkout 
              items={cartItems}
              onBack={handleBackToCart}
              onComplete={handleCustomerInfoSubmit}
            />
          ) : (
            <StripeCheckout 
              items={cartItems}
              customerData={customerData}
              onBack={handleBackToCustomerInfo}
              onComplete={handleCompleteCheckout}
            />
          )
        ) : (
          <>
            {showAboutMe ? (
              <AboutMe />
            ) : currentPage === 'contact' ? (
              <ContactForm />
            ) : currentPage === 'reviews' ? (
              <Reviews />
            ) : currentPage === 'shop' ? (
              <Shop 
                onProductSelect={handleProductSelect}
                onAddToCart={handleAddToCart}
              />
            ) : (
              <>
                {currentPage === 'home' && <Features />}
                
                {currentPage === 'home' && <ProductShowcase />}
                
                <section className="py-12">
                  <h2 className="text-3xl font-bold text-primary mb-8 text-center">Unsere Produkte</h2>
                  
                  {selectedProduct ? (
                    <>
                      <ProductDetail 
                        product={selectedProduct}
                        onAddToCart={handleAddToCart}
                        onBack={handleBackToProducts}
                        onAddToWishlist={addToWishlist}
                        isInWishlist={isInWishlist(selectedProduct.id)}
                      />
                      <RelatedProducts 
                        currentProductId={selectedProduct.id}
                        onProductSelect={handleProductSelect}
                      />
                    </>
                  ) : (
                    <ProductGrid 
                      products={allProducts}
                      onProductSelect={handleProductSelect}
                      onAddToCart={handleAddToCart}
                    />
                  )}
                </section>
                
                {currentPage === 'home' && (
                  <>
                    <Testimonials />
                    <PaymentMethods />
                    <FAQ />
                    <Newsletter />
                  </>
                )}
              </>
            )}
          </>
        )}
      </main>

      <Cart 
        isOpen={isCartOpen}
        onClose={toggleCart}
        items={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
        onCheckout={handleCheckout}
      />
      
      <Wishlist
        isOpen={isWishlistOpen}
        onClose={toggleWishlist}
        items={wishlistItems}
        onRemoveItem={removeFromWishlist}
        onClearWishlist={() => wishlistItems.forEach(item => removeFromWishlist(item.id))}
        onAddToCart={handleAddToCart}
      />

      <Modal
        isOpen={showCheckoutModal}
        onClose={() => setShowCheckoutModal(false)}
        title="Bestellung erfolgreich"
      >
        <div className="py-4">
          <p className="text-gray-700 mb-4">
            Vielen Dank für Ihren Einkauf! Ihre Bestellung wurde erfolgreich aufgegeben.
          </p>
          <p className="text-gray-700">
            Eine Bestätigungsmail wurde an Ihre E-Mail-Adresse gesendet.
          </p>
        </div>
      </Modal>

      {showCookieConsent && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 z-50">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0 md:mr-4">
              <p className="text-gray-700">
                Diese Website verwendet Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten.
                Durch die weitere Nutzung der Website stimmen Sie der Verwendung von Cookies zu.
              </p>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={handleCookieConsent}
                className="bg-secondary hover:bg-secondary-dark text-white font-bold py-2 px-4 rounded-lg transition-colors"
              >
                Akzeptieren
              </button>
              <button 
                onClick={handleCookieConsent}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-lg transition-colors"
              >
                Ablehnen
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer 
        onShowAboutMe={handleShowAboutMe} 
        onShowProducts={handleShowProducts}
        onShowContact={handleShowContact}
        onShowReviews={handleShowReviews}
        onShowShop={handleShowShop}
      />

      <style>{`
        @keyframes fadeInOut {
          0% { opacity: 0; transform: translateY(-20px); }
          10% { opacity: 1; transform: translateY(0); }
          90% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-20px); }
        }
        .animate-fade-in-out {
          animation: fadeInOut 3s ease-in-out;
        }
      `}</style>
    </div>
  );
}

export default App;