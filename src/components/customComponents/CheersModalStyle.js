import { StyleSheet, Dimensions } from 'react-native';
import ApplicationStyles from '../../theme/applicationStyles';
import scale from '../../utils/scale';
import * as CONST from '../../utils/constants';
const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    flex: 1,
    backgroundColor: CONST.LIGHT_OFF_COLOR
  },
  modalContainer: {
    flex: 1,
    alignItems: CONST.CENTER,
    justifyContent: CONST.CENTER
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
  crossIcon: {
    position: CONST.POSITION_ABSOLUTE,
    top: scale(20),
    right: scale(20)
  }
});
