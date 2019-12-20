import { put, call } from 'redux-saga/effects';
import * as orderActions from '../actions/orderActions';
import * as CommonActions from '../actions/commonActions';
import { CommonFetch } from '../services/apiService';
import * as CONST from '../utils/constants';

const opts = {
  method: '',
  url: null,
  body: null
};

// eslint-disable-next-line import/prefer-default-export
export function* getAllOrders(action) {
  yield put(CommonActions.startSpinner());
  opts.method = CONST.GET_API;
  opts.url = `v1/orders?status=["Unpaid", "Paid", "Cancel", "Delivered"]`;
  try {
    const res = yield call(CommonFetch, action.user, opts);
    if (res !== undefined) {
      yield put(orderActions.getAllOrdersSuccess(res));
      yield put(CommonActions.stopSpinner());
    } else {
      yield put(orderActions.getAllOrdersFailure(res));
      yield put(CommonActions.stopSpinner());
    }
  } catch (error) {
    yield put(orderActions.getAllOrdersFailure(error));
    yield put(CommonActions.stopSpinner());
  }
}

export function* cancelOrder(action) {
  yield put(CommonActions.startSpinner());
  opts.method = CONST.PUT_API;
  opts.url = `v1/orders/${action.payload.id}`;
  try {
    const res = yield call(CommonFetch, action.payload.order, opts);
    if (res !== undefined) {
      yield put(CommonActions.stopSpinner());
    } else {
      yield put(CommonActions.stopSpinner());
    }
  } catch (error) {
    yield put(CommonActions.stopSpinner());
  }
}
