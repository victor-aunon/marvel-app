import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 1rem auto;

  input[type='submit'] {
    border: 2px solid ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.fonts.titles};
    font-size: ${(props) => props.theme.fontSizes.normal};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    text-transform: uppercase;
    color: inherit;
    max-width: 600px;
    width: 90%;
    margin: auto;
    padding: 0.5rem;
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: ${(props) => props.theme.borderRadius};

    &:hover {
      box-shadow: 0px 0px 8px 4px ${(props) => props.theme.colors.primary};
    }

    &:active {
      transform: scale(0.95);
    }
  }
`
