import styled from 'styled-components'

export const ButtonContainer = styled.button`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 0;
  border-radius: 6px;

  padding: 0.5rem;
  gap: 0.25rem;

  font-size: 0.75rem;
  line-height: 1.3;

  cursor: pointer;

  &.is-selected {
    background: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme.purple};
  }

  &.not-selected {
    background: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme['base-text']};
  }

  transition: 0.2s background-color, 0.2s border-color;

  &:hover {
    background: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme.purple};
  }
`
