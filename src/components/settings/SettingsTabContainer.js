import React, { Component } from 'react';
import { connect } from 'react-redux';
import SettingsTabComponent from './SettingsTabComponent';
import * as userActions from '../../actions/userActions';

class SettingsTabContainer extends Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    return (
      <SettingsTabComponent {...this.props} />
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsTabContainer);
