import React from 'react';
import { Logo } from './Logo';

export function Hero() {
  return (
    <section className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold mb-4 text-center md:text-left">
              Genetische Erkenntnisse,<br />
              Maßgeschneiderte Gesundheit
            </h1>
            <p className="text-lg mb-6 text-center md:text-left">
              Ich helfe Menschen, ihre Gesundheit selbst zu gestalten – mit individueller Beratung und personalisierten Lösungen, für ein erfülltes Leben und mehr Zeit für das Wesentliche.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="h-64 w-64 rounded-full bg-white flex items-center justify-center">
              <Logo size="large" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}