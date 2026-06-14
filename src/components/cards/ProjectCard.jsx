import Card from '../ui/Card'
import TagList from '../ui/TagList'
import Icon from '../ui/Icon'
import ProjectThumb from '../visuals/ProjectThumb'

// One project: navy thumbnail + title + description + tags + "View" link.
export default function ProjectCard({ project }) {
  return (
    <Card as="a" href={project.href} hover className="flex flex-col overflow-hidden p-0">
      {/* indigo top-edge line revealed on hover */}
      <span className="absolute inset-x-0 top-0 h-px scale-x-0 bg-primary transition-transform duration-200 group-hover:scale-x-100" />
      <div className="p-4">
        <ProjectThumb variant={project.variant} />
      </div>
      <div className="flex flex-1 flex-col gap-3 px-5 pb-6 pt-1">
        <h3 className="text-xl font-medium tracking-tight text-ink">{project.name}</h3>
        <p className="text-[15px] leading-relaxed text-ink-secondary">{project.description}</p>
        <TagList tags={project.tags} className="mt-1" />
        <span className="mt-auto inline-flex items-center gap-1 pt-2 text-[14px] font-medium text-primary">
          View
          <Icon name="arrow" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={1.75} />
        </span>
      </div>
    </Card>
  )
}
