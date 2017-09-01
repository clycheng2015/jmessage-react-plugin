'use strict';

import React from 'react';
import ReactNative from 'react-native';
import JMessage from 'jmessage-react-plugin';

import FormButton from '../../views/FormButton'

const {
    View,
    Text,
    TouchableHighlight,
    StyleSheet,
    Button,
    Alert,
    TextInput
  } = ReactNative;

  export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        }
        this.onPress = this.onPress.bind(this);
    }

    onPress() {
        JMessage.login({username: this.state.username, password: this.state.password}, () => {
            Alert.alert('login success')
        }, (error) => {
            Alert.alert('login success', JSON.stringify(error))
        })

    }

    render() {
        return (
        <View>
            <TextInput
                placeholder = "用户名"
                onChangeText = { (e) => { this.setState({username: e}) } }>
            </TextInput>
            <TextInput
                placeholder = "密码"
                onChangeText = { (e) => { this.setState({password: e}) } }>
            </TextInput>
            <FormButton 
                title="lala"
                onPress={this.onPress}
                >
            </FormButton> 
        </View>)
    }
}