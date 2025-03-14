import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqItems: FAQItem[] = [
    {
      question: "Was macht Nutrigenetic Produkte einzigartig?",
      answer: "Unsere Produkte basieren auf wissenschaftlichen Erkenntnissen zur Genetik und Ernährung. Wir berücksichtigen individuelle Faktoren wie Blutgruppe und genetische Prädispositionen, um maßgeschneiderte Nahrungsergänzungsmittel anzubieten, die optimal auf Ihren Körper abgestimmt sind."
    },
    {
      question: "Wie wähle ich das richtige Produkt für mich aus?",
      answer: "Wir empfehlen, sich an Ihrer Blutgruppe zu orientieren oder uns für eine persönliche Beratung zu kontaktieren. Unsere Produkte sind speziell auf die Bedürfnisse verschiedener Blutgruppen abgestimmt."
    },
    {
      question: "Sind die Produkte für alle Altersgruppen geeignet?",
      answer: "Ja, unsere Produkte sind für Erwachsene jeden Alters konzipiert. Für Kinder, Schwangere oder Personen mit bestehenden Gesundheitsproblemen empfehlen wir jedoch, vor der Einnahme Rücksprache mit einem Arzt zu halten."
    },
    {
      question: "Wie lange dauert es, bis ich Ergebnisse sehe?",
      answer: "Die Wirkung unserer Produkte ist individuell verschieden. Viele Kunden berichten von spürbaren Verbesserungen innerhalb von 2-4 Wochen bei regelmäßiger Anwendung. Für optimale Ergebnisse empfehlen wir eine kontinuierliche Anwendung über mindestens 3 Monate."
    },
    {
      question: "Gibt es Nebenwirkungen?",
      answer: "Unsere Produkte bestehen aus natürlichen, hochqualitativen Inhaltsstoffen und sind in der Regel sehr gut verträglich. In seltenen Fällen können individuelle Unverträglichkeiten auftreten. Bei Unsicherheiten empfehlen wir, einen Arzt zu konsultieren."
    },
    {
      question: "Wie kann ich euch bei weiteren Fragen kontaktieren?",
      answer: "Sie können uns jederzeit per E-Mail unter nutrigenetic.shop@gmx.de erreichen. Wir bemühen uns, alle Anfragen innerhalb von 24 Stunden zu beantworten."
    }
  ];
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section className="py-12 bg-white rounded-lg shadow-md">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">Häufig gestellte Fragen</h2>
        
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-primary">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-secondary" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-secondary" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}