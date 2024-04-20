import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ title, onPress, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity 
      style={[ styles.button, buttonStyle ]}
      onPress={onPress}
    >
      <Text style={[ styles.buttonText, textStyle ]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 40,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#B8B8B8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Button;
