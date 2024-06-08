import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from '../theme/colors';
import Login from '../screens/login';
import SignUp from '../screens/signup';
import Main from '../screens/main';
import Grafico from '../screens/graficos';
import Camera from '../screens/camera';
import Opcoes from '../screens/opcoes';


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
            headerStyle: { backgroundColor: colors.primary },
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
        <Stack.Screen
          name="grafico"
          component={Grafico}
          options={{
            title: 'Gráfico',
            headerTitleAlign: 'center',
            headerTintColor: colors.headerTint,
            headerStyle: { backgroundColor: colors.primary },
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
        <Stack.Screen
          name="camera"
          component={Camera}
          options={{
            title: 'Camera',
            headerTitleAlign: 'center',
            headerTintColor: colors.headerTint,
            headerStyle: { backgroundColor: colors.primary },
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
        <Stack.Screen
          name="opcoes"
          component={Opcoes}
          options={{
            title: 'Opções',
            headerTitleAlign: 'center',
            headerTintColor: colors.headerTint,
            headerStyle: { backgroundColor: colors.primary },
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
