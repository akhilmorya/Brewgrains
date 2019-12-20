import { StyleSheet } from 'react-native';
import Fonts from '../../../theme/fonts';
import Colors from '../../../theme/colors';
import ApplicationStyles from '../../../theme/applicationStyles';
import scale, { verticalScale } from '../../../utils/scale';
import * as CONST from '../../../utils/constants';

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    marginHorizontal: 15
  },
  headerImage: {
    alignSelf: CONST.CENTER,
    marginVertical: verticalScale(80)
  },
  detailsView: {
    marginTop: verticalScale(0)
  },
  detailsHeaderText: {
    fontSize: scale(19),
    color: Colors.blackHeader,
    fontFamily: Fonts.fontFamily.JosefBold
  },
  detailsDescription: {
    fontSize: scale(15),
    color: Colors.BORDER_COLOR_GREY_LIGHT,
    fontFamily: Fonts.fontFamily.Josef,
    marginTop: verticalScale(15),
    marginRight: scale(30)
  },
  textViewContainer: {
    marginTop: verticalScale(40)
  },
  fieldText: {
    fontSize: scale(20),
    color: Colors.BORDER_COLOR_GREY_MEDIUM,
    fontFamily: Fonts.fontFamily.Josef
  },
  commonInput: {
    borderBottomWidth: 1,
    justifyContent: CONST.CENTER,
    alignItems: CONST.CENTER,
    height: scale(35),
    borderBottomColor: Colors.BORDER_COLOR_GREY,
    fontSize: scale(16),
    fontFamily: Fonts.fontFamily.JosefSemiBold,
    textAlign: CONST.POSITION_LEFT,
    marginRight: scale(50)
  },
  buttonContainer: {
    marginTop: verticalScale(40),
    flexDirection: CONST.ROW,
    justifyContent: CONST.SPACE_BETWEEN,
    alignItems: CONST.CENTER,
  },
  signUp: {
    flexDirection: CONST.ROW,
    alignItems: CONST.CENTER,
    padding: 5,
    paddingLeft: 0
  },
  signUpText: {
    color: Colors.primary,
    fontSize: scale(17),
    fontWeight: CONST.BOLD,
    fontFamily: Fonts.fontFamily.JosefSemiBold,
    marginRight: 10,
  },
  login: {
    justifyContent: CONST.CENTER,
    alignItems: CONST.CENTER,
    padding: 5,
    paddingRight: 0
  },
  loginText: {
    color: Colors.BORDER_COLOR_GREY_LIGHT,
    fontSize: scale(17),
    fontWeight: CONST.BOLD,
    fontFamily: Fonts.fontFamily.JosefSemiBold,
  },
  headerImageReset: {
    alignSelf: CONST.CENTER,
    marginTop: verticalScale(50),
    marginBottom: verticalScale(40)
  },
});
