import { useLocation } from 'react-router-dom'
import { AppRoutes } from '../../routes'
import { Header } from './Header.styles'
import { StyledLink } from '../common/Link.styles'
import { Navbar } from './Navbar.styles'

export function AppHeader(): JSX.Element {
  const { pathname } = useLocation()
  return (
    <Header>
      <StyledLink to={AppRoutes.home} $asTitle={true}>
        Marvel characters wiki
      </StyledLink>
      <Navbar>
        <StyledLink
          to={AppRoutes.favorites}
          state={{ previousPath: pathname }}
          $asTitle={false}
        >
          My Favorites
        </StyledLink>
      </Navbar>
    </Header>
  )
}
