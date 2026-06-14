import { projects } from '../../data/portfolio'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import ProjectCard from '../cards/ProjectCard'

export default function Projects() {
  return (
    <Section id="work">
      <SectionHeading eyebrow={projects.eyebrow} title={projects.heading} sub={projects.sub} />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.items.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </Section>
  )
}
