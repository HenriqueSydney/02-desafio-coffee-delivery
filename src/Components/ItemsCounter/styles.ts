import styled from 'styled-components'

interface ItemsCounterContainerProps {
  maxHeightOfContainer: number
}

export const ItemsCounterContainer = styled.div<ItemsCounterContainerProps>`
  display: flex;
  flex: 1;

  align-items: center;
  justify-content: space-evenly;

  padding: 0.5rem;
  gap: 0.25rem;

  width: 4.5rem;
  max-width: 4.5rem;
  height: ${(props) => props.maxHeightOfContainer}rem;

  background: ${(props) => props.theme['base-button']};

  border-radius: 6px;

  .hovered-icon {
    transition: color 0.3s ease;
  }
`

export const OperatorContainer = styled.span`
  color: ${(props) => props.theme.purple};
`
