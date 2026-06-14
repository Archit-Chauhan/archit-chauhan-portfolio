import Card from '../ui/Card'
import Icon from '../ui/Icon'
import TagList from '../ui/TagList'

// One skill group: icon + title + tag pills, with a faint watermark of the same icon.
export default function SkillCard({ group }) {
  return (
    <Card hover glyph={group.icon} className="flex flex-col gap-4 p-7">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon name={group.icon} className="h-5 w-5" />
      </span>
      <h3 className="text-xl font-medium tracking-tight text-ink">{group.title}</h3>
      <TagList tags={group.tags} />
    </Card>
  )
}
