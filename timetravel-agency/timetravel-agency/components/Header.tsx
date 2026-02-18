'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      scrolled ? 'glass-card py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group">
          <span className="font-serif text-xl tracking-widest gold-text font-light">TIMETRAVEL</span>
          <span className="font-sans text-[10px] tracking-[0.4em] text-stone-400 uppercase mt-0.5">Agency</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          <Link href="/#destinations" className="text-xs tracking-widest uppercase text-stone-400 hover:text-amber-400 transition-colors duration-300">
            Destinations
          </Link>
          <button
            onClick={() => document.getElementById('chatbot-toggle')?.click()}
            className="text-xs tracking-widest uppercase text-stone-400 hover:text-amber-400 transition-colors duration-300"
          >
            Conseiller IA
          </button>
          <Link href="/reservation" className="btn-gold px-6 py-2.5 rounded-none">
            Réserver
          </Link>
        </nav>

        {/* Mobile menu */}
        <button
          className="md:hidden text-amber-400"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <>
                <line x1="3" y1="8" x2="21" y2="8" />
                <line x1="3" y1="16" x2="21" y2="16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden glass-card mt-2 mx-4 p-6 flex flex-col gap-5">
          <Link href="/#destinations" className="text-xs tracking-widest uppercase text-stone-300" onClick={() => setMenuOpen(false)}>
            Destinations
          </Link>
          <button
            onClick={() => { setMenuOpen(false); document.getElementById('chatbot-toggle')?.click() }}
            className="text-xs tracking-widest uppercase text-stone-300 text-left"
          >
            Conseiller IA
          </button>
          <Link href="/reservation" className="btn-gold px-6 py-3 text-center" onClick={() => setMenuOpen(false)}>
            Réserver
          </Link>
        </div>
      )}
    </header>
  )
}
