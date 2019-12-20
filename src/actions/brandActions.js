import * as CONST from '../utils/constants';

// @Brand Actions
export function getAllBrands() {
  return {
    type: CONST.GET_ALL_BRANDS
  };
}
export function getAllBrandsSuccess(res) {
  return {
    type: CONST.GET_ALL_BRANDS_SUCCESS,
    payload: res
  };
}
export function getAllBrandsFailure(error) {
  return {
    type: CONST.GET_ALL_BRANDS_FAILURE,
  };
}

export function getAllFilters(error) {
  return {
    type: CONST.GET_ALL_FILTERS,
  };
}

export function setAllFilters(filterObject) {
  return {
    type: CONST.GET_ALL_FILTERS,
    payload: filterObject
  };
}

export function getAllCategories() {
  return {
    type: CONST.GET_ALL_CATEGORIES
  };
}
export function getAllCategoriesSuccess(res) {
  return {
    type: CONST.GET_ALL_CATEGORIES_SUCCESS,
    payload: res
  };
}
export function getAllCategoriesFailure(error) {
  return {
    type: CONST.GET_ALL_CATEGORIES_FAILURE,
  };
}
export function saveFilters(data) {
  return {
    type: CONST.SAVE_FILTERS,
    payload: data
  };
}