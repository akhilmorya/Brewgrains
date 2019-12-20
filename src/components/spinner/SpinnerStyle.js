import { StyleSheet } from 'react-native';
import { height, width } from '../../utils/scale';
import { Colors } from '../../theme';

module.exports = StyleSheet.create({
  spinnerContainer: {
    zIndex: 100,
    justifyContent: 'center',
    position: 'absolute',
    width,
    height,
    backgroundColor: Colors.spinnerBg,
  },
  spinner: {
    zIndex: 200,
    alignSelf: 'center',
  },
});
