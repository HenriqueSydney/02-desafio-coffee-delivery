import React from 'react'
import { BACKGROUND_COLORS, ButtonContainer } from './styles'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: any
  title?: string
  variant?: keyof typeof BACKGROUND_COLORS
  numberOfItems?: number
}

export function ButtonIcon({
  icon = '',
  title = '',
  variant = 'PRIMARY',
  ...rest
}: ButtonProps) {
  return (
    <ButtonContainer variant={variant} {...rest}>
      {icon && icon}
      {title && title}
    </ButtonContainer>
  )
}
