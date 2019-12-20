import { StyleSheet, Dimensions } from 'react-native';
import ApplicationStyles from '../../../../theme/applicationStyles';
import scale, { verticalScale } from '../../../../utils/scale';
import * as CONST from '../../../../utils/constants';

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    backgroundColor: CONST.LIGHT_OFF_COLOR,
    flex: 1,
  },
  brandsHeader: {
    flexDirection: CONST.ROW,
    justifyContent: CONST.SPACE_BETWEEN,
    alignItems: CONST.CENTER,
    marginTop: scale(20)
  },
  brandsText: {
    color: CONST.BLACK_COLOR,
    fontSize: scale(22),
    fontFamily: CONST.fontFamily.JosefBold,
    marginLeft: scale(15)
  },
  crossIcon: {
    marginRight: scale(15)
  },
  productContainer: {
    marginHorizontal: scale(20)
  },
  ratingContainer: {
    marginVertical: scale(20),
    paddingVertical: scale(10),
    backgroundColor: CONST.WHITE_COLOR
  },
  rateText: {
    color: CONST.BORDER_COLOR_GREY_LIGHT,
    fontSize: scale(15),
    marginTop: scale(10),
    textAlign: CONST.CENTER,
    fontFamily: CONST.fontFamily.Josef,
  },
  reviewText: {
    color: CONST.BLACK_COLOR,
    fontSize: scale(15),
    marginLeft: scale(20),
    marginTop: scale(10),
    fontFamily: CONST.fontFamily.Josef,
  },
  reviewTitleText: {
    color: CONST.BORDER_COLOR_GREY_LIGHT,
    fontSize: scale(15),
    marginLeft: scale(20),
    marginTop: scale(10),
    fontFamily: CONST.fontFamily.Josef,
  },
  textInputContainer: {
    fontFamily: CONST.fontFamily.Josef,
    borderBottomColor: CONST.BORDER_COLOR_GREY_LIGHT,
    borderBottomWidth: 1,
    textAlign: CONST.POSITION_LEFT,
    fontSize: 16,
    textAlignVertical: CONST.CENTER,
    height: 50,
    width: width - 50,
    marginBottom: 10,
    alignSelf: CONST.CENTER
  },
  buttonContainer: {
    flexDirection: CONST.ROW,
    justifyContent: CONST.SPACE_BETWEEN,
    alignItems: CONST.CENTER,
    marginTop: verticalScale(60),
    marginBottom: verticalScale(50)
  },
  submit: {
    flexDirection: CONST.ROW,
    alignItems: CONST.CENTER,
    padding: 5,
    paddingLeft: 0,
    marginLeft: scale(20)
  },
  signUpText: {
    color: CONST.PRIMARY_COLOR,
    fontSize: scale(16),
    fontWeight: CONST.BOLD,
    fontFamily: CONST.fontFamily.Josef,
    marginRight: 10,
  },
  back: {
    justifyContent: CONST.CENTER,
    alignItems: CONST.CENTER,
    padding: 5,
    paddingRight: 0,
    marginRight: scale(20)
  },
  loginText: {
    color: CONST.BORDER_COLOR_GREY,
    fontSize: scale(16),
    fontWeight: CONST.BOLD,
    fontFamily: CONST.fontFamily.Josef,
  },
});
