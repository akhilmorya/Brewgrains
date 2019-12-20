import { StyleSheet, Dimensions } from 'react-native';
import Fonts from '../../theme/fonts';
import ApplicationStyles from '../../theme/applicationStyles';
import scale, { verticalScale } from '../../utils/scale';
import * as CONST from '../../utils/constants';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    justifyContent: CONST.CENTER
  },
  imageBackgroundContainer: {
    ...ApplicationStyles.screen.container,
  },
  headerText: {
    fontSize: scale(40),
    color: CONST.PRIMARY_COLOR,
    fontFamily: CONST.fontFamily.Josef,
    marginTop: verticalScale(80),
    alignSelf: CONST.CENTER,
    fontWeight: CONST.BOLD
  },
  signupDetails: {
    marginTop: verticalScale(120),
    marginHorizontal: scale(30)
  },
  profileContainer: {
    height: scale(70),
    width: scale(70)
  },
  profileImageBack: {
    height: scale(70),
    width: scale(70)
  },
  plusButton: {
    position: CONST.POSITION_ABSOLUTE,
    bottom: 0,
    right: 0
  },
  inputContainer: {
    justifyContent: CONST.CENTER,
    marginTop: 10
  },
  textViewContainer: {
    marginVertical: verticalScale(10)
  },
  fieldText: {
    fontSize: scale(20),
    color: CONST.WHITE_COLOR,
    fontFamily: CONST.fontFamily.Josef
  },
  commonInput: {
    borderBottomWidth: 1,
    justifyContent: CONST.CENTER,
    alignItems: CONST.CENTER,
    height: scale(40),
    borderBottomColor: CONST.WHITE_COLOR,
    fontSize: scale(20),
    fontFamily: CONST.fontFamily.Josef,
    textAlign: CONST.POSITION_LEFT,
  },
  dobContainer: {
    height: scale(30),
    borderBottomWidth: 1,
    borderBottomColor: CONST.WHITE_COLOR,
    justifyContent: CONST.CENTER,
  },
  dobText: {
    fontSize: scale(20),
    fontFamily: CONST.fontFamily.Josef,
    textAlign: CONST.POSITION_LEFT,
  },
  bottomViewContainer: {
    marginTop: verticalScale(30),
    marginBottom: verticalScale(150)
  },
  buttonContainer: {
    flexDirection: CONST.ROW,
    justifyContent: CONST.SPACE_BETWEEN,
    alignItems: CONST.CENTER,
  },
  signUp: {
    flexDirection: CONST.ROW,
    alignItems: CONST.CENTER,
    padding: 5,
    paddingLeft: 0
  },
  signUpText: {
    color: CONST.WHITE_COLOR,
    fontSize: scale(22),
    fontWeight: CONST.BOLD,
    fontFamily: CONST.fontFamily.Josef,
    marginRight: 10,
  },
  login: {
    justifyContent: CONST.CENTER,
    alignItems: CONST.CENTER,
    padding: 5,
    paddingRight: 0
  },
  loginText: {
    color: CONST.BLACK_COLOR,
    fontSize: scale(22),
    fontWeight: CONST.BOLD,
    fontFamily: CONST.fontFamily.Josef,
  },
  line: {
    height: 1,
    borderWidth: 1,
    width: width - 200,
    marginTop: verticalScale(15),
    borderColor: '#f98729',
    backgroundColor: '#f98729',
    alignSelf: CONST.CENTER
  },
  orText: {
    fontSize: scale(20),
    color: CONST.WHITE_COLOR,
    fontFamily: CONST.fontFamily.Josef,
    marginTop: verticalScale(15),
    alignSelf: CONST.CENTER
  },
  socialIconContainer: {
    marginTop: verticalScale(30),
    flexDirection: CONST.ROW,
    justifyContent: CONST.SPACE_BETWEEN
  },
  fbSocialIcon: {
    // marginLeft: scale(50)
  },
  instaSocialIcon: {
    // marginRight: scale(50)
  },
  title: {
    ...Fonts.style.h2,
    textAlign: CONST.CENTER,
    marginBottom: scale(10)
  },
  subsContainer: {
    height: scale(55),
    backgroundColor: 'black',
    justifyContent: CONST.CENTER,
    marginTop: scale(22)
  },
  subsText: {
    color: 'white',
    fontSize: scale(16),
    textAlign: CONST.CENTER
  },
  emailInput: {
    borderWidth: 1,
    justifyContent: CONST.CENTER,
    alignItems: CONST.CENTER,
    height: scale(55),
    borderColor: '#d0d0d0',
    fontSize: scale(14),
    textAlign: CONST.POSITION_LEFT,
    padding: scale(10),
    paddingRight: scale(30),
  },
  crossIconContainer: {
    backgroundColor: 'transparent',
    height: scale(55),
    position: CONST.POSITION_ABSOLUTE,
    right: 0,
    top: 0
  },
  crossIcon: {
    padding: scale(10),
    height: scale(55),
    flexDirection: CONST.ROW,
    justifyContent: CONST.CENTER,
    alignItems: CONST.CENTER
  },
  backIconContainer: {
    marginTop: scale(15),
    marginBottom: scale(10),
    paddingLeft: scale(10),
    paddingVertical: scale(10),
    width: scale(50)
  },
  signInContainers: {
    flex: 1,
    justifyContent: CONST.CENTER,
    paddingHorizontal: scale(26),
  },
  appleBtn: {
    height: scale(44),
    width: scale(200)
  },
  appleCont: {
    justifyContent: CONST.CENTER,
    alignItems: CONST.CENTER,
    marginHorizontal: scale(50),
    marginVertical: scale(10)
  },
  signupButtonContainer: {
    justifyContent: CONST.SPACE_AROUND,
    alignItems: CONST.CENTER,
    alignSelf: CONST.STRETCH
  },
  orTextStyle: {
    fontSize: scale(18),
    color: 'black'
  },
  signupButton: {
    height: scale(42),
    backgroundColor: '#4285F4',
    justifyContent: CONST.CENTER,
    alignSelf: CONST.STRETCH,
    marginHorizontal: scale(54),
    marginVertical: scale(10),
    borderRadius: scale(2)
  },
  signupButtonText: {
    color: 'white',
    fontWeight: CONST.BOLD,
    fontSize: scale(20),
    textAlign: CONST.CENTER
  },
  genderInput: {
    borderWidth: 2,
    justifyContent: CONST.CENTER,
    alignItems: CONST.CENTER,
    height: scale(55),
    borderColor: '#d0d0d0',
    fontSize: scale(14),
    textAlign: CONST.POSITION_LEFT,
    padding: scale(10),
    paddingRight: scale(30)
  },
  genderView: {
    borderWidth: 1,
    borderColor: '#d0d0d0',
    marginTop: 10
  },
});
