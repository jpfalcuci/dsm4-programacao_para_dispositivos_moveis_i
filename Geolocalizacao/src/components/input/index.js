import { TextInput } from 'react-native';
import { S } from './styles';

export const Input = ({ placeholder, value, onChangeText, secureTextEntry=false }) => {
  return (
    <TextInput
      style={S.input}
      placeholderTextColor={S.placeholder.color}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  );
};
