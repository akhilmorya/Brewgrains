import React, { useState, useCallback } from 'react';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  ImageBackground,
  Image,
  KeyboardAvoidingView
} from 'react-native';

import firebase from 'react-native-firebase';
import DateTimePicker from '@react-native-community/datetimepicker';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Icons from 'react-native-vector-icons/Ionicons';
import Validators from '../../utils/validators';
import showToast from '../../utils/showToast';
import GoogleSignInContainer from '../googleAuth/GoogleSignInContainer';
import styles from './SignupScreenStyles';
import * as CONST from '../../utils/constants';
import I18n from '../../i18n/index';
import scale from '../../utils/scale';
import NavigationService from '../../services/navigationService';

const Analytics = firebase.analytics();

export default function SignupScreenComponent({ props }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [showPicker, togglePicker] = useState(false);
  const [dob, setDOB] = useState('');
  var nameRef, emailRef, passwordRef;

  const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } } };
  const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } } };
  const MaxDate = new Date();
  const pastYears = MaxDate.getFullYear() - 21;
  MaxDate.setFullYear(pastYears);

  const onSubmit = useCallback(() => {
    if (Validators.isEmpty(name)) {
      showToast('Name is empty');
    } else if (Validators.isEmpty(email)) {
      showToast('Email is empty');
    } else if (!Validators.validEmail(email)) {
      showToast('Email is invalid');
    } else if (Validators.isEmpty(password)) {
      showToast('Password is empty');
    } else if (!Validators.isValidPassword(password)) {
      showToast('Password is invalid');
    } else {
      const user = { user: { name, email, password } };
      Analytics.logEvent('login_method', { type: 'email', email, platform: Validators.platform() });
      props.userSignup(user);
    }
  }, [email, password, props]);


  const formatDate = useCallback((date) => {
    togglePicker(false);
    if (date === '') {
      return '';
    } else {
      const d = new Date(date);
      const month = `${d.getMonth() + 1}`;
      const day = `${d.getDate()}`;
      const year = d.getFullYear();
      const _date = [month, day, year].join('-');
      setDOB(_date);
    }
  }, [email, password, props]);

  const getVerticalOffset = () => {
    if ((nameRef && nameRef.focus()) || (emailRef && emailRef.focus())) {
      return (-50);
    } else if (passwordRef && passwordRef.focus()) {
      return (80);
    } else {
      return (170);
    }
  };

  const setRefrense = (type, input) => {
    switch (type) {
      case 'name':
        nameRef = input;
        break;
      case 'email':
        emailRef = input;
        break;
      case 'password':
        passwordRef = input;
        break;   
      default:
        break;
    }
  };


  const renderCommonTextInput = (type, label, _returnKeyType, _keyboardType, value, callBack) => {
    return (
      <View style={styles.textViewContainer}>
        <Text style={styles.fieldText}>{label}</Text>
        <TextInput
          ref={type}
          ref={(input) => setRefrense(input)}
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
  };

  const renderDOBInput = (label) => {
    return (
      <View style={styles.textViewContainer}>
        {(showPicker) ? (
          <DateTimePicker
            value={MaxDate}
            maximumDate={new Date(2300, 10, 20)}
            mode="date"
            is24Hour
            display="default"
            onChange={(event, date) => formatDate(date)}
          />
        ) : null}
        <Text style={styles.fieldText}>{label}</Text>
        <TouchableOpacity style={styles.dobContainer} onPress={() => togglePicker(true)}>
          <Text style={styles.dobText}>{dob}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderAddressInput = (label) => {
    return (
      <View style={styles.textViewContainer}>
        <Text style={styles.fieldText}>{label}</Text>
        <GooglePlacesAutocomplete
          placeholder=""
          minLength={2} // minimum length of text to search
          autoFocus={false}
          returnKeyType="search" // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
          keyboardAppearance="light" // Can be left out for default keyboardAppearance https://facebook.github.io/react-native/docs/textinput.html#keyboardappearance
          listViewDisplayed="auto" // true/false/undefined
          fetchDetails
          renderDescription={(row) => row.description} // custom description render
          onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
          }}
          getDefaultValue={() => ''}
          query={{
            key: 'AIzaSyBVfgqASjM86S5b0c58ASUCT5u6nQ2rGdc', //  AIzaSyCFVDbn4hLNghDB5EwgdOJJxbp-LkF83Hc,
            language: 'en', // language of the results
            types: '(cities)' // default: 'geocode'
          }}
          styles={{
            textInputContainer: {
              backgroundColor: 'transparent',
              borderBottomWidth: 0,
              borderTopWidth: 0,
              paddingLeft: 0,
              paddingRight: 0
            },
            textInput: {
              backgroundColor: 'transparent',
              fontSize: scale(20),
              color: CONST.BLACK_COLOR,
              fontFamily: CONST.fontFamily.Josef,
              borderBottomWidth: 1,
              borderBottomColor: CONST.WHITE_COLOR,
              paddingLeft: 0,
              paddingRight: 0,
              marginLeft: 0,
              marginRight: 0
            },
            predefinedPlacesDescription: {
              color: '#1faadb',
            }
          }}
          nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
          GoogleReverseGeocodingQuery={{
          }}
          GooglePlacesSearchQuery={{
            rankby: 'distance',
            type: 'cafe'
          }}
          GooglePlacesDetailsQuery={{
            fields: 'formatted_address',
          }}
          filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
          debounce={200}
        />
      </View>
    );
  };

  const renderHeader = () => {
    return (
      <Text style={styles.headerText}>Sign up</Text>
    );
  };

  const renderProfileView = () => {
    return (
      <View style={styles.profileContainer}>
        <ImageBackground source={CONST.PROFILE_BACK} style={styles.profileImageBack} />
        <TouchableOpacity style={styles.plusButton}>
          <Image source={CONST.PLUS_ICON} />
        </TouchableOpacity>
      </View>
    );
  };

  const renderInputView = () => {
    return (
      <View style={styles.inputContainer}>
        {renderCommonTextInput('name', I18n.t('signup_name'), 'next', 'default', name, setName)}
        {renderCommonTextInput('email', 'Email', 'next', 'email-address', email, setEmail)}
        {renderCommonTextInput('password', I18n.t('password'), 'next', 'default', password, setPassword)}
        {renderDOBInput(I18n.t('Select_Date'))}
        {renderAddressInput(I18n.t('signup_address'))}
      </View>
    );
  };

  const renderButtons = () => {
    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => onSubmit()} style={styles.signUp}>
          <Text style={styles.signUpText}>SIGN UP</Text>
          <Icons name="ios-arrow-forward" size={20} color={CONST.WHITE_COLOR} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => NavigationService.goBack()} style={styles.login}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderSocialButtons = () => {
    return (
      <View style={styles.socialIconContainer}>
        <TouchableOpacity style={styles.fbSocialIcon}>
          <Image source={CONST.FB_ICON} />
        </TouchableOpacity>
        <View>
          <GoogleSignInContainer props={props} />
        </View>
        {/* <TouchableOpacity style={styles.googleSocialIcon}>
          <Image source={CONST.GOOGLE_PLUS_ICON} />
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.instaSocialIcon}>
          <Image source={CONST.INSTA_ICON} />
        </TouchableOpacity>
      </View>
    );
  };

  const renderBottomView = () => {
    return (
      <View style={styles.bottomViewContainer}>
        {renderButtons()}
        <View style={styles.line} />
        <Text style={styles.orText}>Or connect with</Text>
        {renderSocialButtons()}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={CONST.SIGNUP_BACKGROUND} style={styles.imageBackgroundContainer}>
        {renderHeader()}
        <ScrollView contentContainerStyle={styles.signupDetails}>
          {renderProfileView()}
          {renderInputView()}
          {renderBottomView()}
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
