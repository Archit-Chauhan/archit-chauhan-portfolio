// Reusable soft-indigo tag pill.
export default function Pill({ children, className = '' }) {
  return <span className={`pill ${className}`}>{children}</span>
}
