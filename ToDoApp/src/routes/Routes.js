import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import TaskListScreen from '../screens/TaskListScreen';
import TaskDetailsScreen from '../screens/TaskDetailsScreen';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <View style={{ flex: 1 }}>
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
    </View>
  );
};

export default Routes;
