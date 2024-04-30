import { useState } from 'react';
import { View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { S } from './styles';


const SignUp = () => {

  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async () => {

    try {
      if (!email || !password || !confirmPassword) {
        Alert.alert('Erro', 'Preencha todos os campos');
        return;
      };

      if (password === confirmPassword) {
        const user = {
          email: email,
          password: password,
          confirmPassword: confirmPassword
        };
        await AsyncStorage.setItem('user', JSON.stringify(user));
        navigation.navigate('login');
      } else {
        Alert.alert('Erro', 'As senhas não coincidem');
      }
    } catch (error) {
      console.log(error);
    };
  };

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
      <Input
        placeholder="Confirme sua senha"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <Button title='Cadastrar' onPress={handleSignUp}/>
    </View>
  );
};

export default SignUp;
