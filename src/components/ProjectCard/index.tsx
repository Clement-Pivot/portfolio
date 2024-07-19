import React, { useRef } from 'react'
import './index.css'

type Props = {
  title: string
  description: string
  href: string
  picture: string
  gif: string
}

export function ProjectCard({ href, gif, picture, title, description }: Props) {
  const dialog_ref = useRef(null)
  function showModal() {}
  return (
    <div className="project-card">
      <img
        src={picture}
        alt={`Screenshot miniature du projet ${title}`}
        className="project-card__hero"
      />
      <img
        src={gif}
        alt={`Clip miniature du projet ${title}`}
        className="project-card__moving"
        onClick={showModal}
      />
      <dialog className="project-card__dialog" ref={dialog_ref}>
        <img src={gif} alt={`Clip du projet ${title}`} />
        <p className="project-card__title">{title}</p>
        <p className="project-card__description">{description}</p>
      </dialog>
      <a href={href} className="project-card__link"></a>
    </div>
  )
}
