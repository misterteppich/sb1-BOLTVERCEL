import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Product } from '../types/product';
import { ArrowLeft, CreditCard, CheckCircle } from 'lucide-react';

// Stripe-Testschlüssel (in einer echten Anwendung würde dieser aus einer Umgebungsvariable kommen)
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

interface CheckoutFormProps {
  items: Product[];
  customerData: any;
  onBack: () => void;
  onComplete: () => void;
}

function CheckoutForm({ items, customerData, onBack, onComplete }: CheckoutFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [cardComplete, setCardComplete] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  
  // Berechne den Gesamtpreis
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const shipping = subtotal >= 50 ? 0 : 4.95;
  const total = subtotal + shipping;
  
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (!stripe || !elements) {
      // Stripe.js wurde noch nicht geladen
      return;
    }
    
    if (error) {
      elements.getElement(CardElement)?.focus();
      return;
    }
    
    if (!cardComplete) {
      setError('Bitte füllen Sie die Kreditkarteninformationen aus.');
      return;
    }
    
    setProcessing(true);
    
    // In einer echten Anwendung würde hier eine Anfrage an den Server gesendet werden,
    // um eine Zahlung zu erstellen. Hier simulieren wir eine erfolgreiche Zahlung.
    setTimeout(() => {
      setProcessing(false);
      setSucceeded(true);
      
      // Nach 2 Sekunden den Checkout abschließen
      setTimeout(() => {
        onComplete();
      }, 2000);
    }, 2000);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-8">
        <button 
          type="button"
          onClick={onBack}
          className="flex items-center text-secondary mb-4 hover:text-secondary-dark"
        >
          <ArrowLeft size={18} className="mr-1" />
          Zurück zur Bestellübersicht
        </button>
        
        <h2 className="text-2xl font-bold text-primary mb-4">Zahlungsinformationen</h2>
      </div>
      
      {succeeded ? (
        <div className="text-center py-8">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-primary mb-2">Zahlung erfolgreich!</h3>
          <p className="text-gray-600 mb-4">
            Ihre Zahlung wurde erfolgreich verarbeitet. Sie werden in Kürze weitergeleitet.
          </p>
        </div>
      ) : (
        <>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Kreditkarte
            </label>
            <div className="border border-gray-300 rounded-md p-4 bg-white">
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: '16px',
                      color: '#424770',
                      '::placeholder': {
                        color: '#aab7c4',
                      },
                    },
                    invalid: {
                      color: '#9e2146',
                    },
                  },
                }}
                onChange={(e) => {
                  setError(e.error ? e.error.message : null);
                  setCardComplete(e.complete);
                }}
              />
            </div>
            {error && <div className="mt-2 text-sm text-red-600">{error}</div>}
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h3 className="font-semibold text-primary mb-2">Bestellübersicht</h3>
            <div className="space-y-2">
              {items.map((item, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span>{item.name}</span>
                  <span>{item.price.toFixed(2)} €</span>
                </div>
              ))}
              <div className="border-t border-gray-200 pt-2 mt-2">
                <div className="flex justify-between text-sm">
                  <span>Zwischensumme</span>
                  <span>{subtotal.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Versand</span>
                  <span>{shipping.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between font-semibold mt-2">
                  <span>Gesamtsumme</span>
                  <span>{total.toFixed(2)} €</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500 flex items-center">
              <CreditCard size={16} className="mr-1" />
              <span>Sichere Zahlung via Stripe</span>
            </div>
            <button
              type="submit"
              disabled={!stripe || processing}
              className={`bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center gap-2 ${
                (!stripe || processing) ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {processing ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Zahlung wird verarbeitet...
                </>
              ) : (
                'Jetzt bezahlen'
              )}
            </button>
          </div>
          
          <div className="mt-4 text-xs text-gray-500 text-center">
            <p>
              Zu Testzwecken können Sie die folgenden Kreditkartendaten verwenden:
            </p>
            <p>
              Kartennummer: 4242 4242 4242 4242 | Ablaufdatum: Beliebiges zukünftiges Datum | CVC: Beliebige 3 Ziffern
            </p>
          </div>
        </>
      )}
    </form>
  );
}

interface StripeCheckoutProps {
  items: Product[];
  customerData: any;
  onBack: () => void;
  onComplete: () => void;
}

export function StripeCheckout({ items, customerData, onBack, onComplete }: StripeCheckoutProps) {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm 
        items={items} 
        customerData={customerData} 
        onBack={onBack} 
        onComplete={onComplete} 
      />
    </Elements>
  );
}