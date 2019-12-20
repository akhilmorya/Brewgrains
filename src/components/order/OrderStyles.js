import { StyleSheet } from 'react-native';
import Fonts from '../../theme/fonts';
import Colors from '../../theme/colors';
import ApplicationStyles from '../../theme/applicationStyles';
import scale from '../../utils/scale';
import * as CONST from '../../utils/constants';

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    flex: 1,
  },
  headerContainer: {
    justifyContent: CONST.CENTER,
    marginBottom: scale(20)
  },
  title: {
    color: Colors.TITLE,
    fontSize: scale(20),
    fontFamily: CONST.fontFamily.JosefBold,
    margin: scale(16),
  },
  tabTitle: {
    color: Colors.TITLE,
    fontSize: scale(18),
    fontFamily: CONST.fontFamily.JosefSemiBold,
  },
  disabledTabTitle: {
    color: Colors.DISABLED_TITLE,
    fontSize: scale(18),
    fontFamily: CONST.fontFamily.JosefSemiBold,
  },
  tabBar: {
    height: scale(50), 
    backgroundColor: Colors.TAB_BACKGROUNF,
    flexDirection: 'row',
  },
  tabItemCont: {
    flex: 1,
    alignItems: CONST.CENTER,
    justifyContent: CONST.CENTER,
  },
  tabItem: {
    
    padding: scale(5),
  },
  bottomLine: {
    width: scale(25),
    bottom: 0,
    position: 'absolute',
    borderBottomColor: Colors.TITLE,
    borderBottomWidth: scale(2),
  },
  text: {
    ...Fonts.style.normal,
    textAlign: CONST.CENTER,
    color: Colors.text,
  },
  token: {
    height: scale(20),
  },
  instruction: {
    textAlign: CONST.CENTER,
    color: '#333333',
    marginBottom: scale(5),
  },
});
