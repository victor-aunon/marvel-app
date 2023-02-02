import { useState } from 'react'
import { useSelector } from 'react-redux'
import type { AppStore } from '../state/store'
import type { Character } from '../interfaces'

interface UseFetchFavorites {
  getFavorites: (name: string, page?: number) => Promise<Character[]>
  favoritesPages: number
}

export function useFetchFavorites(): UseFetchFavorites {
  const favoritesState = useSelector((store: AppStore) => store.favorites)
  const [favoritesPages, setFavoritesPages] = useState(1)
  const resultsPerPage = 20

  async function getFavorites(name: string, page = 0): Promise<Character[]> {
    let favorites = []

    if (name === '') favorites = favoritesState

    favorites = favoritesState.filter((favorite) =>
      favorite.name.toLowerCase().includes(name.toLowerCase())
    )
    setFavoritesPages((prev) => Math.ceil(favorites.length / resultsPerPage))

    return favorites.slice(resultsPerPage * page, resultsPerPage * (page + 1))
  }

  return { getFavorites, favoritesPages }
}
