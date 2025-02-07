import {StyleSheet} from 'react-native';
import {verticalScale} from './scaling';

const globalStyles = StyleSheet.create({
  backgroundWhite: {
    backgroundColor: '#fff',
  },
  flex: {
    flex: 1,
  },
  marginBottom24: {
    marginBottom: verticalScale(24),
  },
});

export default globalStyles;
