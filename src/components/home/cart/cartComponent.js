import React, { Component } from 'react';
import {
  View, Text, FlatList, Image, TouchableOpacity, Picker, ScrollView
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Ionicons';
import stripe from 'tipsi-stripe';
import * as CONST from '../../../utils/constants';
import CouponModal from '../../customComponents/CouponModal';
import CheersModal from '../../customComponents/CheersModal';
import styles from './styles';
import Config from '../../../config';
import scale, { verticalScale } from '../../../utils/scale';
import NavigationService from '../../../services/navigationService';

stripe.setOptions({
  publishableKey: Config.STRIPE_KEY_DEV,
  androidPayMode: 'test',
});
export default class CartComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      quantity: 1,
      cartItems: [],
      cartLength: this.props.cartItems.length,
      couponModalVisible: false,
      cheersModalVisible: false,
      couponData: [],
      loading: false,
      token: null,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.cartItems !== nextProps.cartItems) {
      return {
        cartItems: nextProps.cartItems,
        cartLength: nextProps.cartItems.length,
        couponData: nextProps.allCoupons
      };
    }
  }

  removeItemsCart(product) {
    this.props.removeProduct(product);
    setTimeout(() => {
      if (this.props.couponItem && this.props.couponItem.id) {
        this.onPressCouponApplied(this.props.couponItem);
      }
    }, 2000);
  }

  onPressCrossIcon() {
    this.props.navigation.goBack();
  }

  onChangeQuantity(item, value) {
    this.props.updateCart(item, Number(value));
    setTimeout(() => {
      if (this.props.couponItem && this.props.couponItem.id) {
        this.onPressCouponApplied(this.props.couponItem);
      }
    }, 2000);
  }

  onPressCrossButton() {
    this.setState({ couponModalVisible: false });
  }

  onCloseCheersModal() {
    NavigationService.navigate('HomeTab');
    this.setState({ cheersModalVisible: false });
  }

  onPressApplyCoupon() {
    this.setState({ couponModalVisible: true });
  }

  onPressCouponApplied(item) {
    if (item) {
      this.setState({ couponModalVisible: false });
      const discountPercent = Number(item.discount);
      let currentTotal = this.props.cartTotal;
      const discountValue = currentTotal * (discountPercent / 100);
      currentTotal -= discountValue;
      const discountObject = {
        discountAmount: currentTotal,
        couponDiscount: discountValue,
        couponItem: item
      };
      this.props.applyCouponDiscount(discountObject);
    } else {
      this.setState({ couponModalVisible: false });
    }
  }

  buyProductSuccess() {
    this.props.emptyCart();
    this.setState({ cheersModalVisible: true });
  }

  buyProduct() {
    const buyProductObject = {};
    const { cartItems, couponId } = this.props;
    const products = [];
    for (let i = 0; i < cartItems.length; i++) {
      products.push({
        productId: cartItems[i].id,
        quantity: cartItems[i].quantity
      });
    }
    buyProductObject['products'] = products;
    buyProductObject['token'] = this.state.token.tokenId;
    buyProductObject['couponId'] = couponId;
    this.props.buyProduct(buyProductObject, () => this.buyProductSuccess());
  }

  async handleCardPayPress() {
    try {
      this.setState({ loading: true, token: null });
      const token = await stripe.paymentRequestWithCardForm({
        // Only iOS support this options
        smsAutofillDisabled: true,
        requiredBillingAddressFields: 'full',
        prefilledInformation: {
          billingAddress: {
            name: 'Gunilla Haugeh',
            line1: 'Canary Place',
            line2: '3',
            city: 'Macon',
            state: 'Georgia',
            country: 'US',
            postalCode: '31217',
            email: 'ghaugeh0@printfriendly.com',
          },
        },
      });
      this.setState({ loading: false, token }, () => {
        this.buyProduct();
      });
    } catch (error) {
      this.setState({ loading: false });
    }
  }

  renderCell({ item }) {
    const {
      description, image_url, quantity, price, product
    } = item;
    const overallRating = [1, 2, 3, 4, 5];
    const overallRating1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];
    const quantities = overallRating1.map((s, i) => {
      return <Picker.Item key={i} value={s} label={s} />;
    });
    return (
      <View style={styles.cellContainer}>
        <Image
          style={styles.imageStyle}
          source={image_url != null ? { uri: image_url } : CONST.BOTTLE_IMAGE}
        />
        <View style={styles.description}>
          <View style={[styles.nameRow, { marginTop: 0 }]}>
            <Text style={[styles.text, { fontFamily: CONST.fontFamily.JosefBold, fontSize: scale(19) }]}>
              {product.name}
            </Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 13, justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row' }}>
              {overallRating.map((index) => {
                return (
                  (index <= quantities) ? <FontAwesome name="star" size={20} key={index} color={CONST.YELLOW_COLOR} /> : <FontAwesome name="star-o" size={20} color={CONST.GREY_COLOR} key={index} />
                );
              })}
            </View>
          </View>
          <View style={styles.nameRow}>
            <Text style={[styles.text, { color: CONST.YELLOW_COLOR, fontFamily: CONST.fontFamily.JosefSemiBold }]}>
              {price}
            </Text>
          </View>
          <View style={styles.nameRow}>
            <Text style={styles.productDescription}>{description}</Text>
          </View>
          <View style={styles.pickerView}>
            <Text style={styles.quantityText}>QTY : </Text>
            <Picker
              mode="dropdown"
              style={{ height: 50, width: 80 }}
              itemStyle={styles.pickerItemStyle}
              selectedValue={String(quantity)}
              onValueChange={(value) => this.onChangeQuantity(item, value)}
            >
              {quantities}
            </Picker>
          </View>
        </View>
        <TouchableOpacity style={styles.dotIcon} onPress={() => this.removeItemsCart(item)}>
          <Image style={styles.dotIcon} source={CONST.ITEM_DELETE} />
        </TouchableOpacity>
      </View>
    );
  }

  renderProductInfo() {
    return (
      <View>
        <FlatList
          data={this.props.cartItems}
          renderItem={(item) => this.renderCell(item)}
          extraData={this.props}
          keyExtractor={(item, index) => index.toString()}
        />
        <TouchableOpacity onPress={() => this.onPressApplyCoupon()} style={[styles.nameRow, { marginHorizontal: scale(30), marginTop: verticalScale(25) }]}>
          <Image source={CONST.COUPON} />
          <Text style={[styles.quantityText, { color: CONST.YELLOW_COLOR, marginLeft: scale(10), fontFamily: CONST.fontFamily.JosefSemiBold }]}>Apply Coupon</Text>
        </TouchableOpacity>
        <View style={styles.listContainer}>
          <Text style={styles.reviewsText}>
            Price Details (
            {this.state.cartLength}
            {' '}
            Items
            )
          </Text>
          <View style={{ marginTop: verticalScale(15) }}>
            <View style={styles.row}>
              <Text style={styles.quantityText}>Bag Total</Text>
              <Text style={styles.quantityText}>
                ($
                {this.props.cartTotal}
                )
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.quantityText}>Sub Total</Text>
              <Text style={styles.quantityText}>
                ($
                {this.props.cartTotal}
                )
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.quantityText}>Coupon Discount</Text>
              <Text style={styles.quantityText}>
                ($
                {this.props.couponDiscount.toFixed(2)}
                )
              </Text>
            </View>
            <View style={[styles.row, { marginTop: verticalScale(30) }]}>
              <Text style={[styles.quantityText, { color: '#000' }]}>Order Total</Text>
              <Text style={styles.quantityText}>
                ($
                {this.props.discountAmount}
                )
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View>
              <Text style={[styles.reviewsText, { marginLeft: 0 }]}>
                ($
                {this.props.discountAmount}
                )
              </Text>
              <Text style={[styles.quantityText, { color: CONST.YELLOW_COLOR }]}>View Detailed Bill</Text>
            </View>
            <TouchableOpacity onPress={() => this.handleCardPayPress()}>
              <Text style={[styles.productPrice, { color: CONST.YELLOW_COLOR }]}>PLACE ORDER</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  renderEmptyCartView() {
    return (
      <View style={styles.emptyContainer}>
        <Image
          source={CONST.EMPTY_CART_ICON}
        />
        <TouchableOpacity onPress={() => this.onPressCrossIcon()} style={styles.emptyCrossIcon}>
          <Icons name="ios-close" size={40} color={CONST.BORDER_COLOR_GREY_LIGHT} />
        </TouchableOpacity>
        <Text style={styles.cartText}>Your cart is empty</Text>
        <Text style={styles.cartDetailsText}>You have no items in your shopping cart. Let’s go buy something</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        { this.state.cartLength === 0 ? this.renderEmptyCartView() : (
          <View style={{ flex: 1 }}>
            <View style={styles.brandsHeader}>
              <Text style={styles.brandsText}>
                Shopping Bag (
                {this.state.cartLength}
                )

              </Text>
              <TouchableOpacity onPress={() => this.onPressCrossIcon()} style={styles.crossIcon}>
                <Icons name="ios-close" size={40} color={CONST.BORDER_COLOR_GREY_LIGHT} />
              </TouchableOpacity>
            </View>
            <ScrollView>
              {
                this.state.cartLength > 0
                  ? this.renderProductInfo() : null
              }
            </ScrollView>
          </View>
        )}
        {this.state.couponModalVisible
          && (
          <CouponModal
            isModalVisible={this.state.couponModalVisible}
            couponData={this.state.couponData}
            couponItem={this.props.couponItem}
            onPressCrossButton={() => this.onPressCrossButton()}
            onPressCouponApplied={(item) => this.onPressCouponApplied(item)}
          />
          )}
        {this.state.cheersModalVisible
        && (
        <CheersModal
          isModalVisible={this.state.cheersModalVisible}
          alertMessage="You need to be logged in for that action.Would you like to log in?"
          onPressCrossButton={() => this.onCloseCheersModal()}
        />
        )}
      </View>

    );
  }
}
