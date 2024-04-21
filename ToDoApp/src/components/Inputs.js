import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { Colors } from '../utils/Colors';

const TitleInput = ({ value, onChangeText }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder="Título da tarefa"
      value={value}
      onChangeText={onChangeText}
      color={Colors.inputFont}
      placeholderTextColor={Colors.inputPlaceholder}
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
      color={Colors.inputFont}
      placeholderTextColor={Colors.inputPlaceholder}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.inputBorder,
    borderRadius: 5,
    backgroundColor: Colors.inputBackground,
  },
  inputDescription: {
    height: 80,
    textAlignVertical: 'top',
  },
});

export { TitleInput, DescriptionInput };
