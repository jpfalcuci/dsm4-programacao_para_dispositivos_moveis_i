import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TaskItem from '../components/TaskItem';
import Button from '../components/Button';
import { TitleInput, DescriptionInput } from '../components/Inputs';

const TaskListScreen = ({ navigation, route }) => {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const savedTasks = await AsyncStorage.getItem('tasks');
        if (savedTasks !== null) {
          setTasks(JSON.parse(savedTasks));
        }
        if (route.params && route.params.updatedTask) {
          const updatedTask = route.params.updatedTask;
          setTasks((prevTasks) => prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
        }
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchTasks();
  }, [route.params]);

  const saveTask = async () => {
    if (!taskTitle) return;
    const newTask = {
      id: Date.now().toString(),
      title: taskTitle,
      description: taskDescription,
      completed: false,
    };
    try {
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
      setTaskTitle('');
      setTaskDescription('');
    } catch (error) {
      console.error('Error saving task:', error);
    }
  };

  const toggleTaskCompletion = async (taskId) => {
    try {
      const updatedTasks = tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      );
      setTasks(updatedTasks);
      await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
    } catch (error) {
      console.error('Error toggling task completion:', error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      const updatedTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(updatedTasks);
      await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TitleInput
          value={taskTitle}
          onChangeText={setTaskTitle}
        />
        <DescriptionInput
          value={taskDescription}
          onChangeText={setTaskDescription}
        />
        <Button title="Adicionar Tarefa" onPress={saveTask} />
      </View>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TaskItem
            item={item}
            navigation={navigation}
            toggleTaskCompletion={toggleTaskCompletion}
            deleteTask={deleteTask}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
});

export default TaskListScreen;
