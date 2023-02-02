import styled from 'styled-components'

interface CardProps extends React.RefAttributes<HTMLDivElement> {
  readonly $isFavorite: boolean
}

export const Card = styled.div<CardProps>`
  height: 490px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 28px;
  background: radial-gradient(
    ${(props) => props.theme.colors.background} 30%,
    ${(props) => props.theme.colors.dark}
  );
  border-radius: calc(3 * ${(props) => props.theme.borderRadius});
  outline: 8px solid ${(props) => props.theme.colors.primary};
  outline-offset: -20px;
  box-shadow: 0px 0px 10px 0px
    ${(props) =>
      props.$isFavorite
        ? props.theme.colors.tertiary
        : props.theme.colors.secondary};

  .card-image {
    width: 100%;
    height: 290px;
    flex: 0 0 290px;
    object-fit: cover;
    border-radius: ${(props) => props.theme.borderRadius};
  }

  .card-title {
    font-family: ${(props) => props.theme.fonts.titles};
    font-style: italic;
    text-transform: uppercase;
  }

  .card-description {
    height: 100px;
    width: 100%;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }

  .card-counter {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-family: ${(props) => props.theme.fonts.titles};
    font-style: italic;

    .counter {
      color: ${(props) => props.theme.colors.primary};
      font-size: ${(props) => props.theme.fontSizes.normal};
      font-weight: ${(props) => props.theme.fontWeights.bold};
      background-color: ${(props) => props.theme.colors.text};
      border-radius: 50%;
      width: 45px;
      height: 45px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`
