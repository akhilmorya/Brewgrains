import React, { Component } from 'react';
import { connect } from 'react-redux';
import FavoritesTabComponent from './FavoritesTabComponent';
import * as productActions from '../../actions/productActions';
import * as userActions from '../../actions/userActions';

class FavoritesTabContainer extends Component {
  static navigationOptions = {
    title: 'Favorites',
  };

  componentDidMount() {
    this.props.navigation.addListener('willFocus', () => {
      this.props.getAllFavouriteProducts();
    });
  }

  render() {
    return (
      <FavoritesTabComponent {...this.props}/>
    );
  }
}

const mapStateToProps = (state) => ({
  message: state.UserLoginReducer.message,
  userData: state.UserLoginReducer.user,
  allFavouriteProducts: state.ProductsReducer.allFavouriteProducts
});

const mapDispatchToProps = (dispatch) => ({
  userLogout: () => {
    return dispatch(userActions.userLogout());
  },
  getAllFavouriteProducts: () => {
    return dispatch(productActions.getAllFavouriteProducts());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoritesTabContainer);
