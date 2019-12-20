import React, { Component } from 'react';
import { connect } from 'react-redux';
import ForgotPasswordComponent from './ForgotPasswordComponent';
import * as userActions from '../../../actions/userActions';

class ForgotPasswordContainer extends Component {
  static navigationOptions = {
    title: 'Profile',
  };

  render() {
    const isResetPassword = this.props.navigation.getParam('isResetPassword', false);
    return (
      <ForgotPasswordComponent {...this.props} isResetPassword={isResetPassword} />
    );
  }
}

const mapStateToProps = (state) => ({
  message: state.UserLoginReducer.message,
  userData: state.UserLoginReducer.user,
});

const mapDispatchToProps = (dispatch) => ({
  userLogout: () => {
    return dispatch(userActions.userLogout());
  },
  forgotPassword: (data) => {
    return dispatch(userActions.forgotPassword(data));
  },
  updateUserProfile: (profileData, updateUserProfileSuccess) => dispatch(userActions.updateUserProfile(profileData, updateUserProfileSuccess)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPasswordContainer);
