import { StyleSheet, Platform } from 'react-native';
import Fonts from '../../../theme/fonts';
import Colors from '../../../theme/colors';
import ApplicationStyles from '../../../theme/applicationStyles';
import scale, { verticalScale } from '../../../utils/scale';
import * as CONST from '../../../utils/constants';

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    flex: 1,
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
    marginTop: scale(20),
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
  emptyCrossIcon: {
    position: CONST.POSITION_ABSOLUTE,
    top: scale(15),
    right: scale(15)
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
    marginTop: Platform.OS === CONST.PLATFORM_IOS ? 0 : 2
  },
  productImage: {
    alignSelf: CONST.FLEX_START,
    position: CONST.POSITION_ABSOLUTE,
    top: scale(-80)
  },
  productDetailContainer: {
    marginHorizontal: 20
  },
  nameContainer: {
    flexDirection: CONST.ROW,
    justifyContent: CONST.SPACE_BETWEEN,
    alignSelf: CONST.CENTER
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
    marginTop: scale(30),
    marginBottom: scale(10),
  },
  productPrice: {
    marginTop: 15,
    color: CONST.PRIMARY_COLOR,
    fontSize: scale(18),
    fontFamily: CONST.fontFamily.JosefBold,
  },
  productDescription: {
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
    marginVertical: scale(2),
    marginBottom: verticalScale(10)
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
  },
  text: {
    ...Fonts.style.normal,
    textAlign: CONST.CENTER,
    color: Colors.text,
  },
  headerContainer: {
    flex: 3,
    marginTop: scale(32),
    borderWidth: 1,
    backgroundColor: '#ECE5E3',
    borderColor: CONST.LIGHT_GREY_BG,
    borderRadius: scale(30),
    shadowOpacity: 0.75,
    shadowRadius: scale(10),
    shadowColor: CONST.GREY_COLOR,
    shadowOffset: { height: 5, width: 5 },
    elevation: 5,
  },
  listStyle: {
    flex: 1,
    paddingHorizontal: 20
  },
  cellContainer: {
    marginTop: verticalScale(20),
    flexDirection: 'row',
    alignSelf: 'stretch',
    width: scale(345),
    marginHorizontal: 15,
    borderWidth: 1,
    borderColor: CONST.LIGHT_GREY_BG,
    borderRadius: 10,
    paddingRight: scale(16),
    paddingTop: scale(20),
  },
  imageStyle: {
    height: verticalScale(160),
    width: scale(40),
    marginHorizontal: scale(36)
  },
  description: {
    flex: 1,
    alignSelf: CONST.STRETCH,
  },
  nameRow: {
    flexDirection: CONST.ROW,
    marginTop: verticalScale(13)
  },
  row: {
    flexDirection: CONST.ROW,
    justifyContent: CONST.SPACE_BETWEEN,
    marginHorizontal: scale(16),
    marginVertical: verticalScale(5)
  },
  emptyContainer: {
    flex: 1,
    justifyContent: CONST.CENTER,
    alignItems: CONST.CENTER
  },
  cartText: {
    color: CONST.BLACK_COLOR,
    fontSize: scale(20),
    textAlign: CONST.CENTER,
    fontFamily: CONST.fontFamily.Josef,
    marginTop: scale(10)
  },
  cartDetailsText: {
    color: CONST.BORDER_COLOR_GREY_LIGHT,
    fontSize: scale(18),
    textAlign: CONST.CENTER,
    fontFamily: CONST.fontFamily.Josef,
    marginTop: scale(10),
    marginHorizontal: scale(50),
    lineHeight: scale(20)
  },
});
