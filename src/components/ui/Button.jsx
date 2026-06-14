import Icon from './Icon'

// Reusable button/link. Renders an <a> (href) or <button> (onClick / type).
export default function Button({
  children,
  href,
  variant = 'primary',
  icon,
  className = '',
  ...props
}) {
  const styles = variant === 'secondary' ? 'btn-secondary' : 'btn-primary'
  const content = (
    <>
      {children}
      {icon && <Icon name={icon} className="h-4 w-4" strokeWidth={1.75} />}
    </>
  )

  if (href) {
    return (
      <a href={href} className={`${styles} ${className}`} {...props}>
        {content}
      </a>
    )
  }
  return (
    <button className={`${styles} ${className}`} {...props}>
      {content}
    </button>
  )
}
