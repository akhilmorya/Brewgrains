import React, { Component } from 'react';
import {
  View, Image, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, ScrollView
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Images } from '../../../theme';
import styles from './ForgotPasswordStyles';
import I18n from '../../../i18n/index';
import NavigationService from '../../../services/navigationService';
import Colors from '../../../theme/colors';
import Validators from '../../../utils/validators';
import showToast from '../../../utils/showToast';

export default class ForgotPasswordComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      oldPassWord: '',
      passWord: '',
      confirmPass: ''
    };
  }

  componentDidUpdate(prevProps, prevState) {

  }

  getPassAuthenticity() {
    if (this.state.passWord !== '' && (this.state.passWord === this.state.confirmPass)) {
      return true;
    } else {
      return false;
    }
  }

  updateUserProfileSuccess() {
    showToast('Password Updated Successfully!');
    this.props.navigation.goBack();
  }

  updateUserProfile() {
    const userData = {
      user: {
        id: this.props.userData.id,
        currentPassword: this.state.oldPassWord,
        password: this.state.passWord
      }
    };
    this.props.updateUserProfile(userData, () => this.updateUserProfileSuccess());
  }

  resetButtonPressed(isResetPassword) {
    if (isResetPassword) {
      if (Validators.isEmpty(this.state.oldPassWord)) {
        showToast('Old Password is empty');
      } else if (Validators.isEmpty(this.state.passWord)) {
        showToast('Password is empty');
      } else if (!Validators.isValidPassword(this.state.passWord)) {
        showToast('Password is invalid');
      } else if (Validators.isEmpty(this.state.confirmPass)) {
        showToast('Confirm Password is empty');
      } else if (!Validators.isValidPassword(this.state.confirmPass)) {
        showToast('Confirm Password is invalid');
      } else if (!this.getPassAuthenticity()) {
        showToast('Both Password not matched');
      } else {
        // Call Api
        this.updateUserProfile();
      }
    } else if (Validators.isEmpty(this.state.userEmail)) {
      showToast('Email is empty');
    } else if (!Validators.validEmail(this.state.userEmail)) {
      showToast('Email is invalid');
    } else {
      // Call Api
      this.props.forgotPassword(this.state.userEmail);
    }
  }

  renderHeaderIcon() {
    return (
      <Image style={this.props.isResetPassword ? styles.headerImageReset : styles.headerImage} source={Images.forgotPasswordLogo} />
    );
  }

  renderDetails() {
    return (
      <View style={styles.detailsView}>
        <Text style={styles.detailsHeaderText}>{I18n.t((this.props.isResetPassword) ? 'ResetYourPass' : 'ForgotYourPass')}</Text>
        <Text style={styles.detailsDescription}>{I18n.t((this.props.isResetPassword) ? 'ResetPassDesCription' : 'ForgotPassDesCription')}</Text>
      </View>
    );
  }

  renderCommonTextInput(type, label, _returnKeyType, _keyboardType, value, callBack) {
    return (
      <View style={styles.textViewContainer}>
        <Text style={styles.fieldText}>{label}</Text>
        <TextInput
          ref={type}
          underlineColorAndroid="transparent"
          returnKeyType={_returnKeyType}
          value={value}
          autoCapitalize="none"
          onChangeText={(text) => callBack(text)}
          keyboardType={_keyboardType}
          secureTextEntry={(type === 'password')}
          style={styles.commonInput}
        />
      </View>
    );
  }

  renderEmailInput() {
    return (
      <View style={styles.textViewContainer}>
        <Text style={styles.fieldText}>Email</Text>
        <TextInput
          underlineColorAndroid="transparent"
          returnKeyType="done"
          value={this.state.userEmail}
          autoCapitalize="none"
          onChangeText={(text) => this.setState({ userEmail: text })}
          keyboardType="default"
          style={styles.commonInput}
        />
      </View>
    );
  }

  setPassWord(text) {
    this.setState({ passWord: text });
  }

  setConfirmPass(text) {
    this.setState({ confirmPass: text });
  }

  setOldpPassWord(text) {
    this.setState({ oldPassWord: text });
  }

  renderResetPassInput() {
    return (
      <View>
        {this.renderCommonTextInput('password', 'Old Password', 'next', 'default', this.state.oldPassWord, (text) => this.setOldpPassWord(text))}
        {this.renderCommonTextInput('password', 'New Password', 'next', 'default', this.state.passWord, (text) => this.setPassWord(text))}
        {this.renderCommonTextInput('password', 'Confirm New Password', 'done', 'default', this.state.confirmPass, (text) => this.setConfirmPass(text))}
      </View>
    );
  }

  renderBottomView() {
    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => this.resetButtonPressed(this.props.isResetPassword)} style={styles.signUp}>
          <Text style={styles.signUpText}>{I18n.t((this.props.isResetPassword) ? 'Reset' : 'Recover')}</Text>
          <Ionicons name="ios-arrow-forward" size={20} color={Colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => NavigationService.goBack()} style={styles.login}>
          <Text style={styles.loginText}>{I18n.t('Back')}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <ScrollView>
        <KeyboardAvoidingView style={styles.container} behavior="position">
          {this.renderHeaderIcon()}
          {this.renderDetails()}
          {(this.props.isResetPassword) ? this.renderResetPassInput() : this.renderEmailInput()}
          {this.renderBottomView()}
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}
