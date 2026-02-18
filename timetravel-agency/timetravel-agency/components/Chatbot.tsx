'use client'
import { useState, useRef, useEffect } from 'react'

interface Message {
  role: 'bot' | 'user'
  content: string
  timestamp: number
}

// ── Chatbot logic ──────────────────────────────────────────────
function getBotResponse(userMessage: string, history: Message[]): string {
  const msg = userMessage.toLowerCase()

  // Keywords detection
  const isFlorence = /art|musée|musee|peinture|architecture|renaissance|michel.?ange|léonard|leonard|botticelli|médicis|medicis|galerie|sculpture/i.test(msg)
  const isParis = /élégance|elegance|tour eiffel|eiffel|exposition|belle.?époque|belle.?epoque|haussmann|impressionn|café|cafe|mode/i.test(msg)
  const isCretace = /dino|dinosaure|nature|aventure|préhistoire|prehistoire|jurassique|t.rex|tyrannosaure|crétacé|cretace|sauvage|primitif/i.test(msg)

  const isPrix = /prix|tarif|coût|cout|combien|€|euro/i.test(msg)
  const isSecurity = /sécurité|securite|danger|risque|safe|protection/i.test(msg)
  const isReserver = /réserver|reserver|book|réservation|reservation|comment faire/i.test(msg)
  const isDates = /date|quand|disponible|calendrier|période|periode|saison/i.test(msg)
  const isFamille = /famille|enfant|kids|gamin|bébé|bebe|enfants|parents/i.test(msg)
  const isBonjour = /bonjour|salut|bonsoir|hello|hey|bonne nuit/i.test(msg)

  if (isBonjour && history.length <= 2) {
    return `Bienvenue chez **TimeTravel Agency** ! 

Je suis votre conseiller temporel personnel. Permettez-moi de vous guider vers la destination de vos rêves à travers les âges. 🏺

Parlez-moi de vos passions — art, histoire, aventure — et je trouverai l'époque parfaite pour vous. Ou posez-moi simplement une question sur nos voyages !`
  }

  if (isFamille) {
    return `Excellente question pour les voyages en famille ! Voici nos recommandations :

**Crétacé -65M** — Le choix idéal pour les familles avec enfants. Observer des dinosaures en vrai ? Les enfants en seront éblouis pour la vie !
- Formule Famille disponible dès **4 500€ / personne**
- Guides spécialisés jeune public
- Zone d'observation ultra-sécurisée

**Paris 1889** — Second choix parfait. La construction de la Tour Eiffel sous vos yeux est un spectacle inoubliable pour tous les âges !
- Dès **2 900€ / personne**

Note sécurité : les enfants de moins de 8 ans nécessitent une accompagnement VIP. Souhaitez-vous plus de détails sur l'une de ces options ?`
  }

  if (isPrix) {
    return `Voici nos tarifs pour chaque destination :

**🗼 Paris 1889 — Belle Époque**
- Standard : 2 900€
- Premium : 5 900€
- VIP : 9 900€

**🎨 Florence 1504 — Renaissance**
- Standard : 3 200€
- Premium : 6 200€
- VIP : 10 500€

**🦕 Crétacé -65M d'années**
- Standard : 4 500€
- Premium : 8 500€
- VIP : 14 000€

Tous nos tarifs incluent l'équipement temporel complet, les tenues d'époque, les guides experts et l'assurance temporelle. Souhaitez-vous des détails sur une formule en particulier ?`
  }

  if (isSecurity) {
    return `La sécurité temporelle est notre priorité absolue. Chaque voyageur bénéficie de :

🛡️ **Protocole de sécurité temporelle**
- Combinaison chrono-protectrice invisible intégrée
- Bracelet de rapatriement d'urgence (retour immédiat en 3 secondes)
- Guide personnel formé pendant 3 ans
- Surveillance en temps réel depuis notre centre de contrôle
- Assurance temporelle complète incluse

Pour le **Crétacé**, des protections additionnelles s'appliquent : véhicule blindé, barrière sonique anti-prédateurs, et périmètre de sécurité holographique.

Notre bilan : **0 incident** depuis l'ouverture de l'agence. Votre sécurité est notre engagement absolu.`
  }

  if (isReserver) {
    return `Réserver votre voyage temporel est simple ! Voici les étapes :

1. **Choisissez votre destination** — Paris 1889, Florence 1504 ou Crétacé
2. **Sélectionnez votre formule** — Standard, Premium ou VIP
3. **Remplissez le formulaire** sur notre [page Réservation](/reservation)
4. **Notre équipe vous contacte** sous 24h pour finaliser les détails

Les départs sont organisés chaque mois. Je vous conseille de réserver **au moins 3 mois à l'avance** pour garantir votre place.

Souhaitez-vous que je vous aide à choisir la destination idéale avant de réserver ?`
  }

  if (isDates) {
    return `Nos voyages temporels partent **toute l'année**, avec des créneaux mensuels limités pour garantir une expérience exclusive.

📅 **Calendrier général :**
- Départs chaque premier et troisième samedi du mois
- Durée minimale : 3 jours (Escapade Express)
- Durée standard : 5 à 7 jours
- Retour garanti à l'heure et au jour de votre choix

⚠️ Places limitées à **8 voyageurs** par groupe pour préserver l'authenticité de l'expérience.

Nous recommandons de réserver **3 à 6 mois à l'avance**. Voulez-vous qu'on vérifie les disponibilités pour une période en particulier ?`
  }

  if (isFlorence) {
    return `**Florence 1504** semble être la destination parfaite pour vous ! 🎨

*La Renaissance à son apogée — vous êtes au cœur de la révolution artistique de l'humanité.*

**Points forts :**
- Observer Michel-Ange sculpter le David en secret
- Visiter l'atelier de Léonard de Vinci
- Dîner avec les mécènes Médicis à leur palazzo

**Mini-itinéraire 3 jours :**
- Jour 1 : Arrivée, tenues d'époque, exploration du Duomo
- Jour 2 : Rencontre d'artistes, Galerie des Offices avant l'heure
- Jour 3 : Jardins de Boboli, audience Médicis, retour

**Tarifs :**
- Standard : 3 200€ | Premium : 6 200€ | VIP : 10 500€

🛡️ *Note sécurité : les tenues d'époque sont obligatoires et incluses. Évitez tout anachronisme linguistique.*

Souhaitez-vous [découvrir Florence en détail](/destinations/florence-1504) ou [réserver maintenant](/reservation) ?`
  }

  if (isParis) {
    return `**Paris 1889** est votre destination idéale ! 🗼

*La Belle Époque dans toute sa splendeur — assister à l'inauguration de la Tour Eiffel est un privilège rare.*

**Points forts :**
- Voir la Tour Eiffel inaugurée par Gustave Eiffel lui-même
- L'Exposition Universelle et ses merveilles techniques
- Les grands cafés de Montmartre, Toulouse-Lautrec et Degas

**Mini-itinéraire 3 jours :**
- Jour 1 : Arrivée, installation Hôtel Particulier de l'époque
- Jour 2 : Exposition Universelle, montée en ascenseur de la Tour
- Jour 3 : Opéra Garnier, souper fin, retour dans le présent

**Tarifs :**
- Standard : 2 900€ | Premium : 5 900€ | VIP : 9 900€

🛡️ *Note sécurité : l'eau non purifiée est à éviter. Notre équipe vous fournit tout le nécessaire.*

Souhaitez-vous [découvrir Paris 1889](/destinations/paris-1889) ou [réserver](/reservation) ?`
  }

  if (isCretace) {
    return `**Le Crétacé -65 millions d'années** — l'aventure ultime vous attend ! 🦕

*Observer des dinosaures en liberté dans leur habitat naturel est une expérience que nul autre siècle ne peut offrir.*

**Points forts :**
- Observation de T-Rex et Triceratops en milieu naturel
- Forêts primordiales, faune et flore inconnues
- Couchers de soleil sur un monde vierge de toute trace humaine

**Mini-itinéraire 3 jours :**
- Jour 1 : Arrivée, briefing sécurité, campement base VIP
- Jour 2 : Safari en véhicule blindé — zone herbivores puis carnivores à distance sécurisée
- Jour 3 : Survol en deltaplane anti-détection, retour

**Tarifs :**
- Standard : 4 500€ | Premium : 8 500€ | VIP : 14 000€

🛡️ *Note sécurité : ne quittez JAMAIS le périmètre holographique. Bracelet de rapatriement permanent obligatoire.*

Souhaitez-vous [explorer le Crétacé](/destinations/cretace) ou [réserver](/reservation) ?`
  }

  // Hesitation / generic
  const isSecondMessage = history.filter(m => m.role === 'user').length >= 1
  if (isSecondMessage && !isFlorence && !isParis && !isCretace) {
    return `Pour vous conseiller au mieux, j'aurais besoin de mieux vous connaître.

**Quelle expérience vous attire davantage ?**

🎨 **A)** Une immersion culturelle et artistique, au cœur des chefs-d'œuvre de l'humanité
🥂 **B)** L'élégance et le raffinement d'une époque de luxe parisien
🦖 **C)** Une aventure hors du commun au cœur d'un monde préhistorique

Dites-moi simplement A, B ou C — ou décrivez en quelques mots ce qui vous fait rêver !`
  }

  return `Bonjour et bienvenue chez **TimeTravel Agency** ! ✨

Je suis votre conseiller temporel. Je peux vous aider à :
- **Choisir votre destination** selon vos passions
- **Connaître les tarifs** de chaque voyage
- **Comprendre nos protocoles de sécurité**
- **Préparer votre réservation**

Parlez-moi de ce qui vous passionne — art, aventure, élégance — et je vous guiderai vers l'époque de vos rêves !`
}

