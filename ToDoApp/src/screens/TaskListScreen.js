import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TaskItem from '../components/TaskItem';
import Button from '../components/Button';
import AddTaskModal from '../components/AddTaskModal';
import { Colors } from '../utils/Colors';

const TaskListScreen = ({ navigation, route }) => {
  const [tasks, setTasks] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const savedTasks = await AsyncStorage.getItem('tasks');
        if (savedTasks !== null) {
          let parsedTasks = JSON.parse(savedTasks);
          const sortedTasks = sortTasks(parsedTasks);
          setTasks(sortedTasks);
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

  const sortTasks = (tasks) => {
    return tasks.sort((a, b) => {
      if (a.completed && !b.completed) return 1;
      if (!a.completed && b.completed) return -1;
      return 0;
    });
  };

  const saveTask = async (title, description) => {
    const newTask = {
      id: Date.now().toString(),
      title: title,
      description: description,
      completed: false,
      createdAt: new Date().toString(),
    };
    try {
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
      setIsModalVisible(false);
    } catch (error) {
      console.error('Error saving task:', error);
    }
  };

  const toggleTaskCompletion = async (taskId) => {
    try {
      const updatedTasks = tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      );
      const sortedTasks = sortTasks(updatedTasks);
      setTasks(sortedTasks);
      await AsyncStorage.setItem('tasks', JSON.stringify(sortedTasks));
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
      <View style={styles.inputContainer}>
        <Button content="Incluir nova tarefa" onPress={() => {setIsModalVisible(true)}}/>
      </View>
      <AddTaskModal
        visible={isModalVisible}
        onSave={saveTask}
        onClose={() => setIsModalVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.screenBackground,
  },
  inputContainer: {
    marginBottom: 20,
  },
});

export default TaskListScreen;
