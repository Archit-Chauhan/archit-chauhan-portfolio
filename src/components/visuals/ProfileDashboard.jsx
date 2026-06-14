import WindowChrome from './WindowChrome'
import Sparkline from './Sparkline'

// Navy "career dashboard" product-shot for the About section.
// Identity row + shipping-velocity headline/chart + a 3-up stat strip + tech chips.
// Data-driven: pass `profile` (name/alias/location), `metrics`, and the `stats` array.
export default function ProfileDashboard({ profile, metrics, stats = [], className = '' }) {
  return (
    <WindowChrome title={metrics.windowTitle} className={className} bodyClassName="p-6">
      {/* identity */}
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-base font-semibold text-white">
          {profile.alias.charAt(0)}
        </span>
        <div>
          <div className="text-sm font-medium text-white">{profile.name}</div>
          <div className="font-mono text-[11px] text-white/45">
            @{profile.alias} · {profile.location}
          </div>
        </div>
      </div>

      {/* shipping-velocity headline + chart */}
      <div className="mt-6 border-t border-white/10 pt-5">
        <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/40">{metrics.kicker}</div>
        <div className="tnum mt-1 text-2xl font-light tracking-tight text-white">{metrics.value}</div>
        <div className="mt-1 font-mono text-[12px] text-emerald-300">▲ {metrics.trend}</div>
        <Sparkline className="mt-3 h-12 w-full" />
      </div>

      {/* stat strip */}
      <div className="mt-5 grid grid-cols-3 gap-px overflow-hidden rounded-lg bg-white/10">
        {stats.map((s) => (
          <div key={s.label} className="bg-navy-deep px-3 py-3">
            <div className="tnum text-lg font-light text-white">{s.value}</div>
            <div className="mt-0.5 font-mono text-[9px] uppercase tracking-wider text-white/45">{s.label}</div>
          </div>
        ))}
      </div>

      {/* tech chips */}
      <div className="mt-5 flex flex-wrap gap-2">
        {metrics.stack.map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-white/85"
          >
            {t}
          </span>
        ))}
      </div>
    </WindowChrome>
  )
}
