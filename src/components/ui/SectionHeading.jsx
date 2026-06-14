import Eyebrow from './Eyebrow'

// Eyebrow + heading + optional sub-copy. `align` controls text alignment.
export default function SectionHeading({ eyebrow, title, sub, align = 'left', className = '' }) {
  const isCentered = align === 'center'
  return (
    <div className={`flex flex-col gap-4 ${isCentered ? 'items-center text-center' : 'items-start'} ${className}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="display max-w-2xl text-3xl leading-[1.1] sm:text-4xl md:text-[2.75rem]">{title}</h2>
      {sub && <p className={`max-w-xl text-base text-ink-secondary ${isCentered ? 'mx-auto' : ''}`}>{sub}</p>}
    </div>
  )
}
