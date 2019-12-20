import { StyleSheet, Dimensions } from 'react-native';
import scale from '../../../utils/scale';
import * as CONST from '../../../utils/constants';
const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CONST.LIGHT_GREY_COLOR,
  },
  headerContainer: {
    flexDirection: CONST.ROW,
    justifyContent: CONST.SPACE_BETWEEN,
    alignItems: CONST.CENTER,
    marginTop: scale(20)
  },
  filterButton: {
    justifyContent: CONST.CENTER,
    alignItems: CONST.CENTER,
    marginLeft: scale(15)
  },
  clearButton: {
    justifyContent: CONST.CENTER,
    alignItems: CONST.CENTER,
    marginRight: scale(15)
  },
  filterText: {
    color: CONST.BLACK_COLOR,
    fontSize: scale(22),
    fontFamily: CONST.fontFamily.JosefBold,
  },
  clearText: {
    color: CONST.BORDER_COLOR_GREY_LIGHT,
    fontSize: scale(18),
    fontFamily: CONST.fontFamily.JosefBold,
  },
  brands: {
    marginTop: scale(20)
  },
  brandsContainer: {
    flexDirection: CONST.ROW,
    justifyContent: CONST.SPACE_BETWEEN,
    alignItems: CONST.CENTER,
    marginTop: scale(10)
  },
  brandsText: {
    color: CONST.BORDER_COLOR_GREY_LIGHT,
    fontSize: scale(18),
    fontFamily: CONST.fontFamily.JosefBold,
    marginLeft: scale(15)
  },
  arrowButton: {
    justifyContent: CONST.CENTER,
    alignItems: CONST.CENTER,
    marginRight: scale(15)
  },
  brandsList: {
    marginHorizontal: scale(15)
  },
  brandView: {
    flexDirection: CONST.ROW,
    justifyContent: CONST.SPACE_BETWEEN,
    alignItems: CONST.CENTER,
    backgroundColor: CONST.WHITE_COLOR,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: CONST.BORDER_COLOR_GREY_LIGHT,
    paddingVertical: scale(2),
    paddingHorizontal: scale(10),
    marginRight: scale(5),
  },
  brandText: {
    color: CONST.PRIMARY_COLOR,
    fontSize: scale(15),
    fontFamily: CONST.fontFamily.JosefBold,
  },
  crossIcon: {
    marginLeft: scale(20)
  },
  horizontalLine: {
    alignSelf: CONST.CENTER,
    height: 1,
    borderWidth: 1,
    width: width - 10,
    marginVertical: scale(10),
    opacity: 0.1,
    borderColor: CONST.BORDER_COLOR_GREY_LIGHT,
  },
  categories: {
  },
  categoriesContainer: {
    flexDirection: CONST.ROW,
    justifyContent: CONST.SPACE_BETWEEN,
    alignItems: CONST.CENTER,
  },
  price: {

  },
  priceContainer: {
    marginLeft: scale(20)
  },
  priceRangeText: {
    fontSize: scale(18),
    color: CONST.BORDER_COLOR_GREY_LIGHT,
    fontFamily: CONST.fontFamily.JosefBold,
  },
  priceText: {
    fontSize: scale(18),
    marginTop: scale(10),
    fontFamily: CONST.fontFamily.Josef,
  },
  productsText: {
    color: CONST.BORDER_COLOR_GREY_LIGHT,
    fontSize: scale(18),
    marginTop: scale(10),
    fontFamily: CONST.fontFamily.Josef,
  },
  sliderMarker: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: CONST.WHITE_COLOR,
    borderWidth: 2,
    borderColor: CONST.PRIMARY_COLOR
  },
  slider: {
    alignSelf: CONST.CENTER,
    marginVertical: scale(10)
  },
  track: {
    height: 3,
    backgroundColor: CONST.BORDER_COLOR_GREY_LIGHT
  },
  selectedTrack: {
    height: 3,
    backgroundColor: CONST.PRIMARY_COLOR
  },
  sortByContainer: {
    marginLeft: scale(15)
  },
  sortButtonContainer: {
    flexDirection: CONST.ROW,
    alignItems: CONST.CENTER,
    marginTop: scale(10)
  },
  nameButton: {
    width: 150,
    height: 100,
    borderRadius: 10,
    justifyContent: CONST.CENTER,
    alignItems: CONST.CENTER,
    backgroundColor: CONST.WHITE_COLOR,
  },
  rateButton: {
    width: 150,
    height: 100,
    borderRadius: 10,
    marginLeft: scale(10),
    justifyContent: CONST.CENTER,
    alignItems: CONST.CENTER,
    backgroundColor: CONST.WHITE_COLOR,
  },
  nameText: {
    marginTop: scale(10),
    fontSize: scale(18),
    color: CONST.BLACK_COLOR,
    fontFamily: CONST.fontFamily.Josef,
  },
  bottomContainer: {
    flexDirection: CONST.ROW,
    justifyContent: CONST.SPACE_BETWEEN,
    alignItems: CONST.CENTER,
    marginVertical: scale(30)
  },
  filterButtonBottom: {
    flexDirection: CONST.ROW,
    justifyContent: CONST.CENTER,
    alignItems: CONST.CENTER,
    marginLeft: scale(15)
  },
  filterTextBottom: {
    fontSize: scale(18),
    color: CONST.PRIMARY_COLOR,
    fontFamily: CONST.fontFamily.Josef,
    marginRight: scale(10)
  },
  backButton: {
    justifyContent: CONST.CENTER,
    alignItems: CONST.CENTER,
    marginRight: scale(15)
  },
  backText: {
    fontSize: scale(18),
    color: CONST.BLACK_COLOR,
    fontFamily: CONST.fontFamily.Josef,
  }
});
