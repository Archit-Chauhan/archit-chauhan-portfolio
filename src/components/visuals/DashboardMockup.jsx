import WindowChrome from './WindowChrome'
import Sparkline from './Sparkline'

// The hero centerpiece: a deep-navy faux IDE + dashboard "product shot".
// Content is data-driven below so it's easy to tweak.
const codeLines = [
  [['const ', 'kw'], ['app', 'var'], [' = ', ''], ['express', 'fn'], ['()', '']],
  [['app.', ''], ['get', 'fn'], ['(', ''], ["'/health'", 'str'], [', () => ok)', '']],
  [['', '']],
  [['// ship fast, stay typed', 'cmt']],
  [['export ', 'kw'], ['async ', 'kw'], ['function ', 'kw'], ['deploy', 'fn'], ['() {', '']],
  [['  await ', 'kw'], ['azure', 'var'], ['.push(', ''], ['build', 'var'], [')', '']],
  [['}', '']],
]

const tokenColor = {
  kw: 'text-violet-300',
  fn: 'text-sky-300',
  str: 'text-emerald-300',
  var: 'text-white/85',
  cmt: 'text-white/35',
  '': 'text-white/70',
}

const transactions = [
  { label: 'Stripe payout', amount: '+ $4,820.00', up: true },
  { label: 'Azure credits', amount: '− $312.40', up: false },
  { label: 'New subscription', amount: '+ $49.00', up: true },
]

export default function DashboardMockup({ className = '' }) {
  return (
    <WindowChrome title="arc — workspace" className={className}>
      <div className="grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-[1.1fr_1fr]">
        {/* Code pane */}
        <div className="bg-navy p-5 font-mono text-[12px] leading-relaxed">
          {codeLines.map((line, i) => (
            <div key={i} className="flex gap-3">
              <span className="select-none text-white/20">{String(i + 1).padStart(2, '0')}</span>
              <span className="truncate">
                {line.map(([text, type], j) => (
                  <span key={j} className={tokenColor[type]}>
                    {text}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </div>

        {/* Dashboard pane */}
        <div className="bg-navy-deep p-5">
          <div className="font-mono text-[10px] uppercase tracking-wider text-white/40">Total revenue</div>
          <div className="tnum mt-1 text-2xl font-light text-white">$124,592.34</div>
          <div className="mt-1 font-mono text-[11px] text-emerald-300">▲ 12.4% this month</div>
          <Sparkline className="mt-3 h-14 w-full" />
          <div className="mt-4 space-y-2">
            {transactions.map((t) => (
              <div key={t.label} className="flex items-center justify-between border-t border-white/10 pt-2 text-[12px]">
                <span className="text-white/60">{t.label}</span>
                <span className={`tnum ${t.up ? 'text-emerald-300' : 'text-white/70'}`}>{t.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </WindowChrome>
  )
}
