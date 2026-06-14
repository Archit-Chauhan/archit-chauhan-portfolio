import WindowChrome from './WindowChrome'
import Sparkline from './Sparkline'

// Reusable deep-navy mini "product shot" for project cards.
// `variant` selects a distinct stylized inner graphic. Add a case to extend.
function Bars() {
  const heights = ['h-6', 'h-10', 'h-7', 'h-12', 'h-9', 'h-14']
  return (
    <div className="flex items-end gap-1.5">
      {heights.map((h, i) => (
        <div key={i} className={`w-3 rounded-sm bg-primary-soft/70 ${h}`} />
      ))}
    </div>
  )
}

function Columns() {
  return (
    <div className="grid grid-cols-3 gap-2">
      {['To do', 'Doing', 'Done'].map((c) => (
        <div key={c} className="space-y-1.5">
          <div className="font-mono text-[9px] text-white/40">{c}</div>
          <div className="h-5 rounded bg-white/10" />
          <div className="h-5 rounded bg-white/10" />
        </div>
      ))}
    </div>
  )
}

function Phone() {
  return (
    <div className="mx-auto w-20 rounded-lg border border-white/15 p-2">
      <div className="mx-auto mb-2 h-1 w-6 rounded-full bg-white/25" />
      <div className="mb-2 h-8 rounded bg-primary-soft/30" />
      <div className="space-y-1">
        <div className="h-2 rounded bg-white/15" />
        <div className="h-2 w-2/3 rounded bg-white/15" />
      </div>
    </div>
  )
}

function Hashes() {
  return (
    <div className="space-y-1.5 font-mono text-[10px] text-white/55">
      <div className="flex items-center justify-between">
        <span>0x8f…a21c</span>
        <span className="rounded bg-emerald-400/15 px-1.5 text-emerald-300">Succeeded</span>
      </div>
      <div className="flex items-center justify-between">
        <span>0x12…99b4</span>
        <span className="rounded bg-emerald-400/15 px-1.5 text-emerald-300">Succeeded</span>
      </div>
      <div className="mt-2 h-6 rounded bg-primary-soft/30" />
    </div>
  )
}

function Services() {
  return (
    <div className="grid grid-cols-2 gap-2 font-mono text-[10px] text-white/55">
      {['api · 42ms', 'auth · 18ms', 'queue · ok', 'db · 7ms'].map((s) => (
        <div key={s} className="rounded border border-white/10 px-2 py-1.5">
          {s}
        </div>
      ))}
    </div>
  )
}

function Components() {
  return (
    <div className="flex gap-2">
      <div className="w-16 space-y-1 font-mono text-[9px] text-white/40">
        <div>Button</div>
        <div>Card</div>
        <div>Input</div>
      </div>
      <div className="flex-1 space-y-1.5">
        <div className="h-5 w-16 rounded-full bg-primary-soft/70" />
        <div className="h-8 rounded bg-white/10" />
      </div>
    </div>
  )
}

const variants = {
  commerce: { title: 'orders.tsx', body: <Bars /> },
  kanban: { title: 'board', body: <Columns /> },
  mobile: { title: 'pulsefit', body: <Phone /> },
  web3: { title: 'notarize', body: <Hashes /> },
  microservices: { title: 'services', body: <Services /> },
  library: { title: 'aura-ui', body: <Components /> },
}

export default function ProjectThumb({ variant = 'commerce', className = '' }) {
  const v = variants[variant] || { title: 'app', body: <Sparkline className="h-14 w-full" /> }
  return (
    <WindowChrome title={v.title} className={className} bodyClassName="p-4">
      <div className="flex min-h-[88px] items-center">{v.body}</div>
    </WindowChrome>
  )
}
