import { useSelector, useDispatch } from 'react-redux'
import type { Character } from '../interfaces'
import {
  addFavorite,
  setFavorites,
  removeFavorite,
  addCommentToFavorite,
} from '../state/favorites'
import type { AppStore } from '../state/store'

interface UseStorage {
  loadFavoritesFromStorage: () => void
  saveFavorite: (character: Character) => void
  deleteFavorite: (characterId: number) => void
  addComment: (characterId: number, comment: string) => void
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
      JSON.stringify([...favoritesState, { ...character, isFavorite: true }])
    )

    dispatch(
      addFavorite({
        character: { ...character, isFavorite: true },
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

  function addComment(characterId: number, comment: string): void {
    localStorage.setItem(
      'favorites',
      JSON.stringify(
        favoritesState.map((character) => {
          if (character.id === characterId) return { ...character, comment }
          return character
        })
      )
    )

    dispatch(
      addCommentToFavorite({
        characterId,
        comment,
      })
    )
  }

  return { loadFavoritesFromStorage, saveFavorite, deleteFavorite, addComment }
}
