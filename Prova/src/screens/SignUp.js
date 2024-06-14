import { View } from 'react-native';
import { useSignUp } from '../hooks';
import { Button, Input } from '../components';
import { styles } from '../styles';

export default function SignUp({ navigation }) {
  const { user, setUser, phone, setPhone, email, setEmail, password, setPassword, handleSignUp } = useSignUp();

  return (
    <View style={styles.container}>
      <Input
        placeholder="Usuário"
        value={user}
        onChangeText={setUser}
      />
      <Input
        placeholder="Telefone"
        value={phone}
        onChangeText={setPhone}
        inputMode="tel"
      />
      <Input
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        inputMode="email"
      />
      <Input
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      <Button
        title='Salvar'
        onPress={handleSignUp}
      />
    </View>
  );
};
