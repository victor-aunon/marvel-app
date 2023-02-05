import { useContext, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import type { AppStore } from '../../state/store'
import { LinkWithIcon } from '../common'
import { CurrentCharacterContext } from '../../context'
import { BsFillStarFill, BsLink45Deg } from 'react-icons/bs'
import { BigCard } from './BigCard.styles'
import { useStorage } from '../../hooks'

export function DetailCard(): JSX.Element {
  const { character, setCharacter } = useContext(CurrentCharacterContext)
  const [isFavorite, setIsFavorite] = useState(false)
  const { saveFavorite, deleteFavorite } = useStorage()
  const favoritesState = useSelector((store: AppStore) => store.favorites)

  function handleFavorite(): void {
    if (isFavorite) {
      deleteFavorite(character.id)
    } else {
      saveFavorite(character)
    }
    setCharacter({ ...character, isFavorite: !character.isFavorite })
    setIsFavorite((prev) => !prev)
  }

  // Set isFavorite on component mount if the character is in favorites
  useEffect(() => {
    if (favoritesState.length === 0) return
    const characterInFavorites = favoritesState.find(
      (favorite) => favorite.id === character.id
    )

    if (characterInFavorites) setIsFavorite((prev) => true)
  }, [favoritesState])

  return (
    <>
      {character.name !== '' ? (
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
      ) : (
        <p style={{ textAlign: 'center', margin: '2rem auto' }}>
          You have not selected any character
        </p>
      )}
    </>
  )
}
