import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartComponent from './cartComponent';
import * as userActions from '../../../actions/userActions';
import * as brandActions from '../../../actions/brandActions';
import * as productActions from '../../../actions/productActions';
import * as cartActions from '../../../actions/cartActions';

class CartContainer extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);
    this.props.getAllBrands();
    this.props.getAllCoupons();
  }

  render() {
    return (
      <CartComponent {...this.props} />
    );
  }
}

const mapStateToProps = (state) => ({
  message: state.UserLoginReducer.message,
  userData: state.UserLoginReducer.user,
  allBrands: state.BrandReducer.allBrands,
  cartItems: state.cartReducer.cart,
  cartTotal: state.cartReducer.total,
  discountAmount: state.cartReducer.discountAmount,
  couponDiscount: state.cartReducer.couponDiscount,
  couponId: state.cartReducer.couponId,
  couponItem: state.cartReducer.couponItem,
  allCoupons: state.cartReducer.allCoupons
});

const mapDispatchToProps = (dispatch) => ({
  userLogout: () => {
    return dispatch(userActions.userLogout());
  },
  getAllBrands: () => {
    return dispatch(brandActions.getAllBrands());
  },
  removeProduct: (products) => {
    return dispatch(cartActions.removeItem(products));
  },
  updateCart: (products, quantity) => {
    return dispatch(cartActions.updateCart(products, quantity));
  },
  applyCouponDiscount: (value) => {
    return dispatch(cartActions.applyCouponDiscount(value));
  },
  getAllCoupons: () => {
    return dispatch(productActions.getAllCoupons());
  },
  buyProduct: (data, buySuccessCallback) => {
    return dispatch(productActions.buyProduct(data, buySuccessCallback));
  },
  emptyCart: () => {
    return dispatch(cartActions.emptyCart());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer);
