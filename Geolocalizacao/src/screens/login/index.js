import { useState } from 'react';
import { View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { S } from './styles';


const Login = () => {

  const navigation = useNavigation()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {

    try {
      const user = await AsyncStorage.getItem('user');

      if (!user) {
        Alert.alert('Aviso', 'Usuário não encontrado!');
        return;
      };

      const userObj = JSON.parse(user);

      if (userObj.email === email && userObj.password === password) {
        Alert.alert('Sucesso', 'Usuário logado com sucesso!');
        // navigation.navigate('home');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignUp = () => {
    navigation.navigate('signup')
  }

  return (
    <View style={S.container}>
      <Input
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        />
      <Input
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      <Button title='Entrar' onPress={handleLogin}/>
      <Button title='Cadastrar' onPress={handleSignUp}/>
    </View>
  );
};

export default Login;
