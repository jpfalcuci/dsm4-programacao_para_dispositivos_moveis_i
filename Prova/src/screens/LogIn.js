import { View } from 'react-native';
import { useLogin } from '../hooks';
import { Button, Input } from '../components';
import { styles } from '../styles';

export default function LogIn({ navigation }) {
  const { user, setUser, password, setPassword, handleLogin } = useLogin();

  return (
    <View style={styles.container}>
      <Input
        placeholder="Usuário"
        value={user}
        onChangeText={setUser}
      />
      <Input
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      <Button
        title='Entrar'
        onPress={handleLogin}
      />
      <Button
        title='Cadastrar Usuário'
        onPress={ () => {navigation.navigate('SignUp')} }
      />
    </View>
  );
};
