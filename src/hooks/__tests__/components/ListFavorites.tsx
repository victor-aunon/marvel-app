import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setFavorites } from '../../../state/favorites'
import { useFetchFavorites } from '../../useFetchFavorites'
import type { Character } from '../../../interfaces'

export function ListFavorites({
  searchString,
  favoriteCharacters,
}: {
  searchString: string
  favoriteCharacters: Character[]
}): JSX.Element {
  const { getFavorites, favoritesPages } = useFetchFavorites()
  const [characters, setCharacters] = useState<Character[]>([])
  const dispatch = useDispatch()
  const [isLoaded, setIsLoaded] = useState(false)

  // Update the store on mount
  useEffect(() => {
    dispatch(
      setFavorites({
        characters: favoriteCharacters,
      })
    )
    setIsLoaded((prev) => !prev)
  }, [])

  // After mounted for the first time, get favorite characters
  useEffect(() => {
    if (!isLoaded) return
    getFavorites(searchString)
      .then((fetchedCharacters) => {
        setCharacters(fetchedCharacters)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [isLoaded])

  return (
    <>
      <p>Page: {favoritesPages}</p>
      {characters.map((favorite) => (
        <div key={favorite.id}>
          <img src={favorite.image} alt={favorite.name} />
          <p>Name: {favorite.name}</p>
          <p>Description: {favorite.description}</p>
          <p>Comics: {favorite.comicsCount}</p>
          <a href={favorite.comicsUrl}>{favorite.comicsUrl}</a>
        </div>
      ))}
    </>
  )
}
