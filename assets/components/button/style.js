import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../styles/scaling';

const style = StyleSheet.create({
  button: {
    backgroundColor: '#2979F2',
    height: verticalScale(55),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: horizontalScale(50),
    paddingHorizontal: horizontalScale(20),
  },
  disabled: {
    backgroundColor: '#B0BEC5',
  },
  title: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    fontWeight: '500',
    lineHeight: scaleFontSize(19),
    color: '#fff',
    textAlign: 'center',
  },
});

export default style;
