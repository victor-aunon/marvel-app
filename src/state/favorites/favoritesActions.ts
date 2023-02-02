import type { Character } from '../../interfaces'

export interface SetFavoritesAction {
  type?: string
  payload: {
    characters: Character[]
  }
}

export interface AddFavoriteAction {
  type?: string
  payload: {
    character: Character
  }
}

export interface RemoveFavoriteAction {
  type?: string
  payload: {
    characterId: number
  }
}
