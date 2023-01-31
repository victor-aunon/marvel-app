import styled from 'styled-components'

export const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: space-between;
  font-family: ${(props) => props.theme.fonts.titles};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`
