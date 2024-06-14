import { StyleSheet } from 'react-native';

const colors = {
  primary: '#AA6E4A',
  background: '#f5f5f5',
  text: '#666666',
  buttonText: '#ffffff',
  placeholder: '#BEBEBE',
  inputBorder: '#D3D3D3',
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  bookContainer: {
    borderColor: colors.primary,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    width: 300,
  },
  text: {
    color: colors.text,
    fontSize: 18,
    paddingVertical: 2,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '90%',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: colors.buttonText,
    fontWeight: 'bold',
    fontSize: 18,
  },
  input: {
    color: colors.text,
    borderColor: colors.inputBorder,
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    width: '90%',
  },
  placeholder: {
    color: colors.placeholder,
  },
  headerTint: {
    color: colors.buttonText,
  },
  headerStyle: {
    backgroundColor: colors.primary,
  },
  headerTitleStyle: {
    fontWeight: 'bold',
  },
});
