import * as CONST from '../utils/constants';

const initialState = {
  filters: {
    brands: [],
    categories: [],
    priceRange: [10, 500],
    isNameFilterClicked: false,
    isRatedFilterClicked: false,
    allCategories: [],
    allBrands: [],
  },
  filterObject: null
};

export type State = {
  filters: {
    brands:[],
    categories: [],
    priceRange: [],
    allCategories: [],
    allBrands: [],
    isNameFilterClicked: false,
    isRatedFilterClicked: false,
  },
  filterObject: any
}


// This reducer stores the status of email verification.
export default function (state:State = initialState, action:Action): State {
  switch (action.type) {
    case CONST.GET_ALL_BRANDS:
      return {
        ...state,
        allBrands: null
      };
    case CONST.GET_ALL_BRANDS_SUCCESS:
      return {
        ...state,
        allBrands: action.payload.brands,
      };
    case CONST.GET_ALL_BRANDS_FAILURE:
      return {
        ...state,
      };
    case CONST.SET_ALL_FILTERS:
      return {
        ...state,
        filters: action.payload
      };
    case CONST.GET_ALL_CATEGORIES:
      return {
        ...state,
        allCategories: null
      };
    case CONST.GET_ALL_CATEGORIES_SUCCESS:
      return {
        ...state,
        allCategories: action.payload.categorys,
      };
    case CONST.GET_ALL_CATEGORIES_FAILURE:
      return {
        ...state,
      };
    case CONST.SAVE_FILTERS:
      return {
        ...state,
        filterObject: action.payload
      };
    default:
      return { ...state };
  }
}
