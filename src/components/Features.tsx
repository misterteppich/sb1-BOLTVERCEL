import React from 'react';
import { Microscope, HeartPulse } from 'lucide-react';

export function Features() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-primary mb-12 text-center">Warum Nutrigenetic?</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-secondary bg-opacity-20 p-3 rounded-full">
              <Microscope className="h-8 w-8 text-secondary" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-primary">Wissenschaftlich fundiert</h3>
          <p className="text-gray-600">
            Unsere wissenschaftlichen Experten nutzen neueste Forschungsergebnisse für optimale Wirksamkeit.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-secondary bg-opacity-20 p-3 rounded-full">
              <HeartPulse className="h-8 w-8 text-secondary" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-primary">Ganzheitlicher Ansatz</h3>
          <p className="text-gray-600">
            Wir betrachten alle Aspekte Ihrer Gesundheit, um die perfekte Kombination an Nährstoffen für Sie zu finden.
          </p>
        </div>
      </div>
    </section>
  );
}