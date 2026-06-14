import { about, profile } from '../../data/portfolio'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import FeatureCard from '../cards/FeatureCard'
import ProfileDashboard from '../visuals/ProfileDashboard'

export default function About() {
  return (
    <Section id="about">
      <SectionHeading eyebrow={about.eyebrow} title={about.heading} />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        {/* Bio */}
        <div className="flex flex-col gap-5">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="max-w-xl text-base leading-relaxed text-ink-secondary">
              {p}
            </p>
          ))}
        </div>

        {/* Navy career-dashboard product shot */}
        <ProfileDashboard profile={profile} metrics={about.metrics} stats={about.stats} />
      </div>

      {/* What I do */}
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {about.features.map((f) => (
          <FeatureCard key={f.title} feature={f} />
        ))}
      </div>
    </Section>
  )
}
