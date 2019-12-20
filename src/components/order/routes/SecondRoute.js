import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';

import styles from './RouteStyles';
import ProductDetails from '../../customComponents/ProductDetails';
import I18n from '../../../i18n/index';
import { Images } from '../../../theme';

export default function SecondRoute({ data, onPressOrderDetails, onHeartPressed }) {
  const renderOrderCell = (item, index) => {
    return (
      <View>
        <View style={styles.heading}>
          <Text style={styles.numberTxt}>{I18n.t('orderNo')}: {item.orderDetails.id}</Text>
          <TouchableOpacity onPress={() => onPressOrderDetails(item, index)}>
            <Text style={styles.detailsTxt}>{I18n.t('orderDetails')}</Text>
          </TouchableOpacity>
        </View>
        {item.productsInOrder.map((obj) => {
          return (
            <ProductDetails
              item={obj}
              name={obj.name}
              description={obj.description}
              price={obj.price}
              index
              delivery_date={item.orderDetails.delivered_on}
              purchased_quantity={obj.purchased_quantity}
              isHistory
              isOrder
              onPressHeart={() => onHeartPressed(item, obj, index)}
              onCellPressed={() => {}}
            />
          );
        })}
      </View>
    );
  };

  const renderOrders = () => {
    return (
      <View style={styles.listContainer}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={data}
          renderItem={({ item, index }) => renderOrderCell(item, index)}
          extraData={this.state}
        />
      </View>
    );
  }

  const renderEmptyOrderView = () => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={Images.emptyOrders} />
        <Text style={styles.emptyText}>You have no orders</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {(data.length > 0) ? renderOrders() : renderEmptyOrderView()}
    </View>
  );
}
