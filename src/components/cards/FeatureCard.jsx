import Card from '../ui/Card'
import Icon from '../ui/Icon'
import TagList from '../ui/TagList'

// "What I do" feature card: icon + title + one line + tags.
export default function FeatureCard({ feature }) {
  return (
    <Card geometry={feature.geometry} className="flex flex-col gap-3 p-7">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon name={feature.icon} className="h-5 w-5" />
      </span>
      <h3 className="text-lg font-medium tracking-tight text-ink">{feature.title}</h3>
      <p className="text-[15px] text-ink-secondary">{feature.body}</p>
      <TagList tags={feature.tags} className="mt-1" />
    </Card>
  )
}
