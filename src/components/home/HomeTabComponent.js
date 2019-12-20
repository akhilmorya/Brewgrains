import React, { Component } from 'react';
import {
  View, Text, FlatList, Image, TouchableOpacity, TextInput
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import stripe from 'tipsi-stripe';
import NavigationService from '../../services/navigationService';
import AlertModal from '../customComponents/AlertModal';
import CheersModal from '../customComponents/CheersModal';
import Config from '../../config';
import * as CONST from '../../utils/constants';
import styles from './HomeStyles';

stripe.setOptions({
  publishableKey: Config.STRIPE_KEY_DEV,
  androidPayMode: 'test',
});

export default class HomeTabComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      product: null,
      cartLength: 0,
      page: 1,
      loading: false,
      token: null,
      cheersModalVisible: false
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ cartLength: nextProps.cartItems.length });
  }

  onPressFilter() {
    if (this.state.searchText.length !== 0) {
      this.setState({ searchText: '', page: 1 }, () => {
        this.props.getAllProducts(1);
      });
    } else {
      NavigationService.navigate('FilterScreen', { resetPage: () => this.resetPage() });
    }
  }

  resetPage() {
    this.setState({ page: 1 });
  }

  handleLoadMore = () => {
    if (this.state.page < 2 && this.state.searchText.length === 0) {
      this.setState({
        page: this.state.page + 1
      }, () => {
        this.props.getAllProducts(this.state.page, this.props.filterObject);
      });
    }
  };

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

  buyProduct() {
    const buyProductObject = {};
    buyProductObject['products'] = [{
      productId: this.state.product.id,
      quantity: 1
    }];
    buyProductObject['token'] = this.state.token.tokenId;
    this.props.buyProduct(buyProductObject, () => this.buyProductSuccess());
  }

  buyProductSuccess() {
    this.setState({ cheersModalVisible: true });
  }

  onPressCrossButton() {
    this.setState({ cheersModalVisible: false });
  }

  onPressLeftButton() {
    if (this.state.isFromBuyAlertVisible === false) {
      this.setState({ isAlertModalVisible: false }, () => NavigationService.navigate('LoginScreen'));
    } else {
      this.setState({ isAlertModalVisible: false, });
      this.handleCardPayPress();
    }
  }

  onPressRightButton() {
    if (this.state.isFromBuyAlertVisible === true) {
      const { product } = this.state;
      product['quantity'] = 1;
      this.props.addToProducts(product, true);
      this.setState({ isAlertModalVisible: false }, () => NavigationService.navigate('CartInfoScreen'));
    } else {
      this.setState({ isAlertModalVisible: false });
    }
  }

  onPressBottomButton() {
    this.setState({ isAlertModalVisible: false });
  }

  onPressNotification() {
    this.props.startSpinner();
    setTimeout(() => {
      this.props.stopSpinner();
    }, 3000);
  }

  onPressCart() {
    if (this.props.userData != null) {
      NavigationService.navigate('CartInfoScreen');
    } else {
      this.setState({ isAlertModalVisible: !this.state.isAlertModalVisible, isFromBuyAlertVisible: false });
    }
  }

  renderProductImage(imgURL) {
    const regex = new RegExp('^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?');
    if (regex.test(imgURL)) {
      return (
        <Image style={styles.productImage} source={{ uri: imgURL }} />
      );
    }
    return (
      <Image style={styles.productImage} source={CONST.BOTTLE_IMAGE} />
    );
  }

  onPressTripleDot(product) {
    this.setState({ isAlertModalVisible: !this.state.isAlertModalVisible, isFromBuyAlertVisible: this.props.userData != null, product });
  }

  onPressProduct(item) {
    NavigationService.navigate('ProductInfoScreen', {
      item
    });
  }

  onSubmitProduct() {
    this.props.searchProduct(this.state.searchText);
  }

  renderCell({ item }) {
    const {
      description, image_url, price, rating = 3, product
    } = item;
    const overallRating = [1, 2, 3, 4, 5];
    return (
      <TouchableOpacity onPress={() => this.onPressProduct(item)} activeOpacity={0.5} style={styles.cellContainer}>
        {this.renderProductImage(image_url)}
        <View style={styles.productDetailContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.productName}>{product.name}</Text>
            <TouchableOpacity onPress={() => this.onPressTripleDot(item)} style={styles.dotIcon}>
              <Image source={CONST.TRIPLE_DOT} />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row' }}>
              {overallRating.map((index) => {
                return (
                  <View style={{ marginRight: 5 }}><FontAwesome name="star" color={(index <= rating) ? CONST.PRIMARY_COLOR : CONST.BORDER_COLOR_GREY_LIGHT} size={20} key={index} /></View>
                );
              })}
            </View>
          </View>
          <Text style={styles.productPrice}>{price}</Text>
          <Text style={styles.productDescription}>{description}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.headerContainer]}>
          <TouchableOpacity onPress={() => this.onPressNotification()} style={styles.notificationIcon}>
            <Image style={styles.notiIcon} source={CONST.NOTIFICATION_ICON} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onPressCart()} style={styles.cartIcon}>
            <Image style={styles.cartsIcon} source={this.state.cartLength > 0 ? CONST.CART_FILL : CONST.CART_ICON} />
          </TouchableOpacity>
        </View>
        <View style={styles.searchContainer}>
          <TextInput
            underlineColorAndroid="transparent"
            returnKeyType="done"
            placeholder="Search product"
            value={this.state.searchText}
            autoCapitalize="none"
            onChangeText={(searchText) => { this.setState({ searchText }); }}
            onSubmitEditing={() => this.onSubmitProduct()}
            keyboardType="email-address"
            style={styles.searchInput}
          />
          <TouchableOpacity style={styles.searchIcon}>
            <Image source={CONST.SEARCH_ICON} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onPressFilter()} style={styles.filterIcon}>
            <Image source={this.state.searchText.length !== 0 ? CONST.SMALL_CROSS : CONST.FILTER_ICON} />
          </TouchableOpacity>
        </View>
        <View style={styles.listContainer}>
          {(this.props.allProducts)
            ? (
              <View>
                <FlatList
                  keyExtractor={(item, index) => index.toString()}
                  data={this.props.allProducts}
                  renderItem={(item) => this.renderCell(item)}
                  extraData={this.state}
                  onEndReachedThreshold={0.1}
                  onEndReached={() => this.handleLoadMore()}
                />
                <Image style={styles.loadMore} source={CONST.LOAD_MORE_ICON} />
              </View>
            )
            : null}
        </View>
        {this.state.isAlertModalVisible
        && (
        <AlertModal
          isModalVisible={this.state.isAlertModalVisible}
          alertMessage="You need to be logged in for that action.Would you like to log in?"
          onPressLeftButton={() => this.onPressLeftButton()}
          onPressRightButton={() => this.onPressRightButton()}
          onPressBottomButton={() => this.onPressBottomButton()}
          isFromBuyAlert={this.state.isFromBuyAlertVisible}
        />
        )}
        {this.state.cheersModalVisible
        && (
        <CheersModal
          isModalVisible={this.state.cheersModalVisible}
          alertMessage="You need to be logged in for that action.Would you like to log in?"
          onPressCrossButton={() => this.onPressCrossButton()}
        />
        )}
      </View>

    );
  }
}
