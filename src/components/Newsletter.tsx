import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Einfache E-Mail-Validierung
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      setError('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
      return;
    }
    
    // In einer echten Anwendung würde hier die E-Mail an einen Newsletter-Service gesendet werden
    console.log('Newsletter-Anmeldung:', email);
    
    // Erfolgreiche Anmeldung simulieren
    setIsSubmitted(true);
    setError('');
    setEmail('');
    
    // Nach 5 Sekunden das Formular zurücksetzen
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section className="py-12 bg-primary text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-4">
          <Mail className="h-12 w-12 text-secondary" />
        </div>
        
        <h2 className="text-2xl font-bold mb-4">Bleiben Sie informiert</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Melden Sie sich für unseren Newsletter an und erhalten Sie exklusive Angebote, 
          Gesundheitstipps und Neuigkeiten zu unseren Produkten.
        </p>
        
        {isSubmitted ? (
          <div className="bg-secondary bg-opacity-20 p-4 rounded-lg inline-flex items-center">
            <CheckCircle className="h-5 w-5 mr-2 text-secondary" />
            <span>Vielen Dank für Ihre Anmeldung!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Ihre E-Mail-Adresse"
                  className="w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-secondary"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {error && <p className="text-red-300 text-sm mt-1 text-left">{error}</p>}
              </div>
              <button
                type="submit"
                className="bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Anmelden
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2 text-left">
              Durch die Anmeldung stimmen Sie zu, dass wir Ihnen E-Mails mit Angeboten und Informationen senden dürfen. 
              Sie können sich jederzeit abmelden.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}