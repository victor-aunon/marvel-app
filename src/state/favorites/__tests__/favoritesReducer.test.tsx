import favoritesReducer, {
  setFavorites,
  addFavorite,
  removeFavorite,
} from '../favoritesReducer'
import type { Character } from '../../../interfaces'

describe('Test favorites reducer', () => {
  const fakeCharacter: Character = {
    id: 0,
    name: 'Tracy Test',
    description: 'Tracy Test is a heroine',
    image: 'https://picsum.photos/id/111/200/200.jpg',
    comicsCount: 21,
    comicsUrl: 'https://tracytest.com',
  }

  test('Should save a new favorite character', () => {
    const initialState: Character[] = []
    const action = addFavorite({
      character: fakeCharacter,
    })
    const results = favoritesReducer(initialState, action)
    expect(results).toEqual([fakeCharacter])
  })

  test('Should remove an existing favorite character', () => {
    const initialState = [fakeCharacter]
    const action = removeFavorite({
      characterId: fakeCharacter.id,
    })
    const results = favoritesReducer(initialState, action)
    expect(results).toEqual([])
  })

  test('Should store a list of favorite characters', () => {
    const initialState: Character[] = []
    const action = setFavorites({
      characters: [fakeCharacter],
    })
    const results = favoritesReducer(initialState, action)
    expect(results).toEqual([fakeCharacter])
  })
})
