import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';


export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: white;
`;

export const Input = styled.TextInput`
    border-width: 1px;
    border-color: #ccc;
    border-radius: 10px;
    padding: 7px;
    margin-vertical: 10px;
    width: 80%;   
`;

export const Button = styled.TouchableOpacity`
    background-color: #272B33;
    border-radius: 10px;
    padding: 10px;
    width: 80%;
    align-items: center;
    margin: 5px;
`;

export const ButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
`;

export const Form = styled.View`
    flex-direction: row;
    border-bottom-width: 1px;
    border-color: #eee;
    width: 90%;
    justify-content: center;
    align-items: center;
`;

export const AddButton = styled.TouchableOpacity`
    background-color: #272B33;
    border-radius: 10px;
    padding: 10px;
    width: 12%;
    align-items: center;
    margin: 10px;
    justify-content: center;
`;

export const List = styled.FlatList`
    width: 100%;
`;

export const Card = styled.View`
    align-items: center;
    margin: 10px 20px;
    background: lightgrey;
    padding: 10px;
    border-radius: 10px;
`;

export const CardContent = styled.View`
    flex-direction: row;
    align-items: center;
    width: 100%;
`;

export const Avatar = styled.Image`
    width: 94px;
    height: 94px;
    border-radius: 32px;
    background: #eee;
`;

export const CardInfos = styled.View`
    margin-top: 10px;
    width: 100%;
    align-items: left;
    padding-left: 20px;
`;

export const Name = styled.Text`
    font-size: 14px;
    color: #333;
    font-weight: bold;
    margin-top: 4px;
`;

export const Status = styled.Text`
    font-size: 13px;
    color: #272B33;
    margin-top: 4px;
`;

export const LabelText = styled.Text`
    font-size: 13px;
    color: #333;
    font-weight: bold;
`;

export const InfoText = styled.Text`
    font-size: 13px;
    color: #272B33;
    margin-top: 4px;
`;

export const CardButtons = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
`;

export const CardButton = styled(RectButton)`
    margin-top: 10px;
    background: #272B33;
    width: 47%;
    justify-content: center;
    align-items: center;
    height: 36px;
    border-radius: 10px;
`;

export const CardButtonText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
`;
