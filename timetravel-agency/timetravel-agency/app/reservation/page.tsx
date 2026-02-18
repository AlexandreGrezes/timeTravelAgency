'use client'
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

const DESTINATIONS = [
  { value: 'paris-1889', label: 'Paris 1889 — Belle Époque' },
  { value: 'florence-1504', label: 'Florence 1504 — Haute Renaissance' },
  { value: 'cretace', label: 'Crétacé -65 millions d\'années' },
]

const FORMULES = [
  { value: 'standard', label: 'Standard' },
  { value: 'premium', label: 'Premium' },
  { value: 'vip', label: 'VIP' },
]

function ReservationForm() {
  const searchParams = useSearchParams()
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    destination: searchParams.get('destination') || '',
    formule: searchParams.get('formule') || 'standard',
    dateDepart: '',
    dateRetour: '',
    voyageurs: '2',
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!form.destination) errs.destination = 'Veuillez choisir une destination'
    if (!form.dateDepart) errs.dateDepart = 'Date de départ requise'
    if (!form.dateRetour) errs.dateRetour = 'Date de retour requise'
    if (form.dateDepart && form.dateRetour && form.dateDepart >= form.dateRetour) errs.dateRetour = 'La date de retour doit être après le départ'
    if (!form.prenom.trim()) errs.prenom = 'Prénom requis'
    if (!form.nom.trim()) errs.nom = 'Nom requis'
    if (!form.email.includes('@')) errs.email = 'Email invalide'
    return errs
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setLoading(true)
    await new Promise(r => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  const update = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }))
    setErrors(prev => { const next = { ...prev }; delete next[field]; return next })
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 pt-24">
        <div className="glass-card rounded-3xl p-12 text-center max-w-lg border border-amber-800/30">
          <div className="w-16 h-16 rounded-full bg-amber-900/30 border border-amber-700/40 flex items-center justify-center mx-auto mb-6">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d4a853" strokeWidth="1.5">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
          <h2 className="font-serif text-3xl text-stone-100 mb-3">Demande envoyée !</h2>
          <p className="text-stone-400 text-sm mb-2">
            Merci <strong className="text-amber-400">{form.prenom} {form.nom}</strong>.
          </p>
          <p className="text-stone-500 text-sm mb-8 leading-relaxed">
            Notre équipe de conseillers temporels vous contactera sous <strong className="text-stone-300">24 heures</strong> pour confirmer votre voyage vers <strong className="text-amber-400">{DESTINATIONS.find(d => d.value === form.destination)?.label}</strong>.
          </p>
          <Link href="/" className="btn-gold px-8 py-3 rounded-none text-xs tracking-widest">
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="ornament mb-6">
            <span className="text-[10px] tracking-[0.4em] text-amber-700/70 uppercase">Planifiez votre voyage</span>
          </div>
          <h1 className="font-serif text-5xl font-light text-stone-100 mb-4">
            Réserver <em className="gold-text not-italic">votre odyssée</em>
          </h1>
          <p className="text-stone-500 text-sm">Places limitées · Réponse sous 24h · Sans engagement immédiat</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Destination */}
          <div className="glass-card rounded-2xl p-6 border border-stone-800/40 space-y-5">
            <h3 className="font-serif text-lg text-amber-400/80">Votre voyage</h3>

            <div>
              <label className="text-xs tracking-wider text-stone-500 uppercase mb-2 block">Destination *</label>
              <select
                value={form.destination}
                onChange={e => update('destination', e.target.value)}
                className="w-full bg-stone-900/50 border border-stone-700/40 rounded-xl px-4 py-3 text-sm text-stone-200 focus:outline-none focus:border-amber-700/60 transition-colors"
              >
                <option value="">Choisir une destination...</option>
                {DESTINATIONS.map(d => <option key={d.value} value={d.value}>{d.label}</option>)}
              </select>
              {errors.destination && <p className="text-red-400 text-xs mt-1">{errors.destination}</p>}
            </div>

            <div>
              <label className="text-xs tracking-wider text-stone-500 uppercase mb-2 block">Niveau de confort *</label>
              <div className="grid grid-cols-3 gap-3">
                {FORMULES.map(f => (
                  <button
                    key={f.value}
                    type="button"
                    onClick={() => update('formule', f.value)}
                    className={`py-3 text-sm rounded-xl border transition-all duration-300 ${
                      form.formule === f.value
                        ? 'bg-amber-900/30 border-amber-700/60 text-amber-300'
                        : 'border-stone-700/30 text-stone-500 hover:border-stone-600/50'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs tracking-wider text-stone-500 uppercase mb-2 block">Date de départ *</label>
                <input
                  type="date"
                  value={form.dateDepart}
                  onChange={e => update('dateDepart', e.target.value)}
                  className="w-full bg-stone-900/50 border border-stone-700/40 rounded-xl px-4 py-3 text-sm text-stone-200 focus:outline-none focus:border-amber-700/60 transition-colors"
                />
                {errors.dateDepart && <p className="text-red-400 text-xs mt-1">{errors.dateDepart}</p>}
              </div>
              <div>
                <label className="text-xs tracking-wider text-stone-500 uppercase mb-2 block">Date de retour *</label>
                <input
                  type="date"
                  value={form.dateRetour}
                  onChange={e => update('dateRetour', e.target.value)}
                  className="w-full bg-stone-900/50 border border-stone-700/40 rounded-xl px-4 py-3 text-sm text-stone-200 focus:outline-none focus:border-amber-700/60 transition-colors"
                />
                {errors.dateRetour && <p className="text-red-400 text-xs mt-1">{errors.dateRetour}</p>}
              </div>
            </div>

            <div>
              <label className="text-xs tracking-wider text-stone-500 uppercase mb-2 block">Nombre de voyageurs</label>
              <select
                value={form.voyageurs}
                onChange={e => update('voyageurs', e.target.value)}
                className="w-full bg-stone-900/50 border border-stone-700/40 rounded-xl px-4 py-3 text-sm text-stone-200 focus:outline-none focus:border-amber-700/60 transition-colors"
              >
                {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} voyageur{n > 1 ? 's' : ''}</option>)}
              </select>
            </div>
          </div>

          {/* Contact */}
          <div className="glass-card rounded-2xl p-6 border border-stone-800/40 space-y-5">
            <h3 className="font-serif text-lg text-amber-400/80">Vos coordonnées</h3>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs tracking-wider text-stone-500 uppercase mb-2 block">Prénom *</label>
                <input
                  type="text"
                  placeholder="Jean"
                  value={form.prenom}
                  onChange={e => update('prenom', e.target.value)}
                  className="w-full bg-stone-900/50 border border-stone-700/40 rounded-xl px-4 py-3 text-sm text-stone-200 placeholder:text-stone-600 focus:outline-none focus:border-amber-700/60 transition-colors"
                />
                {errors.prenom && <p className="text-red-400 text-xs mt-1">{errors.prenom}</p>}
              </div>
              <div>
                <label className="text-xs tracking-wider text-stone-500 uppercase mb-2 block">Nom *</label>
                <input
                  type="text"
                  placeholder="Dupont"
                  value={form.nom}
                  onChange={e => update('nom', e.target.value)}
                  className="w-full bg-stone-900/50 border border-stone-700/40 rounded-xl px-4 py-3 text-sm text-stone-200 placeholder:text-stone-600 focus:outline-none focus:border-amber-700/60 transition-colors"
                />
                {errors.nom && <p className="text-red-400 text-xs mt-1">{errors.nom}</p>}
              </div>
            </div>

            <div>
              <label className="text-xs tracking-wider text-stone-500 uppercase mb-2 block">Email *</label>
              <input
                type="email"
                placeholder="jean.dupont@email.com"
                value={form.email}
                onChange={e => update('email', e.target.value)}
                className="w-full bg-stone-900/50 border border-stone-700/40 rounded-xl px-4 py-3 text-sm text-stone-200 placeholder:text-stone-600 focus:outline-none focus:border-amber-700/60 transition-colors"
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="text-xs tracking-wider text-stone-500 uppercase mb-2 block">Téléphone</label>
              <input
                type="tel"
                placeholder="+33 6 12 34 56 78"
                value={form.telephone}
                onChange={e => update('telephone', e.target.value)}
                className="w-full bg-stone-900/50 border border-stone-700/40 rounded-xl px-4 py-3 text-sm text-stone-200 placeholder:text-stone-600 focus:outline-none focus:border-amber-700/60 transition-colors"
              />
            </div>

            <div>
              <label className="text-xs tracking-wider text-stone-500 uppercase mb-2 block">Message (optionnel)</label>
              <textarea
                rows={3}
                placeholder="Précisez vos attentes, contraintes particulières..."
                value={form.message}
                onChange={e => update('message', e.target.value)}
                className="w-full bg-stone-900/50 border border-stone-700/40 rounded-xl px-4 py-3 text-sm text-stone-200 placeholder:text-stone-600 focus:outline-none focus:border-amber-700/60 transition-colors resize-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-gold w-full py-5 text-sm tracking-widest disabled:opacity-50 relative"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-3">
                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" strokeWidth="2" opacity="0.2"/>
                  <path d="M12 2a10 10 0 0 1 10 10" strokeWidth="2"/>
                </svg>
                Envoi en cours...
              </span>
            ) : 'Envoyer ma demande de réservation'}
          </button>

          <p className="text-center text-xs text-stone-600">
            Sans paiement immédiat · Notre équipe vous recontactera sous 24h · Annulation gratuite
          </p>
        </form>
      </div>
    </div>
  )
}

export default function ReservationPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="text-amber-500">Chargement...</div></div>}>
      <ReservationForm />
    </Suspense>
  )
}
