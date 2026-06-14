// Mono uppercase eyebrow label with a leading gradient dot (dot drawn via CSS ::before).
export default function Eyebrow({ children, className = '' }) {
  return <span className={`eyebrow ${className}`}>{children}</span>
}
