// Section wrapper: handles id (anchor), background variant, vertical rhythm, and the page container.
const backgrounds = {
  white: 'bg-canvas',
  soft: 'bg-canvas-soft',
  none: '',
}

export default function Section({
  id,
  background = 'white',
  className = '',
  containerClassName = '',
  children,
}) {
  return (
    <section id={id} className={`scroll-mt-20 py-20 sm:py-28 ${backgrounds[background]} ${className}`}>
      <div className={`container-page ${containerClassName}`}>{children}</div>
    </section>
  )
}
