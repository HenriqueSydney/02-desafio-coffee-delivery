import React, { ForwardRefRenderFunction, forwardRef } from 'react'
import { InputContainer, TextInput } from './styles'

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputTextProps> = (
  { errorMessage, style, ...rest },
  ref,
) => {
  return (
    <InputContainer style={style}>
      <TextInput hasError={!!errorMessage} ref={ref} {...rest} />
      {errorMessage && <span>{errorMessage}</span>}
    </InputContainer>
  )
}

export const InputText = forwardRef(InputBase)
