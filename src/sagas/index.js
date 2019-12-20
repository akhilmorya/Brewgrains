import { takeLatest, all } from 'redux-saga/effects';
import { userLogin, userLogout, userSignup, updateUserProfile, getAboutUs, getImageUrl, uploadImage } from './userLoginSaga';
import { getAllBrands, getAllCategories } from './brandSaga';
import { getAllProducts, getAllFavouriteProducts, markProductAsFavourite, markProductAsUnFavourite, getProductDetails, submitProductFeedback, getProductFeedbacks, buyProduct, getAllCoupons, searchProduct } from './productsSaga';
import { getAllOrders, cancelOrder } from './ordersSaga';
import * as CONST from '../utils/constants';


export default function* root() {
  yield all([
    takeLatest(CONST.USER_LOGIN, userLogin),
    takeLatest(CONST.USER_LOGOUT, userLogout),
    takeLatest(CONST.USER_SIGNUP, userSignup),
    takeLatest(CONST.GET_ALL_BRANDS, getAllBrands),
    takeLatest(CONST.GET_ALL_CATEGORIES, getAllCategories),
    takeLatest(CONST.GET_ALL_PRODUCTS, getAllProducts),
    takeLatest(CONST.UPDATE_USER_PROFILE, updateUserProfile),
    takeLatest(CONST.SUBMIT_PRODUCT_FEEDBACK, submitProductFeedback),
    takeLatest(CONST.MARK_FAVOURITE_PRODUCTS, markProductAsFavourite),
    takeLatest(CONST.UNMARK_FAVOURITE_PRODUCTS, markProductAsUnFavourite),
    takeLatest(CONST.GET_ALL_FAVOURITE_PRODUCTS, getAllFavouriteProducts),
    takeLatest(CONST.GET_PRODUCT_DETAILS, getProductDetails),
    takeLatest(CONST.GET_PRODUCT_FEEDBACKS, getProductFeedbacks),
    takeLatest(CONST.GET_ALL_ORDERS, getAllOrders),
    takeLatest(CONST.BUY_PRODUCTS, buyProduct),
    takeLatest(CONST.GET_ALL_COUPONS, getAllCoupons),
    takeLatest(CONST.SEARCH_PRODUCTS, searchProduct),
    takeLatest(CONST.GET_ABOUT_US_PAGE, getAboutUs),
    takeLatest(CONST.CANCEL_ORDER, cancelOrder),
    takeLatest(CONST.USER_IMAGE, getImageUrl),
    takeLatest(CONST.UPLOAD_IMAGE, uploadImage)
  ]);
}
