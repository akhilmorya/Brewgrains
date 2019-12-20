import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductInfoComponent from './ProductInfoComponent';
import * as userActions from '../../../actions/userActions';
import * as productActions from '../../../actions/productActions';
import * as cartActions from '../../../actions/cartActions';

class ProductInfoContainer extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);
    this.productId = this.props.navigation.state.params.item.id;
    this.props.getProductDetails(this.productId);
    this.props.getProductFeedbacks(this.productId);
  }

  render() {
    return (
      <ProductInfoComponent {...this.props} />
    );
  }
}

const mapStateToProps = (state) => ({
  message: state.UserLoginReducer.message,
  userData: state.UserLoginReducer.user,
  allBrands: state.BrandReducer.allBrands,
  productDetails: state.ProductsReducer.productDetails,
  productFeedbacks: state.ProductsReducer.productFeedbacks
});

const mapDispatchToProps = (dispatch) => ({
  userLogout: () => {
    return dispatch(userActions.userLogout());
  },
  getProductDetails: (productData) => {
    return dispatch(productActions.getProductDetails(productData));
  },
  addToProducts: (products, isFromHomeProduct) => {
    return dispatch(cartActions.addToCart(products, isFromHomeProduct));
  },
  buyProduct: (data, buySuccessCallback) => {
    return dispatch(productActions.buyProduct(data, buySuccessCallback));
  },
  getProductFeedbacks: (productData) => {
    return dispatch(productActions.getProductFeedbacks(productData));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductInfoContainer);
