import React, { Component } from 'react';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as CONST from '../../utils/constants';
import * as Utils from '../../utils/commonMethods';
import styles from './ProductDetailsStyle';
import { Colors } from '../../theme';

export default class ProductDetails extends Component {
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

  render() {
    const {
      item, index, rating = 3, price = '$26.30 ', image_url = '', description, name = 'Budweiser', onPressTripleDot, onCellPressed, isHistory, onPressHeart, isOrder, hideTripleDot,
      delivery_date, purchased_quantity } = this.props;
    const overallRating = [1, 2, 3, 4, 5];
    return (
      <TouchableOpacity onPress={() => onCellPressed()} style={styles.container}>
        <View style={styles.imageContainer}>
          {this.renderProductImage(image_url)}
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.productName}>{name}</Text>
          {
                    !isOrder
                    && (
                    <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>
                      {overallRating.map((_index) => {
                        return (
                          <View style={{ marginRight: 5 }}><FontAwesome name="star" color={(_index <= rating) ? CONST.PRIMARY_COLOR : CONST.BORDER_COLOR_GREY_LIGHT} size={20} key={index} /></View>
                        );
                      })}
                    </View>
                    )
                }
          {
                    isOrder
                      ? (
                        <View>
                          <Text style={styles.productPrice}>${price}</Text>
                          <Text style={styles.qtTxt}>
QTY:
                            {' '}
                            <Text style={styles.blackTxt}>{purchased_quantity}</Text>
                          </Text>
                          <Text numberOfLines={3} style={styles.productDescription}>{description}</Text>
                          {isHistory ? (
                            <View style={styles.textCont}>
                              <Text style={styles.blackTxt}>Delivered</Text>
                              <Text style={styles.dateDescription}>{`(${ Utils.getDateInFormat(delivery_date)})`}</Text>
                            </View>
                          ) : (
                            <View style={styles.textCont}>
                              <Text style={styles.blackTxt}>Estimated Delivery</Text>
                              <Text style={styles.dateDescription}>{`(${ Utils.getDateInFormat(delivery_date)})`}</Text>
                            </View>
                          ) }
                        </View>
                      )
                      : (
                        <View>
                          <Text style={styles.productPrice}>$ {price}</Text>
                          <Text numberOfLines={4} style={styles.productDescription}>{description}</Text>
                        </View>
                      )
                }
        </View>
        {
                isHistory
                  ? (
                    <TouchableOpacity onPress={() => onPressHeart()} style={styles.heartIcon}>
                      {(item.is_favorite)
                        ?
                        <Ionicons name="ios-heart" color={Colors.secondary} size={25} />
                        :
                        <Ionicons name="ios-heart-empty" color={Colors.DISABLED_TITLE} size={25} />
                      }
                    </TouchableOpacity>
                  )
                  : !hideTripleDot ? (
                    <TouchableOpacity onPress={() => onPressTripleDot()} style={styles.dotIcon}>
                      <Image source={CONST.TRIPLE_DOT} />
                    </TouchableOpacity>
                  ) : <View />
            }
      </TouchableOpacity>
    );
  }
}
