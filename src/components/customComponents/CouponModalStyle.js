import { StyleSheet, Dimensions } from 'react-native';
import ApplicationStyles from '../../theme/applicationStyles';
import scale, { verticalScale } from '../../utils/scale';
import * as CONST from '../../utils/constants';

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    flex: 1,
    backgroundColor: CONST.LIGHT_OFF_COLOR,
  },
  modalContainer: {
    flex: 1,
  },
  alertContainer: {
    alignItems: CONST.CENTER
  },
  orderText: {
    color: CONST.GREY_DARK,
    fontSize: scale(18),
    marginTop: scale(10),
    fontFamily: CONST.fontFamily.JosefSemiBold,
  },
  cheerText: {
    color: CONST.PRIMARY_COLOR,
    fontSize: scale(35),
    marginVertical: scale(10),
    fontFamily: CONST.fontFamily.JosefSemiBold,
  },
  cellContainer: {
    justifyContent: CONST.CENTER,
    marginHorizontal: scale(20),
    padding: scale(20),
    marginBottom: scale(10),
    borderRadius: scale(10),
    backgroundColor: CONST.WHITE_COLOR
  },
  topInfo: {
    flexDirection: CONST.ROW,
    alignItems: CONST.CENTER
  },
  brandsHeader: {
    flexDirection: CONST.ROW,
    justifyContent: CONST.SPACE_BETWEEN,
    alignItems: CONST.CENTER,
    marginTop: scale(30)
  },
  brandsText: {
    color: CONST.BLACK_COLOR,
    fontSize: scale(22),
    fontFamily: CONST.fontFamily.JosefBold,
    marginLeft: scale(15)
  },
  codeText: {
    color: CONST.BLACK_COLOR,
    fontSize: scale(20),
    fontFamily: CONST.fontFamily.JosefBold,
    marginLeft: scale(15)
  },
  saveText: {
    color: CONST.BORDER_COLOR_GREY_LIGHT,
    fontSize: scale(20),
    fontFamily: CONST.fontFamily.Josef,
    marginLeft: scale(15)
  },
  description: {
    color: CONST.BORDER_COLOR_GREY_LIGHT,
    fontSize: scale(18),
    fontFamily: CONST.fontFamily.Josef,
    marginLeft: scale(15),
    marginTop: scale(10)
  },
  saveValueText: {
    color: CONST.PRIMARY_COLOR,
    fontSize: scale(20),
    fontFamily: CONST.fontFamily.Josef,
    marginLeft: scale(15)
  },
  expiresText: {
    color: CONST.PRIMARY_COLOR,
    fontSize: scale(15),
    fontFamily: CONST.fontFamily.Josef,
    marginLeft: scale(15),
    marginTop: scale(10)

  },
  crossIcon: {
    marginRight: scale(15)
  },
  buttonContainer: {
    flexDirection: CONST.ROW,
    justifyContent: CONST.SPACE_BETWEEN,
    alignItems: 'center',
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
  listContainer: {
    flex: 1,
    marginTop: scale(10),
    marginBottom: scale(10)
  },
});
