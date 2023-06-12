import React from 'react'
import { ButtonContainer } from './styles'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  numberOfItems?: number
}

export function Button({ title, ...rest }: ButtonProps) {
  return <ButtonContainer {...rest}>{title.toUpperCase()}</ButtonContainer>
}
