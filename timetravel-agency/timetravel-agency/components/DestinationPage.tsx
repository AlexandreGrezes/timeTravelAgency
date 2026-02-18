import Image from 'next/image'
import Link from 'next/link'

interface Pricing {
  label: string
  price: string
  features: string[]
}

interface DestinationPageProps {
  title: string
  subtitle: string
  period: string
  image: string
  tagline: string
  highlights: string[]
  itinerary5: { day: string; title: string; desc: string }[]
  itinerary3: { day: string; title: string; desc: string }[]
  rules: string[]
  pricing: Pricing[]
  destinationSlug: string
}

export default function DestinationPage({
  title, subtitle, period, image, tagline,
  highlights, itinerary5, itinerary3, rules, pricing, destinationSlug
}: DestinationPageProps) {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/50 to-[#050508]/20"/>
        <div className="absolute inset-0 bg-gradient-to-r from-[#050508]/60 via-transparent to-transparent"/>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
          <p className="text-[10px] tracking-[0.5em] text-amber-600/80 uppercase font-sans mb-4">{period}</p>
          <h1 className="font-serif text-6xl md:text-8xl font-light text-stone-50 leading-none mb-3">
            {title}
          </h1>
          <p className="text-lg text-amber-400/80 font-serif italic mb-6">{subtitle}</p>
          <p className="text-stone-400 max-w-xl leading-relaxed mb-8 text-sm">{tagline}</p>
          <div className="flex gap-4">
            <Link href={`/reservation?destination=${destinationSlug}`} className="btn-gold px-8 py-3.5 rounded-none text-xs tracking-widest">
              Planifier ce voyage
            </Link>
            <Link href="/" className="btn-ghost px-8 py-3.5 text-xs tracking-widest">
              ← Retour
            </Link>
          </div>
        </div>
      </section>

      {/* ── CONTENT ──────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 py-24 space-y-24">

        {/* Highlights */}
        <section>
          <div className="ornament mb-8">
            <span className="text-[10px] tracking-[0.4em] text-amber-700/70 uppercase">Points Forts</span>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <div key={i} className="glass-card p-5 rounded-xl border border-stone-800/40 flex gap-4 items-start">
                <span className="text-amber-500 font-serif text-lg shrink-0">◆</span>
                <p className="text-stone-300 text-sm leading-relaxed">{h}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Itinerary 5 days */}
        <section>
          <div className="ornament mb-10">
            <span className="text-[10px] tracking-[0.4em] text-amber-700/70 uppercase">Itinéraire 5 Jours</span>
          </div>
          <div className="space-y-4">
            {itinerary5.map((day, i) => (
              <div key={i} className="flex gap-6 glass-card p-6 rounded-xl border border-stone-800/30">
                <div className="shrink-0 w-16 text-right">
                  <span className="font-serif text-2xl text-amber-500/60">{day.day}</span>
                </div>
                <div className="w-px bg-amber-900/30 shrink-0"/>
                <div>
                  <h4 className="font-serif text-lg text-stone-100 mb-2">{day.title}</h4>
                  <p className="text-sm text-stone-500 leading-relaxed">{day.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Escapade 3 days */}
        <section>
          <div className="ornament mb-10">
            <span className="text-[10px] tracking-[0.4em] text-amber-700/70 uppercase">Escapade Express — 3 Jours</span>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {itinerary3.map((day, i) => (
              <div key={i} className="glass-card p-6 rounded-xl border border-stone-800/30">
                <span className="font-serif text-3xl text-amber-600/40 block mb-3">{day.day}</span>
                <h4 className="font-serif text-base text-stone-100 mb-2">{day.title}</h4>
                <p className="text-xs text-stone-500 leading-relaxed">{day.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Rules & Security */}
        <section>
          <div className="ornament mb-8">
            <span className="text-[10px] tracking-[0.4em] text-amber-700/70 uppercase">Règles & Sécurité Temporelle</span>
          </div>
          <div className="glass-card p-8 rounded-2xl border border-amber-900/20 space-y-4">
            {rules.map((rule, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="text-amber-500 font-serif shrink-0 text-sm">0{i+1}.</span>
                <p className="text-sm text-stone-400 leading-relaxed">{rule}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section>
          <div className="ornament mb-10">
            <span className="text-[10px] tracking-[0.4em] text-amber-700/70 uppercase">Formules & Tarifs</span>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {pricing.map((plan, i) => (
              <div key={i} className={`glass-card p-7 rounded-2xl border transition-all duration-500 ${
                i === 1
                  ? 'border-amber-700/50 shadow-[0_0_40px_rgba(212,168,83,0.1)] scale-105'
                  : 'border-stone-800/40'
              }`}>
                {i === 1 && (
                  <div className="text-center mb-4">
                    <span className="text-[9px] tracking-widest text-black bg-amber-500 px-3 py-1 uppercase font-sans">Populaire</span>
                  </div>
                )}
                <h4 className="font-serif text-xl text-stone-100 mb-1">{plan.label}</h4>
                <p className="text-3xl font-serif gold-text mb-5">{plan.price}<span className="text-base text-stone-500 font-sans ml-1">/ pers.</span></p>
                <ul className="space-y-2">
                  {plan.features.map((f, j) => (
                    <li key={j} className="text-xs text-stone-400 flex gap-2">
                      <span className="text-amber-600 shrink-0">✓</span>{f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/reservation?destination=${destinationSlug}&formule=${plan.label.toLowerCase()}`}
                  className={`mt-6 block text-center py-3 text-xs tracking-widest uppercase transition-all duration-500 ${
                    i === 1 ? 'btn-gold' : 'btn-ghost'
                  }`}
                >
                  Choisir cette formule
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center py-8">
          <Link href={`/reservation?destination=${destinationSlug}`} className="btn-gold px-14 py-5 rounded-none text-sm tracking-widest inline-block">
            Planifier ce voyage
          </Link>
        </section>
      </div>
    </>
  )
}
