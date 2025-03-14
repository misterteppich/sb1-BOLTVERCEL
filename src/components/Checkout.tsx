import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { CreditCard, CheckCircle, ArrowLeft, Truck, CreditCard as CreditCardIcon, ShieldCheck } from 'lucide-react';
import { Product } from '../types/product';
import emailjs from '@emailjs/browser';

interface CheckoutProps {
  items: Product[];
  onBack: () => void;
  onComplete: (data: any) => void;
}

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  paymentMethod: 'credit-card' | 'paypal' | 'sepa';
  cardNumber?: string;
  cardExpiry?: string;
  cardCvc?: string;
  iban?: string;
  accountHolder?: string;
  newsletter: boolean;
  agb: boolean;
};

export function Checkout({ items, onBack, onComplete }: CheckoutProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormData>({
    defaultValues: {
      newsletter: false,
      agb: false
    }
  });
  
  // Gruppiere die Produkte nach ID und zähle die Anzahl
  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.id]) {
      acc[item.id] = {
        product: item,
        count: 0
      };
    }
    acc[item.id].count += 1;
    return acc;
  }, {} as Record<string, { product: Product, count: number }>);
  
  // Berechne den Gesamtpreis
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const shipping = 6.50; // Fixed shipping cost
  const total = subtotal + shipping;
  
  const onCustomerInfoSubmit: SubmitHandler<FormData> = (data) => {
    setIsProcessing(true);
    
    // Simuliere eine kurze Verarbeitungszeit
    setTimeout(() => {
      setIsProcessing(false);
      onComplete(data);
    }, 1000);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      {/* Header mit Schritten */}
      <div className="mb-8">
        <button 
          onClick={onBack}
          className="flex items-center text-secondary mb-4 hover:text-secondary-dark"
        >
          <ArrowLeft size={18} className="mr-1" />
          Zurück zum Warenkorb
        </button>
        
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-primary">Checkout</h2>
          <div className="flex items-center space-x-2">
            <span className="h-2 w-2 rounded-full bg-secondary"></span>
            <span className="h-2 w-2 rounded-full bg-gray-300"></span>
            <span className="h-2 w-2 rounded-full bg-gray-300"></span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Hauptinhalt (Formular oder Bestätigung) */}
        <div className="md:col-span-2">
          <form onSubmit={handleSubmit(onCustomerInfoSubmit)}>
            <h3 className="text-lg font-semibold mb-4 text-primary">Ihre Informationen</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">Vorname *</label>
                <input
                  id="firstName"
                  type="text"
                  className={`w-full p-2 border rounded-md ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                  {...register('firstName', { required: 'Vorname ist erforderlich' })}
                />
                {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName.message}</p>}
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Nachname *</label>
                <input
                  id="lastName"
                  type="text"
                  className={`w-full p-2 border rounded-md ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                  {...register('lastName', { required: 'Nachname ist erforderlich' })}
                />
                {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName.message}</p>}
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-Mail *</label>
              <input
                id="email"
                type="email"
                className={`w-full p-2 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                {...register('email', { 
                  required: 'E-Mail ist erforderlich',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Ungültige E-Mail-Adresse'
                  }
                })}
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
            </div>
            
            <div className="mb-6">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Adresse *</label>
              <input
                id="address"
                type="text"
                className={`w-full p-2 border rounded-md ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
                {...register('address', { required: 'Adresse ist erforderlich' })}
              />
              {errors.address && <p className="mt-1 text-sm text-red-500">{errors.address.message}</p>}
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">PLZ *</label>
                <input
                  id="postalCode"
                  type="text"
                  className={`w-full p-2 border rounded-md ${errors.postalCode ? 'border-red-500' : 'border-gray-300'}`}
                  {...register('postalCode', { required: 'PLZ ist erforderlich' })}
                />
                {errors.postalCode && <p className="mt-1 text-sm text-red-500">{errors.postalCode.message}</p>}
              </div>
              
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">Stadt *</label>
                <input
                  id="city"
                  type="text"
                  className={`w-full p-2 border rounded-md ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
                  {...register('city', { required: 'Stadt ist erforderlich' })}
                />
                {errors.city && <p className="mt-1 text-sm text-red-500">{errors.city.message}</p>}
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Land *</label>
              <select
                id="country"
                className={`w-full p-2 border rounded-md ${errors.country ? 'border-red-500' : 'border-gray-300'}`}
                {...register('country', { required: 'Land ist erforderlich' })}
              >
                <option value="">Land auswählen</option>
                <option value="Deutschland">Deutschland</option>
                <option value="Österreich">Österreich</option>
                <option value="Schweiz">Schweiz</option>
              </select>
              {errors.country && <p className="mt-1 text-sm text-red-500">{errors.country.message}</p>}
            </div>
            
            <div className="mb-6">
              <div className="flex items-center">
                <input
                  id="newsletter"
                  type="checkbox"
                  className="h-4 w-4 text-secondary border-gray-300 rounded"
                  {...register('newsletter')}
                />
                <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-700">
                  Ich möchte den Newsletter abonnieren und über Angebote informiert werden
                </label>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="agb"
                    type="checkbox"
                    className={`h-4 w-4 text-secondary border-gray-300 rounded ${errors.agb ? 'border-red-500' : ''}`}
                    {...register('agb', { required: 'Sie müssen den AGB zustimmen' })}
                  />
                </div>
                <div className="ml-2 text-sm">
                  <label htmlFor="agb" className="text-gray-700">
                    Ich habe die <a href="#" className="text-secondary hover:underline">AGB</a> und <a href="#" className="text-secondary hover:underline">Datenschutzerklärung</a> gelesen und stimme diesen zu *
                  </label>
                  {errors.agb && <p className="mt-1 text-sm text-red-500">{errors.agb.message}</p>}
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <button
                type="submit"
                disabled={isProcessing}
                className={`w-full bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center ${isProcessing ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isProcessing ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Verarbeitung...
                  </>
                ) : (
                  'Weiter zur Zahlung'
                )}
              </button>
            </div>
          </form>
        </div>
        
        {/* Zusammenfassung */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-primary">Bestellübersicht</h3>
          
          <div className="space-y-4 mb-6">
            {Object.values(groupedItems).map(({ product, count }) => (
              <div key={product.id} className="flex justify-between">
                <div>
                  <p className="font-medium">{product.name}</p>
                  <p className="text-sm text-gray-500">{count} × {product.price.toFixed(2)} €</p>
                </div>
                <p className="font-medium">{(product.price * count).toFixed(2)} €</p>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-200 pt-4 mb-4">
            <div className="flex justify-between mb-2">
              <p className="text-gray-600">Zwischensumme</p>
              <p className="font-medium">{subtotal.toFixed(2)} €</p>
            </div>
            <div className="flex justify-between mb-2">
              <p className="text-gray-600">Versand</p>
              <p className="font-medium">{shipping.toFixed(2)} €</p>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-between">
              <p className="font-semibold">Gesamtsumme</p>
              <p className="font-bold text-primary text-xl">{total.toFixed(2)} €</p>
            </div>
            <p className="text-sm text-gray-500 mt-1">inkl. MwSt.</p>
          </div>
          
          {/* Versand- und Zahlungsinformationen */}
          <div className="mt-6 space-y-4">
            <div className="flex items-center text-sm text-gray-600">
              <Truck size={16} className="mr-2 text-secondary" />
              <span>Kostenloser Versand ab 50 €</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <CreditCardIcon size={16} className="mr-2 text-secondary" />
              <span>Sichere Zahlungsmethoden</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <ShieldCheck size={16} className="mr-2 text-secondary" />
              <span>Datenschutz garantiert</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}