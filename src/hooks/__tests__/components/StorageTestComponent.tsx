import { useEffect } from 'react'
import { useStorage } from '../../useStorage'
import type { Character } from '../../../interfaces'

export function StorageTestComponent({
  character,
}: {
  character: Character
}): JSX.Element {
  const { saveFavorite, deleteFavorite, loadFavoritesFromStorage, addComment } =
    useStorage()

  // Load favorites from storage on component mount
  useEffect(() => {
    loadFavoritesFromStorage()
  }, [])

  return (
    <>
      <button
        onClick={() => {
          saveFavorite(character)
        }}
      >
        Save favorite
      </button>
      <button
        onClick={() => {
          deleteFavorite(character.id)
        }}
      >
        Remove favorite
      </button>
      <button
        onClick={() => {
          addComment(character.id, 'This is a comment')
        }}
      >
        Add a comment
      </button>
    </>
  )
}
