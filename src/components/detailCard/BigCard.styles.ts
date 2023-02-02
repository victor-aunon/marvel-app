import styled from 'styled-components'
import { Card } from '../common/Card.styles'

interface BigCardProps extends React.RefAttributes<HTMLDivElement> {
  readonly $isFavorite: boolean
}

export const BigCard = styled(Card)<BigCardProps>`
  height: auto;
  max-width: 400px;
  margin: 1rem auto;
  box-shadow: 0px 0px 10px 5px
    ${(props) =>
      props.$isFavorite
        ? props.theme.colors.tertiary
        : props.theme.colors.secondary};

  .card-image {
    width: 100%;
    height: 310px;
    flex: 0 0 310px;
  }

  .card-description {
    height: auto;
    overflow: visible;
    display: block;
  }

  .card-add-favorite-button {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: fit-content;
    margin: 10px 5px;
    padding: 5px 10px;
    gap: 0.5rem;
    font-family: ${(props) => props.theme.fonts.titles};
    font-style: italic;
    font-size: inherit;
    background: transparent;
    color: ${(props) => props.theme.colors.tertiary};
    border: 2px solid ${(props) => props.theme.colors.tertiary};
    border-radius: ${(props) => props.theme.borderRadius};

    &:hover {
      box-shadow: 0px 0px 8px 2px ${(props) => props.theme.colors.tertiary};
    }

    &:active {
      transform: scale(0.95);
    }
  }
`
