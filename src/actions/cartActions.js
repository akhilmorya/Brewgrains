import * as CONST from '../utils/constants';

// @Cart Actions
export function addToCart(item, isFromHomeProduct) {
  return {
    type: CONST.ADD_CART,
    payload: item,
    isFromHomeProduct
  };
}
export function updateCart(item, quantity) {
  return {
    type: CONST.UPDATE_CART,
    payload: item,
    updatedQuantity: quantity
  };
}

export function removeItem(item) {
  return {
    type: CONST.REMOVE_FROM_CART,
    payload: item
  };
}

export function emptyCart() {
  return {
    type: CONST.EMPTY_CART
  };
}

export function applyCouponDiscount(value) {
  return {
    type: CONST.APPLY_COUPON,
    payload: value
  };
}
