import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Keyboard } from 'react-native';
import { Container, Form, Input, Button, ButtonText } from './styles';

const Login = () => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const handleLogin = () => {
        console.log(`LOGIN - Usuário: ${user} - Senha: ${password}`);
        navigation.navigate('main');
        Keyboard.dismiss();
    };

    const handleSignUp = () => {
        navigation.navigate('signUp');
        Keyboard.dismiss();
    };

    return (
        <Container>
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
            <Button onPress={handleLogin}>
                <ButtonText>Entrar</ButtonText>
            </Button>
            <Button onPress={handleSignUp}>
                <ButtonText>Cadastrar</ButtonText>
            </Button>
        </Container>
    );
};

export default Login;
