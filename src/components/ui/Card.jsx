import CardGeometry from '../visuals/CardGeometry'
import CardGlyph from '../visuals/CardGlyph'

// Reusable surface card (white, hairline border, soft shadow).
// `hover`    adds the lift + indigo top-edge interaction used by project cards.
// `geometry` (optional) renders a decorative gradient shape behind the
//            content. Pass a variant key: 'aurora' | 'ember' | 'azure'.
// `glyph`    (optional) renders a faint watermark of an icon (by name) bleeding off the
//            bottom-right corner, behind the content.
export default function Card({ as: Tag = 'div', hover = false, geometry, glyph, className = '', children, ...props }) {
  const hoverClasses = hover
    ? 'group relative transition-all duration-200 hover:-translate-y-0.5 hover:border-hairline-input hover:shadow-lift'
    : ''

  if (geometry) {
    // Geometry sits as a background layer; content lives in a z-10 wrapper above it.
    return (
      <Tag className={`card relative overflow-hidden ${hoverClasses}`} {...props}>
        <CardGeometry variant={geometry} />
        <div className={`relative z-10 ${className}`}>{children}</div>
      </Tag>
    )
  }

  if (glyph) {
    // Watermark glyph sits behind the content; content lives in a z-10 wrapper above it.
    return (
      <Tag className={`card relative overflow-hidden ${hoverClasses}`} {...props}>
        <CardGlyph name={glyph} />
        <div className={`relative z-10 ${className}`}>{children}</div>
      </Tag>
    )
  }

  return (
    <Tag className={`card ${hoverClasses} ${className}`} {...props}>
      {children}
    </Tag>
  )
}
