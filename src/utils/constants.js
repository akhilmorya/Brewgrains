// Screen Constatnts
export const SCREEN_HEIGHT = 667;
export const SCREEN_WIDTH = 375;

// Color Constants
export const WHITE_COLOR = '#FFFFFF';
export const BLACK_COLOR = '#000000';
export const LIGHT_OFF_COLOR = '#f7f7f7';
export const GREY_COLOR = '#626262';
export const STATUS_BAR_BACKGROUND_COLOR = '#FFFFFF';
export const PRIMARY_COLOR = 'rgb(249, 136, 41)';
export const ACTIVE_TAB_COLOR = '#457ced';
export const TITLEBAR_BACKGROUND_COLOR = 'rgb(253,249,249)';
export const BORDER_COLOR_GREY = 'rgb(208,208,208)';
export const BORDER_COLOR_GREY_LIGHT = 'rgb(153,153,153)';
export const BORDER_SHADOW_COLOR = 'rgba(0,0,0,0.03)';
export const BLUE_COLOR_COLLAPSE = 'rgb(69,124,237)';
export const ICON_BG = 'rgb(253, 249, 249)';
export const LIGHT_GREY_BG = 'rgb(235, 235, 235)';
export const LIGHT_GREY_COLOR = '#efefef';
export const GREY_DARK = '#323232';
export const PRIMARY_DARK_COLOR = '#a24900';
export const TRANSPARENT_COLOR = 'rgba(52, 52, 52, 0.6)';
export const GREEN_COLOR = '#3bb043';
export const YELLOW_COLOR = '#ED8A19';

// Font Weight Constants
export const fontWeight = {
  Thin: '100',
  UltraLight: '200',
  Light: '300',
  Regular: '400',
  Medium: '500',
  Semibold: '600',
  Bold: '700',
  Heavy: '800',
  Black: '900'
};

// Font Family constants 'TODO custom fonts needs to install'
export const fontFamily = {
  Regular: 'Raleway-Regular',
  Medium: 'Raleway-Medium',
  SemiBold: 'Raleway-SemiBold',
  Light: 'Raleway-Light',
  Bold: 'Raleway-Bold',
  MediumItalic: 'Raleway-MediumItalic',
  RegularItalic: 'Raleway-Italic',
  Black: 'Raleway-Black',
  Josef: 'JosefinSans-Regular',
  JosefBold: 'JosefinSans-Bold',
  JosefSemiBold: 'JosefinSans-SemiBold'
};

// CONFIGURATIONS
export const API_TIMEOUT = 30000;

// API CALLING CONSTANTS
export const GET_API = 'GET';
export const POST_API = 'POST';
export const PUT_API = 'PUT';
export const DELETE_API = 'DELETE';
export const UPDATE_API = 'PUT';

// Saga Constants
export const START_UP = 'START_UP';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';

export const USER_SIGNUP = 'USER_SIGNUP';
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS';
export const USER_SIGNUP_FAILURE = 'USER_SIGNUP_FAILURE';

export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS';
export const USER_LOGOUT_FAILURE = 'USER_LOGOUT_FAILURE';

export const USER_LOGGED_OUT_SUCCESSFULLY = 'USER_LOGGED_OUT_SUCCESSFULLY';
export const ERROR_IN_LOGOUT = 'ERROR_IN_LOGOUT';
export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

export const UPDATE_USER_PROFILE = 'UPDATE_USER_PROFILE';
export const UPDATE_USER_PROFILE_SUCCESS = 'UPDATE_USER_PROFILE_SUCCESS';
export const UPDATE_USER_PROFILE_FAILURE = 'UPDATE_USER_PROFILE_FAILURE';

export const GET_ABOUT_US_PAGE = 'GET_ABOUT_US_PAGE';
export const GET_ABOUT_US_PAGE_SUCCESS = 'GET_ABOUT_US_PAGE_SUCCESS';
export const GET_ABOUT_US_PAGE_FAILURE = 'GET_ABOUT_US_PAGE_FAILURE';

export const FORGOT_PASSWORD = 'FORGOT_PASSWORD';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_FAILURE = 'FORGOT_PASSWORD_FAILURE';

export const USER_IMAGE = 'USER_IMAGE';
export const USER_IMAGE_SUCCESS = 'USER_IMAGE_SUCCESS';
export const USER_IMAGE_FAILURE = 'USER_IMAGE_FAILURE';

export const UPLOAD_IMAGE = 'UPLOAD_IMAGE';
export const UPLOAD_IMAGE_SUCCESS = 'UPLOAD_IMAGE_SUCCESS';
export const UPLOAD_IMAGE_FAILURE = 'UPLOAD_IMAGE_FAILURE';

