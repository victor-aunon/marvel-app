import { useContext, useState } from 'react'
import { LinkWithIcon } from '../common'
import { CurrentCharacterContext } from '../../context'
import { BsFillStarFill, BsLink45Deg } from 'react-icons/bs'
import { BigCard } from './BigCard.styles'

export function DetailCard(): JSX.Element {
  const { character } = useContext(CurrentCharacterContext)
  const [isFavorite, setIsFavorite] = useState(false)

  function handleFavorite(): void {
    setIsFavorite((prev) => !prev)
  }

  return (
    <>
      {character.name !== '' && (
        <BigCard $isFavorite={isFavorite}>
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
          {character.comicsCount > 0 && (
            <LinkWithIcon to={character.comicsUrl} target="_blank">
              <BsLink45Deg />
              Show comics
            </LinkWithIcon>
          )}
          <button className="card-add-favorite-button" onClick={handleFavorite}>
            <BsFillStarFill className="favorite-icon" />
            <p>{isFavorite ? 'Remove from favorites' : 'Add to favorites'}</p>
          </button>
        </BigCard>
      )}
    </>
  )
}
