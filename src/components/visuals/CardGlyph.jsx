import Icon from '../ui/Icon'

// Faint decorative watermark of the card's own icon, bleeding off the bottom-right edge.
// Purely decorative (aria-hidden); sits behind the card content. On a `group` card it
// brightens and drifts slightly on hover. Pass an icon name from the shared Icon set.
export default function CardGlyph({ name }) {
  if (!name) return null
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-6 -right-[18px] text-primary opacity-10 transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:opacity-[0.16]"
    >
      <Icon name={name} className="h-[150px] w-[150px]" strokeWidth={1} />
    </span>
  )
}
