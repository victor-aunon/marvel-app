import { createContext } from 'react'
import type { Character } from '../interfaces'

export const currentCharacterInitialState: Character = {
  id: 0,
  name: '',
  image: '',
  description: '',
  comicsCount: 0,
  comicsUrl: '',
  comment: '',
}

export const CurrentCharacterContext = createContext({
  character: currentCharacterInitialState,
  setCharacter: (character: Character) => {},
})
