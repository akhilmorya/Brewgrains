import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, Image, ScrollView, TextInput
} from 'react-native';
import {
  GoogleSignin
} from 'react-native-google-signin';
import ImagePicker from 'react-native-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as CONST from '../../utils/constants';
import NavigationService from '../../services/navigationService';
import I18n from '../../i18n/index';
import styles from './SettingsTabStyle';
import AlertModal from '../customComponents/AlertModal';

export default class SettingsTabComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: '',
      userName: 'Kapil Kolte',
      userEmail: 'krkolte@isystango.com',
      userNameEditable: false,
      userEmailEditable: false,
      isFromLogout: false,
      enableToggle: true,
      message: ''
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props !== prevProps
      && this.props.message === CONST.USER_LOGGED_OUT_SUCCESSFULLY
    ) {
      NavigationService.navigateAndReset('LoginScreen');
    }
  }

  async logout() {
    this.props.userLogout();
    try {
      const isSignedIn = await GoogleSignin.isSignedIn();
      if (isSignedIn) { // In case when not loged in from google
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
        this.setState({ user: null }); // Remember to remove the user from your app's state as well
      } else {
        this.setState({ user: null }); // Remember to remove the user from your app's state as well
      }
    } catch (error) {
      console.error(error);
    }
  }

  chooseFile = () => {
    const options = {
      title: I18n.t('selectImage'),
      customButtons: [
        { name: 'customOptionKey', title: I18n.t('choosePhotoText') },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {

      if (response.didCancel) {
      } else if (response.error) {
      } else if (response.customButton) {
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          filePath: source,
        });
      }
    });
  };

  onPressNotificationsToggle() {
    this.setState({ enableToggle: !this.state.enableToggle });
  }

  onPressTripleDot() {
    if (this.props.userData != null) {
      NavigationService.navigate('ProfileScreen');
    } else {
      this.setState({ 
        messageText: 'You need to be logged in for that action.Would you like to log in?',
        isAlertModalVisible: !this.state.isAlertModalVisible });
    }
  }

  onPressLogoutButton() {
    this.setState({ 
      isFromLogout: true,
      messageText: 'Are you sure you want to logout of this app?',
      isAlertModalVisible: !this.state.isAlertModalVisible
    });
  }

  onPressLeftButton() {
    if (this.state.isFromLogout) {
      this.logout();
    } else {
      this.setState({ isAlertModalVisible: false }, () => NavigationService.navigate('LoginScreen'));
    }
  }

  onPressRightButton() {
    this.setState({ isAlertModalVisible: false });
  }

  onPressBottomButton() {
    this.setState({ isAlertModalVisible: false });
  }

  goToMyFavorites() {
    NavigationService.navigate('FavoritesScreen');
  }

  goToMyReviews() {
  }

  goToAbout() {
    NavigationService.navigate('AboutUsTabScreen');
  }

  _renderHeader() {
    return (
      <View style={styles.headerTitle}>
        <Text style={styles.headerTitleText}>Settings</Text>
      </View>
    );
  }

  renderCommonTextInput(type, label, _returnKeyType, _keyboardType, value, isEditable, buttonText, isEmptyField, textChangeCallBack, buttonPressCallBack, enableToggleView) {
    return (
      <View style={styles.textViewContainer}>
        <Text style={styles.fieldText}>{label}</Text>
        <View>
          <TextInput
            ref={type}
            underlineColorAndroid="transparent"
            returnKeyType={_returnKeyType}
            value={value}
            autoCapitalize="none"
            onChangeText={(text) => textChangeCallBack(text)}
            keyboardType={_keyboardType}
            editable={isEditable}
            style={(isEmptyField) ? styles.commonInputEmpty : styles.commonInput}
          />
          {(isEmptyField) ? null
            : (
              <TouchableOpacity style={styles.editInputButton} onPress={() => buttonPressCallBack()}>
                <Text style={styles.editButtonText}>{buttonText}</Text>
              </TouchableOpacity>
            )}
        </View>
        {(isEmptyField)
          ? (enableToggleView)
            ? (
              <TouchableOpacity style={styles.notificationButton} onPress={() => buttonPressCallBack()}>
                <Image source={this.state.enableToggle ? CONST.TOGGLE_ON : CONST.TOGGLE_OFF} />
              </TouchableOpacity>
            )
            : (
              <TouchableOpacity style={styles.editInputButtonEmpty} onPress={() => buttonPressCallBack()}>
                <Ionicons name="ios-arrow-forward" size={30} color={CONST.BORDER_COLOR_GREY_LIGHT} />
              </TouchableOpacity>
            )
          : null}
      </View>
    );
  }

  renderTextFields() {
    return (
      <View style={styles.inputContainer}>
        {this.renderCommonTextInput('sendNotifications', I18n.t('SendNotifications'), 'next', 'default', '', false, '', true, undefined, () => this.onPressNotificationsToggle(), true)}
        {this.renderCommonTextInput('editProfile', I18n.t('EditProfile'), 'next', 'default', '', false, '', true, undefined, () => this.onPressTripleDot(), false)}
        {/* {this.renderCommonTextInput('myFavorites', I18n.t('MyFavorites'), 'next', 'default', '', false, '', true, undefined, () => this.goToMyFavorites(), false)}
        {this.renderCommonTextInput('myReviews', I18n.t('MyReviews'), 'next', 'default', '', false, '', true, undefined, () => this.goToMyReviews(), false)} */}
        {this.renderCommonTextInput('about', I18n.t('About'), 'next', 'default', '', false, '', true, undefined, () => this.goToAbout(), false)}
      </View>
    );
  }

  renderLogoutView() {
    return (
      <View style={styles.logoutView}>
        <Text style={styles.fieldText}>Logout</Text>
        <TouchableOpacity style={styles.editInputButtonEmpty} onPress={() => this.onPressLogoutButton()}>
          <Image source={CONST.LOGOUT_ICON} />
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this._renderHeader()}
        <ScrollView contentContainerStyle={styles.ProfileContainer} showsVerticalScrollIndicator={false}>
          {this.renderTextFields()}
          {this.renderLogoutView()}
          <Text style={styles.versionText}>Version 8.4.1</Text>
        </ScrollView>
        {this.state.isAlertModalVisible
        && (
        <AlertModal
          isModalVisible={this.state.isAlertModalVisible}
          alertMessage={this.state.messageText}
          onPressLeftButton={() => this.onPressLeftButton()}
          onPressRightButton={() => this.onPressRightButton()}
          onPressBottomButton={() => this.onPressBottomButton()}
          isFromBuyAlert={false}
        />
        )}
      </View>
    );
  }
}
