import React, { Component } from 'react';
import {
  View, TouchableOpacity, Dimensions, SafeAreaView
} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { WebView } from 'react-native-webview';
import NavigationService from '../../services/navigationService';
import * as CONST from '../../utils/constants';
import * as brandActions from '../../actions/brandActions';

import styles from './AboutUsStyles';

class AboutUsTabComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      html: ''
    };
  }

  componentDidMount() {
  }

  onPressCrossIcon() {
    NavigationService.goBack();
  }

  renderHeader() {
    return (
      <TouchableOpacity onPress={() => this.onPressCrossIcon()} style={styles.crossIcon}>
        <Icons name="ios-close" size={40} color={CONST.BORDER_COLOR_GREY_LIGHT} />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {(this.props.aboutUsPageURL) ? (
          <View style={styles.web}>
            <WebView
              originWhitelist={['*']}
              source={{ html: JSON.parse(this.props.aboutUsPageURL) }}
              javaScriptEnabled
              domStorageEnabled
            />
          </View>
        ) : null }
        {this.renderHeader()}
      </SafeAreaView>

    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.BrandReducer.filters,
  allBrands: state.BrandReducer.allBrands,
  allCategories: state.BrandReducer.allCategories,
});

const mapDispatchToProps = (dispatch) => ({
  setAllFilters: () => {
    return dispatch(brandActions.setAllFilters());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutUsTabComponent);
