import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSearch } from '../../hooks'
import { Container } from '../../components/common'
import { SearchBar } from '../../components/searchbar'
import { SearchFavorites } from '../../components/searchFavorites'

export function Favorites(): JSX.Element {
  const previousPath = useLocation().state?.previousPath || ''
  const { clearSearch, search } = useSearch()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (isLoaded) return
    setIsLoaded(true)

    if (previousPath === '/') {
      console.log('clear')
      clearSearch()
    }
  }, [search])

  return (
    <Container>
      <SearchBar placeholder="Search in favorites" />
      <SearchFavorites />
    </Container>
  )
}
