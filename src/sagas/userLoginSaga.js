import { put, call } from "redux-saga/effects";
import * as userActions from "../actions/userActions";
import { signOut } from "../services/googleAuth";
import { CommonFetch } from '../services/apiService';
import * as CONST from '../utils/constants';

const opts = {
  method: '',
  url: null,
  body: null
  };

export function* userLogin(action) {
  opts.method = CONST.POST_API;
  opts.url = 'v1/auth';
  try {
    const res = yield call(CommonFetch, action.user, opts);
    if (res !== undefined) {
      yield put(userActions.userLoginSuccess(res));
    } else {
      yield put(userActions.userLoginFailure(res));
    }
  } catch (error) {
    yield put(userActions.userLoginFailure(error));
  }
}

export function* userSignup(action) {
  opts.method = CONST.POST_API;
  opts.url = 'v1/users';
  try {
    const res = yield call(CommonFetch, action.user, opts);
    if (res !== undefined) {
      yield put(userActions.userSignupSuccess(res));
    } else {
      yield put(userActions.userSignupFailure(res));
    }
  } catch (error) {
    yield put(userActions.userSignupFailure(error));
  }
}

export function* userLogout() {
  try {
    yield call(signOut);
    yield put(userActions.userLogoutSuccess());
  } catch (error) {
    yield put(userActions.userLogoutFailure(error));
  }
}

export function* updateUserProfile(action) {
  opts.method = CONST.PUT_API;
  opts.url = `v1/users/${action.params.user.id}`;
  try {
    const res = yield call(CommonFetch, action.params, opts);
    if (res !== undefined) {
      yield put(userActions.updateUserProfileSuccess(res));
      action.updateUserProfileSuccess();
    } else {
      yield put(userActions.updateUserProfileFailure());
    }
  } catch (error) {
    yield put(userActions.updateUserProfileFailure());
  }
}

export function* getAboutUs(action) {
  opts.method = CONST.GET_API;
  opts.url = 'v1/about-us';
  try {
    const res = yield call(CommonFetch, action.params, opts);
    if (res !== undefined) {
      yield put(userActions.getAboutUsPageSuccess(res));
      action.successCallBack(res);
    } else {
      yield put(userActions.getAboutUsPageFailure());
    }
  } catch (error) {
    yield put(userActions.getAboutUsPageFailure());
  }
}

export function* getImageUrl(action) {
  opts.method = CONST.GET_API;
  opts.url = `v1/users/${action.user.id}/imageUpload/${action.user.imageName}`;
  try {
    const res = yield call(CommonFetch, action.params, opts);
    if (res !== undefined) {
      yield put(userActions.userImageSuccess(res.data));
    } else {
      yield put(userActions.userImageFailure());
    }
  } catch (error) {
    yield put(userActions.userImageFailure());
  }
}

export function* uploadImage(action) {
  opts.method = CONST.PUT_API;
  opts.url = action.user.url;
  try {
    const res = yield call(CommonFetch, action.user.body, opts);
    if (res !== undefined) {
      yield put(userActions.uploadImageSuccess(res));
    } else {
      yield put(userActions.uploadImageFailure());
    }
  } catch (error) {
    yield put(userActions.uploadImageFailure());
  }
}
