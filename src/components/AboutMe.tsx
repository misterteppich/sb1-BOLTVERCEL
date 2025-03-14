import React from 'react';
import { Calendar, Phone, Mail } from 'lucide-react';

export function AboutMe() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">Über Mich</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="rounded-lg shadow-md w-full max-w-md mx-auto bg-gray-100 h-96 flex items-center justify-center">
              <div className="h-32 w-32 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white text-4xl font-bold">NG</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-4">Mein Warum</h3>
            
            <p className="text-gray-700 mb-6">
              Die Vorstellung, die Welt positiv zu verändern, indem ich anderen helfe, ihre eigene innere Kraft zu entdecken und zu entfalten, erfüllt mein Herz mit Sinn und Freude. Ich träume davon, dies in einer Weise zu tun, die mir gleichzeitig die Freiheit gibt, mein Leben bewusst und nah an den Momenten zu gestalten, die wirklich zählen.
            </p>
            
            <p className="text-gray-700 mb-6">
              Mein größter Wunsch ist es, jede wertvolle Sekunde mit meinem kleinen Sohn bewusst zu erleben – seine strahlenden Augen zu sehen, wenn er etwas Neues entdeckt, seine ersten Abenteuer zu teilen, und keinen seiner wichtigen Schritte zu verpassen.
            </p>
            
            <p className="text-gray-700 mb-6">
              Die Vision, von überall aus wirken zu können, finanziell frei zu sein und gleichzeitig andere zu inspirieren, erfüllt mich mit tiefer Dankbarkeit. Es treibt mich an, diesen Traum Realität werden zu lassen – nicht nur für mich, sondern auch als Vorbild für meinen Sohn, der eines Tages sehen soll, dass es möglich ist, mit Liebe, Mut und Hingabe seinen Weg zu gehen.
            </p>
            
            <div className="bg-secondary bg-opacity-10 p-4 rounded-lg border-l-4 border-secondary">
              <p className="text-gray-800 font-medium">
                Ich helfe Menschen, ihre Gesundheit selbst in die Hand zu nehmen, indem ich sie mit individueller Beratung und personalisierten Lösungen unterstütze – für ein bewussteres, erfüllteres Leben, das auch mir die Freiheit gibt, wertvolle Zeit mit meinem Sohn zu verbringen.
              </p>
            </div>
          </div>
        </div>

        {/* Consultation Banner */}
        <div className="mt-16 bg-primary text-white rounded-xl overflow-hidden shadow-xl">
          <div className="p-8 relative">
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
              <svg viewBox="0 0 100 100" className="h-full w-full" fill="currentColor">
                <path d="M95 50c0 24.85-20.15 45-45 45S5 74.85 5 50 25.15 5 50 5s45 20.15 45 45zm-84.5 0c0 21.815 17.685 39.5 39.5 39.5S89.5 71.815 89.5 50 71.815 10.5 50 10.5 10.5 28.185 10.5 50z"/>
                <path d="M50 25c-13.807 0-25 11.193-25 25s11.193 25 25 25 25-11.193 25-25-11.193-25-25-25zm0 44.5c-10.77 0-19.5-8.73-19.5-19.5S39.23 30.5 50 30.5 69.5 39.23 69.5 50 60.77 69.5 50 69.5z"/>
              </svg>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Persönliche & Individuelle Beratung</h3>
              <p className="text-lg mb-8 max-w-2xl">
                Entdecken Sie Ihren Weg zu optimaler Gesundheit mit einer maßgeschneiderten Beratung. 
                Ich nehme mir Zeit, Ihre individuellen Bedürfnisse zu verstehen und entwickle mit Ihnen 
                gemeinsam einen personalisierten Plan für Ihr Wohlbefinden.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3">
                  <Calendar className="h-8 w-8 text-secondary" />
                  <div>
                    <h4 className="font-semibold">Terminvereinbarung</h4>
                    <p className="text-sm text-gray-200">Flexible Beratungszeiten</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="h-8 w-8 text-secondary" />
                  <div>
                    <h4 className="font-semibold">Telefonisch</h4>
                    <p className="text-sm text-gray-200">+49 178 8706029</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="h-8 w-8 text-secondary" />
                  <div>
                    <h4 className="font-semibold">Per E-Mail</h4>
                    <p className="text-sm text-gray-200">nutrigenetic.shop@gmx.de</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <a 
                  href="mailto:nutrigenetic.shop@gmx.de?subject=Beratungsanfrage" 
                  className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  <span>Jetzt Beratungstermin vereinbaren</span>
                  <Calendar className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}