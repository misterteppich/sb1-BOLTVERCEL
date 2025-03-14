import React, { useState } from 'react';
import { Star, ThumbsUp, MessageSquare } from 'lucide-react';

interface Review {
  id: number;
  productName: string;
  userName: string;
  rating: number;
  date: string;
  title: string;
  text: string;
  helpful: number;
  verified: boolean;
}

export function Reviews() {
  const [filter, setFilter] = useState<'all' | '5' | '4' | '3' | '2' | '1'>('all');
  const [sort, setSort] = useState<'newest' | 'highest' | 'lowest'>('newest');
  
  const reviews: Review[] = [
    {
      id: 1,
      productName: "NUTRIG MULTI+BCAA",
      userName: "Thomas H.",
      rating: 5,
      date: "15.02.2025",
      title: "Hervorragende Qualität",
      text: "Ich nehme das Produkt seit 3 Monaten und spüre deutlich mehr Energie im Alltag. Die Kombination aus Vitaminen und BCAAs ist perfekt für mein Training.",
      helpful: 24,
      verified: true
    },
    {
      id: 2,
      productName: "NUTRIG WOUNDS",
      userName: "Maria S.",
      rating: 5,
      date: "10.02.2025",
      title: "Schnelle Heilung",
      text: "Nach meiner OP hat mir NUTRIG WOUNDS sehr bei der Heilung geholfen. Die Narbenbildung ist minimal und ich fühle mich wieder fit.",
      helpful: 18,
      verified: true
    },
    {
      id: 3,
      productName: "NUTRIG A",
      userName: "Julia K.",
      rating: 4,
      date: "05.02.2025",
      title: "Gute Wirkung",
      text: "Endlich ein Produkt, das auf meine Blutgruppe abgestimmt ist. Ich fühle mich vitaler und habe mehr Energie.",
      helpful: 12,
      verified: true
    },
    {
      id: 4,
      productName: "NUTRIG DETOX",
      userName: "Peter M.",
      rating: 5,
      date: "01.02.2025",
      title: "Effektive Entgiftung",
      text: "Der Detox-Tee schmeckt nicht nur gut, sondern wirkt auch. Ich fühle mich leichter und energiegeladener.",
      helpful: 15,
      verified: true
    },
    {
      id: 5,
      productName: "NUTRIG O",
      userName: "Sandra B.",
      rating: 4,
      date: "28.01.2025",
      title: "Sehr zufrieden",
      text: "Die Produkte sind perfekt auf meine Blutgruppe 0 abgestimmt. Besonders die Verdauung hat sich verbessert.",
      helpful: 9,
      verified: true
    }
  ];
  
  const filteredReviews = reviews
    .filter(review => filter === 'all' || review.rating === parseInt(filter))
    .sort((a, b) => {
      if (sort === 'newest') {
        return new Date(b.date.split('.').reverse().join('-')).getTime() - 
               new Date(a.date.split('.').reverse().join('-')).getTime();
      } else if (sort === 'highest') {
        return b.rating - a.rating;
      } else {
        return a.rating - b.rating;
      }
    });
  
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  const ratingCounts = reviews.reduce((acc, review) => {
    acc[review.rating] = (acc[review.rating] || 0) + 1;
    return acc;
  }, {} as Record<number, number>);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">Kundenbewertungen</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Zusammenfassung */}
          <div className="md:col-span-1 bg-gray-50 p-6 rounded-lg">
            <div className="text-center mb-4">
              <div className="text-4xl font-bold text-primary mb-2">{averageRating.toFixed(1)}</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    size={20}
                    className={i < Math.round(averageRating) ? "text-gold fill-gold" : "text-gray-300"}
                  />
                ))}
              </div>
              <div className="text-sm text-gray-600">{reviews.length} Bewertungen</div>
            </div>
            
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map(rating => (
                <div key={rating} className="flex items-center">
                  <button
                    className={`flex-1 h-6 flex items-center ${filter === rating.toString() ? 'font-bold' : ''}`}
                    onClick={() => setFilter(filter === rating.toString() ? 'all' : rating.toString() as any)}
                  >
                    <span className="w-12 text-sm">{rating} Sterne</span>
                    <div className="flex-1 mx-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gold"
                        style={{ width: `${((ratingCounts[rating] || 0) / reviews.length) * 100}%` }}
                      ></div>
                    </div>
                    <span className="w-8 text-sm text-right">{ratingCounts[rating] || 0}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          {/* Bewertungsliste */}
          <div className="md:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <button
                className={`text-sm ${filter === 'all' ? 'font-bold text-primary' : 'text-gray-600'}`}
                onClick={() => setFilter('all')}
              >
                Alle Bewertungen
              </button>
              
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as any)}
                className="text-sm border border-gray-300 rounded-md px-2 py-1"
              >
                <option value="newest">Neueste zuerst</option>
                <option value="highest">Beste Bewertung</option>
                <option value="lowest">Schlechteste Bewertung</option>
              </select>
            </div>
            
            <div className="space-y-6">
              {filteredReviews.map(review => (
                <div key={review.id} className="border-b border-gray-200 pb-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-primary">{review.userName}</h3>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i}
                              size={16}
                              className={i < review.rating ? "text-gold fill-gold" : "text-gray-300"}
                            />
                          ))}
                        </div>
                        {review.verified && (
                          <span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                            Verifizierter Kauf
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  
                  <h4 className="font-medium mb-2">{review.title}</h4>
                  <p className="text-gray-700 mb-4">{review.text}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <button className="flex items-center gap-1 hover:text-primary">
                        <ThumbsUp size={16} />
                        <span>Hilfreich ({review.helpful})</span>
                      </button>
                      <button className="flex items-center gap-1 hover:text-primary">
                        <MessageSquare size={16} />
                        <span>Kommentieren</span>
                      </button>
                    </div>
                    <span className="text-sm text-gray-500">Produkt: {review.productName}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}