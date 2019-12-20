import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, TextInput, Dimensions, ScrollView, KeyboardAvoidingView
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { Rating } from 'react-native-ratings';
import NavigationService from '../../../../services/navigationService';
import ProductDetails from '../../../customComponents/ProductDetails';
import showToast from '../../../../utils/showToast';
import * as CONST from '../../../../utils/constants';
import * as productActions from '../../../../actions/productActions';

import styles from './ReviewProductComponentStyle';


class ReviewProductComponent extends Component {
  constructor(props) {
    super(props);
    this.productData = this.props.navigation.state.params.productData;
    this.orderDetails = this.props.navigation.state.params.orderDetails;
    this.state = {
      ratingCount: 0,
      feedbackMessage: ''
    };
  }

  componentDidMount() {
  }

  onPressCrossIcon() {
    this.props.navigation.goBack();
  }

  onPressArrow() {
  }

  onSubmitFeedbackSuccess() {
    showToast('Feedback sumbitted sucessfully!');
    this.props.navigation.goBack();
  }

  onSubmitFeedbackFailure() {
    showToast('Feedback has already submitted!');
    this.props.navigation.goBack();
  }

  onSubmitReview() {
    const feedbackObject = {};
    feedbackObject['productId'] = this.productData.id;
    feedbackObject['description'] = this.state.feedbackMessage;
    feedbackObject['rating'] = this.state.ratingCount;
    this.props.submitProductFeedback(feedbackObject, () => this.onSubmitFeedbackSuccess(), () => this.onSubmitFeedbackFailure());
  }

  ratingCompleted(rating) {
    this.setState({ ratingCount: rating });
  }

  renderProductDetails() {
    return (
      <View style={styles.productContainer}>
        <ProductDetails
          item={this.productData}
          description={this.productData.description}
          image_url={this.productData.image_url}
          name={this.productData.name}
          price={this.productData.price}
          quantity={1}
          delivery_date={this.orderDetails.delivery_date}
          index
          isOrder
          hideTripleDot
          onCellPressed={() => {}}
        />
      </View>
    );
  }

  renderReviewHeader() {
    return (
      <View style={styles.brandsHeader}>
        <Text style={styles.brandsText}>Rate & Review</Text>
        <TouchableOpacity onPress={() => this.onPressCrossIcon()} style={styles.crossIcon}>
          <Icons name="ios-close" size={40} color={CONST.BORDER_COLOR_GREY_LIGHT} />
        </TouchableOpacity>
      </View>
    );
  }

  renderRatingContainer() {
    return (
      <View style={styles.ratingContainer}>
        <Rating
          showRating={false}
          type="custom"
          ratingColor="#ed9121"
          ratingTextColor="#000000"
          ratingCount={5}
          startingValue={1}
          imageSize={25}
          containerStyle={{ padding: 20 }}
          onFinishRating={(rating) => this.ratingCompleted(rating)}
        />
        <Text style={styles.rateText}>You are rating this product</Text>
      </View>
    );
  }

  renderReviewContainer() {
    return (
      <View style={styles.bottomContainer}>
        <Text style={styles.reviewText}>Write a review for this product</Text>
        <Text style={styles.reviewTitleText}>Review Title</Text>
        <TextInput
          numberOfLines={2}
          rowSpan={2}
          blurOnSubmit
          onChangeText={(text) => this.setState({ feedbackMessage: text })}
          onEndEditing={() => {}}
          onSubmitEditing={() => {}}
          style={styles.textInputContainer}
          bordered
          placeholder="Taste of this product is good."
          placeholderTextColor="#2B2D42"
          autoCorrect={false}
        />
      </View>
    );
  }

  renderBottomView() {
    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => this.onSubmitReview()} style={styles.submit}>
          <Text style={styles.signUpText}>SUBMIT</Text>
          <Ionicons name="ios-arrow-forward" size={20} color={CONST.PRIMARY_COLOR} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => NavigationService.goBack()} style={styles.back}>
          <Text style={styles.loginText}>BACK</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.renderReviewHeader()}
        {this.renderProductDetails()}
        <KeyboardAvoidingView behavior="position">
          {this.renderRatingContainer()}
          {this.renderReviewContainer()}
        </KeyboardAvoidingView>
        {this.renderBottomView()}
      </ScrollView>

    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.BrandReducer.filters,
  allBrands: state.BrandReducer.allBrands,
  allCategories: state.BrandReducer.allCategories,
});

const mapDispatchToProps = (dispatch) => ({
  submitProductFeedback: (data, submitFeedbackSuccess, onSubmitFeedbackFailure) => {
    return dispatch(productActions.submitProductFeedback(data, submitFeedbackSuccess, onSubmitFeedbackFailure));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewProductComponent);