import React, { Component } from 'react';
import { connect } from 'react-redux';
import OrderTabComponent from './OrderTabComponent';
import * as userActions from '../../actions/userActions';
import * as productActions from '../../actions/productActions';
import * as orderActions from '../../actions/orderActions';

class OrderTabContainer extends Component {
  static navigationOptions = {
    title: 'My Orders',
  };

  componentDidMount() {
    this.props.navigation.addListener('willFocus', () => {
      this.props.getAllOrders();
    });
  }

  render() {
    return (
      <OrderTabComponent {...this.props} />
    );
  }
}

const mapStateToProps = (state) => ({
  message: state.UserLoginReducer.message,
  userData: state.UserLoginReducer.user,
  userOrders: state.orderReducer.userOrders
});

const mapDispatchToProps = (dispatch) => ({
  userLogout: () => {
    return dispatch(userActions.userLogout());
  },
  markProductAsFavourite: (products, callBack) => {
    return dispatch(productActions.markProductAsFavourite(products, callBack));
  },
  markProductAsUnFavourite: (productId, callBack) => {
    return dispatch(productActions.markProductAsUnFavourite(productId, callBack));
  },
  getAllOrders: () => {
    return dispatch(orderActions.getAllOrders());
  },
  changeFavouriteStatus: (data) => {
    return dispatch(productActions.changeFavouriteStatus(data));
  },
  cancelOrder: (data) => {
    return dispatch(orderActions.cancelOrder(data));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderTabContainer);
