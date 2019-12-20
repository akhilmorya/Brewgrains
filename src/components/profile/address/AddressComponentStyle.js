import { StyleSheet } from 'react-native';
import * as THEME from '../../../theme';
import ApplicationStyles from '../../../theme/applicationStyles';
import * as CONST from '../../../utils/constants';
import scale, { verticalScale } from '../../../utils/scale';

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
  },
  markerFixed: {
    left: '50%',
    marginLeft: -24,
    marginTop: -48,
    position: CONST.POSITION_ABSOLUTE,
    top: '50%'
  },
  marker: {
    height: 48,
    width: 48
  },
  addressDetailsContainer: {
    height: verticalScale(100),
    alignSelf: CONST.STRETCH,
    backgroundColor: 'rgb(238,238,238)'
  },
  addressDetails: {
    margin: scale(10),
    height: verticalScale(80),
    padding: scale(20),
    borderRadius: scale(20),
    borderWidth: 1,
    borderColor: 'rgb(239,239,239)',
    backgroundColor: CONST.WHITE_COLOR,
    alignSelf: CONST.STRETCH,
    flexDirection: CONST.ROW
  },
  textDetails: {
    flexDirection: CONST.COLUMN,
    paddingHorizontal: verticalScale(10)
  },
  addressHeader: {
    fontSize: scale(14.5),
    fontFamily: THEME.Fonts.fontFamily.JosefSemiBold,
    color: THEME.Colors.blackHeader
  },
  addressBody: {
    fontSize: scale(14.5),
    fontFamily: THEME.Fonts.fontFamily.Josef,
    color: THEME.Colors.BORDER_COLOR_GREY_LIGHT
  },
  crossIcon: {
    position: CONST.POSITION_ABSOLUTE,
    padding: 10,
    top: 0,
    right: 5
  }
});
