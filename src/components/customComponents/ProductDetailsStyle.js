import { StyleSheet } from 'react-native';
import scale, { verticalScale } from '../../utils/scale';
import * as CONST from '../../utils/constants';
import { Colors, Fonts } from '../../theme';

export default StyleSheet.create({
  container: {
    padding: verticalScale(10),
    alignSelf: CONST.STRETCH,
    flexDirection: CONST.ROW,
    marginVertical: verticalScale(5),
    borderWidth: 1,
    borderColor: 'rgb(239,239,239)',
    borderRadius: scale(20),
    backgroundColor: CONST.WHITE_COLOR
  },
  imageContainer: {
    width: scale(100),
    height: verticalScale(170),
    alignItems: CONST.CENTER,
    justifyContent: CONST.CENTER,
  },
  detailsContainer: {
    flexDirection: CONST.COLUMN,
    alignItems: CONST.FLEX_START,
    flex: 1,
    paddingVertical: verticalScale(10)
  },
  productName: {
    color: CONST.GREY_COLOR,
    fontSize: scale(20),
    fontFamily: CONST.fontFamily.JosefBold,
  },
  productPrice: {
    marginTop: 15,
    color: CONST.PRIMARY_COLOR,
    fontSize: scale(18),
    fontFamily: CONST.fontFamily.JosefBold,
  },
  productDescription: {
    width: scale(200),
    marginTop: 15,
    textAlign: CONST.JUSTIFY,
    color: CONST.GREY_DARK,
    fontSize: scale(15),
    fontFamily: CONST.fontFamily.Josef,
  },
  productImage: {
    alignSelf: CONST.CENTER,
    height: verticalScale(150),
    width: scale(40),
    alignItems: CONST.CENTER,
    justifyContent: CONST.CENTER,
    marginVertical: verticalScale(10)
  },
  dotIcon: {
    position: CONST.POSITION_ABSOLUTE,
    top: 10,
    right: 10,
    padding: 10
  },
  heartIcon: {
    position: CONST.POSITION_ABSOLUTE,
    top: 10,
    right: 10,
    paddingRight: scale(5),
    paddingTop: scale(5)
  },
  qtTxt: {
    color: Colors.BORDER_COLOR_GREY_LIGHT,
    fontSize: scale(14),
    fontFamily: Fonts.fontFamily.JosefBold,
    paddingTop: scale(10),
  },
  blackTxt: {
    color: Colors.BORDER_COLOR_GREY_LIGHT,
    fontSize: scale(14),
    fontFamily: Fonts.fontFamily.JosefBold,
  },
  dateDescription: {
    textAlign: CONST.JUSTIFY,
    color: CONST.GREY_DARK,
    fontSize: scale(15),
    fontFamily: CONST.fontFamily.Josef,
    marginTop: scale(10)
  },
  textCont: {
    paddingTop: scale(10),
  }
});
