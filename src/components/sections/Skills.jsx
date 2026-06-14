import { skills } from '../../data/portfolio'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import SkillCard from '../cards/SkillCard'

export default function Skills() {
  return (
    <Section id="skills" background="soft">
      <SectionHeading eyebrow={skills.eyebrow} title={skills.heading} sub={skills.sub} />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.groups.map((group) => (
          <SkillCard key={group.title} group={group} />
        ))}
      </div>
    </Section>
  )
}
