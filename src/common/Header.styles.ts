import styled from 'styled-components'
import { devices } from '../styles'

export const Header = styled.header`
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media ${devices.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`
