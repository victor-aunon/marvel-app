import styled from 'styled-components'

export const TextArea = styled.textarea`
  border-radius: ${(props) => props.theme.borderRadius};
  max-width: 600px;
  width: 90%;
  margin: 1rem auto;
  height: 310px;
  resize: vertical;
  border: 2px solid ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.content};
  font-size: ${(props) => props.theme.fontSizes.normal};
  padding: 1rem;
  box-shadow: 0px 0px 8px 2px ${(props) => props.theme.colors.primary};

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.primary};
  }
`
