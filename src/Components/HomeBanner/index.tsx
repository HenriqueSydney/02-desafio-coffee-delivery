import {
  HomeBannerContainer,
  HomeBannerSubtitle,
  HomeBannerTitle,
  ItemDescription,
  ItemsContainer,
  ItemsContent,
} from './styles'

import bannerImg from '../../assets/bannerImg.png'
import { IconTag } from '../IconTag'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function HomeBanner() {
  return (
    <HomeBannerContainer>
      <div>
        <HomeBannerTitle>
          Encontre o café perfeito para qualquer hora do dia
        </HomeBannerTitle>
        <HomeBannerSubtitle>
          Com o Coffee Delivery você recebe seu café onde estiver e a qualquer
          hora
        </HomeBannerSubtitle>
        <ItemsContainer>
          <ItemsContent>
            <ItemDescription>
              <IconTag Icon={ShoppingCart} backgroundTagColor="yellow-dark" />
              <span>Compra simples e segura</span>
            </ItemDescription>
            <ItemDescription>
              <IconTag Icon={Timer} backgroundTagColor="yellow" />
              <span>Entrega Rápida e rastreada</span>
            </ItemDescription>
          </ItemsContent>
          <ItemsContent>
            <ItemDescription>
              <IconTag Icon={Package} backgroundTagColor="base-text" />
              <span>Embalagem mantém o café intacto</span>
            </ItemDescription>
            <ItemDescription>
              <IconTag Icon={Coffee} backgroundTagColor="purple" />
              <span>O café chega fresquinho para você</span>
            </ItemDescription>
          </ItemsContent>
        </ItemsContainer>
      </div>
      <img
        src={bannerImg}
        alt="Imagem de um copo de café cercado de grãos e borras de café"
      />
    </HomeBannerContainer>
  )
}
