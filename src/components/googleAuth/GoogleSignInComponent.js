import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import {
  GoogleSignin, statusCodes
} from 'react-native-google-signin';
import NavigationService from '../../services/navigationService';
import * as CONST from '../../utils/constants';
import styles from './GoogleSignInStyles';


export default function GoogleSignInComponent({ props }) {

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const user = {
        firstName: userInfo.user.givenName,
        lastName: userInfo.user.familyName,
        fullName: userInfo.user.name,
        email: userInfo.user.email,
        photo: userInfo.user.photo,
        accessToken: userInfo.accessToken,
        idToken: userInfo.idToken
      };
      NavigationService.navigateAndReset('HomeTab');
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  return (
    <TouchableOpacity onPress={() => signIn()} style={styles.googleSocialIcon}>
      <Image source={CONST.GOOGLE_PLUS_ICON} />
    </TouchableOpacity>
  );
}
