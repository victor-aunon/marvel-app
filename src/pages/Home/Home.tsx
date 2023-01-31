import { Container } from '../../components/common'
import { SearchBar } from '../../components/searchbar'

export function Home(): JSX.Element {
  return (
    <Container>
      <SearchBar />
      <p>The content</p>
    </Container>
  )
}
