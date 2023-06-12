import { HeaderContainer } from './styles'
import { MapPin } from 'phosphor-react'

import logo from '../../assets/logo.svg'
import { ButtonIcon } from '../ButtonIcon'
import { useTheme } from 'styled-components'
import { CartButton } from '../CartButton'
import { NavLink } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext'

export function Header() {
  const COLORS = useTheme()
  const [totalOfNonIdenticalItems, setTotalOfNonIdenticalItems] = useState(0)

  const { cartItemsName } = useContext(CartContext)

  useEffect(() => {
    setTotalOfNonIdenticalItems(cartItemsName.length)
  }, [cartItemsName])

  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logo} alt="" />
      </NavLink>
      <nav>
        <ButtonIcon
          icon={
            <MapPin size={22} color={COLORS['purple-dark']} weight="fill" />
          }
          title="Porto Alegre, RS"
          variant="LOCATION"
        />
        <NavLink to="/checkout" title="Checkout">
          <CartButton numberOfItemsOnCart={totalOfNonIdenticalItems} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
