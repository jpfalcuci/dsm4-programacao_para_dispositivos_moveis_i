import { TextInput } from 'react-native';
import { styles } from '../styles';

export const Input = ({ placeholder, value, onChangeText, secureTextEntry=false, inputMode=null }) => {
  return (
    <TextInput
      style={styles.input}
      placeholderTextColor={styles.placeholder.color}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      autoCapitalize='none'
      inputMode={inputMode}
    />
  );
};
