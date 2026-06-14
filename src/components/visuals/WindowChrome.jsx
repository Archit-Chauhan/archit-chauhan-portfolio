// Reusable faux-app window chrome (deep-navy panel + macOS traffic lights + optional title).
// Used by DashboardMockup and ProjectThumb so the navy "product shot" look is defined once.

// macOS-style window controls: muted grey by default; on hovering the cluster they reveal
// their colour (close=red, minimize=yellow, maximize=green) and the glyph inside — just like macOS.
const lights = [
  { hover: 'group-hover/traffic:bg-[#ff5f57]', stroke: true, glyph: <path d="M1.4 1.4 4.6 4.6M4.6 1.4 1.4 4.6" /> },
  { hover: 'group-hover/traffic:bg-[#febc2e]', stroke: true, glyph: <path d="M1.2 3h3.6" /> },
  {
    hover: 'group-hover/traffic:bg-[#28c840]',
    stroke: false,
    glyph: (
      <>
        <path d="M1.1 1.1H3.1L1.1 3.1Z" />
        <path d="M4.9 4.9H2.9L4.9 2.9Z" />
      </>
    ),
  },
]

function TrafficLights() {
  return (
    <div className="group/traffic flex items-center gap-2" aria-hidden="true">
      {lights.map((l, i) => (
        <span
          key={i}
          className={`flex h-3 w-3 items-center justify-center rounded-full bg-white/20 transition-colors duration-150 ${l.hover}`}
        >
          <svg
            viewBox="0 0 6 6"
            className="h-[7px] w-[7px] text-black/55 opacity-0 transition-opacity duration-150 group-hover/traffic:opacity-100"
            fill={l.stroke ? 'none' : 'currentColor'}
            stroke={l.stroke ? 'currentColor' : 'none'}
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {l.glyph}
          </svg>
        </span>
      ))}
    </div>
  )
}

export default function WindowChrome({ title, children, className = '', bodyClassName = '' }) {
  return (
    <div className={`overflow-hidden rounded-xl bg-navy ring-1 ring-white/10 shadow-lift ${className}`}>
      <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
        <TrafficLights />
        {title && <span className="font-mono text-[11px] text-white/40">{title}</span>}
      </div>
      <div className={bodyClassName}>{children}</div>
    </div>
  )
}
