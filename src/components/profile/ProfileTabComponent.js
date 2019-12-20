import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, Image, ScrollView, ImageBackground, TextInput
} from 'react-native';
import {
  GoogleSignin
} from 'react-native-google-signin';
import ImagePicker from 'react-native-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import * as CONST from '../../utils/constants';
import NavigationService from '../../services/navigationService';
import I18n from '../../i18n/index';
import showToast from '../../utils/showToast';
import AlertModal from '../customComponents/AlertModal';
import styles from './ProfileTabStyle';

export default class ProfileTabComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: '',
      userName: this.props.userData ? this.props.userData.name : '',
      userEmail: this.props.userData ? this.props.userData.email : '',
      userNameEditable: false,
      isAlertModalVisible: false,
    };
  }

  componentDidUpdate(prevProps) {
    if (
      this.props !== prevProps
      && this.props.message === CONST.USER_LOGGED_OUT_SUCCESSFULLY
    ) {
      NavigationService.navigateAndReset('LoginScreen');
    }
    if (this.props.signedUrl !== null) {
      const body = new FormData();
      body.append('images', this.state.file);
      AsyncStorage.getItem('SESSION_TOKEN').then((value) => {
        if (JSON.parse(value) != null) {
          const res = JSON.parse(value);
          this.setState({ token: res });
        }
      });
      const data = {
        url: this.props.signedUrl,
        body
      };
      // this.props.uploadImage(data);
      
      return fetch(data.url, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${this.state.token}`
        },
        body: data.body,
      }).then((response) => {
        return response;
      });
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

  onPressLogoutButton() {
    this.setState({
      messageText: 'Are you sure you want to logout of this app?',
      isAlertModalVisible: !this.state.isAlertModalVisible
    });
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
        const file = {
          uri: response.uri,
          type: response.type,
          name: response.fileName,
        };
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          filePath: file.uri,
          file
        });
        const data = {
          id: this.props.userData.id,
          imageName: file.name
        };
        this.props.getImgUrl(data);
      }
    });
  };

  setName(text) {
    this.setState({ userName: text });
  }

  enableLoginEditable() {
    this.setState({ userNameEditable: true });
  }

  goToAddress() {
    NavigationService.navigate('Address');
  }

  goToChangePassWord() {
    NavigationService.navigate('ForgotPassword', {
      isResetPassword: true
    });
  }

  updateUserProfileSuccess() {
    showToast('Profile Updated Successfully!');
    this.props.navigation.goBack();
  }

  updateUserProfile() {
    const userData = {
      user: {
        id: this.props.userData.id,
        name: this.state.userName,
        email: this.state.userEmail
      }
    };
    this.props.updateUserProfile(userData, () => this.updateUserProfileSuccess());
  }

  onPressLeftButton() {
    this.logout();
  }

  onPressRightButton() {
    this.setState({ isAlertModalVisible: false });
  }

  onPressBottomButton() {
    this.setState({ isAlertModalVisible: false });
  }


  _renderHeader() {
    return (
      <View style={styles.headerTitle}>
        <Text style={styles.headerTitleText}>Profile</Text>
      </View>
    );
  }

  renderImageProfile() {
    return (
      <View style={styles.profileImageContainer}>
        <View style={styles.profileImageView}>
          <ImageBackground source={CONST.PROFILE_BACK} style={styles.profileImageBack} />
          {(this.state.filePath && this.state.filePath !== '') ? <Image style={styles.profile} source={this.state.filePath} /> : null }
          <TouchableOpacity style={styles.plusButton} onPress={() => this.chooseFile()}>
            <Image source={CONST.PLUS_ICON} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.changeProfileButton} onPress={() => this.chooseFile()}>
          <Text style={styles.changeProfileText}>Change Profile Picture</Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderCommonTextInput(type, label, _returnKeyType, _keyboardType, value, isEditable, buttonText, isEmptyField, textChangeCallBack, buttonPressCallBack) {
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
          ? (
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
        {this.renderCommonTextInput('name', I18n.t('signup_name'), 'next', 'default', this.state.userName, this.state.userNameEditable, I18n.t('Edit'), false, (text) => this.setName(text), () => this.enableLoginEditable())}
        {this.renderCommonTextInput('email', 'Email', 'next', 'email-address', this.state.userEmail, false, '', false, undefined, undefined)}
        {this.renderCommonTextInput('addredd', I18n.t('signup_address'), 'next', 'default', '', false, '', true, undefined, () => this.goToAddress())}
        {this.renderCommonTextInput('email', I18n.t('ChangePassword'), 'next', 'default', '', false, '', true, undefined, () => this.goToChangePassWord())}
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

  renderBottomView() {
    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => this.updateUserProfile()} style={styles.signUp}>
          <Text style={styles.signUpText}>SAVE</Text>
          <Ionicons name="ios-arrow-forward" size={20} color={CONST.PRIMARY_COLOR} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => NavigationService.goBack()} style={styles.login}>
          <Text style={styles.loginText}>BACK</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this._renderHeader()}
        <ScrollView contentContainerStyle={styles.ProfileContainer} showsVerticalScrollIndicator={false}>
          {this.renderImageProfile()}
          {this.renderTextFields()}
          {this.renderLogoutView()}
          {this.renderBottomView()}
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
        </ScrollView>
      </View>
    );
  }
}
