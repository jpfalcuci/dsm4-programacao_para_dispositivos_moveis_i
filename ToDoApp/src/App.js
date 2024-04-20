import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TaskListScreen from './screens/TaskListScreen';
import TaskDetailsScreen from './screens/TaskDetailsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TaskList">
        <Stack.Screen
          name="TaskList"
          component={TaskListScreen}
          options={{
            title: 'Lista de Tarefas',
            headerTitleAlign: 'center',
              headerStyle: {
                  backgroundColor: '#333333',
              },
              headerTitleStyle: {
                  fontWeight: 'bold',
                  color: '#D9D9D9',
              }
          }}
        />
        <Stack.Screen
          name="TaskDetails"
          component={TaskDetailsScreen}
          
          options={{
            title: 'Detalhes da Tarefa',
            headerTitleAlign: 'center',
            headerLeft: null,
              headerStyle: {
                  backgroundColor: '#333333',
              },
              headerTitleStyle: {
                  fontWeight: 'bold',
                  color: '#D9D9D9',
              }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
