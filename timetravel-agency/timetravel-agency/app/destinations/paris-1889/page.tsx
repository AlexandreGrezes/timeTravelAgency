import DestinationPage from '@/components/DestinationPage'

export const metadata = {
  title: 'Paris 1889 — Belle Époque | TimeTravel Agency',
  description: 'Vivez l\'inauguration de la Tour Eiffel et l\'Exposition Universelle de 1889 dans le Paris de la Belle Époque.',
}

export default function Paris1889() {
  return (
    <DestinationPage
      title="Paris 1889"
      subtitle="La Belle Époque dans toute sa splendeur"
      period="France · 1889 · Belle Époque"
      image="/images/paris.jpg"
      tagline="Assistez à l'inauguration de la Tour Eiffel par Gustave Eiffel lui-même, déambulez dans l'Exposition Universelle et vivez au cœur du Paris le plus élégant de l'Histoire."
      destinationSlug="paris-1889"
      highlights={[
        "Assister à l'inauguration officielle de la Tour Eiffel le 31 mai 1889, aux côtés de Gustave Eiffel et du Président Carnot",
        "Visiter l'Exposition Universelle et ses 61 000 exposants venus du monde entier, dont les dernières merveilles technologiques",
        "Dîner dans les grands restaurants de l'époque, fréquentés par Toulouse-Lautrec, Degas et Zola",
        "Promenade nocturne sur les Grands Boulevards illuminés au gaz, au son des orchestres des cafés",
        "Accès exclusif aux loges de l'Opéra Garnier lors d'une représentation d'époque",
      ]}
      itinerary5={[
        { day: 'J1', title: 'Arrivée & Installation', desc: 'Transfert discret vers un hôtel particulier du VIIIe arrondissement. Remise des tenues d\'époque, briefing historique et premier dîner dans un restaurant de la Belle Époque.' },
        { day: 'J2', title: 'La Tour Eiffel & l\'Exposition', desc: 'Journée complète à l\'Exposition Universelle. Montée en ascenseur hydraulique de la Tour Eiffel, observation du panorama et dîner au premier étage.' },
        { day: 'J3', title: 'Montmartre & Bohème', desc: 'Promenade à Montmartre, visite des ateliers d\'artistes, déjeuner au Moulin de la Galette. Rencontre organisée avec des peintres impressionnistes.' },
        { day: 'J4', title: 'Opéra & Soirée de Gala', desc: 'Visite des coulisses de l\'Opéra Garnier, représentation de gala le soir. Souper fin dans un grand restaurant du boulevard des Capucines.' },
        { day: 'J5', title: 'Liberté & Retour', desc: 'Matinée libre pour vos derniers emplettes au Bon Marché. Déjeuner d\'adieu, séance photo officielle et retour dans le présent.' },
      ]}
      itinerary3={[
        { day: 'J1', title: 'Arrivée & Tour Eiffel', desc: 'Installation, tenues d\'époque, visite de la Tour Eiffel et premier dîner Belle Époque.' },
        { day: 'J2', title: 'Exposition Universelle', desc: 'Journée complète à l\'Exposition, dîner bohème à Montmartre.' },
        { day: 'J3', title: 'Opéra & Retour', desc: 'Visite de l\'Opéra Garnier, shopping d\'époque, retour dans le présent.' },
      ]}
      rules={[
        "Tenues d'époque obligatoires en toutes circonstances. Tout anachronisme vestimentaire déclenche le protocole de discrétion immédiate.",
        "L'eau non purifiée et la nourriture de rue non validée sont strictement interdites. Notre équipe vous fournit tout le nécessaire.",
        "Il est formellement interdit de révéler votre origine temporelle ou de partager des informations futures avec les habitants.",
        "Le bracelet de rapatriement doit être porté en permanence. En cas de malaise, ne le retirez jamais — il assure votre retour en 3 secondes.",
        "Respectez les mœurs et codes sociaux de l'époque. Votre guide vous préparera lors du briefing d'arrivée.",
      ]}
      pricing={[
        {
          label: 'Standard',
          price: '2 900€',
          features: [
            'Hébergement Hôtel de Charme d\'époque',
            'Tenues Belle Époque incluses',
            'Guide historique personnel',
            'Accès Exposition Universelle',
            'Assurance temporelle',
            'Transferts chrono-spatiaux',
          ],
        },
        {
          label: 'Premium',
          price: '5 900€',
          features: [
            'Hôtel Particulier du VIIIe arr.',
            'Garde-robe complète couture',
            'Guide expert & interprète',
            'Loge Opéra Garnier',
            'Dîner au 1er étage Tour Eiffel',
            'Accès soirée de gala exclusive',
          ],
        },
        {
          label: 'VIP',
          price: '9 900€',
          features: [
            'Suite Haussmannienne privée',
            'Garde-robe couture illimitée',
            'Équipe dédiée 24h/24',
            'Dîner privé avec personnages historiques',
            'Accès Élysée & réceptions officielles',
            'Chronophotographie souvenir',
          ],
        },
      ]}
    />
  )
}
