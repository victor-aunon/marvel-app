import { useSelector, useDispatch } from 'react-redux'
import type { Character } from '../interfaces'
import { addFavorite, setFavorites, removeFavorite } from '../state/favorites'
import type { AppStore } from '../state/store'

interface UseStorage {
  loadFavoritesFromStorage: () => void
  saveFavorite: (character: Character) => void
  deleteFavorite: (characterId: number) => void
}

export function useStorage(): UseStorage {
  const favoritesState = useSelector((store: AppStore) => store.favorites)
  const dispatch = useDispatch()

  function loadFavoritesFromStorage(): void {
    const localStorageFavorites = localStorage.getItem('favorites')

    if (localStorageFavorites != null) {
      dispatch(
        setFavorites({
          characters: JSON.parse(localStorageFavorites),
        })
      )
    }
  }

  function saveFavorite(character: Character): void {
    localStorage.setItem(
      'favorites',
      JSON.stringify([...favoritesState, character])
    )

    dispatch(
      addFavorite({
        character,
      })
    )
  }

  function deleteFavorite(characterId: number): void {
    localStorage.setItem(
      'favorites',
      JSON.stringify(
        favoritesState.filter((character) => character.id !== characterId)
      )
    )

    dispatch(removeFavorite({ characterId }))
  }

  return { loadFavoritesFromStorage, saveFavorite, deleteFavorite }
}
