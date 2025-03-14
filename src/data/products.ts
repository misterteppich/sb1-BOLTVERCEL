import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '2',
    name: 'NUTRIG MULTI+BCAA',
    price: 44.95,
    description: 'Die perfekte Rundum-Versorgung für Energie, Regeneration und Vitalität. Einzigartige Kombination aus Vitaminen, Mineralstoffen und BCAAs.',
    imageUrl: '/images/nutrig-multi-bcaa.jpg',
    category: 'Nahrungsergänzung',
    rating: 5,
    reviewCount: 89,
    details: 'Anwendung: 3 Gummibärchen täglich. Vor dem Schlucken gründlich kauen.',
    longDescription: `
      <p>Diese einzigartige Kombination aus Vitaminen, Mineralstoffen und BCAAs unterstützt Ihren Körper optimal: von der Energieproduktion über den Zellschutz bis hin zur Muskelregeneration. Entwickelt für aktive Menschen und zur Unterstützung nach bariatrischen Eingriffen.</p>
      
      <h4 class="text-lg font-semibold mt-4 mb-2">Ihre Vorteile:</h4>
      <ul class="list-disc list-inside text-gray-700 mb-4">
        <li>Mehr Energie & Fokus: Dank Vitamin B-Komplex und BCAAs</li>
        <li>Starke Muskeln & schnelle Regeneration: Mit Leucin, Isoleucin und Valin</li>
        <li>Gesundes Immunsystem & Zellschutz: Durch Vitamin C, Zink und Selen</li>
        <li>Schöne Haut, Haare & Nägel: Biotin und Vitamin A sorgen dafür</li>
        <li>Knochengesundheit: Mit Vitamin D, K und Calcium</li>
      </ul>
      
      <h4 class="text-lg font-semibold mt-4 mb-2">Ihr Mehrwert:</h4>
      <ul class="list-disc list-inside text-gray-700">
        <li>Unterstützt Ihren aktiven Alltag</li>
        <li>Fördert Heilung und Regeneration</li>
        <li>Rundum-Versorgung für Körper und Geist</li>
      </ul>

      <div class="mt-6 p-4 bg-secondary bg-opacity-10 rounded-lg">
        <h4 class="text-lg font-semibold text-secondary mb-2">Sonderangebot: 3er-Paket</h4>
        <p class="mb-2">Kaufen Sie 3 NUTRIG MULTI+BCAA und sparen Sie 5%!</p>
        <ul class="list-disc list-inside text-gray-700">
          <li>Regulärer Preis: 134,85 €</li>
          <li>Ihr Preis: 128,10 €</li>
          <li>Sie sparen: 6,75 €</li>
        </ul>
      </div>
    `
  },
  {
    id: '3',
    name: 'NUTRIG WOUNDS',
    price: 49.95,
    description: 'Unterstützt die Wundheilung und Regeneration. Einzigartige Kombination aus Kollagen, Glycin, Prolin, Lysin, Vitamin C, Zink und Omega-3.',
    imageUrl: '/images/nutrig-wounds.jpg',
    category: 'Nahrungsergänzung',
    rating: 4,
    reviewCount: 103,
    details: 'Anwendung: 3 Gummibärchen täglich. Vor dem Schlucken gründlich kauen.',
    longDescription: `
      <p>Diese einzigartige Kombination aus Kollagen, Glycin, Prolin, Lysin, Vitamin C, Zink und Omega-3 fördert die Wundheilung, stärkt Gewebe und schützt vor Entzündungen. Perfekt nach Operationen oder Verletzungen, um den Körper optimal zu versorgen.</p>
      
      <h4 class="text-lg font-semibold mt-4 mb-2">Hauptvorteile:</h4>
      <ul class="list-disc list-inside text-gray-700">
        <li>Regeneration: Fördert Haut- und Gewebereparatur</li>
        <li>Immunsystem: Stärkt die Abwehrkräfte</li>
        <li>Entzündungshemmung: Unterstützt Heilung und Zellschutz</li>
        <li>Darmgesundheit: Verbessert die Nährstoffaufnahme</li>
      </ul>
      
      <p class="mt-4">Vertrauen Sie auf optimale Heilung – für ein starkes, gesundes Ich.</p>

      <div class="mt-6 p-4 bg-secondary bg-opacity-10 rounded-lg">
        <h4 class="text-lg font-semibold text-secondary mb-2">Sonderangebot: 3er-Paket</h4>
        <p class="mb-2">Kaufen Sie 3 NUTRIG WOUNDS und sparen Sie 5%!</p>
        <ul class="list-disc list-inside text-gray-700">
          <li>Regulärer Preis: 149,85 €</li>
          <li>Ihr Preis: 142,35 €</li>
          <li>Sie sparen: 7,50 €</li>
        </ul>
      </div>
    `
  },
  {
    id: '1',
    name: 'NUTRIG DETOX',
    price: 24.95,
    description: 'Sanfte Entgiftung und natürliche Balance für den Körper. Unterstützt die körpereigenen Entgiftungsprozesse, die Verdauung und das allgemeine Wohlbefinden.',
    imageUrl: '/images/nutrig-detox.jpg',
    category: 'Nahrungsergänzung',
    rating: 4,
    reviewCount: 127,
    badge: 'Bestseller',
    details: 'Anwendung: 1 Teebeutel pro Tasse. 5-7 Minuten ziehen lassen. 1-3 Mal täglich.',
    longDescription: `
      <p>NutriG Detox ist eine gezielte Kombination hochwertiger Inhaltsstoffe zur Unterstützung der körpereigenen Entgiftungsprozesse, der Verdauung und des allgemeinen Wohlbefindens. Entwickelt für Menschen, die ihren Körper sanft reinigen und den Stoffwechsel unterstützen möchten.</p>
      
      <h4 class="text-lg font-semibold mt-4 mb-2">Vorteile und Wirkung:</h4>
      <ul class="list-disc list-inside text-gray-700 mb-4">
        <li>Fördert die natürliche Entgiftung über Leber und Nieren</li>
        <li>Unterstützt eine gesunde Verdauung und reguliert die Darmtätigkeit</li>
        <li>Hilft beim Gewichtsmanagement durch Stoffwechselaktivierung und Entwässerung</li>
        <li>Trägt zur allgemeinen Vitalität und zum Wohlbefinden bei</li>
      </ul>
      
      <h4 class="text-lg font-semibold mt-4 mb-2">Mehrwert für den Körper:</h4>
      <ul class="list-disc list-inside text-gray-700">
        <li>Fördert die innere Balance und Regeneration</li>
        <li>Unterstützt den Körper bei der Verarbeitung von Umweltbelastungen</li>
        <li>Ideal zur Ergänzung einer bewussten, gesunden Lebensweise</li>
      </ul>
      
      <p class="mt-4 font-medium text-primary">NutriG Detox – Für einen reinen Körper und ein gesundes Wohlbefinden.</p>
    `
  },
  {
    id: '5',
    name: 'NUTRIG A',
    price: 39.95,
    description: 'Gezielt entwickelt für die Bedürfnisse der Blutgruppe A. Unterstützt Immunsystem, Herz-Kreislauf-Gesundheit und Stressabbau.',
    imageUrl: '/images/nutrig-a.jpg',
    category: 'Nahrungsergänzung',
    rating: 4,
    reviewCount: 68,
    longDescription: `
      <p>Gezielt entwickelt für die Bedürfnisse der Blutgruppe A:</p>
      
      <ul class="list-disc list-inside text-gray-700 mb-4">
        <li>Stärkung des Immunsystems durch Vitamin C, Zink & Selen</li>
        <li>Herz-Kreislauf-Gesundheit mit Niacin & Knoblauch</li>
        <li>Stressabbau & Energie dank Vitamin B-Komplex & Magnesium</li>
        <li>Gesunde Haut, Haare & Nägel durch Biotin & Beta-Carotin</li>
        <li>Verdauung & Zellschutz mit Bromelain & rotem Traubenextrakt</li>
      </ul>
      
      <h4 class="text-lg font-semibold mt-4 mb-2">Warum NutriG?</h4>
      <p>Ganzheitliche Kombination aus Vitaminen, Mineralstoffen und Pflanzenextrakten – abgestimmt auf Ihre Blutgruppe.</p>
      
      <p class="mt-4">Vertrauen Sie auf Qualität. Spüren Sie den Unterschied. Probieren Sie es aus!</p>
    `
  },
  {
    id: '4',
    name: 'NUTRIG O',
    price: 39.95,
    description: 'Gezielt entwickelt für die einzigartigen Bedürfnisse der Blutgruppe 0. Unterstützt Energie, Stoffwechsel und Immunsystem.',
    imageUrl: '/images/nutrig-o.jpg',
    category: 'Nahrungsergänzung',
    rating: 4,
    reviewCount: 76,
    longDescription: `
      <p>Gezielt entwickelt für die einzigartigen Bedürfnisse der Blutgruppe 0:</p>
      
      <ul class="list-disc list-inside text-gray-700 mb-4">
        <li><strong>Energie & Stoffwechsel:</strong> B-Vitamine, Cholin und Inositol unterstützen die Fettverdauung und Energieproduktion – ideal für einen aktiven Lebensstil.</li>
        <li><strong>Immunsystem & Entzündungshemmung:</strong> Vitamin C, Zink und Kurkuma fördern Abwehrkräfte und reduzieren Entzündungen.</li>
        <li><strong>Verdauung & Darmgesundheit:</strong> Calcium, Magnesium und PABA unterstützen die Verdauung – besonders bei proteinreicher Ernährung.</li>
        <li><strong>Knochengesundheit & Regeneration:</strong> Mineralstoffe wie Zink, Bor und Kupfer stärken Knochen und Muskeln.</li>
        <li><strong>Schilddrüsen- & Hormonbalance:</strong> Jod und Selen fördern eine gesunde Schilddrüsenfunktion.</li>
        <li><strong>Haut- & Zellschutz:</strong> Vitamin E, Beta-Carotin und L-Glutathion schützen die Zellen und fördern die Kollagenbildung.</li>
      </ul>
      
      <p>Spüren Sie die Kraft der personalisierten Ernährung. Probieren Sie es aus und erleben Sie den Unterschied!</p>
    `
  }
];