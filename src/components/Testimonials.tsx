import React from 'react';
import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah M.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=128&q=80',
      text: 'Die personalisierten Nahrungsergänzungsmittel von Nutrigenetic haben mein Leben verändert. Ich fühle mich energiegeladener und ausgeglichener als je zuvor.',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael K.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=128&q=80',
      text: 'Endlich Produkte, die wirklich auf meine individuellen Bedürfnisse abgestimmt sind. Die Qualität ist erstklassig und der Service ist hervorragend.',
      rating: 5
    },
    {
      id: 3,
      name: 'Lisa B.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=128&q=80',
      text: 'Ich bin begeistert von der wissenschaftlichen Herangehensweise und den spürbaren Ergebnissen. Das Team ist kompetent und die Beratung ist erstklassig.',
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">Das sagen unsere Kunden</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-gray-50 p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover mr-4"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = '';
                    target.parentElement!.innerHTML = `<div class="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">${testimonial.name.charAt(0)}</div>`;
                  }}
                />
                <div>
                  <h3 className="font-semibold text-primary">{testimonial.name}</h3>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, index) => (
                      <Star 
                        key={index}
                        size={16}
                        className="text-gold fill-gold"
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <blockquote className="text-gray-700">
                "{testimonial.text}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}