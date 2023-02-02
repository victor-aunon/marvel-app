import { createSlice } from '@reduxjs/toolkit'
import type { Character } from '../../interfaces'
import type {
  SetFavoritesAction,
  AddFavoriteAction,
  RemoveFavoriteAction,
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
  },
})

export default favoritesSlice.reducer
