import React, { Component } from 'react';
import {
  View, Text, FlatList, Image, TouchableOpacity, Picker, ScrollView
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Ionicons';
import stripe from 'tipsi-stripe';
import NavigationService from '../../../services/navigationService';
import AlertModal from '../../customComponents/AlertModal';
import CheersModal from '../../customComponents/CheersModal';
import * as CONST from '../../../utils/constants';
import Config from '../../../config';
import styles from './ProductInfoStyle';

stripe.setOptions({
  publishableKey: Config.STRIPE_KEY_DEV,
  androidPayMode: 'test',
});

export default class ProductInfoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      quantity: 1,
      loading: false,
      token: null,
      rating: [
        {
          name: 'Mirza Music',
          date: '17 Sep, 2019',
          message: 'Its awesome',
          starCount: 4,
        },
        {
          name: 'Johnny Singh',
          date: '1 month ago',
          message: 'I like its taste',
          starCount: 5,
        },
        {
          name: 'Johnny Singh',
          date: '1 month ago',
          message: 'I like its taste',
          starCount: 3,
        },
        {
          name: 'Johnny Singh',
          date: '1 month ago',
          message: 'I like its taste',
          starCount: 2,
        }
      ],
      cheersModalVisible: false
    };
  }

  onPressFilter() {
    NavigationService.navigate('FilterScreen');
  }

  onPressLeftButton() {
    if (this.state.isFromBuyAlertVisible === false) {
      this.setState({ isAlertModalVisible: false }, () => NavigationService.navigate('LoginScreen'));
    } else {
      this.setState({ isAlertModalVisible: false });
      this.handleCardPayPress();
    }
  }

  onPressRightButton() {
    if (this.state.isFromBuyAlertVisible === true) {
      const { product } = this.state;
      product['quantity'] = Number(this.state.quantity);
      this.props.addToProducts(product, false);
      this.setState({ isAlertModalVisible: false }, () => NavigationService.navigate('CartInfoScreen'));
    } else {
      this.setState({ isAlertModalVisible: false });
    }
  }

  onPressBottomButton() {
    this.setState({ isAlertModalVisible: false });
  }

  dotsPressed(product) {
    this.setState({ isAlertModalVisible: !this.state.isAlertModalVisible, isFromBuyAlertVisible: this.props.userData != null, product });
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

  buyProduct() {
    const buyProductObject = {};
    buyProductObject['products'] = [{
      productId: this.props.productDetails.product.id,
      quantity: this.state.quantity
    }];
    buyProductObject['token'] = this.state.token.tokenId;
    this.props.buyProduct(buyProductObject, () => this.buyProductSuccess());
  }

  buyProductSuccess() {
    this.setState({ cheersModalVisible: true });
  }

  onCloseCheersModal() {
    NavigationService.goBack();
  }

  onPressNotification() {

  }

  onPressCart() {

  }

  onPressCrossIcon() {
    this.props.navigation.goBack();
  }

  renderCell({ item }) {
    return (
      <View style={styles.reviewCell}>
        <View style={styles.detailContainer}>
          <View style={styles.leftDetail}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.reviewMessage}>{item.message}</Text>
          </View>
          <View style={styles.rightDetail}>
            <View style={styles.starView}>
              <FontAwesome name="star" color={CONST.WHITE_COLOR} size={15} />
              <Text style={styles.starCount}>{item.starCount}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }

  renderReviewsList(feedbacks) {
    return (
      <View>
        <Text style={styles.reviewsText}>{`Reviews (${feedbacks.length})`}</Text>
        <View style={styles.listContainer}>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={this.state.feedbacks}
            renderItem={(item) => this.renderCell(item)}
            extraData={this.state}
          />
        </View>
      </View>
    );
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

  renderProductInfo(ProductInfo) {
    const {
      id, description, image_url, category, quantity, price, rating = 0, product
    } = ProductInfo;
    const overallRating = ['1', '2', '3', '4', '5'];
    const quantities = overallRating.map( (s, i) => {
      return <Picker.Item key={i} value={s} label={s} />
    });
    return (
      <ScrollView>
        <View style={styles.cellContainer}>
          {this.renderProductImage(image_url)}
          <View style={styles.productDetailContainer}>
            <View style={styles.nameContainer}>
              <Text style={styles.productName}>{product.name}</Text>
              <TouchableOpacity style={styles.dotIcon} onPress={() => this.dotsPressed(ProductInfo)}>
                <Image source={CONST.TRIPLE_DOT} />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
              <FontAwesome name="star" color={CONST.PRIMARY_COLOR} size={15} />
              <Text style={styles.starText}>{`${rating} Stars`}</Text>
            </View>
            <Text style={styles.productPrice}>{`$${price}`}</Text>
            <View style={styles.pickerView}>
              <Text style={styles.quantityText}>QTY : </Text>
              <Picker
                mode="dropdown"
                style={{ height: 50, width: 80, marginTop: 5, }}
                itemStyle={styles.pickerItemStyle}
                selectedValue={this.state.quantity}
                onValueChange={(value) => this.setState({ quantity: value })}
              >
                {quantities}
              </Picker>
            </View>
            <View style={styles.beerInfo}>
              <Text style={styles.beerType}>Beer Type</Text>
              <Text style={styles.beerType}>Alcohol</Text>
            </View>
            <View style={styles.beerInfo}>
              <Text style={styles.iPA}>{product.brand.name}</Text>
              <Text style={styles.iPA}>6.90 % vol.</Text>
            </View>
            <View style={styles.beerDescription}>
              <Text style={styles.productName}>Beer Description</Text>
              <Text style={styles.productDescription}>{description}</Text>
              <Image style={styles.loadMore} source={CONST.LOAD_MORE_ICON} />
            </View>
          </View>
        </View>
        {(this.props.productFeedbacks && this.props.productFeedbacks.feedbacks) ? this.renderReviewsList(this.props.productFeedbacks.feedbacks) : null }
      </ScrollView>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.brandsHeader}>
          <Text style={styles.brandsText}>ProductInfo</Text>
          <TouchableOpacity onPress={() => this.onPressCrossIcon()} style={styles.crossIcon}>
            <Icons name="ios-close" size={40} color={CONST.BORDER_COLOR_GREY_LIGHT} />
          </TouchableOpacity>
        </View>
        {(this.props.productDetails && this.props.productDetails.product) ? this.renderProductInfo(this.props.productDetails.product) : null}
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
          onPressCrossButton={() => this.onCloseCheersModal()}
        />
        )}
      </View>

    );
  }
}
