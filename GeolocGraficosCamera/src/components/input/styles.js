import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';


export const S = StyleSheet.create({
  input: {
    color: colors.inputContent,
    borderColor: colors.inputBorder,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '90%',
  },
  placeholder: {
    color: colors.placeholder,
  },
});
