import * as CONST from '../utils/constants';

const initialState = {
  userOrders: null
};

// This reducer stores the status of email verification.
export default function (state = initialState, action:Action): State {
  switch (action.type) {
    case CONST.GET_ALL_ORDERS:
      return {
        ...state,
        userOrders: null
      };
    case CONST.GET_ALL_ORDERS_SUCCESS:
      return {
        ...state,
        userOrders: action.payload,
      };
    case CONST.GET_ALL_ORDERS_FAILURE:
      return {
        ...state,
      };
    case CONST.CHANGED_FAVOURITE_STATUS:
      return {
        ...state,
        userOrders: action.data
      };
    case CONST.CANCEL_ORDER:
      return {
        ...state,
        // userOrders: state.userOrders.allOrders.filter((item) => item.orderDetails.id !== action.payload),
      };
    default:
      return { ...state };
  }
}
