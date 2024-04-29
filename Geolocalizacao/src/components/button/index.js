import { Text, TouchableOpacity } from 'react-native';
import { S } from './styles';


export const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={S.button} onPress={onPress}>
      <Text style={S.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};
