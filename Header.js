import React, { Component } from 'react';
import  {
  View,
  Text,
  StyleSheet
} from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export { Header };

const styles = {
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00446e',
    height: 90,
    paddingTop: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  }
}
