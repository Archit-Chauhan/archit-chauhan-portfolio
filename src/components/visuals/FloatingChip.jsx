// White "floating" badge that hovers over the hero mockup:
// a soft-shadowed pill with an indigo dot + uppercase label. Position via className.
export default function FloatingChip({ label, className = '' }) {
  return (
    <div
      className={`absolute z-20 inline-flex items-center gap-2 rounded-full border border-hairline/70 bg-white px-3.5 py-2 shadow-lift ${className}`}
    >
      <span className="h-2 w-2 rounded-full bg-primary" />
      <span className="whitespace-nowrap text-[12px] font-medium uppercase tracking-wide text-ink">{label}</span>
    </div>
  )
}
