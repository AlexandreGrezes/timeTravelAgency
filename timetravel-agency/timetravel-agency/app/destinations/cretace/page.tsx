import DestinationPage from '@/components/DestinationPage'

export const metadata = {
  title: 'Crétacé -65M d\'années | TimeTravel Agency',
  description: 'Observez des T-Rex et Triceratops dans leur habitat naturel. L\'aventure ultime dans un monde préhistorique.',
}

export default function Cretace() {
  return (
    <DestinationPage
      title="Crétacé"
      subtitle="-65 millions d'années — L'aube de la Terre"
      period="Amérique du Nord · -65 000 000 ans · Ère Mésozoïque"
      image="/images/cretace.jpg"
      tagline="Observer des Tyrannosaurus Rex et Triceratops en liberté dans leur habitat naturel intact. Le voyage le plus époustouflant de l'Histoire — réservé aux âmes aventurières."
      destinationSlug="cretace"
      highlights={[
        "Observer en toute sécurité des T-Rex chasser dans les plaines ouvertes du Crétacé supérieur",
        "Admirer des troupeaux de Triceratops et de Brachiosaures dans des forêts primitives d'une beauté absolue",
        "Couchers de soleil sur un ciel vierge de toute pollution, plus pur que tout ce que l'humanité a jamais connu",
        "Faune et flore totalement inconnues : découvrez des espèces non répertoriées, nommées exclusivement par nos explorateurs",
        "Nuit sous les étoiles dans notre campement VIP anti-prédateurs, entourés des sons d'un monde disparu",
      ]}
      itinerary5={[
        { day: 'J1', title: 'Arrivée & Briefing de Sécurité', desc: 'Matérialisation dans la zone de base sécurisée. Briefing complet avec équipe de sécurité, remise des équipements, installation dans le campement VIP blindé.' },
        { day: 'J2', title: 'Safari Herbivores', desc: 'Excursion en véhicule blindé vers les plaines d\'herbivores. Observation de Triceratops, Edmontosaurus et Pachycephalosaurus. Déjeuner panoramique sur plateau.' },
        { day: 'J3', title: 'Zone T-Rex — Grande Aventure', desc: 'Journée dans la zone de prédateurs. Observation de Tyrannosaurus Rex à distance sécurisée de 200m. Barrière sonique active en permanence. Expérience inoubliable.' },
        { day: 'J4', title: 'Survol & Nuit sous les Étoiles', desc: 'Survol en deltaplane anti-détection au-dessus des forêts de fougères géantes. Nuit astronomique dans le campement VIP — ciel absolument pur, sans lumière artificielle.' },
        { day: 'J5', title: 'Exploration Libre & Retour', desc: 'Matinée exploration faune et flore avec botaniste expert. Collection d\'échantillons autorisés. Derniers clichés chronophotographiques et retour dans le présent.' },
      ]}
      itinerary3={[
        { day: 'J1', title: 'Arrivée & Sécurité', desc: 'Matérialisation, briefing sécurité complet, installation campement VIP, premier coucher de soleil crétacé.' },
        { day: 'J2', title: 'Safari Dinosaures', desc: 'Herbivores le matin, zone T-Rex l\'après-midi en véhicule blindé sécurisé. Nuit en camp.' },
        { day: 'J3', title: 'Survol & Retour', desc: 'Deltaplane anti-détection, panoramas vertigineux, retour dans le présent avec chronophotos.' },
      ]}
      rules={[
        "Ne JAMAIS quitter le périmètre holographique sous aucun prétexte. La barrière sonique protège le groupe — au-delà, vous êtes dans la zone de danger réel.",
        "Le bracelet de rapatriement d'urgence doit être porté au poignet en permanence, 24h/24. En cas de danger immédiat, appuyez deux fois sur le bouton rouge.",
        "Il est formellement interdit de nourrir, toucher ou approcher tout dinosaure, même les herbivores apparemment dociles. Leur comportement est imprévisible.",
        "Aucune flamme nue, aucun son fort non autorisé, aucune lumière vive la nuit. Ces éléments attirent les prédateurs nocturnes dans le périmètre.",
        "En cas de défaillance d'équipement, restez immobile et signalez l'anomalie à votre guide. N'essayez jamais de réparer seul votre équipement de protection.",
      ]}
      pricing={[
        {
          label: 'Standard',
          price: '4 500€',
          features: [
            'Campement base sécurisé',
            'Équipement de protection complet',
            'Guide expert en paléontologie',
            'Safari herbivores & carnivores',
            'Assurance temporelle renforcée',
            'Transferts chrono-spatiaux',
          ],
        },
        {
          label: 'Premium',
          price: '8 500€',
          features: [
            'Lodge VIP anti-prédateurs',
            'Équipement militaire grade A',
            'Survol en deltaplane inclus',
            'Nuit astronomique guidée',
            'Botaniste expert dédié',
            'Chronophotos HD illimitées',
          ],
        },
        {
          label: 'VIP',
          price: '14 000€',
          features: [
            'Camp d\'exploration privé personnel',
            'Équipement de protection ultime',
            'Hélicoptère chrono-temporel privé',
            'Zone interdite — accès exclusif',
            'Nommage d\'une espèce découverte',
            'Équipe sécurité dédiée 24h/24',
          ],
        },
      ]}
    />
  )
}
