import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/login';
import SignUp from './pages/signUp';
import Main from './pages/main';
import Character from './pages/character';

const Stack = createStackNavigator()

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name='login'
                    component={Login}
                    options={{
                        title: 'LOGIN',
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: '#272B33',
                        },
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            color: '#fff'
                        }
                    }}
                />
                <Stack.Screen 
                    name='signUp'
                    component={SignUp}
                    options={{
                        title: 'CADASTRO',
                        headerTitleAlign: 'center',
                        headerLeft: null,
                        headerStyle: {
                            backgroundColor: '#272B33',
                        },
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            color: '#fff'
                        }
                    }}
                />
                <Stack.Screen
                    name="main"
                    component={Main}
                    options={{
                        title: 'CARDS',
                        headerTitleAlign: 'center',
                        headerTintColor: '#fff',
                        headerStyle: {
                            backgroundColor: '#272B33',
                        },
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            color: '#fff',
                        },
                    }}
                />
                <Stack.Screen
                    name="character"
                    component={Character}
                    options={{
                        title: 'CHARACTER',
                        headerTitleAlign: 'center',
                        headerTintColor: '#fff',
                        headerStyle: {
                            backgroundColor: '#272B33',
                        },
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            color: '#fff',
                        },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
