import {Pressable, Text} from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

const Button = ({title, isDisabled = false, onPress = () => {}}) => {
  return (
    <Pressable
      disabled={isDisabled}
      style={[style.button, isDisabled && style.disabled]}
      onPress={onPress}>
      <Text style={style.title}>{title}</Text>
    </Pressable>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  onPress: PropTypes.func,
};

export default Button;
