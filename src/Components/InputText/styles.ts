import styled from 'styled-components'

interface TextInputProps {
  hasError: boolean
}

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 2.625rem;

  span {
    font-size: 0.75rem;
    color: ${(props) => props.theme['yellow-dark']};
    font-style: italic;
  }
`

export const TextInput = styled.input<TextInputProps>`
  box-sizing: border-box;
  display: flex;

  align-items: center;
  justify-content: flex-start;

  height: 2.625rem;

  padding: 0.75rem;

  background: ${(props) => props.theme['base-input']};

  border: 1px solid
    ${(props) =>
      props.hasError ? props.theme['yellow-dark'] : props.theme['base-button']};
  border-radius: 4px;

  font-size: 0.875rem;
  color: ${(props) => props.theme['base-label']};
`
