import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import TaskListScreen from '../screens/TaskListScreen';
import TaskDetailsScreen from '../screens/TaskDetailsScreen';
import { Colors } from '../utils/Colors';

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
                  backgroundColor: Colors.headerBackground,
              },
              headerTitleStyle: {
                  fontWeight: 'bold',
                  color: Colors.headerContent,
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
                  backgroundColor: Colors.headerBackground,
              },
              headerTitleStyle: {
                  fontWeight: 'bold',
                  color: Colors.headerContent,
              }
          }}
        />
      </Stack.Navigator>
    </View>
  );
};

export default Routes;
