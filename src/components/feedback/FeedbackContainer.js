import React, { Component } from 'react';
import { connect } from 'react-redux';
import FeedbackComponent from './FeedbackComponent';
import * as userActions from '../../actions/userActions';

class FeedbackContainer extends Component {
  static navigationOptions = {
    title: 'My Bar',
  };

  render() {
    return (
      <FeedbackComponent {...this.props} />
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
)(FeedbackContainer);
