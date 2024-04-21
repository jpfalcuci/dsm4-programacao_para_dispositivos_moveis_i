import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { Colors } from '../utils/Colors';

const TitleInput = ({ value, onChangeText, inputStyle }) => {
  return (
    <TextInput
      style={[styles.input, inputStyle]}
      placeholder="Título da tarefa"
      value={value}
      onChangeText={onChangeText}
      color={Colors.inputFont}
      placeholderTextColor={Colors.inputPlaceholder}
      autoFocus={true}
      maxLength={45}
    />
  );
};

const DescriptionInput = ({ value, onChangeText, inputStyle }) => {
  return (
    <TextInput
      style={[styles.input, styles.inputDescription, inputStyle]}
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
    height: 100,
    textAlignVertical: 'top',
  },
});

export { TitleInput, DescriptionInput };