// ── Component ──────────────────────────────────────────────────
export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      content: `Bienvenue chez **TimeTravel Agency** ! ✨\n\nJe suis votre conseiller temporel personnel. Parlez-moi de vos passions — art, aventure, élégance — et je vous guiderai vers l'époque de vos rêves !\n\nQuel type d'expérience recherchez-vous ?`,
      timestamp: Date.now(),
    }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 300)
  }, [isOpen])

  const sendMessage = async () => {
    if (!input.trim()) return
    const userMsg: Message = { role: 'user', content: input, timestamp: Date.now() }
    const newHistory = [...messages, userMsg]
    setMessages(newHistory)
    setInput('')
    setIsTyping(true)

    // Simulate AI thinking delay
    await new Promise(r => setTimeout(r, 1200 + Math.random() * 800))

    const botContent = getBotResponse(input, messages)
    setIsTyping(false)
    setMessages(prev => [...prev, { role: 'bot', content: botContent, timestamp: Date.now() }])
  }

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage() }
  }

  // Render markdown-lite (bold, line breaks, links)
  const renderContent = (text: string) => {
    return text.split('\n').map((line, i) => {
      const parts = line.split(/(\*\*[^*]+\*\*|\[.*?\]\(.*?\))/g)
      return (
        <p key={i} className={line === '' ? 'h-2' : 'mb-1'}>
          {parts.map((part, j) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={j} className="text-amber-300 font-semibold">{part.slice(2,-2)}</strong>
            }
            const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/)
            if (linkMatch) {
              return <a key={j} href={linkMatch[2]} className="text-amber-400 underline underline-offset-2 hover:text-amber-300">{linkMatch[1]}</a>
            }
            return part
          })}
        </p>
      )
    })
  }

  return (
    <>
      {/* Toggle button */}
      <button
        id="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full btn-gold flex items-center justify-center shadow-[0_0_30px_rgba(212,168,83,0.4)] transition-all duration-500 hover:scale-110"
        aria-label="Ouvrir le conseiller IA"
      >
        {isOpen ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        )}
      </button>

      {/* Chat window */}
      <div className={`fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] transition-all duration-500 ${
        isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-6 pointer-events-none'
      }`}>
        <div className="glass-card rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.7),0_0_40px_rgba(212,168,83,0.1)]">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0d0a1a] to-[#13101f] px-5 py-4 border-b border-amber-900/20">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-black text-sm font-bold">AI</div>
              <div>
                <p className="text-sm font-semibold text-amber-200 font-serif">Conseiller Temporel</p>
                <p className="text-xs text-stone-500 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full inline-block animate-pulse"/>
                  TimeTravel Agency
                </p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto px-4 py-4 space-y-3 scrollbar-thin">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-bubble-in flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-amber-900/40 border border-amber-800/40 text-amber-100 rounded-br-sm'
                    : 'bg-[#13101f] border border-stone-800/60 text-stone-300 rounded-bl-sm'
                }`}>
                  {msg.role === 'bot' ? renderContent(msg.content) : msg.content}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start chat-bubble-in">
                <div className="bg-[#13101f] border border-stone-800/60 rounded-2xl rounded-bl-sm px-5 py-4 flex gap-1.5 items-center">
                  <div className="typing-dot"/>
                  <div className="typing-dot"/>
                  <div className="typing-dot"/>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="px-4 py-3 border-t border-stone-800/50 bg-[#0a0810]">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Posez votre question..."
                className="flex-1 bg-stone-900/60 border border-stone-700/40 rounded-xl px-4 py-2.5 text-sm text-stone-200 placeholder:text-stone-600 focus:outline-none focus:border-amber-700/60 transition-colors"
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim()}
                className="btn-gold w-10 h-10 rounded-xl flex items-center justify-center shrink-0 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
