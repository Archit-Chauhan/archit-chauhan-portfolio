// One experience entry on the vertical timeline. `last` trims the connecting rail.
export default function TimelineItem({ item, last = false }) {
  return (
    <li className="relative flex gap-5 pb-10 last:pb-0">
      {/* rail */}
      {!last && <span className="absolute left-[5px] top-3 h-full w-px bg-hairline" aria-hidden="true" />}
      {/* node */}
      <span className="relative mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-primary ring-4 ring-canvas" aria-hidden="true" />
      <div className="flex flex-col gap-1">
        <span className="tnum font-mono text-[12px] text-ink-mute">{item.period}</span>
        <h3 className="text-lg font-medium tracking-tight text-ink">
          {item.role}
          {item.current && (
            <span className="ml-2 rounded-full bg-primary/10 px-2 py-0.5 align-middle font-mono text-[10px] uppercase tracking-wider text-primary">
              Now
            </span>
          )}
        </h3>
        <span className="text-[15px] text-ink-secondary">{item.company}</span>
        <p className="mt-1 max-w-md text-[15px] text-ink-secondary">{item.blurb}</p>
      </div>
    </li>
  )
}
