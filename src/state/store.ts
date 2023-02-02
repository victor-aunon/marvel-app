import { configureStore } from '@reduxjs/toolkit'
import { favoritesReducer } from './favorites'
import type { Character } from '../interfaces'

export interface AppStore {
  favorites: Character[]
}

export default configureStore<AppStore>({
  reducer: {
    favorites: favoritesReducer,
  },
})
