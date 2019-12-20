import { StyleSheet, Platform } from 'react-native';
import ApplicationStyles from '../../../theme/applicationStyles';
import scale from '../../../utils/scale';
import * as CONST from '../../../utils/constants';

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    flex: 1,
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
    marginTop: Platform.OS === CONST.PLATFORM_IOS ? 0 : 20
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
  },
  productImage: {
    alignSelf: CONST.CENTER,
    position: CONST.POSITION_ABSOLUTE,
    top: scale(-80)
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
    fontSize: scale(18),
    fontFamily: CONST.fontFamily.JosefBold,
  },
  reviewsText: {
    color: CONST.GREY_DARK,
    fontSize: scale(18),
    fontFamily: CONST.fontFamily.JosefBold,
    marginLeft: scale(20)
  },
  starText: {
    color: CONST.GREY_DARK,
    fontSize: scale(15),
    fontFamily: CONST.fontFamily.Josef,
    marginTop: 2,
    marginLeft: scale(5)
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
    textAlign: 'justify',
    color: CONST.GREY_DARK,
    fontSize: scale(15),
    fontFamily: CONST.fontFamily.Josef,
  },
  loadMore: {
    alignSelf: CONST.CENTER
  },
  pickerView: {
    flexDirection: CONST.ROW,
    alignItems: CONST.CENTER,
    marginVertical: scale(2)
  },
  quantityText: {
    color: CONST.BORDER_COLOR_GREY_LIGHT,
    fontSize: scale(15),
    fontFamily: CONST.fontFamily.Josef,
  },
  pickerItemStyle: {
    height: scale(50),
    fontSize: scale(15),
    fontFamily: CONST.fontFamily.Josef,
  },
  reviewCell: {
    borderBottomColor: CONST.LIGHT_GREY_BG,
    borderBottomWidth: 1,
    paddingVertical: scale(10),
    marginHorizontal: scale(10)
  },
  detailContainer: {
    flexDirection: CONST.ROW,
    justifyContent: CONST.SPACE_BETWEEN
  },
  leftDetail: {
    marginLeft: scale(15)
  },
  name: {
    color: CONST.BORDER_COLOR_GREY_LIGHT,
    fontSize: scale(15),
    fontFamily: CONST.fontFamily.JosefBold,
  },
  date: {
    color: CONST.BORDER_COLOR_GREY_LIGHT,
    fontSize: scale(13),
    fontFamily: CONST.fontFamily.Josef,
    marginTop: scale(10)
  },
  reviewMessage: {
    color: CONST.BLACK_COLOR,
    fontSize: scale(15),
    fontFamily: CONST.fontFamily.JosefBold,
    marginTop: scale(10)
  },
  rightDetail: {
    marginRight: scale(15)
  },
  starView: {
    flexDirection: CONST.ROW,
    justifyContent: CONST.CENTER,
    alignItems: CONST.CENTER,
    backgroundColor: CONST.GREEN_COLOR,
    borderRadius: scale(15),
    paddingHorizontal: scale(10),
    paddingVertical: scale(5)
  },
  starCount: {
    marginHorizontal: scale(5),
    color: CONST.WHITE_COLOR,
    fontSize: scale(15),
    fontFamily: CONST.fontFamily.Josef,
    marginBottom: Platform.OS === CONST.PLATFORM_IOS ? 0 : 3,
  },
  beerInfo: {
    flexDirection: CONST.ROW,
    justifyContent: CONST.SPACE_BETWEEN,
    marginVertical: scale(5)
  },
  beerType: {
    color: CONST.BORDER_COLOR_GREY_LIGHT,
    fontSize: scale(15),
    fontFamily: CONST.fontFamily.Josef,
  },
  iPA: {
    color: CONST.BLACK_COLOR,
    fontSize: scale(15),
    fontFamily: CONST.fontFamily.Josef,
  },
  beerDescription: {
    marginTop: scale(10)
  }
});
