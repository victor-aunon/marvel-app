import { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useStorage } from '../../hooks'
import { CurrentCharacterContext } from '../../context'
import { TextArea } from './TextArea.styles'
import { Form } from './Form.styles'
import type { AppStore } from '../../state/store'
import type { Character } from '../../interfaces'

interface FormTargetProps extends EventTarget {
  comment: { value: string }
}

export function CommentsBox(): JSX.Element {
  const { character } = useContext(CurrentCharacterContext)
  const { addComment } = useStorage()
  const favoritesState = useSelector((store: AppStore) => store.favorites)
  const [currentCharacter, setCurrentCharacter] = useState<Character>()

  function handleSubmit(e: React.SyntheticEvent): void {
    e.preventDefault()

    const target = e.target as FormTargetProps
    const comment = target.comment.value
    if (comment === '') return
    addComment(character.id, comment)
  }

  // Set isFavorite on component mount if the character is in favorites
  // and when favoritesState changes
  useEffect(() => {
    if (favoritesState.length === 0) return
    const characterInFavorites = favoritesState.find(
      (favorite) => favorite.id === character.id
    )

    if (characterInFavorites)
      setCurrentCharacter((prev) => characterInFavorites)
  }, [favoritesState])

  return (
    <>
      {currentCharacter && (
        <Form onSubmit={handleSubmit}>
          <label htmlFor="comment" style={{ visibility: 'hidden' }}>
            Insert a comment for this character
          </label>
          <TextArea
            name="comment"
            placeholder="Insert a comment"
            defaultValue={currentCharacter.comment}
          ></TextArea>
          <input type="submit" value="Add comment" />
        </Form>
      )}
    </>
  )
}
