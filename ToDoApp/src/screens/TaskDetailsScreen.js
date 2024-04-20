import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TitleInput, DescriptionInput } from '../components/Inputs';
import Button from '../components/Button';

const TaskDetailsScreen = ({ route, navigation }) => {
  const { task } = route.params;
  const [editedTask, setEditedTask] = useState(task);

  const creationDate = new Date(task.createdAt).toLocaleDateString('pt-BR');
  const creationTime = new Date(task.createdAt).toLocaleTimeString('pt-BR');

  useEffect(() => {
    setEditedTask(task);
  }, [task]);

  const handleSave = async () => {
    try {
      const savedTasks = await AsyncStorage.getItem('tasks');
      if (savedTasks !== null) {
        const tasks = JSON.parse(savedTasks);
        const updatedTasks = tasks.map((t) => (t.id === editedTask.id ? editedTask : t));
        await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
        navigation.navigate('TaskList', { updatedTask: editedTask });
      }
    } catch (error) {
      console.error('Error saving task:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TitleInput
        value={editedTask.title}
        onChangeText={(text) => setEditedTask({ ...editedTask, title: text })}
      />
      <DescriptionInput
        value={editedTask.description}
        onChangeText={(text) => setEditedTask({ ...editedTask, description: text })}
        multiline
      />
      <Text style={[ styles.text, {fontSize: 16, color: editedTask.completed ? '#7CB48F' : '#D66067'}]}>
        Status: {editedTask.completed ? 'Concluída' : 'Pendente'}
      </Text>
      <Text style={[ styles.text, {fontSize: 12, color: '#A5A5A5'}]}>
        Tarefa criada em {creationDate} às {creationTime}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 20,
        }}
      >
        <Button buttonStyle={{ backgroundColor:'#D9D9D9', width: '45%' }} title="Voltar" onPress={() => navigation.goBack()} />
        <Button buttonStyle={{ width: '45%'}} title="Salvar" onPress={handleSave} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontWeight: 'bold',
    marginTop: 5,
    alignSelf: 'center'
  },
});

export default TaskDetailsScreen;
