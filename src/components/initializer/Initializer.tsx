import { useEffect } from 'react'
import { useStorage } from '../../hooks'

export function Initializer(): JSX.Element {
  const { loadFavoritesFromStorage } = useStorage()

  useEffect(() => {
    loadFavoritesFromStorage()
  }, [])

  return <></>
}
