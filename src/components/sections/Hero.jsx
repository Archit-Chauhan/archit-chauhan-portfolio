import { hero } from '../../data/portfolio'
import Button from '../ui/Button'
import Eyebrow from '../ui/Eyebrow'
import Stat from '../ui/Stat'
import TagList from '../ui/TagList'
import GradientMesh from '../visuals/GradientMesh'
import DashboardMockup from '../visuals/DashboardMockup'
import FloatingChip from '../visuals/FloatingChip'

// Preset positions for the floating chips that hover over the mockup.
const chipPositions = [
  '-top-3 left-8 sm:left-16',
  'top-1/2 -right-2 sm:-right-4',
  '-bottom-3 left-8 sm:left-16',
]

export default function Hero() {
  const [pre, accent, post] = hero.headline
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-16 sm:pb-28 sm:pt-24">
      <GradientMesh />
      <div className="container-page">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.05fr]">
          {/* Copy */}
          <div className="flex flex-col items-start gap-6 animate-fade-up">
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <h1 className="display text-4xl leading-[1.05] sm:text-5xl md:text-[3.5rem]">
              {pre}
              <span className="text-primary">{accent}</span>
              {post}
            </h1>
            <p className="max-w-[34rem] text-lg text-ink-secondary">{hero.sub}</p>
            <div className="flex flex-wrap gap-3">
              <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
              <Button href={hero.secondaryCta.href} variant="secondary">
                {hero.secondaryCta.label}
              </Button>
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-x-8 gap-y-4">
              {hero.stats.map((s) => (
                <Stat key={s.label} value={s.value} label={s.label} />
              ))}
            </div>
            <TagList tags={hero.tech} className="mt-1" />
          </div>

          {/* Mockup with floating chips */}
          <div className="relative animate-fade-up [animation-delay:120ms]">
            <DashboardMockup />
            {hero.chips.map((label, i) => (
              <FloatingChip key={label} label={label} className={chipPositions[i % chipPositions.length]} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
