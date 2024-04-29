import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AsyncStorage } from '@react-native-async-storage/async-storage';

const SignUp = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleSignUp = async () => {
    const user = {
      email: email,
      password: password
    };
    await AsyncStorage.setItem('user', JSON.stringify(user));
    navigation.navigate('login');
  };
  
  

};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc';
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '90%',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    width: '90%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
  },
});

export default SignUp;