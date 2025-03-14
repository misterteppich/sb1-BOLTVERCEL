import React, { useState } from 'react';
import { CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  options: string[];
}

export function HealthQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const questions: Question[] = [
    {
      id: 1,
      text: "Welche Blutgruppe haben Sie?",
      options: ["A", "B", "AB", "0", "Weiß ich nicht"]
    },
    {
      id: 2,
      text: "Wie würden Sie Ihren allgemeinen Energielevel beschreiben?",
      options: ["Sehr niedrig", "Niedrig", "Mittel", "Hoch", "Sehr hoch"]
    },
    {
      id: 3,
      text: "Wie oft treiben Sie Sport?",
      options: ["Nie", "1-2 mal pro Monat", "1-2 mal pro Woche", "3-4 mal pro Woche", "Täglich"]
    },
    {
      id: 4,
      text: "Wie würden Sie Ihre Ernährung beschreiben?",
      options: ["Überwiegend pflanzlich", "Ausgewogen mit Fleisch", "Kohlenhydratreich", "Proteinreich", "Unregelmäßig/Fast Food"]
    },
    {
      id: 5,
      text: "Haben Sie gesundheitliche Beschwerden?",
      options: ["Keine", "Verdauungsprobleme", "Gelenkschmerzen", "Hautprobleme", "Schlafstörungen", "Andere"]
    }
  ];
  
  const handleAnswerSelect = (answer: string) => {
    setAnswers({
      ...answers,
      [questions[currentQuestion].id]: answer
    });
  };
  
  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsCompleted(true);
    }
  };
  
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In einer echten Anwendung würden hier die Antworten und die E-Mail-Adresse verarbeitet werden
    console.log('Quiz-Antworten:', answers);
    console.log('E-Mail:', email);
    
    // Erfolgreiche Übermittlung simulieren
    setIsSubmitted(true);
  };
  
  const getRecommendedProducts = () => {
    // In einer echten Anwendung würde hier bas ierend auf den Antworten eine personalisierte Empfehlung generiert werden
    // Hier eine einfache Beispiellogik
    
    const bloodType = answers[1];
    let recommendedProducts = [];
    
    if (bloodType === "A") {
      recommendedProducts.push("NUTRIG A");
    } else if (bloodType === "0") {
      recommendedProducts.push("NUTRIG O");
    } else {
      recommendedProducts.push("NUTRIG MULTI+BCAA");
    }
    
    // Basierend auf Energielevel
    if (answers[2] === "Sehr niedrig" || answers[2] === "Niedrig") {
      recommendedProducts.push("NUTRIG MULTI+BCAA");
    }
    
    // Basierend auf gesundheitlichen Beschwerden
    if (answers[5] === "Verdauungsprobleme") {
      recommendedProducts.push("NUTRIG DETOX");
    } else if (answers[5] === "Gelenkschmerzen" || answers[5] === "Hautprobleme") {
      recommendedProducts.push("NUTRIG WOUNDS");
    }
    
    // Entferne Duplikate
    return [...new Set(recommendedProducts)];
  };
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">Gesundheitscheck</h2>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          {!isCompleted ? (
            <div>
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">Frage {currentQuestion + 1} von {questions.length}</span>
                  <div className="flex space-x-1">
                    {questions.map((_, index) => (
                      <div 
                        key={index}
                        className={`h-2 w-8 rounded-full ${
                          index === currentQuestion ? 'bg-secondary' : 
                          index < currentQuestion ? 'bg-gray-300' : 'bg-gray-200'
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-primary">{questions[currentQuestion].text}</h3>
              </div>
              
              <div className="space-y-3 mb-8">
                {questions[currentQuestion].options.map((option, index) => (
                  <label 
                    key={index}
                    className={`block p-4 border rounded-lg cursor-pointer transition-colors ${
                      answers[questions[currentQuestion].id] === option 
                        ? 'border-secondary bg-secondary bg-opacity-10' 
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name={`question-${questions[currentQuestion].id}`}
                        value={option}
                        checked={answers[questions[currentQuestion].id] === option}
                        onChange={() => handleAnswerSelect(option)}
                        className="h-4 w-4 text-secondary"
                      />
                      <span className="ml-3">{option}</span>
                    </div>
                  </label>
                ))}
              </div>
              
              <div className="flex justify-between">
                <button
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  className={`flex items-center gap-1 px-4 py-2 rounded-lg ${
                    currentQuestion === 0 
                      ? 'text-gray-400 cursor-not-allowed' 
                      : 'text-primary hover:bg-gray-100'
                  }`}
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Zurück</span>
                </button>
                
                <button
                  onClick={handleNext}
                  disabled={!answers[questions[currentQuestion].id]}
                  className={`flex items-center gap-1 px-4 py-2 rounded-lg ${
                    !answers[questions[currentQuestion].id]
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      : 'bg-secondary text-white hover:bg-secondary-dark'
                  }`}
                >
                  <span>{currentQuestion === questions.length - 1 ? 'Abschließen' : 'Weiter'}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ) : (
            <div>
              {!isSubmitted ? (
                <div>
                  <div className="flex justify-center mb-6">
                    <CheckCircle className="h-16 w-16 text-green-500" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-primary mb-4 text-center">Ihr persönlicher Gesundheitscheck ist abgeschlossen!</h3>
                  
                  <p className="text-gray-600 mb-6 text-center">
                    Basierend auf Ihren Antworten haben wir personalisierte Produktempfehlungen für Sie.
                    Geben Sie Ihre E-Mail-Adresse ein, um Ihre detaillierte Auswertung zu erhalten.
                  </p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <h4 className="font-semibold text-primary mb-2">Empfohlene Produkte:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {getRecommendedProducts().map((product, index) => (
                        <li key={index} className="text-gray-700">{product}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-Mail-Adresse *</label>
                      <input
                        id="email"
                        type="email"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <input
                        id="consent"
                        type="checkbox"
                        className="h-4 w-4 text-secondary"
                        required
                      />
                      <label htmlFor="consent" className="ml-2 text-sm text-gray-600">
                        Ich stimme zu, dass meine Daten zur Erstellung personalisierter Empfehlungen verwendet werden dürfen.
                      </label>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-4 rounded-lg transition-colors"
                    >
                      Ergebnisse erhalten
                    </button>
                  </form>
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="flex justify-center mb-6">
                    <CheckCircle className="h-16 w-16 text-green-500" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-primary mb-2">Vielen Dank!</h3>
                  <p className="text-gray-600 mb-6">
                    Ihre detaillierte Auswertung wurde an {email} gesendet.
                    Schauen Sie auch in Ihrem Spam-Ordner nach, falls Sie die E-Mail nicht finden können.
                  </p>
                  
                  <p className="text-gray-600">
                    Haben Sie Fragen zu Ihren Ergebnissen? Kontaktieren Sie uns unter{' '}
                    <a href="mailto:nutrigenetic.shop@gmx.de" className="text-secondary hover:underline">
                      nutrigenetic.shop@gmx.de
                    </a>
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}