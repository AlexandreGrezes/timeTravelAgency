import DestinationPage from '@/components/DestinationPage'

export const metadata = {
  title: 'Florence 1504 — Haute Renaissance | TimeTravel Agency',
  description: 'Rencontrez Michel-Ange, Léonard de Vinci et vivez au cœur de la révolution artistique de la Renaissance florentine.',
}

export default function Florence1504() {
  return (
    <DestinationPage
      title="Florence 1504"
      subtitle="Au cœur de la révolution artistique de l'humanité"
      period="Italie · 1504 · Haute Renaissance"
      image="/images/florence.jpg"
      tagline="Rencontrez Michel-Ange à l'atelier, observez Léonard de Vinci peindre et vivez sous la protection des Médicis dans le Florence le plus créatif de l'Histoire."
      destinationSlug="florence-1504"
      highlights={[
        "Observer Michel-Ange travailler sur ses sculptures dans son atelier, quelques mois après l'inauguration du David",
        "Visiter l'atelier de Léonard de Vinci et assister à ses expériences scientifiques révolutionnaires",
        "Accès nocturne exclusif aux galeries des Médicis avant leur ouverture au public",
        "Dîner au Palazzo Médicis, en compagnie des mécènes les plus influents du monde",
        "Promenade sur le Ponte Vecchio et dans les marchés de la Renaissance florentine",
      ]}
      itinerary5={[
        { day: 'J1', title: 'Arrivée & Installation', desc: 'Transfert vers une demeure Renaissance du quartier de Santo Spirito. Remise des tenues d\'époque, cours d\'italien médiéval de base et premier banquet florentin.' },
        { day: 'J2', title: 'Michel-Ange & Le David', desc: 'Visite exclusive de l\'atelier de Michel-Ange. Découverte du David fraîchement inauguré sur la Piazza della Signoria. Déjeuner dans une taverne médiévale.' },
        { day: 'J3', title: 'Léonard de Vinci', desc: 'Journée dans les ateliers de Léonard. Observation de ses machines volantes, calepins secrets et travaux anatomiques. Accès aux Offices avant l\'heure.' },
        { day: 'J4', title: 'Les Médicis & la Politique', desc: 'Audience privée avec les Médicis au Palazzo. Promenade dans les Jardins de Boboli. Banquet de gala en habits de cour.' },
        { day: 'J5', title: 'Duomo & Retour', desc: 'Ascension du Duomo de Brunelleschi. Visite des marchés florentins. Séance de portrait par un maître de l\'époque et retour dans le présent.' },
      ]}
      itinerary3={[
        { day: 'J1', title: 'Arrivée & Duomo', desc: 'Installation, tenues d\'époque, visite du Duomo et premier banquet florentin.' },
        { day: 'J2', title: 'Michel-Ange & Léonard', desc: 'Visites des ateliers, Galerie des Offices, déjeuner médiéval.' },
        { day: 'J3', title: 'Médicis & Retour', desc: 'Audience Médicis, Jardins de Boboli, portrait souvenir, retour.' },
      ]}
      rules={[
        "Le latin et l'italien médiéval sont requis lors des interactions. Votre guide assure la traduction en toutes circonstances — ne tentez pas de communiquer seul.",
        "Les tenues Renaissance sont obligatoires. La moindre anachronie vestimentaire déclenche le protocole de discrétion temporelle.",
        "Il est formellement interdit de mentionner ou de dessiner tout objet futur — le risque de paradoxe est maximal à cette époque.",
        "Restez toujours dans le groupe lors des déplacements nocturnes. Florence 1504 comporte des zones d'insécurité nocturne hors périmètre autorisé.",
        "Le bracelet de rapatriement ne doit jamais être retiré ni montré à un habitant. En cas de curiosité, invoquez une amulette de protection.",
      ]}
      pricing={[
        {
          label: 'Standard',
          price: '3 200€',
          features: [
            'Demeure Renaissance privée',
            'Tenues d\'époque complètes',
            'Guide historique & traducteur',
            'Accès Galerie des Offices',
            'Assurance temporelle',
            'Transferts chrono-spatiaux',
          ],
        },
        {
          label: 'Premium',
          price: '6 200€',
          features: [
            'Palazzo médicéen privé',
            'Garde-robe Renaissance couture',
            'Accès ateliers Léonard & Michel-Ange',
            'Banquet Médicis inclus',
            'Cours d\'art avec un maître',
            'Portrait souvenir peint à la main',
          ],
        },
        {
          label: 'VIP',
          price: '10 500€',
          features: [
            'Suite Palazzo Pitti privée',
            'Audience officielle Médicis',
            'Accès aux œuvres secrètes non exposées',
            'Leçon privée avec un Maestro',
            'Manuscrit enluminé souvenir',
            'Équipe dédiée 24h/24',
          ],
        },
      ]}
    />
  )
}
