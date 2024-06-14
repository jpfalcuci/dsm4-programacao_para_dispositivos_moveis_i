import { Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles';

export const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.5}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};
