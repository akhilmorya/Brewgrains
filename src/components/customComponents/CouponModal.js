import React, { Component } from 'react';
import {
  View, Text, FlatList, Image, TouchableOpacity, Modal
} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import * as CONST from '../../utils/constants';
import styles from './CouponModalStyle';

export default class CouponModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      selectedItem: null,
      couponData: this.props.couponData
    };
  }

  componentDidMount() {
    const coupons = this.state.couponData;
    for (let i = 0; i < this.state.couponData.length; i++) {
      if (this.props.couponItem && this.props.couponItem.id === coupons[i].id) {
        coupons[i]['isSelected'] = true;
        this.setState({ selectedItem: coupons[i] });
      } else {
        coupons[i]['isSelected'] = false;
      }
    }
    this.setState({ couponData: coupons });
  }

  onPressCouponButton(item) {
    this.setState({ selectedItem: item });
    const coupons = this.state.couponData;
    const selectedIndex = coupons.findIndex((coupon) => coupon.id === item.id);
    const selectedValueIndex = coupons.findIndex((coupon) => coupon.isSelected === true);
    if (selectedValueIndex !== -1) {
      coupons[selectedValueIndex].isSelected = false;
    }
    coupons[selectedIndex].isSelected = true;
    this.setState({ couponData: coupons });
  }

  onApplyCounpon() {
    this.props.onPressCouponApplied(this.state.selectedItem);
  }

  renderCouponCell({ item }) {
    return (
      <View style={styles.cellContainer}>
        <View style={styles.topInfo}>
          <TouchableOpacity onPress={() => this.onPressCouponButton(item)} style={styles.dotIcon}>
            <Image source={item.isSelected ? CONST.ACTIVE_RADIO_ICON : CONST.INACTIVE_RADIO_ICON} />
          </TouchableOpacity>
          <Text style={styles.codeText}>{item.name}</Text>
          <Text style={styles.saveText}>Save</Text>
          <Text style={styles.saveValueText}>{`${item.discount}%`}</Text>
        </View>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.expiresText}>Expires in 3 days</Text>
      </View>
    );
  }

  renderReviewHeader() {
    return (
      <View style={styles.brandsHeader}>
        <Text style={styles.brandsText}>Apply Coupon</Text>
        <TouchableOpacity onPress={() => this.props.onPressCrossButton()} style={styles.crossIcon}>
          <Icons name="ios-close" size={40} color={CONST.BORDER_COLOR_GREY_LIGHT} />
        </TouchableOpacity>
      </View>
    );
  }

  renderBottomView() {
    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => this.onApplyCounpon()} style={styles.submit}>
          <Text style={styles.signUpText}>APPLY</Text>
          <Icons name="ios-arrow-forward" size={20} color={CONST.PRIMARY_COLOR} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.onPressCrossButton()} style={styles.back}>
          <Text style={styles.loginText}>BACK</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    const {
      onPressCrossButton, couponData,
    } = this.props;
    return (
      <Modal
        animationType="slide"
        transparent
        visible
      >
        <View style={styles.container}>
          <View style={styles.modalContainer}>
            {this.renderReviewHeader()}
            <View style={styles.listContainer}>
              <FlatList
                // contentContainerStyle={{flex: 1, justifyContent: 'center'}}
                data={this.state.couponData}
                extraData={this.state}
                renderItem={(item) => this.renderCouponCell(item)}
                keyExtractor={(item) => item.id}
              />
            </View>
            {this.renderBottomView()}
          </View>
        </View>
      </Modal>

    );
  }
}
