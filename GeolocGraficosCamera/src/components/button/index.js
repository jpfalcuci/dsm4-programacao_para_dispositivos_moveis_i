import { Text, TouchableOpacity } from 'react-native';
import { S } from './styles';


export const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={S.button} onPress={onPress} activeOpacity={0.5}>
      <Text style={S.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};
