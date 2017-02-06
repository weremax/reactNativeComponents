import React from 'react';
import { View, ActivityIndicator, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const buttonWidth = (width * 0.25);

const Spinner = ({ size }) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
};

const styles = {
  spinnerStyle: {
    width: buttonWidth
  }
};

export { Spinner };
