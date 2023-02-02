import styled from 'styled-components'

export const InputSearch = styled.input`
  border-radius: ${(props) => props.theme.borderRadius};
  height: 2rem;
  border: 2px solid ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.content};
  font-size: ${(props) => props.theme.fontSizes.normal};
  padding: 0 1.5rem 0 0.5rem;
  box-shadow: 0px 0px 8px 2px ${(props) => props.theme.colors.primary};

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.primary};
  }
`
