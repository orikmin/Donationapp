import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  paymentContainer: {
    marginHorizontal: horizontalScale(24),
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'space-evenlyp',
  },
  button: {
    marginHorizontal: horizontalScale(24),
    marginBottom: verticalScale(10),
  },
  donationAmountDescription: {
    marginTop: verticalScale(12),
  },
  cardForm: {
    height: verticalScale(200),
    marginTop: verticalScale(12),
    textColor: '#000',
    borderColor: '#FF5733',
    borderWidth: 2,
    borderRadius: 10,
  },
});

export default style;
