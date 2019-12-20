import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';

import styles from './RouteStyles';
import ProductDetails from '../../customComponents/ProductDetails';
import I18n from '../../../i18n/index';
import { Images } from '../../../theme';

export default function FirstRoute({ data, onPressTripleDot, onPressOrderDetails, }) {
  
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
              delivery_date={item.orderDetails.delivery_date}
              purchased_quantity={obj.purchased_quantity}
              isOrder
              onPressTripleDot={() => onPressTripleDot(item, index)}
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
  };

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
