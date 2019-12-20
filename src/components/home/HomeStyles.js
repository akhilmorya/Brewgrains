import { StyleSheet, Platform } from 'react-native';
import ApplicationStyles from '../../theme/applicationStyles';
import scale, { verticalScale } from '../../utils/scale';
import * as CONST from '../../utils/constants';

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    flex: 1,
    backgroundColor: CONST.LIGHT_OFF_COLOR
  },
  headerContainer: {
    flexDirection: CONST.ROW,
    justifyContent: CONST.SPACE_BETWEEN,
    alignItems: CONST.CENTER,
    height: scale(50),
    marginTop: scale(10)
  },
  notificationIcon: {
    marginLeft: 10
  },
  cartIcon: {
    marginRight: 10
  },
  cartsIcon: {
  },
  notiIcon: {
  },
  searchContainer: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: CONST.BORDER_COLOR_GREY_LIGHT,
    borderRadius: 10,
    marginHorizontal: scale(10),
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
  dotIcon: {
    marginTop: Platform.OS === CONST.PLATFORM_IOS ? 0 : 10,
    padding: scale(20)
  },
  cellContainer: {
    marginTop: scale(100),
    marginHorizontal: 15,
    borderWidth: 1,
    borderColor: CONST.LIGHT_GREY_BG,
    borderRadius: 10,
    marginBottom: 20,
    paddingTop: scale(100),
    paddingBottom: scale(20),
    backgroundColor: CONST.WHITE_COLOR
  },
  productImage: {
    alignSelf: CONST.CENTER,
    position: CONST.POSITION_ABSOLUTE,
    top: scale(-80),
    height: verticalScale(150),
    width: scale(40)
  },
  productDetailContainer: {
    marginHorizontal: 20
  },
  nameContainer: {
    flexDirection: CONST.ROW,
    justifyContent: CONST.SPACE_BETWEEN,
    alignItems: CONST.CENTER
  },
  productName: {
    color: CONST.GREY_DARK,
    fontSize: scale(20),
    fontFamily: CONST.fontFamily.JosefBold,
  },
  listContainer: {
    flex: 1,
    marginTop: scale(10),
    marginBottom: scale(10)
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
  loadMore: {
    alignSelf: CONST.CENTER
  }
});
