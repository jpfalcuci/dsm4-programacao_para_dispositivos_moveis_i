import { useState } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export const useLogin = () => {
  const [ user, setUser ] = useState('');
  const [ password, setPassword ] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    if (!user || !password) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    try {
      const userStorage = await AsyncStorage.getItem('user');

      if (!userStorage) {
        Alert.alert('Aviso', 'Usuário não encontrado!');
        return;
      }

      const userObj = JSON.parse(userStorage);

      if (userObj.user === user && userObj.password === password) {
        Alert.alert('Sucesso', 'Usuário logado com sucesso!');
        setUser('');
        setPassword('');
        navigation.navigate('Books');
      } else {
        Alert.alert('Erro', 'Usuário ou senha incorretos!');
      }
    } catch (error) {
      Alert.alert('Erro', 'Houve um erro no login\nVerifique o log');
      console.log(error);
    }
  };

  return {
    user, setUser,
    password, setPassword,
    handleLogin,
  };
};
