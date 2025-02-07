import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import style from './style';
import PropTypes from 'prop-types';

const Input = ({
  label,
  placeholder = '',
  keyboardType = 'default',
  secureTextEntry = false,
  onChangeText = () => {},
}) => {
  const [value, setValue] = useState('');

  return (
    <View>
      <Text style={style.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={style.input}
        value={value || undefined}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={val => {
          setValue(val);
          onChangeText(val);
        }}
      />
    </View>
  );
};

Input.propTypes = {
  keyboardType: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChangeText: PropTypes.func,
  secureTextEntry: PropTypes.bool,
};

export default Input;
