import React from 'react'
import { useTheme } from 'styled-components'
import { ShoppingCart } from 'phosphor-react'

import { ButtonIcon } from '../ButtonIcon'

import { CartButtonContainer } from './styles'
interface CartButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  numberOfItemsOnCart?: number
  variant?: 'PRIMARY' | 'SECONDARY'
}

export function CartButton({
  variant = 'PRIMARY',
  numberOfItemsOnCart = 0,
}: CartButtonProps) {
  const COLORS = useTheme()

  return (
    <CartButtonContainer>
      <ButtonIcon
        variant={variant === 'PRIMARY' ? 'CART' : 'ICON'}
        icon={
          <ShoppingCart
            size={22}
            color={variant === 'PRIMARY' ? COLORS['yellow-dark'] : COLORS.white}
            weight="fill"
          />
        }
      />
      {numberOfItemsOnCart > 0 && <span>{numberOfItemsOnCart}</span>}
    </CartButtonContainer>
  )
}
