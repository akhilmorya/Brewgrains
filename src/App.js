import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Sentry } from 'react-native-sentry';
import {PermissionsAndroid} from 'react-native';
import createStore from './reducers';
import RootScreen from './components/root/RootScreen';
import Spinner from './components/spinner';

Sentry.config('https://2a5c220c8b6a499882a908969651fef8@sentry.io/1760827').install();
const { store, persistor } = createStore();

export default class App extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
  }

componentDidMount() {
  this.requestCameraPermission();
}

async requestCameraPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location Access Permission',
        message:
          'Systango Boilerplate needs to  access to your location ' +
          'so you can have batter experience.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    } else {
    }
  } catch (err) {
    console.warn(err);
  }
}

  /**
   * A loading indicator to show any process is under progress and UI can be blocked during that duration.
   */
  spinner() {
    return (
      <Spinner />
    );
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootScreen />
          {this.spinner()}
        </PersistGate>
      </Provider>
    );
  }
}
