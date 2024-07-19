import React, { useRef, type MouseEvent } from 'react'
import './index.css'

type Props = {
  title: string
  description: string
  href: string
  picture: string
  gif: string
}

export function ProjectCard({ href, gif, picture, title, description }: Props) {
  const dialog_ref = useRef<HTMLDialogElement>(null)
  const showModal = () => dialog_ref!.current!.showModal()
  const hideModal = () => dialog_ref!.current!.close()

  const checkClickInModal = (e: MouseEvent<HTMLDialogElement>) => {
    const dialog_rect = dialog_ref!.current!.getBoundingClientRect()
    if (
      e.clientX < dialog_rect.left ||
      e.clientX > dialog_rect.right ||
      e.clientY < dialog_rect.top ||
      e.clientY > dialog_rect.bottom
    ) {
      hideModal()
    }
  }

  return (
    <>
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
      </div>
      <dialog
        className="project-card__dialog"
        ref={dialog_ref}
        onMouseDown={(e) => checkClickInModal(e)}
      >
        <img
          src={gif}
          alt={`Clip du projet ${title}`}
          className="project-card__show"
        />
        <p className="project-card__title">{title}</p>
        <p className="project-card__description">{description}</p>
        <a href={href} className="project-card__link" target="_blank">
          Lien vers la page github
        </a>
      </dialog>
    </>
  )
}
