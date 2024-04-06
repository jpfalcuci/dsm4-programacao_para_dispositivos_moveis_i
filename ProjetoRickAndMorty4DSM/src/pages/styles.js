import styled from 'styled-components/native';


export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: white;
`;

export const Input = styled.TextInput`
    border-width: 1px;
    border-color: #ccc;
    border-radius: 5px;
    padding: 10px;
    margin-vertical: 10px;
    width: 80%;
`;

export const Button = styled.TouchableOpacity`
    background-color: #272B33;
    border-radius: 5px;
    padding: 10px;
    width: 80%;
    align-items: center;
    margin: 5px;
`;

export const ButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
`;
