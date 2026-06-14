// Tiny reusable SVG sparkline: indigo line + ruby end-dot. Pure presentation.
export default function Sparkline({
  points = [8, 14, 10, 18, 15, 22, 19, 26, 30],
  className = 'h-16 w-full',
}) {
  const w = 100
  const h = 36
  const max = Math.max(...points)
  const min = Math.min(...points)
  const span = max - min || 1
  const coords = points.map((p, i) => {
    const x = (i / (points.length - 1)) * w
    const y = h - ((p - min) / span) * (h - 4) - 2
    return [x, y]
  })
  const line = coords.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(' ')
  const area = `0,${h} ${line} ${w},${h}`
  const [lastX, lastY] = coords[coords.length - 1]

  return (
    <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" className={className} aria-hidden="true">
      <polygon points={area} fill="#665efd" opacity="0.12" />
      <polyline points={line} fill="none" stroke="#665efd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={lastX} cy={lastY} r="2" fill="#ea2261" />
    </svg>
  )
}
