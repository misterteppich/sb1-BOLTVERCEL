import React from 'react';
import { ClipboardCheck } from 'lucide-react';

export function HealthCheck() {
  return (
    <section className="py-16 bg-blue-800 text-white my-12 rounded-lg">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Starten Sie Ihren Gesundheitscheck</h2>
        <p className="text-lg mb-8">
          Erfahren Sie, welche Nahrungsergänzungsmittel optimal zu Ihrem Körper passen! 
          Unser kurzer, wissenschaftlicher Fragebogen analysiert Ihre Bedürfnisse und 
          erstellt personalisierte Empfehlungen.
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center gap-2 mx-auto">
          <ClipboardCheck className="h-5 w-5" />
          <span>Gesundheitscheck starten</span>
        </button>
      </div>
    </section>
  );
}