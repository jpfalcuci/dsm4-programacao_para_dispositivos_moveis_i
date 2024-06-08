import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';


export const S = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.screenBackground,
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    backgroundColor: colors.placeholder,
  },
  titleText: {
    color: colors.headerTint,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
});
