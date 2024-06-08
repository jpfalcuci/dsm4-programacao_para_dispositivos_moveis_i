import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';


export const S = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: '90%',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: colors.textButton,
    fontWeight: 'bold',
    fontSize: 18,
  },
});
