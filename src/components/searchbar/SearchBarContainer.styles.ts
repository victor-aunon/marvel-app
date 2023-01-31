import styled from 'styled-components'

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  svg {
    position: absolute;
    bottom: 0.2rem;
    right: 0.3rem;
    color: ${(props) => props.theme.colors.primary};
    font-size: 1.3rem;
  }
`
