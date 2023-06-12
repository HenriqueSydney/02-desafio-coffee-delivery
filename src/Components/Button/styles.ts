import styled from 'styled-components'

export const ButtonContainer = styled.button`
  display: flex;
  width: 100%;

  justify-content: center;
  align-items: center;

  height: 46px;

  border: 0;
  border-radius: 6px;

  padding: 0.75rem 0.5rem;

  background: ${(props) => props.theme.yellow};

  color: ${(props) => props.theme.white};
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1.6;
  font-stretch: 100;

  cursor: pointer;

  transition: 0.2s background-color;

  &:hover:not(:disabled) {
    background: ${(props) => props.theme['yellow-dark']};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`
