import { AppRoutes } from '../routes'
import { Header } from './Header.styles'
import { StyledLink } from './Link.styles'
import { Navbar } from './Navbar.styles'

export function AppHeader(): JSX.Element {
  return (
    <Header>
      <StyledLink to={AppRoutes.home} $asTitle={true}>
        Marvel characters wiki
      </StyledLink>
      <Navbar>
        <StyledLink to={AppRoutes.favorites} $asTitle={false}>
          Favorites
        </StyledLink>
      </Navbar>
    </Header>
  )
}
