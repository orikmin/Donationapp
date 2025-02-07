import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../styles/scaling';

const style = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(16),

    borderRadius: horizontalScale(50),
    height: verticalScale(50),
    borderWidth: 1,
    borderColor: '#D1D5DB',
    overflow: 'hidden',
  },
  searchInput: {
    flex: 1,
    marginLeft: horizontalScale(8),
    fontFamily: 'Inter',
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(17),
    color: '#696C7A',
    backgroundColor: 'transparent',
  },
});

export default style;
