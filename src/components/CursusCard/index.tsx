import './index.css'

type Props = {
  title: string
  description: string
  time: string
}

export function CursusCard({ title, time, description }: Props) {
  return (
    <>
      <div className="cursus-card">
        <p className="cursus-card__title">{title}</p>
        <p className="cursus-card__time">{time}</p>
        <p className="cursus-card__description">{description}</p>
      </div>
    </>
  )
}
