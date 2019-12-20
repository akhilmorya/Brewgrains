/* eslint-disable no-case-declarations */
import {
 ADD_CART, EMPTY_CART, REMOVE_FROM_CART, UPDATE_CART, GET_ALL_COUPONS_SUCCESS, APPLY_COUPON
} from '../utils/constants';

const initialState = {
  cart: [],
  total: 0,
  discountAmount: 0,
  couponDiscount: 0,
  couponId: 0,
  couponItem: {},
  allCoupons: []
};

export type State = {
  filters: {
    allCoupons:[],
  },
}

export default function (state:State = initialState, action:Action): State {
  switch (action.type) {
    case ADD_CART:
      let cartItems = [];
      if (state.cart.length !== 0) {
        const selectedIndex = state.cart.findIndex((products) => products.id === action.payload.id);
        if (selectedIndex === -1) {
          cartItems = state.cart;
          const cartItem = action.payload;
          cartItem['quantity'] = action.payload.quantity;
          cartItems.push(cartItem);
        } else {
          cartItems = [...state.cart];
          const cartItem = cartItems[selectedIndex];
          if (action.isFromHomeProduct) {
            cartItem['quantity'] = cartItem.quantity + 1;
          } else {
            cartItem['quantity'] = cartItem.quantity + action.payload.quantity;
          }
          cartItems[selectedIndex] = cartItem;
        }
      } else {
        cartItems = [...state.cart];
        const cartItem = action.payload;
        cartItem['quantity'] = action.payload.quantity;
        cartItems.push(cartItem);
      }
      let totalPriceCalValue = 0;
      cartItems.map((item) => {
        totalPriceCalValue += item.price * item.quantity;
      });
      return {
        ...state,
        cart: cartItems,
        total: totalPriceCalValue,
        discountAmount: totalPriceCalValue
      };
    case EMPTY_CART:
      return {
        ...state,
        cart: [],
        total: 0,
        discountAmount: 0,
        couponDiscount: 0,
        couponId: 0,
      };
    case REMOVE_FROM_CART:
      let totalPriceValue = 0;
      totalPriceValue = state.total - (action.payload.quantity * action.payload.price);
      const updatedCart = state.cart.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
        total: updatedCart.length > 0 ? totalPriceValue : 0,
        discountAmount: updatedCart.length > 0 ? totalPriceValue : 0,
        couponDiscount: 0
      };
    case UPDATE_CART:
      let totalPriceUpdatedValue = 0;
      const cartItemsList = state.cart;
      const selectedIndex = state.cart.findIndex((products) => products.id === action.payload.id);
      const cartItem = cartItemsList[selectedIndex];
      cartItem['quantity'] = action.updatedQuantity;
      cartItemsList[selectedIndex] = cartItem;
      cartItemsList.map((item) => {
        totalPriceUpdatedValue += item.price * item.quantity;
      });
      return {
        ...state,
        cart: cartItemsList,
        total: totalPriceUpdatedValue,
        discountAmount: totalPriceUpdatedValue
      };
    case GET_ALL_COUPONS_SUCCESS:
      return {
        ...state,
        allCoupons: action.payload.coupons,
      };
    case APPLY_COUPON:
      return {
        ...state,
        discountAmount: action.payload.discountAmount,
        couponDiscount: action.payload.couponDiscount,
        couponId: action.payload.couponItem.id,
        couponItem: action.payload.couponItem
      };
    default:
      return state;
  }
}
