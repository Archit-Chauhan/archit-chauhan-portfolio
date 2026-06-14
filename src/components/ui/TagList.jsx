import Pill from './Pill'

// Renders an array of strings as a wrap of pills.
export default function TagList({ tags = [], className = '' }) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag) => (
        <Pill key={tag}>{tag}</Pill>
      ))}
    </div>
  )
}
