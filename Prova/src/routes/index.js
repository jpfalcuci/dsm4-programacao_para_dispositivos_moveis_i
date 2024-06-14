import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogIn, SignUp, Books, NewBook } from '../screens';
import { styles } from '../styles';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogIn">
        <Stack.Screen 
          name="LogIn"
          component={LogIn}
          options={{
            title: 'LogIn',
            headerTitleAlign: 'center',
            headerTintColor: styles.headerTint.color,
            headerStyle: styles.headerStyle,
            headerTitleStyle: styles.headerTitleStyle,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            title: 'Cadastro',
            headerTitleAlign: 'center',
            headerTintColor: styles.headerTint.color,
            headerStyle: styles.headerStyle,
            headerTitleStyle: styles.headerTitleStyle,
          }}
        />
        <Stack.Screen
          name="Books"
          component={Books}
          options={{
            title: 'Livros',
            headerTitleAlign: 'center',
            headerTintColor: styles.headerTint.color,
            headerStyle: styles.headerStyle,
            headerTitleStyle: styles.headerTitleStyle,
          }}
        />
        <Stack.Screen
          name="NewBook"
          component={NewBook}
          options={{
            title: 'Adicionar Livro',
            headerTitleAlign: 'center',
            headerTintColor: styles.headerTint.color,
            headerStyle: styles.headerStyle,
            headerTitleStyle: styles.headerTitleStyle,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
