import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const TitleInput = ({ value, onChangeText }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder="Título da Tarefa"
      value={value}
      onChangeText={onChangeText}
      color='#333333'
      placeholderTextColor={'#A5A5A5'}
    />
  );
};

const DescriptionInput = ({ value, onChangeText }) => {
  return (
    <TextInput
      style={[styles.input, styles.inputDescription]}
      placeholder="Descrição da Tarefa"
      value={value}
      onChangeText={onChangeText}
      multiline
      color='#333333'
      placeholderTextColor={'#A5A5A5'}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#A5A5A5',
    borderRadius: 5,
    backgroundColor: '#E0E5E5',
    color: 'black',
  },
  inputDescription: {
    height: 80,
    textAlignVertical: 'top',
  },
});

export { TitleInput, DescriptionInput };
