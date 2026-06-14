import { useState } from 'react'
import { navLinks, profile } from '../../data/portfolio'
import Button from '../ui/Button'
import Icon from '../ui/Icon'

// Sticky glass navigation with a responsive mobile menu.
export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-hairline/70 bg-canvas/80 backdrop-blur-md">
      <nav className="container-page flex h-16 items-center justify-between">
        <a href="#top" className="text-lg font-semibold tracking-tight text-ink">
          {profile.alias}
          <span className="text-primary">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-[15px] text-ink-secondary transition-colors hover:text-ink">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center md:flex">
          <Button href="#contact">Let&apos;s talk</Button>
        </div>

        <button
          type="button"
          className="text-ink md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} className="h-6 w-6" />
        </button>
      </nav>

      {open && (
        <div className="border-t border-hairline bg-canvas md:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-[15px] text-ink-secondary hover:bg-canvas-soft hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <Button href="#contact" className="mt-2 w-full" onClick={() => setOpen(false)}>
              Let&apos;s talk
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
