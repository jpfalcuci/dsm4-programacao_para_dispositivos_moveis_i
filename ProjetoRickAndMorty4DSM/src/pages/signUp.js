import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Keyboard } from 'react-native';
import { Container, Input, Button, ButtonText } from './styles';

const SignUp = () => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [course, setCourse] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const handleLogin = () => {
        console.log(`CADASTRO - Nome: ${name} - Telefone: ${phone} - CPF: ${cpf} - E-mail: ${email} - Curso: ${course} - Senha: ${password}`);
        alert('Cadastro realizado com sucesso! (De mentirinha)');
        navigation.navigate('login');
        Keyboard.dismiss();
    };

    return (
        <Container>
            <Input
                placeholder="Nome"
                placeholderTextColor="#ccc"
                color="#000"
                value={name}
                onChangeText={setName}
            />
            <Input
                placeholder="Telefone"
                keyboardType="phone-pad"
                placeholderTextColor="#ccc"
                color="#000"
                value={phone}
                onChangeText={setPhone}
            />
            <Input
                placeholder="CPF"
                keyboardType="numeric"
                placeholderTextColor="#ccc"
                color="#000"
                value={cpf}
                onChangeText={setCpf}
            />
            <Input
                placeholder="E-mail"
                keyboardType="email-address"
                placeholderTextColor="#ccc"
                color="#000"
                value={email}
                onChangeText={setEmail}
            />
            <Input
                placeholder="Curso"
                placeholderTextColor="#ccc"
                color="#000"
                value={course}
                onChangeText={setCourse}
            />
            <Input
                placeholder="Senha"
                keyboardType="numeric"
                placeholderTextColor="#ccc"
                color="#000"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />
            <Button onPress={handleLogin}>
                <ButtonText>Salvar</ButtonText>
            </Button>
        </Container>
    );
};

export default SignUp;
