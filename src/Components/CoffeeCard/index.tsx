import {
  CoffeeCardContainer,
  PriceCartContainer,
  TitleDescriptionContainer,
  ActionContainer,
  PriceContainer,
  TagContainer,
} from './styles'

import { CartButton } from '../CartButton'

import { Tag } from '../Tag'
import { ItemsCounter } from '../ItemsCounter'
import { CoffeeData } from '../../data/coffeeProducts'
import { NavLink } from 'react-router-dom'

interface CoffeeCardProps {
  data: CoffeeData
}

export function CoffeeCard({ data }: CoffeeCardProps) {
  const { name, description, tags, price, img } = data

  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
  }).format(price)

  return (
    <CoffeeCardContainer>
      <img src={img} alt="Xícara de Café" />

      <TagContainer>
        {tags.map((tag) => (
          <Tag key={tag} title={tag} />
        ))}
      </TagContainer>
      <TitleDescriptionContainer>
        <h1 className="coffee-name">{name}</h1>
        <span className="coffee-description">{description}</span>
      </TitleDescriptionContainer>
      <PriceCartContainer>
        <PriceContainer>
          <span className="price">
            <span className="currency">R$</span>
            {formattedPrice}
          </span>
        </PriceContainer>

        <ActionContainer>
          <ItemsCounter coffeeData={data} />
          <NavLink to="/checkout" title="Checkout">
            <CartButton variant="SECONDARY" />
          </NavLink>
        </ActionContainer>
      </PriceCartContainer>
    </CoffeeCardContainer>
  )
}
