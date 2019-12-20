import { StyleSheet } from 'react-native';
import ApplicationStyles from '../../../theme/applicationStyles';
import scale, { verticalScale } from '../../../utils/scale';
import { Colors, Fonts } from '../../../theme';

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    padding: scale(10),
    backgroundColor: Colors.white,
  },
  listContainer: {
    marginTop: 5,
    flex: 1
  },
  heading: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: scale(16),
    paddingTop: scale(30),
  },
  numberTxt: {
    color: Colors.BORDER_COLOR_GREY_LIGHT,
    fontSize: scale(16),
    fontFamily: Fonts.fontFamily.Josef,
  },
  detailsTxt: {
    color: Colors.secondary,
    fontSize: scale(16),
    fontFamily: Fonts.fontFamily.Josef,
  },
  emptyText: {
    color: Colors.blackHeader,
    fontSize: scale(24),
    fontFamily: Fonts.fontFamily.Josef,
    marginTop: verticalScale(10)
  }
});
