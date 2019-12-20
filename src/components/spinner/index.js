/**
 *  
 * Date: Oct 23, 2019
 * Description: Global Spinner (loader)
 *
 */
import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import styles from './SpinnerStyle';
import { Colors } from '../../theme';

const SpinnerEmt = require('react-native-spinkit');

class Spinner extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    if (!this.props.isFetching) {
      return null;
    } else {
      return (
        <View style={styles.spinnerContainer}>
          <SpinnerEmt
            style={styles.spinner}
            size={100}
            type="FadingCircleAlt"
            color={Colors.spinner}
          />
        </View>
      );
    }
  }
}

function mapStateToProps(state) {
  const { commonReducer } = state;
  return {
    isFetching: commonReducer.isFetching
  };
}

export default connect(mapStateToProps)(Spinner);
