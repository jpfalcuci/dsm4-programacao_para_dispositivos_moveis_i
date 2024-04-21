import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ content, onPress, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity 
      style={[ styles.button, buttonStyle ]}
      onPress={onPress}
    >
      <Text style={[ styles.buttonText, textStyle ]}>{content}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 35,
    minWidth: 35,
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#B8B8B8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 5,
    textAlign: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Button;
