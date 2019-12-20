import { put, call } from "redux-saga/effects";
import * as brandActions from "../actions/brandActions";
import { CommonFetch } from '../services/apiService';
import * as CONST from '../utils/constants';

const opts = {
  method: '',
  url: null,
  body: null
  };

export function* getAllBrands(action) {
  opts.method = CONST.GET_API;
  opts.url = 'v1/brands';
  try {
    const res = yield call(CommonFetch, action.user, opts);
    if (res !== undefined) {
      yield put(brandActions.getAllBrandsSuccess(res));
    } else {
      yield put(brandActions.getAllBrandsFailure(res));
    }
  } catch (error) {
    yield put(brandActions.getAllBrandsFailure(error));
  }
}

export function* getAllCategories(action) {
  opts.method = CONST.GET_API;
  opts.url = 'v1/categories';
  try {
    const res = yield call(CommonFetch, action.user, opts);
    if (res !== undefined) {
      yield put(brandActions.getAllCategoriesSuccess(res));
    } else {
      yield put(brandActions.getAllCategoriesFailure(res));
    }
  } catch (error) {
    yield put(brandActions.getAllCategoriesFailure(error));
  }
}
