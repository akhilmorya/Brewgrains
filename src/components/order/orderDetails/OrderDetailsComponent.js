import React, { Component } from 'react';
import {
  View, Text, FlatList, TouchableOpacity, Dimensions, ScrollView
} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import NavigationService from '../../../services/navigationService';
import ProductDetails from '../../customComponents/ProductDetails';
import * as CONST from '../../../utils/constants';
import * as brandActions from '../../../actions/brandActions';
import * as Utils from '../../../utils/commonMethods';

import styles from './OrderDetailsComponentStyle';


class OrderDetailsComponent extends Component {
  constructor(props) {
    super(props);
    this.orderData = this.props.navigation.state.params.item;
    this.state = {
    };
  }

  componentDidMount() {
  }

  onPressCrossIcon() {
    this.props.navigation.goBack();
  }

  onPressArrow(item) {
    NavigationService.navigate('ReviewProductScreen', {
      productData: item,
      orderDetails: this.orderData.orderDetails
    });
  }

  onPressTripleDot() {
    
  }

  renderOrderHeader() {
    return (
      <View style={styles.brandsHeader}>
        <Text style={styles.brandsText}>Order Details</Text>
        <TouchableOpacity onPress={() => this.onPressCrossIcon()} style={styles.crossIcon}>
          <Icons name="ios-close" size={40} color={CONST.BORDER_COLOR_GREY_LIGHT} />
        </TouchableOpacity>
      </View>
    );
  }

  renderRateReview(item) {
    return (
      <View style={styles.rateReview}>
        <Text style={styles.rateText}>Rate & Review</Text>
        <TouchableOpacity onPress={() => this.onPressArrow(item)} style={styles.crossIcon}>
          <Icons name="ios-arrow-forward" size={25} color={CONST.BORDER_COLOR_GREY_LIGHT} />
        </TouchableOpacity>
      </View>
    );
  }

  renderOrderPlacedData() {
    var _date = Utils.getDateInFormat(this.orderData.orderDetails.createdAt);
    return (
      <View style={styles.orderPlaced}>
        <View style={styles.leftDetail}>
          <Text style={styles.orderText}>Order No.</Text>
          <Text style={styles.orderNo}>{this.orderData.orderDetails.id}</Text>
        </View>
        <View style={styles.rightDetail}>
          <Text style={styles.orderText}>Order Placed</Text>
          <Text style={styles.orderNo}>{_date}</Text>
        </View>
      </View>
    );
  }

  renderAddressContainer() {
    return (
      <View style={styles.address}>
        <Text style={styles.orderText}>Address</Text>
        <Text style={styles.addressDetail}>{this.orderData.orderDetails.delivery_adderess}</Text>
      </View>
    );
  }

  renderPriceDetails() {
    return (
      <View style={styles.priceDetail}>
        <Text style={styles.orderText}>Price Details (1 Item)</Text>
        <View style={styles.priceDetailContainer}>
          <View style={styles.row}>
            <Text style={styles.orderText}>Bag Total</Text>
            <Text style={styles.orderText}>$26.30</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.orderText}>Coupon Discount</Text>
            <Text style={styles.orderText}>$5</Text>
          </View>
          <View style={styles.dottedLine} />
          <View style={styles.row}>
            <Text style={styles.orderTotalText}>Order Total</Text>
            <Text style={styles.orderTotalText}>${this.orderData.orderDetails.total_price}</Text>
          </View>
        </View>
      </View>
    );
  }

  renderOrderCell = (item, index) => {
    return (
      <View>
        {this.renderRateReview(item)}
        <ProductDetails
        
          item
          index
          name={item.name}
          description={item.description}
          price={item.price}
          image_url={item.image_url}
          quantity={1}
          delivery_date={this.orderData.orderDetails.delivery_date}
          isOrder
          hideTripleDot
          onPressTripleDot={() => this.onPressTripleDot()}
          onCellPressed={() => {}}
        />
      </View>
    );
  };

  renderOrderedList = () => {
    return (
      <View style={styles.listContainer}>
        <Text style={styles.orderText}>Items in this order</Text>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={this.orderData.productsInOrder}
          renderItem={({ item, index }) => this.renderOrderCell(item, index)}
          extraData={this.state}
        />
      </View>
    );
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.renderOrderHeader()}
        {this.renderOrderPlacedData()}
        {this.renderAddressContainer()}
        {this.renderPriceDetails()}
        {/* {this.renderRateReview()} */}
        {this.renderOrderedList()}
      </ScrollView>

    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.BrandReducer.filters,
  allBrands: state.BrandReducer.allBrands,
  allCategories: state.BrandReducer.allCategories,
});

const mapDispatchToProps = (dispatch) => ({
  setAllFilters: () => {
    return dispatch(brandActions.setAllFilters());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderDetailsComponent);
