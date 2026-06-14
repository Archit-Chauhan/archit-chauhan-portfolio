// Reusable stat: large tabular value + mono caption. `tone` switches for dark surfaces.
export default function Stat({ value, label, tone = 'light', className = '' }) {
  const valueColor = tone === 'dark' ? 'text-white' : 'text-ink'
  const labelColor = tone === 'dark' ? 'text-white/50' : 'text-ink-mute'
  return (
    <div className={className}>
      <div className={`display tnum text-2xl sm:text-3xl ${valueColor}`}>{value}</div>
      <div className={`mt-1 font-mono text-[11px] uppercase tracking-wider ${labelColor}`}>{label}</div>
    </div>
  )
}
