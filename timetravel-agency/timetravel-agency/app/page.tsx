'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import DestinationCard from '@/components/DestinationCard'

const STARS = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  top: Math.random() * 100,
  left: Math.random() * 100,
  duration: 2 + Math.random() * 4,
  delay: Math.random() * 4,
  size: Math.random() > 0.8 ? 2 : 1,
}))

export default function HomePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg">
        {/* Stars */}
        <div className="stars">
          {STARS.map(s => (
            <div
              key={s.id}
              className="star"
              style={{
                top: `${s.top}%`,
                left: `${s.left}%`,
                width: s.size,
                height: s.size,
                '--duration': `${s.duration}s`,
                '--delay': `${s.delay}s`,
              } as React.CSSProperties}
            />
          ))}
        </div>

        {/* Ambient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-amber-900/10 blur-[120px] animate-pulse"/>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-900/8 blur-[100px] animate-pulse" style={{animationDelay:'1.5s'}}/>

        {/* Ornamental top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-700/40 to-transparent"/>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* Pre-title */}
          <div className="ornament mb-8">
            <span className="text-[10px] tracking-[0.5em] text-amber-600/80 uppercase font-sans">Est. 2025 — Agence Temporelle</span>
          </div>

          {/* Main title */}
          <h1 className="font-serif text-6xl md:text-8xl font-light leading-none mb-6 animate-fade-up" style={{animationDelay:'0.2s'}}>
            Voyagez au-delà<br />
            <em className="gold-text not-italic">du temps.</em>
          </h1>

          <p className="font-sans text-stone-400 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto mb-12 animate-fade-up" style={{animationDelay:'0.4s'}}>
            Découvrez des époques extraordinaires avec TimeTravel Agency.<br className="hidden md:block"/>
            Chaque voyage est une immersion unique dans l&apos;histoire de l&apos;humanité.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{animationDelay:'0.6s'}}>
            <a href="#destinations" className="btn-gold px-10 py-4 rounded-none text-sm tracking-widest">
              Explorer les destinations
            </a>
            <button
              onClick={() => document.getElementById('chatbot-toggle')?.click()}
              className="btn-ghost px-10 py-4 text-sm tracking-widest"
            >
              Parler à notre conseiller IA
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
            <span className="text-[10px] tracking-widest text-stone-500 uppercase">Défiler</span>
            <div className="w-px h-12 bg-gradient-to-b from-amber-700/60 to-transparent animate-pulse"/>
          </div>
        </div>
      </section>

      {/* ── AGENCE FEATURES ──────────────────────────────── */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <div className="ornament mb-6">
              <span className="text-[10px] tracking-[0.4em] text-amber-700/70 uppercase">Notre Promesse</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-stone-100">
              L&apos;excellence temporelle,<br/><em className="gold-text not-italic">en toute sécurité</em>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '♦',
                title: 'Luxe Absolu',
                desc: 'Hébergements d\'époque reconstitués à l\'identique, gastronomie authentique, tenues couture — chaque détail est orchestré pour votre confort maximal.',
                delay: 0,
              },
              {
                icon: '⊕',
                title: 'Sécurité Temporelle',
                desc: 'Protocoles de protection chrono-spatiale certifiés, bracelet de rapatriement d\'urgence, guides experts et assurance temporelle complète incluse.',
                delay: 150,
              },
              {
                icon: '◈',
                title: 'Immersion Historique Totale',
                desc: 'Rencontrez les personnages de l\'Histoire, participez aux événements fondateurs de l\'humanité. Une expérience que nul livre ne peut offrir.',
                delay: 300,
              },
            ].map(item => (
              <ScrollReveal key={item.title} delay={item.delay}>
                <div className="glass-card p-8 rounded-2xl border border-stone-800/50 hover:border-amber-800/40 transition-all duration-700 h-full group">
                  <div className="text-2xl text-amber-500/70 mb-5 font-serif group-hover:text-amber-400 transition-colors duration-500">{item.icon}</div>
                  <h3 className="font-serif text-xl text-stone-100 mb-3">{item.title}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMENT ÇA FONCTIONNE ────────────────────────── */}
      <section className="py-20 px-6 border-y border-stone-900/60">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <div className="ornament mb-6">
              <span className="text-[10px] tracking-[0.4em] text-amber-700/70 uppercase">Processus</span>
            </div>
            <h2 className="font-serif text-4xl font-light text-stone-100">Comment ça fonctionne ?</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-8 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-transparent via-amber-800/30 to-transparent"/>

            {[
              { step: '01', title: 'Sélectionnez votre époque', desc: 'Parcourez nos destinations temporelles et choisissez l\'ère qui éveille votre curiosité.' },
              { step: '02', title: 'Préparez votre immersion', desc: 'Notre équipe vous prépare avec un briefing historique, des tenues d\'époque et les protocoles essentiels.' },
              { step: '03', title: 'Traversez le temps', desc: 'Embarquez pour une aventure unique. Notre technologie vous transporte à l\'instant précis choisi.' },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 200}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full border border-amber-800/40 flex items-center justify-center mx-auto mb-5 glass-card">
                    <span className="font-serif text-xl text-amber-500/80">{item.step}</span>
                  </div>
                  <h3 className="font-serif text-lg text-stone-200 mb-3">{item.title}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── DESTINATIONS ─────────────────────────────────── */}
      <section id="destinations" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <div className="ornament mb-6">
              <span className="text-[10px] tracking-[0.4em] text-amber-700/70 uppercase">Nos Voyages</span>
            </div>
            <h2 className="font-serif text-5xl font-light text-stone-100 mb-4">
              Destinations <em className="gold-text not-italic">Temporelles</em>
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto text-sm leading-relaxed">
              Trois époques soigneusement sélectionnées pour leur richesse historique, leur beauté et leur potentiel d&apos;immersion inégalé.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            <ScrollReveal delay={0}>
              <DestinationCard
                title="Paris 1889"
                subtitle="Belle Époque"
                period="1889"
                imageSrc="/images/paris.jpg"
                href="/destinations/paris-1889"
                tagline="Assistez à l'inauguration de la Tour Eiffel, déambulez dans l'Exposition Universelle et vivez la splendeur de la Belle Époque."
                priceFrom="2 900€"
              />
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <DestinationCard
                title="Florence 1504"
                subtitle="Haute Renaissance"
                period="1504"
                imageSrc="/images/florence.jpg"
                href="/destinations/florence-1504"
                tagline="Rencontrez Michel-Ange, visitez l'atelier de Léonard de Vinci et vivez au cœur de la révolution artistique de l'humanité."
                priceFrom="3 200€"
              />
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <DestinationCard
                title="Crétacé -65M"
                subtitle="Ère Mésozoïque"
                period="-65 000 000"
                imageSrc="/images/cretace.jpg"
                href="/destinations/cretace"
                tagline="Observez des T-Rex et Triceratops dans leur habitat naturel. L'aventure ultime dans un monde vierge de toute trace humaine."
                priceFrom="4 500€"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="glass-card rounded-3xl p-12 text-center relative overflow-hidden border border-amber-900/20">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 via-transparent to-purple-900/10"/>
              <div className="relative z-10">
                <div className="ornament mb-6">
                  <span className="text-[10px] tracking-[0.4em] text-amber-700/70 uppercase">Commencez</span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl font-light text-stone-100 mb-4">
                  Votre odyssée<br/><em className="gold-text not-italic">vous attend</em>
                </h2>
                <p className="text-stone-400 mb-8 text-sm leading-relaxed max-w-lg mx-auto">
                  Rejoignez les quelques privilégiés qui ont traversé le temps. Places limitées à 8 voyageurs par départ.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/reservation" className="btn-gold px-10 py-4 rounded-none text-sm tracking-widest">
                    Réserver mon voyage
                  </Link>
                  <button
                    onClick={() => document.getElementById('chatbot-toggle')?.click()}
                    className="btn-ghost px-10 py-4 text-sm tracking-widest"
                  >
                    Parler à un conseiller
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer className="border-t border-stone-900/60 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-serif text-lg gold-text">TimeTravel Agency</p>
            <p className="text-xs text-stone-600 mt-1 tracking-widest uppercase">Voyages Temporels de Luxe</p>
          </div>
          <div className="flex gap-8">
            <Link href="/#destinations" className="text-xs text-stone-600 hover:text-amber-500 transition-colors tracking-wider uppercase">Destinations</Link>
            <Link href="/reservation" className="text-xs text-stone-600 hover:text-amber-500 transition-colors tracking-wider uppercase">Réserver</Link>
          </div>
          <p className="text-xs text-stone-700">© 2025 TimeTravel Agency — Tous droits réservés</p>
        </div>
      </footer>
    </>
  )
}
