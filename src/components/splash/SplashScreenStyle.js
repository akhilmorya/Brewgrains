import { StyleSheet } from 'react-native';
import ApplicationStyles from '../../theme/applicationStyles';

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    height: '100%',
    width: '100%',
  },

});
