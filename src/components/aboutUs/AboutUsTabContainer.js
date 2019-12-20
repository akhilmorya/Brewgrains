import React, { Component } from 'react';
import { connect } from 'react-redux';
import AboutUsTabComponent from './AboutUsTabComponent';
import * as userActions from '../../actions/userActions';

class AboutUsTabContainer extends Component {
  static navigationOptions = {
    title: 'My Payment',
  };

  constructor(props) {
    super(props);
    this.props.getAboutUsPage();
  }

  render() {
    return (
      <AboutUsTabComponent
        {...this.props}
        aboutUsPageURL={this.props.aboutUsPageURL}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  message: state.UserLoginReducer.message,
  aboutUsPageURL: state.UserLoginReducer.aboutUsPageURL,
});

const mapDispatchToProps = (dispatch) => ({
  getAboutUsPage: () => {
    return dispatch(userActions.getAboutUsPage());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutUsTabContainer);
