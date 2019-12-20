import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import { connect } from 'react-redux';
import styles from './SplashScreenStyle';
import NavigationService from '../../services/navigationService';
import * as userActions from '../../actions/userActions';
import { Images } from '../../theme';

function SplashScreen(props) {
  useEffect(() => {
    setTimeout(() => {
      const { navigation } = props;
      NavigationService.navigateAndReset('LoginScreen', navigation);
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={Images.splash} />
    </View>
  );
}

const mapStateToProps = (state) => ({
  userData: state.UserLoginReducer.user,
});

const mapDispatchToProps = (dispatch) => ({
  userLogin: (user) => {
    return dispatch(userActions.userLogin(user));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashScreen);
