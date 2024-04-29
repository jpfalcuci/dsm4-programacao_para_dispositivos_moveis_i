import { useState } from 'react';
import { View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { S } from './styles';


const Login = () => {

  const navigation = useNavigation()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === '' && password === '') {
      Alert.alert('Em construção', 'Navegação para a próxima página')
      // navigation.navigate('main')
    } else {
      Alert.alert('Aviso', 'E-mail ou senha inválidos!')
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
