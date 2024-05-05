import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from '../theme/colors';
import Login from '../screens/login';
import SignUp from '../screens/signup';
import Main from '../screens/main';


const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            title: 'Login',
            headerTitleAlign: 'center',
            headerTintColor: colors.headerTint,
            headerStyle: { backgroundColor: colors.primary },
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
        <Stack.Screen
          name="signup"
          component={SignUp}
          options={{
            title: 'Cadastro',
            headerTitleAlign: 'center',
            headerTintColor: colors.headerTint,
            headerStyle: { backgroundColor: colors.primary },
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
        <Stack.Screen
          name="main"
          component={Main}
          options={{
            title: 'Localização',
            headerTitleAlign: 'center',
            headerTintColor: colors.headerTint,
            headerLeft: null,
            headerStyle: { backgroundColor: colors.primary },
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
