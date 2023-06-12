import { Trash } from 'phosphor-react'
import { CoffeeData } from '../../data/coffeeProducts'
import { ButtonIcon } from '../ButtonIcon'
import { ItemsCounter } from '../ItemsCounter'
import {
  CheckoutProductInfoContainer,
  CheckoutProductInfoContent,
} from './styles'
import { useTheme } from 'styled-components'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { formatCurrency } from '../../utils/formatCurrency'

interface CoffeeCardProps {
  data: CoffeeData
}

export function CheckoutProductInfo({ data }: CoffeeCardProps) {
  const COLORS = useTheme()

  const { removeCoffeeFromCart } = useContext(CartContext)

  const { name, price, img } = data

  const formattedPrice = formatCurrency(price)

  function handleRemoveItemFromCart() {
    removeCoffeeFromCart(data)
  }

  return (
    <>
      <CheckoutProductInfoContainer>
        <CheckoutProductInfoContent>
          <img src={img} alt="Xícara de Café" />
          <div className="coffee-details">
            <span className="coffee-name">{name}</span>
            <div className="action-container">
              <ItemsCounter coffeeData={data} maxHeightOfContainer={2} />
              <ButtonIcon
                title="REMOVER"
                icon={<Trash size={16} color={COLORS.purple} />}
                variant="SECONDARY"
                onClick={handleRemoveItemFromCart}
              />
            </div>
          </div>
          <span className="price">{formattedPrice}</span>
        </CheckoutProductInfoContent>
      </CheckoutProductInfoContainer>
    </>
  )
}
