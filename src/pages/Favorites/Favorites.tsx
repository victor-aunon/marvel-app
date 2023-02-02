import { Container } from '../../components/common'
import { SearchBar } from '../../components/searchbar'
import { SearchFavorites } from '../../components/searchFavorites'

export function Favorites(): JSX.Element {
  return (
    <Container>
      <SearchBar placeholder="Search in favorites" />
      <SearchFavorites />
    </Container>
  )
}
