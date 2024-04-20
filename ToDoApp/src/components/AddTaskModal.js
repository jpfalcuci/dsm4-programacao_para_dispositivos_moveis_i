import React, { useState } from 'react';
import { View, Modal, Alert } from 'react-native';
import { TitleInput, DescriptionInput } from './Inputs';
import Button from './Button';

const AddTaskModal = ({ onSave, visible, onClose }) => {

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleSave = () => {
    if (!taskTitle) {
      Alert.alert('Erro', 'Coloca o nome da tarefa animal');
      return;
    }

    onSave(taskTitle, taskDescription);
    setTaskTitle('');
    setTaskDescription('');
  };

  const handleClose = () => {
    setTaskTitle('');
    setTaskDescription('');
    onClose();
  }

  return (
    <Modal 
      animationType="fade"
      visible={visible}
      transparent={true}
      onRequestClose={onClose}
    >
      <View 
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        }}
      >
        <View 
          style={{
            backgroundColor: '#fff',
            padding: 20,
            borderRadius: 10,
            width: '80%'
          }}
        >
          <TitleInput 
            value={taskTitle}
            onChangeText={setTaskTitle}
          />
          <DescriptionInput 
            value={taskDescription}
            onChangeText={setTaskDescription}
          />
          <Button 
            title="Adicionar tarefa"
            onPress={handleSave}
          >
          </Button>
          <Button
            title="Voltar"
            onPress={handleClose}
            buttonStyle={{ marginTop: 10, backgroundColor: '#D9D9D9' }}
          >
          </Button>
        </View>
      </View>
    </Modal>
  );
}

export default AddTaskModal;
