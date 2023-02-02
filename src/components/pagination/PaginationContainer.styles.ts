import styled from 'styled-components'

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-family: ${(props) => props.theme.fonts.titles};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.medium};
  width: fit-content;
  gap: 3px;
  margin-top: 0.8rem;

  .pagination-element {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.primary};
    padding: 0.5rem 0.8rem;
    border-radius: 5px;
    width: 1ch;
    text-align: center;
  }
  .active {
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.text};
  }
`
