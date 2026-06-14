// Decorative geometric gradient that bleeds off the right edge of a Card.
// Purely decorative (aria-hidden). Shapes are kept to the right region so left-aligned
// card content (icon / title / body / tags) stays readable.
//   aurora → purple parallelogram
//   ember  → orange peaks/triangles
//   azure  → cyan prism (used on the third card)

function Aurora() {
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
      <defs>
        <radialGradient id="cg-aurora" cx="72%" cy="22%" r="95%">
          <stop offset="0%" stopColor="#f8d4fe" />
          <stop offset="30%" stopColor="#e879f9" />
          <stop offset="62%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#5b21b6" />
        </radialGradient>
      </defs>
      <polygon points="30,0 100,0 100,100 76,100" fill="url(#cg-aurora)" />
    </svg>
  )
}

function Ember() {
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
      <defs>
        <linearGradient id="cg-ember-amber" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fcd34d" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
        <linearGradient id="cg-ember-orange" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fb923c" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
      </defs>
      <polygon points="40,100 60,34 98,100" fill="url(#cg-ember-amber)" />
      <polygon points="80,100 96,52 120,100" fill="url(#cg-ember-amber)" opacity="0.9" />
      <polygon points="62,100 84,16 116,100" fill="url(#cg-ember-orange)" />
    </svg>
  )
}

function Azure() {
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
      <defs>
        <linearGradient id="cg-azure" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#67e8f9" />
          <stop offset="48%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#4338ca" />
        </linearGradient>
      </defs>
      <polygon points="30,0 100,0 100,100 76,100" fill="url(#cg-azure)" />
      <polygon points="30,0 50,0 36,100 76,100" fill="#a5f3fc" opacity="0.16" />
      <polygon points="70,0 100,0 100,42" fill="#ffffff" opacity="0.14" />
    </svg>
  )
}

const variants = { aurora: Aurora, ember: Ember, azure: Azure }

export default function CardGeometry({ variant }) {
  const Shape = variants[variant]
  if (!Shape) return null
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <Shape />
    </div>
  )
}
