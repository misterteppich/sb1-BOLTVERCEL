import React, { useState } from 'react';
import { Mail, Phone, Instagram, Facebook, Twitter } from 'lucide-react';
import { Modal } from './Modal';
import { Logo } from './Logo';

interface FooterProps {
  onShowAboutMe: () => void;
  onShowProducts: () => void;
  onShowContact: () => void;
  onShowReviews: () => void;
  onShowShop: () => void;
}

export function Footer({ 
  onShowAboutMe, 
  onShowProducts, 
  onShowContact, 
  onShowReviews,
  onShowShop
}: FooterProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState('');

  const handleLegalLinkClick = (e: React.MouseEvent, title: string, content: string) => {
    e.preventDefault();
    setModalTitle(title);
    setModalContent(content);
    setModalOpen(true);
  };

  const scrollToHighlights = (e: React.MouseEvent) => {
    e.preventDefault();
    const highlightsSection = document.getElementById('product-highlights');
    if (highlightsSection) {
      highlightsSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#product-highlights';
    }
  };

  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Logo size="small" className="bg-white rounded-full p-1" />
              <span className="text-xl font-bold">Nutrigenetic</span>
            </div>
            <p className="text-gray-300 mb-4">
              Personalisierte Nahrungsergänzung basierend auf Ihrer Genetik für optimale Gesundheit und Wohlbefinden.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-secondary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-secondary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-secondary">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Schnelllinks</h3>
            <ul className="space-y-2">
              <li><a href="#" onClick={onShowProducts} className="text-gray-300 hover:text-secondary">Startseite</a></li>
              <li><a href="#" onClick={scrollToHighlights} className="text-gray-300 hover:text-secondary">Highlights</a></li>
              <li><a href="#" onClick={onShowShop} className="text-gray-300 hover:text-secondary">Shop</a></li>
              <li><a href="#" onClick={onShowProducts} className="text-gray-300 hover:text-secondary">Produkte</a></li>
              <li><a href="#" onClick={onShowReviews} className="text-gray-300 hover:text-secondary">Bewertungen</a></li>
              <li><a href="#" onClick={onShowAboutMe} className="text-gray-300 hover:text-secondary">Über uns</a></li>
              <li><a href="#" onClick={onShowContact} className="text-gray-300 hover:text-secondary">Kontakt</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/datenschutz" 
                  onClick={(e) => handleLegalLinkClick(e, 'Datenschutzerklärung', `
                    <h4 class="font-semibold mb-2">1. Verantwortlicher</h4>
                    <p class="mb-4">Verantwortlich für die Datenverarbeitung auf dieser Website ist Nutrigenetic, vertreten durch den Geschäftsführer. Kontakt: nutrigenetic.shop@gmx.de</p>
                    
                    <h4 class="font-semibold mb-2">2. Erhebung und Verarbeitung personenbezogener Daten</h4>
                    <p class="mb-4">Wir erheben personenbezogene Daten nur, wenn Sie uns diese freiwillig mitteilen, etwa bei einer Bestellung, Kontaktaufnahme oder Newsletter-Anmeldung. Wir verwenden die von Ihnen mitgeteilten Daten ausschließlich zur Erfüllung und Abwicklung Ihrer Anfrage bzw. Bestellung.</p>
                    
                    <h4 class="font-semibold mb-2">3. Datensicherheit</h4>
                    <p class="mb-4">Wir sichern unsere Website und sonstigen Systeme durch technische und organisatorische Maßnahmen gegen Verlust, Zerstörung, Zugriff, Veränderung oder Verbreitung Ihrer Daten durch unbefugte Personen.</p>
                    
                    <h4 class="font-semibold mb-2">4. Ihre Rechte</h4>
                    <p class="mb-4">Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten.</p>
                    
                    <h4 class="font-semibold mb-2">5. Kontakt</h4>
                    <p>Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten wenden Sie sich bitte an: nutrigenetic.shop@gmx.de</p>
                  `)} 
                  className="text-gray-300 hover:text-secondary"
                >
                  Datenschutz
                </a>
              </li>
              <li>
                <a 
                  href="/agb" 
                  onClick={(e) => handleLegalLinkClick(e, 'Allgemeine Geschäftsbedingungen', `
                    <h4 class="font-semibold mb-2">1. Geltungsbereich</h4>
                    <p class="mb-4">Diese Allgemeinen Geschäftsbedingungen gelten für alle Bestellungen, die Kunden bei Nutrigenetic tätigen.</p>
                    
                    <h4 class="font-semibold mb-2">2. Vertragsschluss</h4>
                    <p class="mb-4">Der Vertrag kommt zustande, wenn wir Ihre Bestellung durch eine Auftragsbestätigung per E-Mail unmittelbar nach dem Erhalt Ihrer Bestellung annehmen oder wenn wir die Ware ausliefern.</p>
                    
                    <h4 class="font-semibold mb-2">3. Preise und Versandkosten</h4>
                    <p class="mb-4">Alle Preise enthalten die gesetzliche Mehrwertsteuer. Die Versandkosten betragen 6,50 € pro Bestellung.</p>
                    
                    <h4 class="font-semibold mb-2">4. Lieferung</h4>
                    <p class="mb-4">Die Lieferung erfolgt innerhalb von 2-3 Werktagen nach Zahlungseingang.</p>
                    
                    <h4 class="font-semibold mb-2">5. Widerrufsrecht</h4>
                    <p class="mb-4">Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen, sofern die Produkte ungeöffnet und originalverpackt sind. Details entnehmen Sie bitte unserer Widerrufsbelehrung.</p>
                    
                    <h4 class="font-semibold mb-2">6. Gewährleistung</h4>
                    <p>Es gelten die gesetzlichen Gewährleistungsrechte.</p>
                  `)} 
                  className="text-gray-300 hover:text-secondary"
                >
                  AGB
                </a>
              </li>
              <li>
                <a 
                  href="/impressum" 
                  onClick={(e) => handleLegalLinkClick(e, 'Impressum', `
                    <h4 class="font-semibold mb-2">Angaben gemäß § 5 TMG:</h4>
                    <p class="mb-4">
                      Nutrigenetic<br>
                      Musterstraße 123<br>
                      12345 Musterstadt<br>
                      Deutschland
                    </p>
                    
                    <h4 class="font-semibold mb-2">Kontakt:</h4>
                    <p class="mb-4">
                      Telefon: +49 178 8706029<br>
                      E-Mail: nutrigenetic.shop@gmx.de
                    </p>
                    
                    <h4 class="font-semibold mb-2">Umsatzsteuer-ID:</h4>
                    <p class="mb-4">
                      Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br>
                      DE123456789
                    </p>
                    
                    <h4 class="font-semibold mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h4>
                    <p>
                      Max Mustermann<br>
                      Musterstraße 123<br>
                      12345 Musterstadt<br>
                      Deutschland
                    </p>
                  `)} 
                  className="text-gray-300 hover:text-secondary"
                >
                  Impressum
                </a>
              </li>
              <li>
                <a 
                  href="/widerruf" 
                  onClick={(e) => handleLegalLinkClick(e, 'Widerrufsrecht', `
                    <h4 class="font-semibold mb-2">Widerrufsbelehrung</h4>
                    <p class="mb-4">Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter die Waren in Besitz genommen haben.</p>
                    
                    <h4 class="font-semibold mb-2">Wichtiger Hinweis</h4>
                    <p class="mb-4 text-red-600 font-medium">Aus Gründen des Gesundheitsschutzes und der Lebensmittelsicherheit können wir nur ungeöffnete Produkte in der Originalverpackung zurücknehmen. Geöffnete oder beschädigte Produkte sind vom Umtausch ausgeschlossen.</p>
                    
                    <h4 class="font-semibold mb-2">Ausübung des Widerrufsrechts</h4>
                    <p class="mb-4">Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (Nutrigenetic, Musterstraße 123, 12345 Musterstadt, nutrigenetic.shop@gmx.de) mittels einer eindeutigen Erklärung über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren.</p>
                    
                    <h4 class="font-semibold mb-2">Folgen des Widerrufs</h4>
                    <p class="mb-4">Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten, unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist.</p>
                    
                    <h4 class="font-semibold mb-2">Rücksendung</h4>
                    <p>Sie haben die Waren unverzüglich und in jedem Fall spätestens binnen vierzehn Tagen ab dem Tag, an dem Sie uns über den Widerruf dieses Vertrags unterrichten, an uns zurückzusenden. Die Frist ist gewahrt, wenn Sie die Waren vor Ablauf der Frist von vierzehn Tagen absenden. Sie tragen die unmittelbaren Kosten der Rücksendung der Waren.</p>
                  `)} 
                  className="text-gray-300 hover:text-secondary"
                >
                  Widerrufsrecht
                </a>
              </li>
              <li>
                <a 
                  href="/versand" 
                  onClick={(e) => handleLegalLinkClick(e, 'Versandinformationen', `
                    <h4 class="font-semibold mb-2">Versandkosten</h4>
                    <p class="mb-4">Die Versandkosten betragen innerhalb Deutschlands 6,50 €.</p>
                    
                    <h4 class="font-semibold mb-2">Lieferzeiten</h4>
                    <p class="mb-4">Die Lieferung erfolgt in der Regel innerhalb von 2-3 Werktagen nach Zahlungseingang.</p>
                    
                    <h4 class="font-semibold mb-2">Sonderangebote</h4>
                    <p>Bei Bestellung von 3 gleichen Produkten sparen Sie 5% auf den Gesamtpreis!</p>
                  `)} 
                  className="text-gray-300 hover:text-secondary"
                >
                  Versandinformationen
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-secondary" />
                <a href="mailto:nutrigenetic.shop@gmx.de" className="text-gray-300 hover:text-secondary">nutrigenetic.shop@gmx.de</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-secondary" />
                <a href="tel:+4917887060290" className="text-gray-300 hover:text-secondary">+49 178 8706029</a>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="font-medium text-gray-300 mb-2">Zahlungsmethoden</h4>
              <div className="flex space-x-3">
                <div className="bg-white p-1 rounded">
                  <svg width="30" height="20" viewBox="0 0 38 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="38" height="24" rx="4" fill="#F7F7F7"/>
                    <path d="M14.5 16.5H23.5V7.5H14.5V16.5Z" fill="#FF5F00"/>
                    <path d="M15.25 12C15.25 9.75 16.375 7.75 18.125 6.5C16.875 5.5 15.25 5 13.5 5C9.25 5 6 8.25 6 12C6 15.75 9.25 19 13.5 19C15.25 19 16.875 18.5 18.125 17.5C16.375 16.25 15.25 14.25 15.25 12Z" fill="#EB001B"/>
                    <path d="M32 12C32 15.75 28.75 19 24.5 19C22.75 19 21.125 18.5 19.875 17.5C21.625 16.25 22.75 14.25 22.75 12C22.75 9.75 21.625 7.75 19.875 6.5C21.125 5.5 22.75 5 24.5 5C28.75 5 32 8.25 32 12Z" fill="#F79E1B"/>
                  </svg>
                </div>
                <div className="bg-white p-1 rounded">
                  <svg width="30" height="20" viewBox="0 0 38 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="38" height="24" rx="4" fill="#F7F7F7"/>
                    <path d="M20.067 8.478c.492.315.844.843.844 1.494 0 1.826-1.536 2.819-3.583 2.819h-.35c-.236 0-.482.21-.527.446l-.469 2.989c-.021.132-.167.283-.303.283h-2.213c-.177 0-.239-.176-.185-.351l1.07-6.745c.062-.394.247-.526.641-.526h3.612c.22 0 .363.035.463.091z" fill="#253B80"/>
                    <path d="M9.55 8.116c.16-.634.697-1.1 1.372-1.1.33 0 .597.107.778.309.181.202.252.49.204.808-.165.676-.697 1.157-1.353 1.157h-.001c-.322 0-.583-.106-.762-.305-.18-.198-.256-.48-.238-.87zm-1.178 5.118c-.024.153-.043.19-.146.19-.006 0-.013 0-.019.001h-1.044c-.123 0-.169-.09-.129-.224l1.092-6.62c.047-.284.28-.492.57-.492h1.101c.152 0 .184.113.14.224l-.024.115-.071.298c.351-.392.863-.637 1.427-.637 1.347 0 2.271 1.054 2.069 2.388-.221 1.457-1.42 2.5-2.891 2.5-.349 0-.695-.067-.977-.195l-.621 2.374c-.024.09-.06.19-.146.19-.007 0-.013 0-.02.001h-1.058c-.123 0-.169-.09-.129-.224l.876-5.889z" fill="#253B80"/>
                    <path d="M12.15 13.285c-.024.153-.043.19-.146.19-.006 0-.013 0-.019.001h-1.044c-.123 0-.169-.09-.129-.224l.876-5.596c.047-.284.28-.492.57-.492h1.101c.152 0 .184.113.14.224l-.876 5.708c-.024.09-.06.19-.146.19-.007 0-.013 0-.02.001h-1.058c-.123 0-.169-.09-.129-.224l.876-5.889" fill="#253B80"/>
                    <path d="M16.94 8.116c.16-.634.697-1.1 1.372-1.1.33 0 .597.107.778.309.181.202.252.49.204.808-.165.676-.697 1.157-1.353 1.157h-.001c-.322 0-.583-.106-.762-.305-.18-.198-.256-.48-.238-.87zm-1.178 5.118c-.024.153-.043.19-.146.19-.006 0-.013 0-.019.001h-1.044c-.123 0-.169-.09-.129-.224l1.092-6.62c.047-.284.28-.492.57-.492h1.101c.152 0 .184.113.14.224l-.024.115-.071.298c.351-.392.863-.637 1.427-.637 1.347 0 2.271 1.054 2.069 2.388-.221 1.457-1.42 2.5-2.891 2.5-.349 0-.695-.067-.977-.195l-.621 2.374c-.024.09-.06.19-.146.19-.007 0-.013 0-.02.001h-1.058c-.123 0-.169-.09-.129-.224l.876-5.889z" fill="#179BD7"/>
                  </svg>
                </div>
                <div className="bg-white p-1 rounded">
                  <svg width="30" height="20" viewBox="0 0 38 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="38" height="24" rx="4" fill="#F7F7F7"/>
                    <path d="M10 12H28M10 8H28M10 16H20" stroke="#0C2550" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium text-gray-300 mb-2">Sicher einkaufen</h4>
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2  12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>SSL-verschlüsselte Bezahlung</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-light pt-6 text-center text-gray-300 text-sm">
          <p>&copy; {new Date().getFullYear()} Nutrigenetic. Alle Rechte vorbehalten.</p>
          <p className="mt-2">
            <span>nutrigenetic.shop</span>
          </p>
        </div>
      </div>

      <Modal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        title={modalTitle}
      >
        <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: modalContent }}></div>
      </Modal>
    </footer>
  );
}