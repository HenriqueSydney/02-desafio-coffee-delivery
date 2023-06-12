import {
  ReactNode,
  createContext,
  useReducer,
  useEffect,
  useState,
} from 'react'

import { CoffeeData } from '../data/coffeeProducts'
import { Cart, cartReducer } from '../reducers/cart/reducer'
import {
  addNewItemToCart,
  cleanCartAfterCheckout,
  decreaseQuantityOfItemInCart,
  removeItemFromCart,
} from '../reducers/cart/actions'

import { CheckoutFormData } from '../pages/Checkout'

type ICheckoutData = CheckoutFormData & {
  paymentMethod: string
}

interface CartContextType {
  cart: Cart[]
  cartItemsName: string[]
  checkoutData: ICheckoutData
  setCheckoutDataState: (checkoutFormData: ICheckoutData) => void
  addNewCoffeeToCart: (coffeeData: CoffeeData) => void
  decreaseQuantityOfCoffeeInCart: (coffeeData: CoffeeData) => void
  removeCoffeeFromCart: (coffeeData: CoffeeData) => void
  cleanCart: () => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [checkoutData, setCheckoutData] = useState({} as ICheckoutData)
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
      cartItemsName: [],
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return initialState
    },
  )

  const { cart, cartItemsName } = cartState

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)
    localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
  }, [cartState])

  function setCheckoutDataState(checkoutFormData: ICheckoutData) {
    setCheckoutData(checkoutFormData)
  }

  function addNewCoffeeToCart(coffeeData: CoffeeData) {
    dispatch(addNewItemToCart(coffeeData))
  }

  function decreaseQuantityOfCoffeeInCart(coffeeData: CoffeeData) {
    dispatch(decreaseQuantityOfItemInCart(coffeeData))
  }

  function removeCoffeeFromCart(coffeeData: CoffeeData) {
    dispatch(removeItemFromCart(coffeeData))
  }

  function cleanCart() {
    dispatch(cleanCartAfterCheckout())
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        cartItemsName,
        checkoutData,
        setCheckoutDataState,
        addNewCoffeeToCart,
        decreaseQuantityOfCoffeeInCart,
        removeCoffeeFromCart,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
