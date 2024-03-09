import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Login } from './login';

export default class Main extends Component {
    render(){
        return (
            <View>
                <Text>Página Principal</Text>
                <Login />
            </View>
        )
    }
}
