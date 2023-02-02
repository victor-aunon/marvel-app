import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const LinkWithIcon = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  font-family: ${(props) => props.theme.fonts.titles};
  font-style: italic;
  text-transform: uppercase;
  text-shadow: 2px 2px ${(props) => props.theme.colors.background};
  text-decoration: none;
  color: inherit;

  &:hover {
    text-shadow: 2px 2px 8px ${(props) => props.theme.colors.primary};
  }
`
