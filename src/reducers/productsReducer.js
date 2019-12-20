import * as CONST from '../utils/constants';

const initialState = {
  allProducts: null,
  productDetails: null,
  productFeedbacks: null,
  productFilters: null,
  allBrands: null,
  productCategories: null,
  allFavouriteProducts: null
};

// This reducer stores the status of email verification.
export default function (state = initialState, action) {
  switch (action.type) {
    case CONST.GET_ALL_PRODUCTS:
      return {
        ...state,
      };
    case CONST.GET_ALL_PRODUCTS_SUCCESS:
      // eslint-disable-next-line no-case-declarations
      const currentProducts = state.allProducts;
      let newArray = [];
      if (currentProducts) {
        newArray = currentProducts.concat(action.payload.products);
      } else {
        newArray = action.payload.products;
      }
      return {
        ...state,
        allProducts: newArray,
      };
    case CONST.GET_ALL_PRODUCTS_FAILURE:
      return {
        ...state,
      };
    case CONST.RESET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: null
      };
    case CONST.GET_PRODUCT_DETAILS:
      return {
        ...state,
        productDetails: null
      };
    case CONST.GET_PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        productDetails: action.payload
      };
    case CONST.GET_PRODUCT_DETAILS_FAILURE:
      return {
        ...state,
      };
    case CONST.SET_ALL_PRODUCTS_FILTERS:
      return {
        ...state,
        productFilters: action.filters
      };
    case CONST.GET_ALL_PRODUCTS_FILTERS:
      return {
        ...state,
        productFilters: null
      };
    case CONST.GET_ALL_PRODUCTS_FILTERS_SUCCESS:
      return {
        ...state,
        productFilters: action.payload
      };
    case CONST.GET_ALL_PRODUCTS_FILTERS_FAILURE:
      return {
        ...state,
      };

    case CONST.GET_ALL_BRANDS:
      return {
        ...state,
        allBrands: null
      };
    case CONST.GET_ALL_BRANDS_SUCCESS:
      return {
        ...state,
        allBrands: action.payload
      };
    case CONST.GET_ALL_BRANDS_FAILED:
      return {
        ...state,
      };
    case CONST.GET_ALL_PRODUCT_CATEGORIES:
      return {
        ...state,
        productCategories: null
      };
    case CONST.GET_ALL_PRODUCT_CATEGORIES_SUCCESS:
      return {
        ...state,
        productCategories: action.payload
      };
    case CONST.GET_ALL_PRODUCT_CATEGORIES_FAILED:
      return {
        ...state,
      };
    case CONST.GET_ALL_FAVOURITE_PRODUCTS:
      return {
        ...state,
        allFavouriteProducts: null
      };
    case CONST.GET_ALL_FAVOURITE_PRODUCTS_SUCCESS:
      return {
        ...state,
        allFavouriteProducts: action.payload
      };
    case CONST.GET_ALL_FAVOURITE_PRODUCTS_FAILURE:
      return {
        ...state,
      };
    case CONST.SEARCH_PRODUCTS:
      return {
        ...state,
        allProducts: null
      };
    case CONST.SEARCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        allProducts: action.payload.products
      };
    case CONST.GET_PRODUCT_FEEDBACKS:
      return {
        ...state,
        productFeedbacks: null
      };
    case CONST.GET_PRODUCT_FEEDBACKS_SUCCESS:
      return {
        ...state,
        productFeedbacks: action.payload
      };
    case CONST.GET_PRODUCT_FEEDBACKS_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
}
