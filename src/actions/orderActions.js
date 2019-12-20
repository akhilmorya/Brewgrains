import * as CONST from '../utils/constants';

// @Order Actions
export function getAllOrders() {
  return {
    type: CONST.GET_ALL_ORDERS
  };
}
export function getAllOrdersSuccess(res) {
  return {
    type: CONST.GET_ALL_ORDERS_SUCCESS,
    payload: res
  };
}
export function getAllOrdersFailure(error) {
  return {
    type: CONST.GET_ALL_ORDERS_FAILURE,
  };
}

export function cancelOrder(res) {
  return {
    type: CONST.CANCEL_ORDER,
    payload: {
      order: {
        order: res.order
      },
      id: res.id
    }
  };
}
