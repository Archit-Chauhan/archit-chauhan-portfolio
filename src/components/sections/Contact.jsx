import { useState } from 'react'
import { contact, profile, socials } from '../../data/portfolio'
import Button from '../ui/Button'
import Icon from '../ui/Icon'

// Field renderer driven by contact.fields data. `className` lets the grid span it.
function Field({ field, className = '' }) {
  const base =
    'w-full rounded-lg border border-hairline-input bg-white px-3.5 py-2.5 text-[15px] text-ink placeholder:text-ink-mute/60 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15'
  return (
    <label className={`flex flex-col gap-1.5 text-left ${className}`}>
      <span className="font-mono text-[11px] uppercase tracking-wider text-ink-mute">{field.label}</span>
      {field.type === 'textarea' ? (
        <textarea name={field.name} rows={4} placeholder={field.placeholder} className={`${base} resize-none`} />
      ) : (
        <input name={field.name} type={field.type} placeholder={field.placeholder} className={base} />
      )}
    </label>
  )
}

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="scroll-mt-20 bg-canvas-soft py-20 sm:py-28">
      <div className="container-page">
        <div className="grid overflow-hidden rounded-2xl border border-hairline bg-white shadow-lift md:grid-cols-2">
          {/* Left — navy info panel */}
          <div className="relative flex flex-col gap-8 overflow-hidden bg-navy p-8 text-white sm:p-10">
            {/* soft indigo glow accent */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/30 blur-3xl"
            />
            <div className="relative flex flex-col gap-4">
              <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-primary-soft">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-soft" />
                {contact.eyebrow}
              </span>
              <h2 className="text-3xl font-light tracking-tight sm:text-4xl">{contact.heading}</h2>
              <p className="max-w-sm text-[15px] leading-relaxed text-white/60">{contact.sub}</p>
            </div>

            <div className="relative flex flex-col gap-4 border-t border-white/10 pt-7">
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center gap-3 text-[15px] text-white/85 transition-colors hover:text-white"
              >
                <Icon name="mail" className="h-4 w-4 text-primary-soft" />
                {profile.email}
              </a>
              <div className="flex items-center gap-3 text-[15px] text-white/85">
                <Icon name="pin" className="h-4 w-4 text-primary-soft" />
                {profile.location}
              </div>
            </div>

            <div className="relative mt-auto flex flex-col gap-5 pt-2">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[12px] text-white/80">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Available for freelance &amp; full-time
              </span>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[13px] text-white/50 transition-colors hover:text-white"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="p-8 sm:p-10">
            <form
              className="grid grid-cols-1 gap-4 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
            >
              {contact.fields.map((field) => (
                <Field key={field.name} field={field} className={field.type === 'textarea' ? 'sm:col-span-2' : ''} />
              ))}
              <Button type="submit" className="mt-1 w-full sm:col-span-2" icon={sent ? undefined : 'arrow'}>
                {sent ? 'Thanks — I’ll be in touch ✓' : contact.submitLabel}
              </Button>
              <p className="text-[13px] text-ink-mute sm:col-span-2">
                Prefer email? Reach me at{' '}
                <a href={`mailto:${profile.email}`} className="font-medium text-primary hover:text-primary-deep">
                  {profile.email}
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================================
 * PREVIOUS contact form (single centered cream band) — kept for easy revert.
 * To restore: delete the component above and uncomment this block.
 * ----------------------------------------------------------------------------
import { useState } from 'react'
import { contact, profile } from '../../data/portfolio'
import Eyebrow from '../ui/Eyebrow'
import Button from '../ui/Button'

function Field({ field }) {
  const base =
    'w-full rounded-lg border border-hairline-input bg-white px-3 py-2.5 text-[15px] text-ink placeholder:text-ink-mute/70 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15'
  return (
    <label className="flex flex-col gap-1.5 text-left">
      <span className="font-mono text-[11px] uppercase tracking-wider text-ink-mute">{field.label}</span>
      {field.type === 'textarea' ? (
        <textarea name={field.name} rows={4} placeholder={field.placeholder} className={`${base} resize-none`} />
      ) : (
        <input name={field.name} type={field.type} placeholder={field.placeholder} className={base} />
      )}
    </label>
  )
}

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="scroll-mt-20 bg-canvas py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl rounded-2xl bg-canvas-cream px-6 py-12 text-center sm:px-12 sm:py-16">
          <div className="flex justify-center">
            <Eyebrow>{contact.eyebrow}</Eyebrow>
          </div>
          <h2 className="display mt-4 text-3xl sm:text-4xl">{contact.heading}</h2>
          <p className="mx-auto mt-3 max-w-md text-base text-ink-secondary">{contact.sub}</p>

          <form
            className="mx-auto mt-8 flex max-w-md flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault()
              setSent(true)
            }}
          >
            {contact.fields.map((field) => (
              <Field key={field.name} field={field} />
            ))}
            <Button className="mt-1 w-full" type="submit">
              {sent ? 'Thanks — I’ll be in touch ✓' : contact.submitLabel}
            </Button>
          </form>

          <p className="mt-5 text-[14px] text-ink-secondary">
            or email{' '}
            <a href={`mailto:${profile.email}`} className="font-medium text-primary hover:text-primary-deep">
              {profile.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
 * ========================================================================== */
