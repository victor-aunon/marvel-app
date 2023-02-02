import styled from 'styled-components'

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  .search-icon {
    position: absolute;
    bottom: 0.5rem;
    right: 0.3rem;
    color: ${(props) => props.theme.colors.primary};
    font-size: 1.3rem;
  }
`
