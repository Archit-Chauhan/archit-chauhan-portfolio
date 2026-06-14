import { navLinks, socials, profile, footer } from '../../data/portfolio'
import WaveCanvas from '../visuals/WaveCanvas'

// Footer: original white surface + height, with the animated gradient wave
// flowing behind the content.
export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-hairline bg-canvas">
      {/* animated wave behind the content */}
      <WaveCanvas onLight className="pointer-events-none absolute inset-0 h-full w-full" />

      <div className="container-page relative z-10 py-16">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-xs">
            <div className="text-lg font-semibold tracking-tight text-ink">
              {profile.alias}
              <span className="text-primary">.</span>
            </div>
            <p className="mt-3 text-[15px] text-ink-secondary">{profile.tagline}</p>
          </div>

          <div className="flex gap-16">
            <nav className="flex flex-col gap-3">
              <span className="font-mono text-[11px] uppercase tracking-wider text-ink-mute">Menu</span>
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="link-muted text-[15px]">
                  {link.label}
                </a>
              ))}
            </nav>
            <nav className="flex flex-col gap-3">
              <span className="font-mono text-[11px] uppercase tracking-wider text-ink-mute">Elsewhere</span>
              {socials.map((s) => (
                <a key={s.label} href={s.href} className="link-muted text-[15px]" target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-12 border-t border-hairline pt-6">
          <p className="font-mono text-[12px] text-ink-mute">{footer.legal}</p>
        </div>
      </div>
    </footer>
  )
}
