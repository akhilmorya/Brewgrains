import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeTabComponent from './HomeTabComponent';
import * as userActions from '../../actions/userActions';
import * as brandActions from '../../actions/brandActions';
import * as commonActions from '../../actions/commonActions';
import * as productActions from '../../actions/productActions';
import * as cartActions from '../../actions/cartActions';

class HomeTabContainer extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);
    this.props.getAllCategories();
    this.props.getAllBrands();
    this.props.getAllProducts(1);
    this.props.getAllCoupons();
  }

  render() {
    return (
      <HomeTabComponent {...this.props} />
    );
  }
}

const mapStateToProps = (state) => ({
  message: state.UserLoginReducer.message,
  userData: state.UserLoginReducer.user,
  allBrands: state.BrandReducer.allBrands,
  allProducts: state.ProductsReducer.allProducts,
  filterObject: state.BrandReducer.filterObject,
  cartItems: state.cartReducer.cart,
});

const mapDispatchToProps = (dispatch) => ({
  userLogout: () => {
    return dispatch(userActions.userLogout());
  },
  getAllBrands: () => {
    return dispatch(brandActions.getAllBrands());
  },
  getAllCategories: () => {
    return dispatch(brandActions.getAllCategories());
  },
  startSpinner: () => {
    return dispatch(commonActions.startSpinner());
  },
  getAllCoupons: () => {
    return dispatch(productActions.getAllCoupons());
  },
  stopSpinner: () => {
    return dispatch(commonActions.stopSpinner());
  },
  getAllProducts: (page, data) => {
    return dispatch(productActions.getAllProducts(page, data));
  },
  searchProduct: (data) => {
    return dispatch(productActions.searchProduct(data));
  },
  buyProduct: (data, buySuccessCallback) => {
    return dispatch(productActions.buyProduct(data, buySuccessCallback));
  },
  addToProducts: (products, isFromHomeProduct) => {
    return dispatch(cartActions.addToCart(products, isFromHomeProduct));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeTabContainer);
