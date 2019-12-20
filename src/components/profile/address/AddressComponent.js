import React, { Component } from 'react';
import {
  connect
} from 'react-redux';
import {
  View, Platform,
  PermissionsAndroid, Dimensions, Image, Text, TouchableOpacity
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Icons from 'react-native-vector-icons/Ionicons';
import Geocoder from 'react-native-geocoding';
import Images from '../../../theme/images';
import styles from './AddressComponentStyle';
import { BORDER_COLOR_GREY_LIGHT } from '../../../utils/constants';
import * as userActions from '../../../actions/userActions';
import NavigationService from '../../../services/navigationService';

const { width, height } = Dimensions.get('window');
let _this;

class AddressComponent extends Component {
  constructor(props) {
    super(props);
    _this = this;
    this.ASPECT_RATIO = width / height;
    this.LATITUDE_DELTA = 0.0009;
    this.LONGITUDE_DELTA = this.LATITUDE_DELTA * this.ASPECT_RATIO;
    this.state = {
      latitude: '',
      longitude: '',
      latitudeDelta: '',
      longitudeDelta: '',
      dragable_latitude: '',
      dragable_longitude: '',
      add_Header: '',
      add_Detail: '',
      completeAdd: ''
    };
  }

  async componentDidMount() {
    if (Platform.OS === 'android') {
      if (PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)) {
        this.getCurrentLocation();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Permission',
              message:
                'Systango Boilerplate needs to  access to your location '
                + 'so you can have batter experience.',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            this.getCurrentLocation();
          } else {
          }
        } catch (err) {
        }
      }
    } else {
      Geocoder.init('AIzaSyA3c4zU987Mo_3d5GbDlGEWdlaaTAbqs6E');
      this.getCurrentLocation();
    }
  }

  getCurrentLocation() {
    try {
      Geolocation.getCurrentPosition((info) => {
        this.setState({
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
          latitudeDelta: info.coords.altitude,
          longitudeDelta: info.coords.accuracy,
          dragable_latitude: info.coords.latitude,
          dragable_longitude: info.coords.longitude
        });
      });
    } catch (error) {
    }
  }

  setAddress(address, region) {
    this.setState({ completeAdd: address.formatted_address, add_Header: address.formatted_address.split(/,(.+)/)[0], add_Detail: address.formatted_address.split(/, (.+)/)[1], latitude: region.latitude, longitude: region.longitude });
  }

  onRegionChange(region) {
    Geocoder.from(region.latitude, region.longitude)
      .then((json) => {
        const addressComponent = json.results[0];
        _this.setAddress(addressComponent, region);
      })
      .catch((error) => console.warn(error));
  }

  // Set Current address
  onPressCrossIcon() {
    const user = this.props.userData;
    user.address = this.state.completeAdd;
    this.props.updateUser(user);
    NavigationService.goBack();
  }


  render() {
    return (
      <View style={styles.container}>
        {(this.state.latitude === '') ? null
          : (
            <View style={{ flex: 1 }}>
              <MapView
                style={{ flex: 1 }}
                provider={PROVIDER_GOOGLE}
                region={{
                  latitude: this.state.latitude, longitude: this.state.longitude, latitudeDelta: this.LATITUDE_DELTA, longitudeDelta: this.LATITUDE_DELTA
                }}
                onRegionChangeComplete={this.onRegionChange}
                showsUserLocation
                zoomEnabled
              />
              <View
                pointerEvents="none"
                style={{
                  position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent'
                }}
              >
                <Image pointerEvents="none" source={Images.marker} style={{ width: 50, height: 50 }} />
              </View>
            </View>
          )}
        <View style={styles.addressDetailsContainer}>
          <View style={styles.addressDetails}>
            <Image source={Images.addressIcon} />
            <View style={styles.textDetails}>
              <Text style={styles.addressHeader}>{this.state.add_Header}</Text>
              <Text style={styles.addressBody}>{this.state.add_Detail}</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => this.onPressCrossIcon()} style={styles.crossIcon}>
          <Icons name="ios-close" size={60} color={BORDER_COLOR_GREY_LIGHT} />
        </TouchableOpacity>
      </View>
    );
  }
}


const mapStateToProps = (state) => ({
  message: state.UserLoginReducer.message,
  userData: state.UserLoginReducer.user,
});

const mapDispatchToProps = (dispatch) => ({
  updateUser: (user) => {
    return dispatch(userActions.updateUser(user));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressComponent);