export const UPDATE_USER = 'UPDATE_USER';

/**
 * @Brands Constants
 */
export const GET_ALL_BRANDS = 'GET_ALL_BRANDS';
export const GET_ALL_BRANDS_SUCCESS = 'GET_ALL_BRANDS_SUCCESS';
export const GET_ALL_BRANDS_FAILURE = 'GET_ALL_BRANDS_FAILURE';
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';
export const GET_ALL_CATEGORIES_SUCCESS = 'GET_ALL_CATEGORIES_SUCCESS';
export const GET_ALL_CATEGORIES_FAILURE = 'GET_ALL_CATEGORIES_FAILURE';
export const GET_ALL_FILTERS = 'GET_ALL_FILTERS';
export const SET_ALL_FILTERS = 'SET_ALL_FILTERS';
export const SAVE_FILTERS = 'SAVE_FILTERS';

/**
 * @Orders Constants
 */
export const GET_ALL_ORDERS = 'GET_ALL_ORDERS';
export const GET_ALL_ORDERS_SUCCESS = 'GET_ALL_ORDERS_SUCCESS';
export const GET_ALL_ORDERS_FAILURE = 'GET_ALL_ORDERS_FAILURE';
export const CANCEL_ORDER = 'CANCEL_ORDER';

/**
 * @Products Constants
 */
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const GET_ALL_PRODUCTS_SUCCESS = 'GET_ALL_PRODUCTS_SUCCESS';
export const GET_ALL_PRODUCTS_FAILURE = 'GET_ALL_PRODUCTS_FAILURE';
export const SUBMIT_PRODUCT_FEEDBACK = 'SUBMIT_PRODUCT_FEEDBACK';
export const SUBMIT_PRODUCT_FEEDBACK_SUCCESS = 'SUBMIT_PRODUCT_FEEDBACK_SUCCESS';
export const SUBMIT_PRODUCT_FEEDBACK_FAILURE = 'SUBMIT_PRODUCT_FEEDBACK_FAILURE';
export const BUY_PRODUCTS = 'BUY_PRODUCTS';
export const BUY_PRODUCTS_SUCCESS = 'BUY_PRODUCTS_SUCCESS';
export const BUY_PRODUCTS_FAILURE = 'BUY_PRODUCTS_FAILURE';
export const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS';
export const SEARCH_PRODUCTS_SUCCESS = 'SEARCH_PRODUCTS_SUCCESS';
export const SEARCH_PRODUCTS_FAILURE = 'SEARCH_PRODUCTS_FAILURE';
export const RESET_ALL_PRODUCTS = 'RESET_ALL_PRODUCTS';

// Product
export const GET_PRODUCT_DETAILS = 'GET_PRODUCT_DETAILS';
export const GET_PRODUCT_DETAILS_SUCCESS = 'GET_PRODUCT_DETAILS_SUCCESS';
export const GET_PRODUCT_DETAILS_FAILURE = 'GET_PRODUCT_DETAILS_FAILURE';

export const GET_PRODUCT_FEEDBACKS = 'GET_PRODUCT_FEEDBACKS';
export const GET_PRODUCT_FEEDBACKS_SUCCESS = 'GET_PRODUCT_FEEDBACKS_SUCCESS';
export const GET_PRODUCT_FEEDBACKS_FAILURE = 'GET_PRODUCT_FEEDBACKS_FAILURE';

// Favourite
export const GET_ALL_FAVOURITE_PRODUCTS = 'GET_ALL_FAVOURITE_PRODUCTS';
export const GET_ALL_FAVOURITE_PRODUCTS_SUCCESS = 'GET_ALL_FAVOURITE_PRODUCTS_SUCCESS';
export const GET_ALL_FAVOURITE_PRODUCTS_FAILURE = 'GET_ALL_FAVOURITE_PRODUCTS_FAILURE';

// Mark As Favourite
export const MARK_FAVOURITE_PRODUCTS = 'MARK_FAVOURITE_PRODUCTS';
export const MARK_FAVOURITE_PRODUCTS_SUCCESS = 'MARK_FAVOURITE_PRODUCTS_SUCCESS';
export const MARK_FAVOURITE_PRODUCTS_FAILURE = 'MARK_FAVOURITE_PRODUCTS_FAILURE';

// UnMark As Favourite
export const UNMARK_FAVOURITE_PRODUCTS = 'UNMARK_FAVOURITE_PRODUCTS';
export const UNMARK_FAVOURITE_PRODUCTS_SUCCESS = 'UNMARK_FAVOURITE_PRODUCTS_SUCCESS';
export const UNMARK_FAVOURITE_PRODUCTS_FAILURE = 'UNMARK_FAVOURITE_PRODUCTS_FAILURE';

