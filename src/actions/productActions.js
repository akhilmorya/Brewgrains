
import * as CONST from '../utils/constants';


// @Product Actions
export function getAllProducts(page, data, callBack) {
  return {
    type: CONST.GET_ALL_PRODUCTS,
    filterData: data,
    getAllProductsSuccess: callBack,
    page
  };
}
export function getAllProductsSuccess(res) {
  return {
    type: CONST.GET_ALL_PRODUCTS_SUCCESS,
    payload: res
  };
}
export function getAllProductsFailure(error) {
  return {
    type: CONST.GET_ALL_PRODUCTS_FAILURE,
  };
}
export function resetAllProducts() {
  return {
    type: CONST.RESET_ALL_PRODUCTS,
  };
}

export function submitProductFeedback(data, callBack, onSubmitFeedbackFailure) {
  return {
    type: CONST.SUBMIT_PRODUCT_FEEDBACK,
    feedbackData: data,
    productFeedbackSuccess: callBack,
    onSubmitFeedbackFailure
  };
}
export function submitProductFeedbackSuccess(res) {
  return {
    type: CONST.SUBMIT_PRODUCT_FEEDBACK_SUCCESS,
    payload: res
  };
}
export function submitProductFeedbackFailure(error) {
  return {
    type: CONST.SUBMIT_PRODUCT_FEEDBACK_FAILURE,
  };
}

export function getProductDetails(data) {
  return {
    type: CONST.GET_PRODUCT_DETAILS,
    productData: data,
  };
}
export function getProductDetailsSuccess(res) {
  return {
    type: CONST.GET_PRODUCT_DETAILS_SUCCESS,
    payload: res
  };
}
export function getProductDetailsFailure(error) {
  return {
    type: CONST.GET_PRODUCT_DETAILS_FAILURE,
  };
}

// Get Feedbacks
export function getProductFeedbacks(data) {
  return {
    type: CONST.GET_PRODUCT_FEEDBACKS,
    productData: data,
  };
}
export function getProductFeedbacksSuccess(res) {
  return {
    type: CONST.GET_PRODUCT_FEEDBACKS_SUCCESS,
    payload: res
  };
}
export function getProductFeedbacksFailure(error) {
  return {
    type: CONST.GET_PRODUCT_FEEDBACKS_FAILURE,
  };
}

// Favourite
export function getAllFavouriteProducts() {
  return {
    type: CONST.GET_ALL_FAVOURITE_PRODUCTS
  };
}
export function getAllFavouriteProductsSuccess(res) {
  return {
    type: CONST.GET_ALL_FAVOURITE_PRODUCTS_SUCCESS,
    payload: res
  };
}
export function getAllFavouriteProductsFailure(error) {
  return {
    type: CONST.GET_ALL_FAVOURITE_PRODUCTS_FAILURE,
  };
}

// Mark As Favourite
export function markProductAsFavourite(products, callBack) {
  return {
    type: CONST.MARK_FAVOURITE_PRODUCTS,
    payload: products,
    callBack
  };
}
export function markProductAsFavouriteSuccess(res) {
  return {
    type: CONST.MARK_FAVOURITE_PRODUCTS_SUCCESS,
    payload: res
  };
}
export function markProductAsFavouriteFailure(error) {
  return {
    type: CONST.MARK_FAVOURITE_PRODUCTS_FAILURE,
  };
}

// CONST.UnMark As Favourite
export function markProductAsUnFavourite(productID, callBack) {
  return {
    type: CONST.UNMARK_FAVOURITE_PRODUCTS,
    productID,
    callBack
  };
}
export function markProductAsUnFavouriteSuccess(res) {
  return {
    type: CONST.UNMARK_FAVOURITE_PRODUCTS_SUCCESS,
    payload: res
  };
}
export function markProductAsUnFavouriteFailure(error) {
  return {
    type: CONST.UNMARK_FAVOURITE_PRODUCTS_FAILURE,
  };
}

// Change Favorite Status
export function changeFavouriteStatus(data) {
  return {
    type: CONST.CHANGED_FAVOURITE_STATUS,
    data
  };
}

// Buy Products
export function buyProduct(data, callBack) {
  return {
    type: CONST.BUY_PRODUCTS,
    productData: data,
    buyProductSuccess: callBack
  };
}
export function buyProductSuccess(res) {
  return {
    type: CONST.BUY_PRODUCTS_SUCCESS,
    payload: res
  };
}
export function buyProductFailure(error) {
  return {
    type: CONST.BUY_PRODUCTS_FAILURE,
  };
}
export function getAllCoupons() {
  return {
    type: CONST.GET_ALL_COUPONS,
  };
}

export function getAllCouponsSuccess(res) {
  return {
    type: CONST.GET_ALL_COUPONS_SUCCESS,
    payload: res
  };
}

export function getAllCouponsFailure(error) {
  return {
    type: CONST.GET_ALL_COUPONS_FAILURE,
  };
}

// Search Products
export function searchProduct(data) {
  return {
    type: CONST.SEARCH_PRODUCTS,
    productData: data,
  };
}

export function searchProductSuccess(res) {
  return {
    type: CONST.SEARCH_PRODUCTS_SUCCESS,
    payload: res
  };
}

export function searchProductFailure(error) {
  return {
    type: CONST.SEARCH_PRODUCTS_FAILURE,
  };
}