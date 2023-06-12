import React from 'react'
import { ButtonContainer } from './styles'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: any
  title: string
  selectedRadio?: string
}

export function RadioButton({
  icon,
  title,
  selectedRadio = '',
  ...rest
}: ButtonProps) {
  return (
    <ButtonContainer
      className={title === selectedRadio ? 'is-selected' : 'not-selected'}
      type="button"
      {...rest}
    >
      {icon}
      {title}
    </ButtonContainer>
  )
}
