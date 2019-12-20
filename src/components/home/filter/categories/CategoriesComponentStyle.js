import { StyleSheet, PixelRatio, Platform, Dimensions } from 'react-native';
import Fonts from '../../../../theme/fonts';
import Colors from '../../../../theme/colors';
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
  searchContainer: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: CONST.BORDER_COLOR_GREY_LIGHT,
    borderRadius: 10,
    marginHorizontal: scale(10),
    backgroundColor: CONST.WHITE_COLOR
  },
  searchInput: {
    justifyContent: CONST.CENTER,
    alignItems: CONST.CENTER,
    height: scale(50),
    fontSize: scale(20),
    fontFamily: CONST.fontFamily.Josef,
    marginHorizontal: scale(35),
    color: CONST.GREY_DARK,
  },
  searchIcon: {
    position: CONST.POSITION_ABSOLUTE,
    top: 15,
    left: 10,
  },
  filterIcon: {
    position: CONST.POSITION_ABSOLUTE,
    top: 15,
    right: 10,
  },
  listContainer: {
    flex: 1,
    marginTop: scale(10),
    marginBottom: scale(10)
  },
  cell: {
    flex: 1,
    justifyContent: CONST.CENTER,
    marginVertical: scale(10)
  },
  brand: {
    color: CONST.BORDER_COLOR_GREY_LIGHT,
    fontSize: scale(20),
    fontFamily: CONST.fontFamily.JosefBold,
    marginLeft: scale(15)
  },
});
