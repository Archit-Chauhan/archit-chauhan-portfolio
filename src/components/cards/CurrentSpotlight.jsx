import Icon from '../ui/Icon'
import Pill from '../ui/Pill'

// "Currently shipping" spotlight that sits beside the experience timeline.
// Live pulse + present role + a checklist of current work + tech chips.
export default function CurrentSpotlight({ data }) {
  if (!data) return null
  return (
    <div className="overflow-hidden rounded-2xl border border-hairline bg-white shadow-lift">
      {/* header */}
      <div className="border-b border-hairline p-6">
        <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-mute">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          {data.status}
        </span>
        <h3 className="mt-3.5 text-xl font-medium tracking-tight text-ink">
          {data.role} · <span className="text-primary">{data.company}</span>
        </h3>
        <p className="mt-1.5 text-sm text-ink-mute">{data.meta}</p>
      </div>

      {/* what I'm shipping */}
      <div className="px-6 pt-4">
        <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-mute">{data.listHeading}</div>
        <ul>
          {data.items.map((item, i) => (
            <li key={i} className="flex gap-3 border-b border-dashed border-hairline py-3 last:border-none">
              <span className="mt-0.5 flex h-[18px] w-[18px] flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon name="check" className="h-3 w-3" strokeWidth={3} />
              </span>
              <p className="text-sm text-ink-secondary">{item}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* tech chips */}
      <div className="flex flex-wrap gap-2 px-6 pb-6 pt-4">
        {data.stack.map((t) => (
          <Pill key={t}>{t}</Pill>
        ))}
      </div>
    </div>
  )
}
