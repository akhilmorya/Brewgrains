import { StyleSheet, Dimensions } from 'react-native';
import ApplicationStyles from '../../theme/applicationStyles';
import scale from '../../utils/scale';
import * as CONST from '../../utils/constants';
const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    flex: 1,
    backgroundColor: CONST.TRANSPARENT_COLOR
  },
  modalContainer: {
    flex: 1,
    alignItems: CONST.CENTER,
    justifyContent: CONST.FLEX_END
  },
  alertContainer: {
    alignItems: CONST.CENTER
  },
  topView: {
    width: width - 20,
    justifyContent: CONST.CENTER,
    alignItems: CONST.CENTER,
    backgroundColor: CONST.WHITE_COLOR,
    marginHorizontal: scale(6),
    borderRadius: scale(20),
    padding: scale(20)
  },
  bottomView: {
    width: width - 20,
    marginVertical: scale(10),
    justifyContent: CONST.CENTER,
    alignItems: CONST.CENTER,
    backgroundColor: CONST.WHITE_COLOR,
    marginHorizontal: scale(6),
    borderRadius: scale(20),
    padding: scale(20)
  },
  messageText: {
    color: CONST.GREY_DARK,
    fontSize: scale(16),
    lineHeight: scale(16),
    textAlign: 'center',
    fontFamily: CONST.fontFamily.JosefSemiBold,
  },
  horizontalLine: {
    height: 1,
    borderWidth: 1,
    width: width - 100,
    marginTop: scale(20),
    opacity: 0.75,
    borderColor: CONST.LIGHT_GREY_COLOR,
  },
  verticalLine: {
    borderWidth: 1,
    width: 1,
    height: scale(50),
    marginBottom: 10,
    opacity: 0.75,
    borderColor: CONST.LIGHT_GREY_COLOR,
  },
  buttonContainer: {
    flexDirection: CONST.ROW,
    justifyContent: CONST.SPACE_BETWEEN,
    alignItems: CONST.CENTER,
  },
  buttonText: {
    color: CONST.GREY_DARK,
    fontSize: scale(18),
    fontFamily: CONST.fontFamily.JosefBold,
  },
  leftButton: {
    marginTop: scale(10),
    marginHorizontal: scale(50)
  },
  rightButton: {
    marginTop: scale(10),
    marginHorizontal: scale(50)
  },
  buyContainer: {
    width: width - 20,
    flexDirection: CONST.ROW,
    justifyContent: CONST.SPACE_BETWEEN,
    alignItems: CONST.CENTER,
    backgroundColor: CONST.WHITE_COLOR,
    marginHorizontal: scale(6),
    borderRadius: scale(20),
    padding: scale(20)
  },
  buyButton: {
    justifyContent: CONST.CENTER,
    alignItems: CONST.CENTER,
    marginLeft: scale(30)
  },
  addToCartButton: {
    justifyContent: CONST.CENTER,
    alignItems: CONST.CENTER,
    marginRight: scale(30)
  },
  buyText: {
    color: CONST.GREY_DARK,
    fontSize: scale(18),
    marginTop: scale(10),
    fontFamily: CONST.fontFamily.JosefSemiBold,
  }
});
