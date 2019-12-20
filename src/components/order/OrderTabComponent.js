import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, Dimensions,
} from 'react-native';
import { TabView } from 'react-native-tab-view';
import I18n from '../../i18n/index';
import styles from './OrderStyles';
import AlertModal from '../customComponents/AlertModal';
import FirstRoute from './routes/FirstRoute';
import SecondRoute from './routes/SecondRoute';
import NavigationService from '../../services/navigationService';

export default class OrderTabComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      orderId: '',
      routes: [
        { key: 'first', title: 'In Progress' },
        { key: 'second', title: 'History' },
      ],
      isAlertModalVisible: false,
    };
  }

  onPressLeftButton() {
    this.setState({ isAlertModalVisible: false });
    const data = {
      order: {
        delivered_on: new Date(),
        status: 'Cancel'
      },
      id: this.state.orderId
    };
    this.props.cancelOrder(data);
  }

  onPressRightButton() {
    this.setState({ isAlertModalVisible: false });
  }

  onPressBottomButton() {
    this.setState({ isAlertModalVisible: false });
  }

  onPressTripleDot(data, index) {
    this.setState({ isAlertModalVisible: true, orderId: data.orderDetails.order_id });
  }

  onPressOrderDetails(item, index) {
    NavigationService.navigate('OrderDetailsScreen', {
      item,
      index
    });
  }

  favoriteStatusChanged(orderData, data, index, is_favorite) {
    const results = this.props.userOrders.allOrders.map((obj1) => {
      if (obj1.orderDetails.order_id === orderData.orderDetails.order_id) {
        obj1.productsInOrder.map((obj2) => {
          if (obj2.id === data.id) {
            obj2.is_favorite = !is_favorite;
          }
          return obj2;
        });
        return obj1;
      }
      return obj1;
    });
    const alteredData = {
      allOrders: results
    };
    this.props.changeFavouriteStatus(alteredData);
  }

  onHeartPressed(orderData, data, index) {
    const favoriteData = {
      productId: data.id
    };
    if (data.is_favorite) {
      this.props.markProductAsUnFavourite(favoriteData, () => this.favoriteStatusChanged(orderData, data, index, true));
    } else {
      this.props.markProductAsFavourite(favoriteData, () => this.favoriteStatusChanged(orderData, data, index, false));
    }
  }

  getFilteredData(_orders) {
    let inProgressOrders; let
      historyOrders;
    if (_orders && _orders.allOrders && _orders.allOrders.length > 0) {
      inProgressOrders = _orders.allOrders.filter((orderData) => orderData.orderDetails.status === 'Paid' || orderData.orderDetails.status === 'Unpaid');
      historyOrders = _orders.allOrders.filter((orderHistoryData) => orderHistoryData.orderDetails.status === 'Cancel' || orderHistoryData.orderDetails.status === 'Delivered');
    } else {
      inProgressOrders = [];
      historyOrders = [];
    }
    return { inProgressOrders, historyOrders };
  }

  _renderScene = ({ route }) => {
    const { inProgressOrders, historyOrders } = this.getFilteredData(this.props.userOrders);
    switch (route.key) {
      case 'first':
        return (
          <FirstRoute
            data={inProgressOrders}
            onPressTripleDot={(data, index) => this.onPressTripleDot(data, index)}
            onPressLeftButton={() => this.onPressLeftButton()}
            onPressRightButton={() => this.onPressRightButton()}
            onPressBottomButton={() => this.onPressBottomButton()}
            onPressOrderDetails={(item, index) => this.onPressOrderDetails(item, index)}
          />
        );
      case 'second':
        return <SecondRoute data={historyOrders} onPressOrderDetails={(item, index) => this.onPressOrderDetails(item, index)} onHeartPressed={(data, index) => this.onHeartPressed(data, index)} />;
      default:
        return null;
    }
  }

  _renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          return (
            <View style={styles.tabItemCont}>
              <TouchableOpacity
                  style={styles.tabItem}
                  onPress={() => this.setState({ index: i })}
                >
                  <Text style={[(this.state.index == i) ? styles.tabTitle : styles.disabledTabTitle]}>{route.title}</Text>
                </TouchableOpacity>
              {this.state.index == i
                && <View style={styles.bottomLine} />}
            </View>
          );
        })}

      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.headerContainer]}>
          <Text style={styles.title}>{I18n.t('order')}</Text>
        </View>
        <TabView
          navigationState={this.state}
          renderScene={this._renderScene}
          renderTabBar={this._renderTabBar}
          onIndexChange={(index) => this.setState({ index })}
          initialLayout={{ width: Dimensions.get('window').width }}
        />
        {this.state.isAlertModalVisible
        && (
        <AlertModal
          isModalVisible={this.state.isAlertModalVisible}
          alertMessage="Are you sure you want to cancel this order?"
          onPressLeftButton={() => this.onPressLeftButton()}
          onPressRightButton={() => this.onPressRightButton()}
          onPressBottomButton={() => this.onPressBottomButton()}
        />
        )}
      </View>
    );
  }
}
