import { StyleSheet } from 'react-native';
import ApplicationStyles from '../../theme/applicationStyles';
import * as CONST from '../../utils/constants';
import scale, { verticalScale } from '../../utils/scale';


export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    flex: 1,
  },
  web: {
    width: '100%',
    height: '100%',
    marginTop: verticalScale(50)
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
    position: CONST.POSITION_ABSOLUTE,
    top: 10,
    right: 10
  },
  aboutUsText: {
    color: CONST.BORDER_COLOR_GREY_LIGHT,
    fontSize: scale(15),
    textAlign: CONST.JUSTIFY,
    fontFamily: CONST.fontFamily.Josef,
    marginHorizontal: scale(20),
    lineHeight: scale(25)
  },
  aboutUs: {
    marginTop: scale(20)
  }
});
