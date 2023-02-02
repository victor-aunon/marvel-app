import { Container } from '../../components/common'
import { SearchBar } from '../../components/searchbar'
import { SearchResults } from '../../components/searchResults/SearchResults'

export function Home(): JSX.Element {
  return (
    <Container>
      <SearchBar />
      <SearchResults />
    </Container>
  )
}
