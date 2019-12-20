import * as CONST from '../utils/constants';

// @User Actions
export function userLogin(user) {
  return {
    type: CONST.USER_LOGIN,
    user
  };
}
export function userLoginSuccess(response) {
  return {
    type: CONST.USER_LOGIN_SUCCESS,
    payload: {
      user: response.user
    }
  };
}
export function userLoginFailure(error) {
  return {
    type: CONST.USER_LOGIN_FAILURE,
  };
}

export function userLogout() {
  return {
    type: CONST.USER_LOGOUT,
  };
}

export function userLogoutSuccess() {
  return {
    type: CONST.USER_LOGOUT_SUCCESS,
  };
}

export function userLogoutFailure() {
  return {
    type: CONST.USER_LOGOUT_FAILURE,
  };
}

/**
 * Signup
 */

export function userSignup(user) {
  return {
    type: CONST.USER_SIGNUP,
    user
  };
}
export function userSignupSuccess(user) {
  return {
    type: CONST.USER_SIGNUP_SUCCESS,
    payload: {
      user: user.user
    }
  };
}
export function userSignupFailure(error) {
  return {
    type: CONST.USER_SIGNUP_FAILURE,
  };
}


/**
 * User Profile
 */

export function updateUserProfile(params, callBack) {
  return {
    type: CONST.UPDATE_USER_PROFILE,
    params,
    updateUserProfileSuccess: callBack
  };
}
export function updateUserProfileSuccess(response) {
  return {
    type: CONST.UPDATE_USER_PROFILE_SUCCESS,
    payload: {
      user: response.updateUser
    }
  };
}
export function updateUserProfileFailure() {
  return {
    type: CONST.UPDATE_USER_PROFILE_FAILURE,
  };
}

// Update User

export function updateUser(_user) {
  return {
    type: CONST.UPDATE_USER,
    _user,
  };
}

export function getAboutUsPage(params, callBack) {
  return {
    type: CONST.GET_ABOUT_US_PAGE,
    params,
    successCallBack: callBack
  };
}
export function getAboutUsPageSuccess(response) {
  return {
    type: CONST.GET_ABOUT_US_PAGE_SUCCESS,
    payload: response
  };
}
export function getAboutUsPageFailure() {
  return {
    type: CONST.GET_ABOUT_US_PAGE_FAILURE,
  };
}

export function forgotPassword(params, callBack) {
  return {
    type: CONST.FORGOT_PASSWORD,
    params,
    successCallBack: callBack
  };
}
export function forgotPasswordSuccess(response) {
  return {
    type: CONST.FORGOT_PASSWORD_SUCCESS,
    payload: response
  };
}
export function forgotPasswordFailure() {
  return {
    type: CONST.FORGOT_PASSWORD_FAILURE,
  };
}

export function userImage(user) {
  return {
    type: CONST.USER_IMAGE,
    user
  };
}
export function userImageSuccess(response) {
  return {
    type: CONST.USER_IMAGE_SUCCESS,
    payload: {
      signedUrl: response.signedUrl
    }
  };
}
export function userImageFailure(error) {
  return {
    type: CONST.USER_IMAGE_FAILURE,
  };
}

export function uploadImage(user) {
  return {
    type: CONST.UPLOAD_IMAGE,
    user
  };
}
export function uploadImageSuccess(response) {
  return {
    type: CONST.UPLOAD_IMAGE_SUCCESS,
    payload: {
      signedUrl: response.signedUrl
    }
  };
}
export function uploadImageFailure(error) {
  return {
    type: CONST.UPLOAD_IMAGE_FAILURE,
  };
}
