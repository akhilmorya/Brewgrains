import { StyleSheet, PixelRatio, Platform } from 'react-native';
import Colors from '../../theme/colors';
import ApplicationStyles from '../../theme/applicationStyles';
import * as CONST from '../../utils/constants';
import scale, { verticalScale } from '../../utils/scale';

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    margin: 10
  },
  headerTitle: {
    marginVertical: 30
  },
  headerTitleText: {
    color: Colors.blackHeader,
    fontFamily: CONST.fontFamily.JosefBold,
    fontSize: scale(20)
  },
  ProfileContainer: {
  },
  profileImageContainer: {
    alignSelf: CONST.STRETCH,
    flexDirection: CONST.ROW
  },
  profileImageView: {
    height: scale(70),
    width: scale(70)
  },
  profileImageBack: {
    height: scale(70),
    width: scale(70)
  },
  profile: {
    height: scale(70),
    width: scale(70),
    position: CONST.POSITION_ABSOLUTE,
    borderRadius: scale(35)
  },
  plusButton: {
    position: CONST.POSITION_ABSOLUTE,
    bottom: 0,
    right: 0
  },
  changeProfileButton: {
    ...ApplicationStyles.screen.itemsCenter,
    marginLeft: scale(20)
  },
  changeProfileText: {
    color: CONST.BORDER_COLOR_GREY,
    fontFamily: CONST.fontFamily.Josef,
    fontSize: scale(16)
  },
  inputContainer: {
    justifyContent: CONST.CENTER,
    marginTop: verticalScale(30)
  },
  textViewContainer: {
    marginVertical: verticalScale(10)
  },
  fieldText: {
    fontSize: scale(20),
    color: CONST.BORDER_COLOR_GREY,
    fontFamily: CONST.fontFamily.Josef
  },
  commonInput: {
    borderBottomWidth: 1,
    justifyContent: CONST.CENTER,
    alignItems: CONST.CENTER,
    height: scale(40),
    borderBottomColor: CONST.BORDER_COLOR_GREY,
    fontSize: scale(20),
    fontFamily: CONST.fontFamily.Josef,
    textAlign: 'left',
  },
  commonInputEmpty: {
    borderBottomWidth: 1,
    justifyContent: CONST.CENTER,
    alignItems: CONST.CENTER,
    height: scale(20),
    borderBottomColor: CONST.LIGHT_GREY_BG,
    fontSize: scale(20),
    fontFamily: CONST.fontFamily.Josef,
    textAlign: 'left',
  },
  editInputButton: {
    ...ApplicationStyles.screen.itemsCenter,
    padding: 5,
    position: CONST.POSITION_ABSOLUTE,
    right: 0,
    top: (Platform.OS === 'android') ? -5 : 5
  },
  editInputButtonEmpty: {
    ...ApplicationStyles.screen.itemsCenter,
    padding: 5,
    paddingTop: 2,
    position: CONST.POSITION_ABSOLUTE,
    right: 0,
    top: 0
  },
  logoutView: {
    justifyContent: CONST.CENTER,
    marginTop: verticalScale(20),
    alignSelf: CONST.STRETCH
  },
  buttonContainer: {
    flexDirection: CONST.ROW,
    justifyContent: CONST.SPACE_BETWEEN,
    alignItems: CONST.CENTER,
    marginTop: verticalScale(60),
    marginBottom: verticalScale(50)
  },
  signUp: {
    flexDirection: CONST.ROW,
    alignItems: CONST.CENTER,
    padding: 5,
    paddingLeft: 0
  },
  signUpText: {
    color: CONST.PRIMARY_COLOR,
    fontSize: scale(16),
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
    color: CONST.BORDER_COLOR_GREY,
    fontSize: scale(16),
    fontWeight: CONST.BOLD,
    fontFamily: CONST.fontFamily.Josef,
  },
  subsContainer: {
    position: CONST.POSITION_ABSOLUTE,
    top: 10,
    right: 10,
    padding: 10,
    backgroundColor: Colors.primary,
    justifyContent: CONST.CENTER,
    borderRadius: scale(20),
  },
  editContainer: {
    position: CONST.POSITION_ABSOLUTE,
    top: 10,
    left: 10,
    padding: 10,
    backgroundColor: Colors.primary,
    justifyContent: CONST.CENTER,
    borderRadius: scale(20),
  },
  editButtonText: {
    color: Colors.primary,
    fontSize: scale(20),
    fontFamily: CONST.fontFamily.JosefSemiBold,
  },
  subsText: {
    color: Colors.white,
    fontSize: scale(16),
    textAlign: CONST.CENTER,
  },
  nameContainer: {
    justifyContent: CONST.CENTER,
    alignItems: CONST.CENTER,
    paddingVertical: scale(10),
  },
  avatarContainer: {
    borderColor: CONST.PRIMARY_COLOR,
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: CONST.CENTER,
    alignItems: CONST.CENTER,
    alignSelf: CONST.CENTER,
  },
  avatar: {
    borderRadius: scale(48),
    width: scale(96),
    height: scale(96),
  },
  cameraIcon: {
    position: CONST.POSITION_ABSOLUTE,
    right: scale(1),
    bottom: scale(5),
  },
  headerContainer: {
    flex: 3,
    paddingTop: 30,
    borderWidth: 1,
    backgroundColor: '#ECE5E3',
    borderColor: CONST.LIGHT_GREY_BG,
    borderRadius: scale(30),
    margin: scale(20),
    shadowOpacity: 0.75,
    shadowRadius: scale(10),
    shadowColor: CONST.GREY_COLOR,
    shadowOffset: { height: 5, width: 5 },
    elevation: 5,
  },
  detailsCon: {
    flex: 7,
    margin: 20
  },
  detsContainer: {
    flex: 1,
  },
  label: {
    fontSize: scale(12),
    color: Colors.text,
    padding: scale(2),
  },
  labelVal: {
    fontSize: scale(16),
    color: Colors.text,
    padding: scale(2),
  },
  itemContaine: {
    flexDirection: CONST.ROW,
    paddingVertical: scale(5)
  },
  iconContainer: {
    flex: 2,
    alignItems: CONST.CENTER,
    justifyContent: CONST.CENTER,
    padding: 5,
  },
  textContainer: {
    flex: 8,
    padding: 5,
  }
});
