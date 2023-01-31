import styled from 'styled-components'
import { Link } from 'react-router-dom'

interface LinkProps extends React.RefAttributes<HTMLAnchorElement> {
  readonly $asTitle: boolean
}

export const StyledLink = styled(Link)<LinkProps>`
  font-family: ${(props) => props.theme.fonts.titles};
  font-size: ${(props) =>
    props.$asTitle ? props.theme.fontSizes.big : props.theme.fontSizes.normal};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-style: italic;
  text-transform: uppercase;
  text-shadow: 2px 2px ${(props) => props.theme.colors.background};
  text-decoration: none;
  text-align: center;
  color: inherit;
`
