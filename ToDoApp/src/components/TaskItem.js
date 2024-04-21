import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from './Button';

const TaskItem = ({ item, navigation, toggleTaskCompletion, deleteTask }) => {
  return (
    <View style={styles.taskItem}>
      <Button
        buttonStyle={{ backgroundColor: item.completed? '#7CB48F' : '#FFC857', marginRight: 10}}
        content={ item.completed ? <Icon name='check-box' size={22}/> : <Icon name='check-box-outline-blank' size={22}/> }
        onPress={() => toggleTaskCompletion(item.id)}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('TaskDetails', { task: item })}
        style={{ flex: 1 }}
      >
        <Text style={{
            textDecorationLine: item.completed ? 'line-through' : 'none',
            color: item.completed ? '#7CB48F' : '#333333', }}
        >
          {item.title}
        </Text>
      </TouchableOpacity>
      <Button
        buttonStyle={{ backgroundColor: '#D66067', marginLeft: 10 }}
        content={<Icon name='delete' size={22}/>}
        onPress={() => deleteTask(item.id)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 5,
    backgroundColor: '#F0F0E9',
  },
});

export default TaskItem;
