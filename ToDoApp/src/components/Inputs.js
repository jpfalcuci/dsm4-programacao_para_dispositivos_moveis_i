import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const TitleInput = ({ value, onChangeText }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder="Título da tarefa"
      value={value}
      onChangeText={onChangeText}
      color='#333333'
      placeholderTextColor={'#A5A5A5'}
      autoFocus={true}
    />
  );
};

const DescriptionInput = ({ value, onChangeText }) => {
  return (
    <TextInput
      style={[styles.input, styles.inputDescription]}
      placeholder="Descrição da tarefa"
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
  },
  inputDescription: {
    height: 80,
    textAlignVertical: 'top',
  },
});

export { TitleInput, DescriptionInput };
