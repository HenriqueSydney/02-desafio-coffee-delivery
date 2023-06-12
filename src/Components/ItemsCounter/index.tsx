import { Minus, Plus } from 'phosphor-react'
import { ItemsCounterContainer } from './styles'
import { useTheme } from 'styled-components'
import { useContext, useEffect, useState } from 'react'
import { CoffeeData } from '../../data/coffeeProducts'
import { CartContext } from '../../context/CartContext'

interface CoffeeCardProps {
  coffeeData: CoffeeData
  maxHeightOfContainer?: number
}

export function ItemsCounter({
  coffeeData,
  maxHeightOfContainer = 2.375,
}: CoffeeCardProps) {
  const COLORS = useTheme()
  const [isMinusHovered, setIsMinusHovered] = useState(false)
  const [isPlusHovered, setIsPlusHovered] = useState(false)
  const { cart, decreaseQuantityOfCoffeeInCart, addNewCoffeeToCart } =
    useContext(CartContext)

  const coffeeInCart = cart.find((item) => item.name === coffeeData.name)
  const [quantity, setQuantity] = useState(coffeeInCart?.quantity || 0)

  useEffect(() => {
    if (coffeeInCart) {
      setQuantity(coffeeInCart.quantity)
    } else {
      setQuantity(0)
    }
  }, [coffeeInCart])
  const handleMinusMouseEnter = () => {
    setIsMinusHovered(true)
  }

  const handleMinusMouseLeave = () => {
    setIsMinusHovered(false)
  }

  const handlePlusMouseEnter = () => {
    setIsPlusHovered(true)
  }

  const handlePlusMouseLeave = () => {
    setIsPlusHovered(false)
  }

  function handleDecreaseItemsInCart() {
    decreaseQuantityOfCoffeeInCart(coffeeData)
  }

  function handleIncreaseItemsInCart() {
    addNewCoffeeToCart(coffeeData)
  }

  return (
    <ItemsCounterContainer maxHeightOfContainer={maxHeightOfContainer}>
      <span>
        <Minus
          size={14}
          color={isMinusHovered ? COLORS['purple-dark'] : COLORS.purple}
          cursor="pointer"
          onMouseEnter={handleMinusMouseEnter}
          onMouseLeave={handleMinusMouseLeave}
          onClick={handleDecreaseItemsInCart}
        />
      </span>
      <span>{quantity}</span>
      <span>
        <Plus
          size={14}
          color={isPlusHovered ? COLORS['purple-dark'] : COLORS.purple}
          cursor="pointer"
          onMouseEnter={handlePlusMouseEnter}
          onMouseLeave={handlePlusMouseLeave}
          onClick={handleIncreaseItemsInCart}
        />
      </span>
    </ItemsCounterContainer>
  )
}
