import React, { Component } from 'react';
import {
  View, Text, FlatList
} from 'react-native';
import styles from './FavoritesStyles';
import ProductDetails from '../customComponents/ProductDetails';

export default class FavoritesTabComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteItemsList: []
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.allFavouriteProducts && nextProps.allFavouriteProducts.favorite) {
      this.setState({ favoriteItemsList: nextProps.allFavouriteProducts.favorite });
    }
  }

  renderHeader() {
    return (
      <View style={styles.headerTitle}>
        <Text style={styles.headerTitleText}>Beers I marked as favorite</Text>
      </View>
    );
  }

  renderFavoriteItemCell(item, index) {
    const productDetails = item.product_details;
    return (
      <ProductDetails
        item
        index
        description={productDetails.description}
        image_url={productDetails.image_url}
        rating={productDetails.rating}
        price={productDetails.price}
        name={productDetails.product.name}
        onPressTripleDot={() => {}}
        onCellPressed={() => {}}
      />
    );
  }

  renderFavoriteItems() {
    return (
      <View style={styles.listContainer}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={this.state.favoriteItemsList}
          renderItem={({ item, index }) => this.renderFavoriteItemCell(item, index)}
          extraData={this.state}
        />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        {this.renderFavoriteItems()}
      </View>
    );
  }
}
