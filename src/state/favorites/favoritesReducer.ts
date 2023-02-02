import { createSlice } from '@reduxjs/toolkit'
import type { Character } from '../../interfaces'
import type {
  SetFavoritesAction,
  AddFavoriteAction,
  RemoveFavoriteAction,
  AddCommentToFavoriteAction,
} from './favoritesActions'

const favoritesInitialState: Character[] = []

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: favoritesInitialState,
  reducers: {
    setFavorites: (state, action: SetFavoritesAction) =>
      action.payload.characters,
    addFavorite: (state, action: AddFavoriteAction) => [
      ...state,
      action.payload.character,
    ],
    removeFavorite: (state, action: RemoveFavoriteAction) =>
      state.filter((character) => character.id !== action.payload.characterId),
    addCommentToFavorite: (state, action: AddCommentToFavoriteAction) =>
      state.map((character) => {
        if (character.id === action.payload.characterId)
          return { ...character, comment: action.payload.comment }
        return character
      }),
  },
})

export const {
  setFavorites,
  addFavorite,
  removeFavorite,
  addCommentToFavorite,
} = favoritesSlice.actions

export default favoritesSlice.reducer