// Change Favourite status
export const CHANGED_FAVOURITE_STATUS = 'CHANGED_FAVOURITE_STATUS';

/**
 * @Carts Constants
 */
export const ADD_CART = 'ADD_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART = 'UPDATE_CART';
export const EMPTY_CART = 'EMPTY_CART';
export const APPLY_COUPON = 'APPLY_COUPON';
export const GET_ALL_COUPONS = 'GET_ALL_COUPONS';
export const GET_ALL_COUPONS_SUCCESS = 'GET_ALL_COUPONS_SUCCESS';
export const GET_ALL_COUPONS_FAILURE = 'GET_ALL_COUPONS_FAILURE';

// Messages
export const MSG_TITLE = 'Any Message Title';

// image constants 'TODO specify correct assets path'
// export const HOME_INACTIVE = require('@assets/');
// export const HOME_ACTIVE = require('@assets/');

// Screen uri constants
export const BONUS_URI = 'https://www.xyz.com/app/bonus/';
export const FAQS_URI = 'https://www.xyz.com/app/faq/';

// Style Constants
export const POSITION_ABSOLUTE = 'absolute';
export const POSITION_RELATIVE = 'relative';
export const CENTER = 'center';
export const UNDEFINED = 'undefined';
export const SPACE_BETWEEN = 'space-between';
export const FLEX_START = 'flex-start';
export const FLEX_END = 'flex-end';
export const ROW = 'row';
export const COLUMN = 'column';
export const WINDOW = 'window';
export const PLATFORM_ANDROID = 'android';
export const PLATFORM_IOS = 'ios';
export const POSITION_RIGHT = 'right';
export const POSITION_LEFT = 'left';
export const SPACE_AROUND = 'space-around';
export const STRETCH = 'stretch';
export const CONTAIN = 'contain';
export const BOLD = 'bold';
export const JUSTIFY = 'justify';

// Image Constants

export const APP_BACKGROUND = require('../../assets/images/bg.png');
export const APP_LOGO = require('../../assets/images/logo.png');
export const FB_ICON = require('../../assets/images/fb.png');
export const GOOGLE_PLUS_ICON = require('../../assets/images/googlePlus.png');
export const INSTA_ICON = require('../../assets/images/insta.png');
export const NOTIFICATION_ICON = require('../../assets/home/notifications.png');
export const CART_ICON = require('../../assets/home/cart.png');
export const SEARCH_ICON = require('../../assets/home/search.png');
export const FILTER_ICON = require('../../assets/home/filter.png');
export const BOTTLE_IMAGE = require('../../assets/home/img.png');
export const TRIPLE_DOT = require('../../assets/home/dots.png');
export const HOME_TAB_ICON = require('../../assets/home/home.png');
export const ORDERS_TAB_ICON = require('../../assets/home/orders.png');
export const FAVORITES_TAB_ICON = require('../../assets/home/favorites.png');
export const SETTINGS_TAB_ICON = require('../../assets/home/settings.png');
export const LOAD_MORE_ICON = require('../../assets/home/loadMore.png');
export const SIGNUP_BACKGROUND = require('../../assets/signup/bg.png');
export const PROFILE_BACK = require('../../assets/signup/profileCircle.png');
export const PLUS_ICON = require('../../assets/signup/plusIcon.png');
export const SMALL_CROSS = require('../../assets/home/smallCross.png');
export const NAME_SORT = require('../../assets/filter/nameSort.png');
export const HIGHLY_RATED = require('../../assets/filter/highlyRated.png');
export const BUY = require('../../assets/home/buy.png');
export const ADD_TO_CART = require('../../assets/home/addCart.png');
export const LOGOUT_ICON = require('../../assets/images/logout.png');
export const TOGGLE_ON = require('../../assets/settings/onToggle.png');
export const TOGGLE_OFF = require('../../assets/settings/offToggle.png');
export const CART_FILL = require('../../assets/home/cartFill.png');
export const ITEM_DELETE = require('../../assets/home/delete.png');
export const COUPON = require('../../assets/home/applyCoupon.png');
export const EMPTY_CART_ICON = require('../../assets/home/emptyCartIcon.png');
export const CHEERS_ICON = require('../../assets/home/cheersIcon.png');
export const ACTIVE_RADIO_ICON = require('../../assets/home/activeIcon.png');
export const INACTIVE_RADIO_ICON = require('../../assets/home/inactiveIcon.png');
