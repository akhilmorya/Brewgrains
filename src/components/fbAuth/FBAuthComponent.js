import React from 'react';
import {
  TouchableOpacity, Image
} from 'react-native';
import {
  LoginManager,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';
import styles from './FBAuthStyles';
import * as CONST from '../../utils/constants';

let fbToken = null;

export default function FBAuthComponent({ props }) {
  const renderFB = () => {
    LoginManager.logInWithPermissions(['email']).then(
      (result) => {
        if (!result.isCancelled) {
          renderFbData();
        }
      },
      (error) => {
      }
    );
  };

  const renderFbData = () => {
    AccessToken.getCurrentAccessToken().then(
      (data) => {
        fbToken = {
          accessToken: data.accessToken
        };
      }
    );

    const infoRequest = new GraphRequest(
      '/me?fields=email,name,picture.type(large)',
      null,
      _responseInfoCallback,
    );
    new GraphRequestManager().addRequest(infoRequest).start();
  };

  const _responseInfoCallback = (error, result) => {
    if (error) {
    } else {
      const user = {
        name: result.name,
        email: result.email,
        photo: result.picture.data.url,
        accessToken: fbToken,
        idToken: result.id
      };
    }
  };

  return (
    <TouchableOpacity onPress={() => renderFB()} style={styles.fbSocialIcon}>
      <Image source={CONST.FB_ICON} />
    </TouchableOpacity>
  );
}
