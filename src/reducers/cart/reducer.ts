import { produce } from 'immer'

import { ActionTypes } from './actions'

import { CoffeeData } from './../../data/coffeeProducts'

export type Cart = {
  name: string
  price: number
  quantity: number
}

interface CartState {
  cart: Cart[]
  cartItemsName: string[]
}

interface IAction {
  type: ActionTypes
  payload?: {
    coffeeData: CoffeeData
  }
}

export function cartReducer(state: CartState, action: IAction) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_ITEM: {
      const currentItemIndex = state.cart.findIndex(
        (cart) => cart.name === action.payload!.coffeeData.name,
      )

      if (currentItemIndex < 0) {
        return produce(state, (draft: CartState) => {
          draft.cart.push({
            ...action.payload!.coffeeData,
            quantity: 1,
          })
          draft.cartItemsName.push(action.payload!.coffeeData.name)
        })
      }

      return produce(state, (draft: CartState) => {
        draft.cart[currentItemIndex].quantity =
          state.cart[currentItemIndex].quantity + 1
      })
    }

    case ActionTypes.DECREASE_QUANTITY_OF_ITEM_IN_CART: {
      const currentItemIndex = state.cart.findIndex(
        (cart) => cart.name === action.payload!.coffeeData.name,
      )

      if (currentItemIndex < 0) {
        return state
      }

      const selectedCoffeeQuantity = state.cart[currentItemIndex].quantity

      if (selectedCoffeeQuantity <= 1) {
        return produce(state, (draft: CartState) => {
          draft.cart = state.cart.filter(
            (_, index) => index !== currentItemIndex,
          )
          draft.cartItemsName = state.cartItemsName.filter(
            (itemName) => itemName !== state.cart[currentItemIndex].name,
          )
        })
      }

      return produce(state, (draft: CartState) => {
        draft.cart[currentItemIndex].quantity = selectedCoffeeQuantity - 1
      })
    }

    case ActionTypes.REMOVE_ITEM_FROM_CART: {
      const currentItemIndex = state.cart.findIndex(
        (cart) => cart.name === action.payload!.coffeeData.name,
      )

      if (currentItemIndex < 0) {
        return state
      }

      return produce(state, (draft: CartState) => {
        draft.cart = state.cart.filter((_, index) => index !== currentItemIndex)
        draft.cartItemsName = state.cartItemsName.filter(
          (itemName) => itemName !== state.cart[currentItemIndex].name,
        )
      })
    }

    case ActionTypes.CLEAN_CART_AFTER_CHECKOUT: {
      return produce(state, (draft: CartState) => {
        draft.cart = []
        draft.cartItemsName = []
      })
    }

    default:
      return state
  }
}
