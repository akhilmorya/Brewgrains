import { StyleSheet } from 'react-native';
import Fonts from '../../theme/fonts';
import Colors from '../../theme/colors';
import ApplicationStyles from '../../theme/applicationStyles';
import scale from '../../utils/scale';

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    padding: 10
  },
  headerTitle: {
    marginVertical: 30
  },
  headerTitleText: {
    color: Colors.blackHeader,
    fontFamily: Fonts.fontFamily.JosefBold,
    fontSize: scale(20)
  },
  listContainer: {
    marginTop: 5,
    flex: 1
  },
});
