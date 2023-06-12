import { CoffeeData } from '../../data/coffeeProducts'

export enum ActionTypes {
  ADD_NEW_ITEM = 'ADD_NEW_ITEM',
  DECREASE_QUANTITY_OF_ITEM_IN_CART = 'DECREASE_QUANTITY_OF_ITEM_IN_CART',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
  CLEAN_CART_AFTER_CHECKOUT = 'CLEAN_CART_AFTER_CHECKOUT',
}

export function addNewItemToCart(coffeeData: CoffeeData) {
  return {
    type: ActionTypes.ADD_NEW_ITEM,
    payload: {
      coffeeData,
    },
  }
}

export function decreaseQuantityOfItemInCart(coffeeData: CoffeeData) {
  return {
    type: ActionTypes.DECREASE_QUANTITY_OF_ITEM_IN_CART,
    payload: {
      coffeeData,
    },
  }
}

export function removeItemFromCart(coffeeData: CoffeeData) {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_CART,
    payload: {
      coffeeData,
    },
  }
}

export function cleanCartAfterCheckout() {
  return {
    type: ActionTypes.CLEAN_CART_AFTER_CHECKOUT,
  }
}
