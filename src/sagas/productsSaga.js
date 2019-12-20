import { put, call } from 'redux-saga/effects';
import * as ProductActions from '../actions/productActions';
import * as CommonActions from '../actions/commonActions';
import { CommonFetch } from '../services/apiService';
import * as CONST from '../utils/constants';

const opts = {
  method: '',
  url: null,
  body: null
};

// eslint-disable-next-line import/prefer-default-export
export function* getAllProducts(action) {
  const { filterData } = action;
  yield put(CommonActions.startSpinner());
  opts.method = CONST.GET_API;
  if (action.filterData) {
    if (filterData.sortByName === 'DESC') {
      opts.url = `v1/products?brand=[${filterData.brand}]&category=[${filterData.category}]&price=[${filterData.price}]&page=${action.page}`;
    } else {
      opts.url = `v1/products?brand=[${filterData.brand}]&category=[${filterData.category}]&price=[${filterData.price}]&sortByName=${filterData.sortByName}&page=${action.page}`;
    }
  } else {
    opts.url = `v1/products?page=${action.page}`;
  }
  try {
    const res = yield call(CommonFetch, action.user, opts);
    if (res !== undefined) {
      yield put(ProductActions.getAllProductsSuccess(res));
      yield put(CommonActions.stopSpinner());
      action.getAllProductsSuccess();
    } else {
      yield put(ProductActions.getAllProductsFailure(res));
      yield put(CommonActions.stopSpinner());
    }
  } catch (error) {
    yield put(ProductActions.getAllProductsFailure(error));
    yield put(CommonActions.stopSpinner());
  }
}

export function* getAllFavouriteProducts(action) {
  yield put(CommonActions.startSpinner());
  opts.method = CONST.GET_API;
  opts.url = 'v1/products/favorite';
  try {
    const res = yield call(CommonFetch, action.user, opts);
    if (res !== undefined) {
      yield put(ProductActions.getAllFavouriteProductsSuccess(res));
      yield put(CommonActions.stopSpinner());
    } else {
      yield put(ProductActions.getAllFavouriteProductsFailure(res));
      yield put(CommonActions.stopSpinner());
    }
  } catch (error) {
    yield put(ProductActions.getAllFavouriteProductsFailure(error));
    yield put(CommonActions.stopSpinner());
  }
}

export function* markProductAsFavourite(action) {
  yield put(CommonActions.startSpinner());
  opts.method = CONST.POST_API;
  opts.url = 'v1/products/_favorite';
  try {
    const res = yield call(CommonFetch, action.payload, opts);
    if (res !== undefined) {
      action.callBack();
      yield put(CommonActions.stopSpinner());
    } else {
      yield put(CommonActions.stopSpinner());
    }
  } catch (error) {
    yield put(CommonActions.stopSpinner());
  }
}

export function* markProductAsUnFavourite(action) {
  yield put(CommonActions.startSpinner());
  opts.method = CONST.DELETE_API;
  opts.url = `v1/products/${action.productID.productId}/_favorite`;
  try {
    const res = yield call(CommonFetch, action.productID, opts);
    if (res !== undefined) {
      action.callBack();
      yield put(CommonActions.stopSpinner());
    } else {
      yield put(CommonActions.stopSpinner());
    }
  } catch (error) {
    yield put(CommonActions.stopSpinner());
  }
}

export function* getProductDetails(action) {
  yield put(CommonActions.startSpinner());
  opts.method = CONST.GET_API;
  opts.url = `v1/products/${action.productData}`;
  try {
    const res = yield call(CommonFetch, action.productData, opts);
    if (res !== undefined) {
      yield put(CommonActions.stopSpinner());
      yield put(ProductActions.getProductDetailsSuccess(res));
    } else {
      yield put(CommonActions.stopSpinner());
      yield put(ProductActions.getProductDetailsFailure(undefined));
    }
  } catch (error) {
    yield put(CommonActions.stopSpinner());
    yield put(ProductActions.getProductDetailsFailure(error));
  }
}

export function* getProductFeedbacks(action) {
  yield put(CommonActions.startSpinner());
  opts.method = CONST.GET_API;
  opts.url = `v1/products/${action.productData}/feedback`;
  try {
    const res = yield call(CommonFetch, action.productData, opts);
    if (res !== undefined) {
      yield put(CommonActions.stopSpinner());
      yield put(ProductActions.getProductFeedbacksSuccess(res));
    } else {
      yield put(CommonActions.stopSpinner());
      yield put(ProductActions.getProductFeedbacksFailure(undefined));
    }
  } catch (error) {
    yield put(CommonActions.stopSpinner());
    yield put(ProductActions.getProductFeedbacksFailure(error));
  }
}

export function* submitProductFeedback(action) {
  yield put(CommonActions.startSpinner());
  opts.method = CONST.POST_API;
  opts.url = 'v1/products/_feedback';
  try {
    const res = yield call(CommonFetch, action.feedbackData, opts);
    if (res !== undefined) {
      yield put(ProductActions.submitProductFeedbackSuccess(res));
      action.productFeedbackSuccess();
      yield put(CommonActions.stopSpinner());
    } else {
      action.onSubmitFeedbackFailure();
      yield put(ProductActions.submitProductFeedbackFailure(res));
      yield put(CommonActions.stopSpinner());
    }
  } catch (error) {
    yield put(ProductActions.submitProductFeedbackFailure(error));
    yield put(CommonActions.stopSpinner());
  }
}


export function* buyProduct(action) {
  yield put(CommonActions.startSpinner());
  opts.method = CONST.POST_API;
  opts.url = 'v1/products/_buy';
  try {
    const res = yield call(CommonFetch, action.productData, opts);
    if (res !== undefined) {
      yield put(ProductActions.buyProductSuccess(res));
      action.buyProductSuccess();
      yield put(CommonActions.stopSpinner());
    } else {
      yield put(ProductActions.buyProductFailure(res));
      yield put(CommonActions.stopSpinner());
    }
  } catch (error) {
    yield put(ProductActions.buyProductFailure(error));
    yield put(CommonActions.stopSpinner());
  }
}
export function* getAllCoupons(action) {
  yield put(CommonActions.startSpinner());
  opts.method = CONST.GET_API;
  opts.url = 'v1/coupons';
  try {
    const res = yield call(CommonFetch, action.productData, opts);
    if (res !== undefined) {
      yield put(ProductActions.getAllCouponsSuccess(res));
      yield put(CommonActions.stopSpinner());
    } else {
      yield put(ProductActions.getAllCouponsFailure(res));
      yield put(CommonActions.stopSpinner());
    }
  } catch (error) {
    yield put(ProductActions.getAllCouponsFailure(error));
    yield put(CommonActions.stopSpinner());
  }
}

export function* searchProduct(action) {
  yield put(CommonActions.startSpinner());
  opts.method = CONST.GET_API;
  opts.url = `v1/products/search?text=${action.productData}`;
  try {
    const res = yield call(CommonFetch, action.productData, opts);
    if (res !== undefined) {
      yield put(ProductActions.searchProductSuccess(res));
      yield put(CommonActions.stopSpinner());
    } else {
      yield put(ProductActions.searchProductFailure(res));
      yield put(CommonActions.stopSpinner());
    }
  } catch (error) {
    yield put(ProductActions.searchProductFailure(error));
    yield put(CommonActions.stopSpinner());
  }
}
