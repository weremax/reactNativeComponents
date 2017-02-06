import React from 'react';
import { TouchableOpacity, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const buttonWidth = (width * 0.8);

const Button = ({ onPress, style, children }) => {
  switch (style) {
    case 'cancel':
      return (
        <TouchableOpacity
          onPress={onPress}
          style={styles.cancelButton}
        >
          {children}
        </TouchableOpacity>
      );
    default:
      return (
        <TouchableOpacity
          onPress={onPress}
          style={styles.primaryButton}
        >
          {children}
        </TouchableOpacity>
      );
  }
};

export { Button };

const styles = {
  primaryButton: {
    backgroundColor: '#99AAFF',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#000033',
    padding: 10,
    width: buttonWidth,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  cancelButton: {
    backgroundColor: '#ff5858',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#cf0033',
    padding: 10,
    width: buttonWidth,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
};
