import React, { Component } from 'react';
import {
  View, Text, Image, TouchableOpacity, Modal
} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import * as CONST from '../../utils/constants';
import styles from './CheersModalStyle';

export default class CheersModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };
  }

  render() {
    const {
      onPressCrossButton
    } = this.props;
    return (
      <Modal
        animationType="slide"
        transparent
        visible
      >
        <View style={styles.container}>
          <View style={styles.modalContainer}>
            <Text style={styles.cheerText}>Cheers!</Text>
            <Image source={CONST.CHEERS_ICON} />
            <Text style={styles.orderText}>Your order has been successfully placed!</Text>
          </View>
          <TouchableOpacity onPress={() => onPressCrossButton()} style={styles.crossIcon}>
            <Icons name="ios-close" size={40} color={CONST.BORDER_COLOR_GREY_LIGHT} />
          </TouchableOpacity>
        </View>
      </Modal>

    );
  }
}
