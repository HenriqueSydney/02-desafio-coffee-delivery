import styled from 'styled-components'

export const BACKGROUND_COLORS = {
  PRIMARY: 'yellow',
  SECONDARY: 'base-button',
  ICON: 'purple-dark',
  LOCATION: 'purple-light',
  CART: 'yellow-light',
} as const

export const HOVER_COLORS = {
  PRIMARY: 'yellow-dark',
  SECONDARY: 'base-hover',
  ICON: 'purple',
  LOCATION: 'purple-light',
  CART: 'yellow-light',
} as const

export const TEXT_COLORS = {
  PRIMARY: 'white',
  SECONDARY: 'base-text',
  ICON: 'white',
  LOCATION: 'purple-dark',
  CART: 'yellow-dark',
} as const

interface ButtonProps {
  variant: keyof typeof BACKGROUND_COLORS
}

export const ButtonContainer = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 0;
  border-radius: 6px;

  padding: 0.5rem;
  gap: 0.25rem;

  background: ${(props) => props.theme[BACKGROUND_COLORS[props.variant]]};

  color: ${(props) => props.theme[TEXT_COLORS[props.variant]]};
  font-size: ${(props) => (props.variant === 'LOCATION' ? 0.875 : 0.75)}rem;
  line-height: 1.3;

  cursor: pointer;

  transition: 0.2s background-color;

  &:hover {
    background: ${(props) => props.theme[HOVER_COLORS[props.variant]]};
  }
`
