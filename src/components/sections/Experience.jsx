import { experience } from '../../data/portfolio'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import TimelineItem from '../cards/TimelineItem'
import CurrentSpotlight from '../cards/CurrentSpotlight'

export default function Experience() {
  return (
    <Section id="experience" background="soft">
      <SectionHeading eyebrow={experience.eyebrow} title={experience.heading} />
      <div className="mt-12 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16">
        <ol>
          {experience.items.map((item, i) => (
            <TimelineItem key={`${item.company}-${i}`} item={item} last={i === experience.items.length - 1} />
          ))}
        </ol>
        <div className="lg:sticky lg:top-28">
          <CurrentSpotlight data={experience.spotlight} />
        </div>
      </div>
    </Section>
  )
}
