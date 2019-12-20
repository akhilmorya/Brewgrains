import * as CONST from '../utils/constants';


const initialState = {
  user: null,
  message: '',
  aboutUsPageURL: null,
  signedUrl: null
};

export type State = {
  user: any,
  message: any,
  aboutUsPageURL: any
}


// This reducer stores the status of email verification.
export default function (state:State = initialState, action:Action): State {
  switch (action.type) {
    case CONST.USER_LOGIN:
      return {
        ...state,
        user: null,
        message: null,
      };
    case CONST.USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        message: 'successfully logged in',
      };
    case CONST.USER_LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        message: 'error in login process',
      };

    case CONST.USER_SIGNUP:
      return {
        ...state,
        user: null,
        message: null,
      };
    case CONST.USER_SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        message: 'successfully signed up',
      };
    case CONST.USER_SIGNUP_FAILED:
      return {
        ...state,
        user: null,
        message: 'error in signup process',
      };

    case CONST.USER_LOGOUT:
      return {
        ...state,
        message: '',
      };
    case CONST.USER_LOGOUT_SUCCESS:
      return {
        user: null,
        message: CONST.USER_LOGGED_OUT_SUCCESSFULLY,
      };
    case CONST.USER_LOGOUT_FAILURE:
      return {
        message: CONST.ERROR_IN_LOGOUT,
      };
    case CONST.UPDATE_USER_PROFILE_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
      };
    case CONST.UPDATE_USER:
      return {
        ...state,
        user: action._user
      };
    case CONST.GET_ABOUT_US_PAGE:
      return {
        ...state,
        aboutUsPageURL: null
      };
    case CONST.GET_ABOUT_US_PAGE_SUCCESS:
      return {
        ...state,
        aboutUsPageURL: action.payload
      };
    case CONST.GET_ABOUT_US_PAGE_FAILED:
      return {
        ...state,
      };
    case CONST.FORGOT_PASSWORD:
      return {
        ...state,
      };
    case CONST.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
      };
    case CONST.FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
      };
    case CONST.USER_IMAGE:
      return {
        ...state,
      };
    case CONST.USER_IMAGE_SUCCESS:
      return {
        ...state,
        signedUrl: action.payload.signedUrl
      };
    case CONST.USER_IMAGE_FAILURE:
      return {
        ...state,
        signedUrl: null
      };
    default:
      return state;
  }
}
