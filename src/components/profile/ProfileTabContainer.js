import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileTabComponent from './ProfileTabComponent';
import * as userActions from '../../actions/userActions';

class ProfileTabContainer extends Component {
  static navigationOptions = {
    title: 'Profile',
  };

  render() {
    return (
      <ProfileTabComponent {...this.props} />
    );
  }
}

const mapStateToProps = (state) => ({
  message: state.UserLoginReducer.message,
  userData: state.UserLoginReducer.user,
  signedUrl: state.UserLoginReducer.signedUrl
});

const mapDispatchToProps = (dispatch) => ({
  userLogout: () => {
    return dispatch(userActions.userLogout());
  },
  getImgUrl: (data) => {
    return dispatch(userActions.userImage(data));
  },
  uploadImage: (data) => {
    return dispatch(userActions.uploadImage(data));
  },
  updateUserProfile: (profileData, updateUserProfileSuccess) => dispatch(userActions.updateUserProfile(profileData, updateUserProfileSuccess)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileTabContainer);
