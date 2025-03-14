import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Mail, Phone, Send, CheckCircle } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log('Kontaktformular gesendet:', data);
    
    setIsSubmitted(true);
    reset();
    
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">Kontaktieren Sie uns</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Kontaktinformationen */}
          <div>
            <h3 className="text-xl font-semibold text-primary mb-6">Wir sind für Sie da</h3>
            <p className="text-gray-600 mb-8">
              Haben Sie Fragen zu unseren Produkten oder benötigen Sie eine persönliche Beratung? 
              Unser Team steht Ihnen gerne zur Verfügung.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-secondary bg-opacity-20 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-medium text-primary">E-Mail</h4>
                  <a href="mailto:nutrigenetic.shop@gmx.de" className="text-gray-600 hover:text-secondary">
                    nutrigenetic.shop@gmx.de
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-secondary bg-opacity-20 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-medium text-primary">Telefon</h4>
                  <a href="tel:+4917887060290" className="text-gray-600 hover:text-secondary">
                    +49 178 8706029
                  </a>
                  <p className="text-sm text-gray-500 mt-1">
                    Mo-Fr: 9:00 - 17:00 Uhr
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Kontaktformular */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">Nachricht gesendet!</h3>
                <p className="text-gray-600">
                  Vielen Dank für Ihre Nachricht. Wir werden uns so schnell wie möglich bei Ihnen melden.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                  <input
                    id="name"
                    type="text"
                    className={`w-full p-2 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                    {...register('name', { required: 'Name ist erforderlich' })}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
                </div>
                
                <div className="mb-4">
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
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Betreff *</label>
                  <input
                    id="subject"
                    type="text"
                    className={`w-full p-2 border rounded-md ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
                    {...register('subject', { required: 'Betreff ist erforderlich' })}
                  />
                  {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Nachricht *</label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`w-full p-2 border rounded-md ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                    {...register('message', { required: 'Nachricht ist erforderlich' })}
                  ></textarea>
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Nachricht senden</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}