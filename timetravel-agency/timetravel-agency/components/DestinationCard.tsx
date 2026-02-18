import Image from 'next/image'
import Link from 'next/link'

interface DestinationCardProps {
  title: string
  subtitle: string
  period: string
  imageSrc: string
  href: string
  tagline: string
  priceFrom: string
  delay?: number
}

export default function DestinationCard({
  title, subtitle, period, imageSrc, href, tagline, priceFrom
}: DestinationCardProps) {
  return (
    <Link href={href} className="group dest-card block glass-card rounded-2xl overflow-hidden border border-stone-800/50 transition-all duration-700 cursor-pointer">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="dest-img object-cover transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"/>
        {/* Period badge */}
        <div className="absolute top-4 left-4 glass-card px-3 py-1 rounded-full">
          <span className="text-xs tracking-widest text-amber-400 uppercase font-sans">{period}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif text-2xl font-light text-stone-100 mb-1">{title}</h3>
        <p className="text-xs tracking-widest text-amber-500/80 uppercase mb-3">{subtitle}</p>
        <p className="text-sm text-stone-400 leading-relaxed mb-5">{tagline}</p>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs text-stone-600 uppercase tracking-wider">À partir de</span>
            <p className="text-amber-400 font-serif text-xl">{priceFrom}</p>
          </div>
          <span className="btn-ghost px-5 py-2 text-xs rounded group-hover:bg-amber-900/20 transition-all duration-500">
            Découvrir →
          </span>
        </div>
      </div>
    </Link>
  )
}
