import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from './Button';
import { Colors } from '../utils/Colors';

const TaskItem = ({ item, navigation, toggleTaskCompletion, deleteTask }) => {
  return (
    <View style={styles.taskItem}>
      <Button
        buttonStyle={{ backgroundColor: Colors.buttonTertiary, marginRight: 10 }}
        textStyle={{ color: item.completed? Colors.taskCompleted : Colors.taskFont}}
        content={ item.completed ? <Icon name='check-box' size={22}/> : <Icon name='check-box-outline-blank' size={22}/> }
        onPress={() => toggleTaskCompletion(item.id)}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('TaskDetails', { task: item })}
        style={{ flex: 1 }}
      >
        <Text style={ item.completed ? styles.taskCompleted : styles.taskPending }>
          {item.title}
        </Text>
      </TouchableOpacity>
      <Button
        textStyle={{ color:Colors.taskDelete }}
        buttonStyle={{ backgroundColor: Colors.buttonTertiary, marginLeft: 10 }}
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
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: Colors.taskItemBorder,
    borderRadius: 5,
    backgroundColor: Colors.taskItemBackground,
  },
  taskCompleted: {
    textDecorationLine: 'line-through',
    color: Colors.taskCompleted,
  },
  taskPending: {
    textDecorationLine: 'none',
    color: Colors.taskFont,
  },
});

export default TaskItem;
