import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppRoutes } from '../../routes'
import { Card } from '../common'
import { CurrentCharacterContext } from '../../context'
import type { Character } from '../../interfaces'

interface CharacterCardProps {
  character: Character
}

export function CharacterCard({ character }: CharacterCardProps): JSX.Element {
  const { setCharacter } = useContext(CurrentCharacterContext)

  return (
    <Link
      to={AppRoutes.detail}
      onClick={() => {
        setCharacter(character)
      }}
    >
      <Card>
        <img
          src={character.image}
          alt={character.name}
          className="card-image"
        />
        <h2 className="card-title">{character.name}</h2>
        <p
          dangerouslySetInnerHTML={{ __html: character.description }}
          className="card-description"
        ></p>
        <div className="card-counter">
          <p>Appearances in comics</p>
          <div className="counter">{character.comicsCount}</div>
        </div>
      </Card>
    </Link>
  )
}
