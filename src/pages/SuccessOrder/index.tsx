import { MapPin, Timer } from 'phosphor-react'

import {
  Container,
  Content,
  DetailContainer,
  GradientContainer,
  InfoContent,
} from './styles'

import { IconTag } from '../../Components/IconTag'

import guyInMoto from '../../assets/guy-in-moto.png'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

export function SuccessOrder() {
  const { checkoutData } = useContext(CartContext)

  return (
    <Container>
      <Content>
        <h1>Uhu! Pedido confirmado</h1>
        <span>Agora é só aguardar que logo o café chegará até você</span>
        <div className="info-and-image-container">
          <GradientContainer>
            <DetailContainer>
              <InfoContent>
                <IconTag Icon={MapPin} backgroundTagColor="purple-dark" />
                <span>
                  Entrega em{' '}
                  <strong>
                    {checkoutData.street}, {checkoutData.number}
                  </strong>{' '}
                  <br />
                  {checkoutData.neighborhood} - {checkoutData.city},{' '}
                  {checkoutData.state}
                </span>
              </InfoContent>
              <InfoContent>
                <IconTag Icon={Timer} backgroundTagColor="yellow" />
                <span>
                  Previsão de entrega <br /> <strong>20 min - 30 min</strong>
                </span>
              </InfoContent>
              <InfoContent>
                <IconTag Icon={Timer} backgroundTagColor="yellow" />
                <span>
                  Pagamento na entrega <br />{' '}
                  <strong>{checkoutData.paymentMethod}</strong>
                </span>
              </InfoContent>
            </DetailContainer>
          </GradientContainer>
          <img src={guyInMoto} alt="Guy in a Motorcycle" />
        </div>
      </Content>
    </Container>
  )
}
