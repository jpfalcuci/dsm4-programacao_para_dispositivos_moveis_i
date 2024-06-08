import { StyleSheet } from 'react-native';
import { colors } from './colors';


export const Standard = StyleSheet.create({
  container: {
    backgroundColor: colors.screenBackground,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});
