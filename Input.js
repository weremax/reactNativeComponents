import React from 'react';
import { TextInput, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const inputWidth = (width * 0.8);

const Input = ({
    placeholder,
    name,
    onChangeText,
    autoCapitalize,
    keyboardType,
    value,
    secureTextEntry,
    placeholderTextColor
  }) => {
  return (
    <TextInput
      placeholder={placeholder}
      name={name}
      onChangeText={onChangeText}
      placeholderTextColor={placeholderTextColor}
      autoCapitalize={autoCapitalize}
      keyboardType={keyboardType}
      returnKeyType={'done'}
      value={value}
      style={styles.inputText}
      secureTextEntry={secureTextEntry}
      underlineColorAndroid='transparent'
      autoCorrect={false}
    />
  );
};

export { Input };

const styles = {
  inputText: {
    borderColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    width: inputWidth,
    padding: 4,
    backgroundColor: '#ffffff',
    marginBottom: 15,
    alignSelf: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
};
