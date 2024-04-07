import React, { Component } from "react";
import Icon from 'react-native-vector-icons/MaterialIcons'
import moment from 'moment';
import {
    Container,
    Card,
    CardContent,
    Avatar,
    CardInfos,
    Name,
    Status,
    LabelText,
    InfoText,
} from "./styles";


export default class Character extends Component {

    render() {
        const { route } = this.props;
        const { character } = route.params;

        const formattedDate = moment(character.created).format("MMMM Do YYYY, h:mm:ss a");

        return(
            <Container style={{ justifyContent: 'top', paddingTop: 10 }}>
                <Card style={{ width: '90%' }}>
                    <Avatar source={{uri: character.image}} />
                    <Name>{character.name}</Name>
                    <LabelText>Created at</LabelText>
                    <InfoText>{formattedDate}</InfoText>
                    <Status>
                        {character.status == 'Alive' ? <Icon name='circle' size={8} color='#0f0' /> : (character.status == 'Dead' ? <Icon name='circle' size={10} color='#f00' /> : <Icon name='circle' size={8} color='#808080' />)}
                        {character.status} - {character.species}
                    </Status>
                    <LabelText>Last known location</LabelText>
                    <InfoText>{character.location}</InfoText>
                    <LabelText>First seen in</LabelText>
                    <InfoText>{character.episode}</InfoText>
                </Card>
            </Container>
        )
    };
};
