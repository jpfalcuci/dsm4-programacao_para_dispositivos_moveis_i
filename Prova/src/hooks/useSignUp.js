import { useState } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export const useSignUp = () => {
  const [ user, setUser ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const navigation = useNavigation();

  const handleSignUp = async () => {
    if ( !user || !phone || !email || !password ) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    const userObj = {
      user: user,
      phone: phone,
      email: email,
      password: password,
    };

    try {
      await AsyncStorage.setItem('user', JSON.stringify(userObj));
      await AsyncStorage.removeItem('books');
      navigation.navigate('LogIn');
    } catch (error) {
      Alert.alert('Erro', 'Houve um erro no cadastro\nVerifique o log');
      console.log(error);
    }
  };

  return {
    user, setUser,
    phone, setPhone,
    email, setEmail,
    password, setPassword,
    handleSignUp,
  };
};
