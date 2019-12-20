import React, { Component } from 'react';
import {
  View, Text, Image, TouchableOpacity, Modal
} from 'react-native';
import * as CONST from '../../utils/constants';
import styles from './AlertModalStyle';

export default class AlertModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };
  }

  render() {
    const {
      isModalVisible, alertMessage, leftButton, rightButton, bottomButton, onPressLeftButton, onPressRightButton, onPressBottomButton, isFromBuyAlert
    } = this.props;
    return (
      <Modal
        animationType="slide"
        transparent
        visible={this.state.modalVisible}
      >
        <View style={styles.container}>
          <View style={styles.modalContainer}>
            <View style={styles.alertContainer}>
              { isFromBuyAlert ? (
                <View style={styles.buyContainer}>
                  <TouchableOpacity style={styles.buyButton} onPress={() => onPressLeftButton()}>
                    <Image source={CONST.BUY} />
                    <Text style={styles.buyText}>Buy</Text>
                  </TouchableOpacity>
                  <View style={styles.verticalLine} />
                  <TouchableOpacity style={styles.addToCartButton} onPress={() => onPressRightButton()}>
                    <Image source={CONST.ADD_TO_CART} />
                    <Text style={styles.buyText}>Add To Cart</Text>
                  </TouchableOpacity>
                </View>
              )
                : (
                  <View style={styles.topView}>
                    <Text style={styles.messageText}>{alertMessage}</Text>
                    <View style={styles.horizontalLine} />
                    <View style={styles.buttonContainer}>
                      <TouchableOpacity onPress={() => onPressLeftButton()} style={styles.leftButton}>
                        <Text style={styles.buttonText}>YES</Text>
                      </TouchableOpacity>
                      <View style={styles.verticalLine} />
                      <TouchableOpacity onPress={() => onPressRightButton()} style={styles.rightButton}>
                        <Text style={styles.buttonText}>NO</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              <View style={styles.bottomView}>
                <TouchableOpacity onPress={() => onPressBottomButton()} style={styles.bottomButton}>
                  <Text style={styles.buttonText}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>

    );
  }
}
