import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

import { useTheme } from 'styled-components'

import { CartContext } from '../../context/CartContext'

import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { CoffeeData, products } from '../../data/coffeeProducts'

import { SectionContainer } from '../../Components/SectionContainer'
import { CheckoutProductInfo } from '../../Components/CheckoutProductInfo'

import { Button } from '../../Components/Button'
import { RadioButton } from '../../Components/RadioButton'
import { CheckoutForm } from './CheckoutForm'

import {
  ButtonsGroup,
  CartContainer,
  CheckoutContainer,
  CheckoutInfoContainer,
  SectionTitle,
  SummaryContainer,
} from './styles'

import { formatCurrency } from '../../utils/formatCurrency'

interface CartSummary {
  totalPriceWithItems: string
  totalPriceWithDelivery: string
  totalPrice: string
}

const checkoutFormValidationSchema = zod.object({
  zip_code: zod
    .string()
    .min(8, 'O CEP deve ter no mínimo 8 dígitos')
    .max(10, 'O CEP deve ter no máximo 10 dígitos')
    .nonempty('Informe seu CEP'),
  street: zod.string().nonempty('Informe sua rua'),
  number: zod.string().nonempty('Informe o número de seu endereço'),
  complement: zod.string().default(''),
  neighborhood: zod.string().nonempty('Informe o seu bairro'),
  city: zod.string().nonempty('Informe a sua cidade'),
  state: zod
    .string()
    .min(2, 'Informe o seu Estado')
    .max(2, 'O Estado pode ter no máximo 2 caracteres')
    .nonempty('Informe a seu Estado'),
})

export type CheckoutFormData = zod.infer<typeof checkoutFormValidationSchema>

const PAYMENT_METHODS = {
  CREDIT_CARD: 'CARTÃO DE CRÉDITO',
  DEBIT_CARD: 'CARTÃO DE DÉBITO',
  CASH: 'DINHEIRO',
}

export function Checkout() {
  const [cartProducts, setCartProducts] = useState<CoffeeData[]>([])
  const [cartSummary, setCartSummary] = useState<CartSummary>({
    totalPriceWithItems: 'R$ 0,00',
    totalPriceWithDelivery: 'R$ 0,00',
    totalPrice: 'R$ 0,00',
  })
  const [paymentMethod, setPaymentMethod] = useState('')

  const { cart, cartItemsName, cleanCart, setCheckoutDataState } =
    useContext(CartContext)

  const navigate = useNavigate()

  function handleSelectPaymentMethod(paymentSelectedMethod: string) {
    setPaymentMethod(paymentSelectedMethod)
  }

  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema),
    defaultValues: {
      zip_code: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
    },
  })

  const { handleSubmit, watch, reset, formState } = checkoutForm

  const { errors } = formState
  console.log(errors)
  function handleCheckout(data: CheckoutFormData) {
    if (cartItemsName.length === 0) {
      return
    }

    const checkoutFormData = {
      ...data,
      paymentMethod,
    }

    setCheckoutDataState(checkoutFormData)
    cleanCart()
    reset()
    navigate('/success-order')
  }

  const watchAllFields = watch([
    'zip_code',
    'street',
    'number',
    'neighborhood',
    'city',
    'state',
  ])

  const isSubmitDisabled = !(
    Object.values(watchAllFields).every(Boolean) &&
    paymentMethod !== '' &&
    cartItemsName.length > 0
  )

  useEffect(() => {
    const totalPriceWithItems = cart.reduce(
      (summary, currentCart) =>
        summary + currentCart.price * currentCart.quantity,
      0,
    )

    const totalPriceWithDelivery = totalPriceWithItems * 0.1

    const totalPrice = totalPriceWithDelivery + totalPriceWithItems

    const formattedTotalPriceWithItems = formatCurrency(totalPriceWithItems)

    const formattedTotalPriceWithDelivery = formatCurrency(
      totalPriceWithDelivery,
    )

    const formattedTotalPrice = formatCurrency(totalPrice)

    setCartSummary({
      totalPriceWithItems: formattedTotalPriceWithItems,
      totalPriceWithDelivery: formattedTotalPriceWithDelivery,
      totalPrice: formattedTotalPrice,
    })
  }, [cart])

  useEffect(() => {
    const itemsInCart = products.filter((item) =>
      cartItemsName.includes(item.name),
    )
    setCartProducts(itemsInCart)
  }, [cartItemsName])

  const COLORS = useTheme()
  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleCheckout)} action="/success-order">
        <CheckoutInfoContainer>
          <SectionTitle>Complete seu pedido</SectionTitle>
          <SectionContainer
            title="Endereço de Entrega"
            subtitle="Informe o endereço onde deseja receber seu pedido"
            icon={<MapPinLine size={22} color={COLORS['yellow-dark']} />}
          >
            <FormProvider {...checkoutForm}>
              <CheckoutForm />
            </FormProvider>
          </SectionContainer>

          <SectionContainer
            title="Pagamento"
            subtitle=" O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            icon={<CurrencyDollar size={22} color={COLORS.purple} />}
          >
            <ButtonsGroup>
              <RadioButton
                icon={<CreditCard size={16} color={COLORS.purple} />}
                title={PAYMENT_METHODS.CREDIT_CARD}
                onClick={() =>
                  handleSelectPaymentMethod(PAYMENT_METHODS.CREDIT_CARD)
                }
                selectedRadio={paymentMethod}
              />
              <RadioButton
                icon={<Bank size={16} color={COLORS.purple} />}
                title={PAYMENT_METHODS.DEBIT_CARD}
                onClick={() =>
                  handleSelectPaymentMethod(PAYMENT_METHODS.DEBIT_CARD)
                }
                selectedRadio={paymentMethod}
              />
              <RadioButton
                icon={<Money size={16} color={COLORS.purple} />}
                title={PAYMENT_METHODS.CASH}
                onClick={() => handleSelectPaymentMethod(PAYMENT_METHODS.CASH)}
                selectedRadio={paymentMethod}
              />
            </ButtonsGroup>
          </SectionContainer>
        </CheckoutInfoContainer>

        <CheckoutInfoContainer>
          <SectionTitle>Cafés selecionados</SectionTitle>
          <CartContainer>
            {cartProducts.map((cartProduct) => (
              <CheckoutProductInfo key={cartProduct.name} data={cartProduct} />
            ))}
            <SummaryContainer>
              <div className="subtotal">
                <span>Total de itens</span>
                <span>{cartSummary.totalPriceWithItems}</span>
              </div>
              <div className="subtotal">
                <span>Entrega</span>
                <span>{cartSummary.totalPriceWithDelivery}</span>
              </div>
              <div className="total">
                <span>Total</span>
                <span>{cartSummary.totalPrice}</span>
              </div>
            </SummaryContainer>
            <Button
              title="confirmar pedido"
              disabled={isSubmitDisabled}
              type="submit"
            />
          </CartContainer>
        </CheckoutInfoContainer>
      </form>
    </CheckoutContainer>
  )
}
