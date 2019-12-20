import { StyleSheet, Dimensions } from 'react-native';
import ApplicationStyles from '../../../theme/applicationStyles';
import scale from '../../../utils/scale';
import * as CONST from '../../../utils/constants';

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
  orderPlaced: {
    flexDirection: CONST.ROW,
    justifyContent: CONST.SPACE_BETWEEN,
    alignItems: CONST.CENTER,
    marginTop: scale(20)
  },
  leftDetail: {
    marginLeft: scale(15)
  },
  rightDetail: {
    alignItems: CONST.FLEX_END,
    marginRight: scale(15)
  },
  orderText: {
    color: CONST.BORDER_COLOR_GREY_LIGHT,
    fontSize: scale(15),
    fontFamily: CONST.fontFamily.Josef,
  },
  orderTotalText: {
    color: CONST.BLACK_COLOR,
    fontSize: scale(15),
    fontFamily: CONST.fontFamily.Josef,
    marginBottom: scale(20)
  },
  orderNo: {
    color: CONST.PRIMARY_COLOR,
    fontSize: scale(15),
    fontFamily: CONST.fontFamily.JosefBold,
    marginTop: scale(10),
    alignSelf: CONST.CENTER
  },
  address: {
    marginHorizontal: scale(15),
    marginTop: scale(20)
  },
  addressDetail: {
    lineHeight: scale(25),
    marginTop: scale(5),
    color: CONST.BLACK_COLOR,
    fontSize: scale(15),
    fontFamily: CONST.fontFamily.Josef,
    alignSelf: CONST.STRETCH,
    padding: scale(20),
    backgroundColor: CONST.WHITE_COLOR,
    borderRadius: 5,
  },
  priceDetail: {
    marginHorizontal: scale(15),
    marginTop: scale(20)
  },
  priceDetailContainer: {
    marginTop: scale(5),
    backgroundColor: CONST.WHITE_COLOR,
    borderRadius: 5,
  },
  row: {
    marginHorizontal: scale(20),
    marginTop: scale(20),
    flexDirection: CONST.ROW,
    justifyContent: CONST.SPACE_BETWEEN,
    alignItems: CONST.CENTER,
  },
  dottedLine: {
    marginHorizontal: scale(20),
    marginTop: scale(20),
    borderStyle: 'dotted',
    borderWidth: 1,
    borderRadius: 1,
    alignSelf: CONST.STRETCH,
    borderColor: CONST.BORDER_COLOR_GREY_LIGHT
  },
  rateReview: {
    flexDirection: CONST.ROW,
    justifyContent: CONST.SPACE_BETWEEN,
    alignItems: CONST.CENTER,
    marginTop: scale(20)
  },
  rateText: {
    color: CONST.PRIMARY_COLOR,
    fontSize: scale(15),
    fontFamily: CONST.fontFamily.JosefBold,
    marginLeft: scale(15)
  },
  listContainer: {
    flex: 1,
    marginTop: scale(10),
    marginHorizontal: scale(20)
  }
});
