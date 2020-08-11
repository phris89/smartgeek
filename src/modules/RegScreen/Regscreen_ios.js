import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, KeyboardAvoidingView } from 'react-native';
import { Content, Header, Title, Button, Left, Right, Body, Icon  } from 'native-base';

export default class RegScreen extends Component {

    render(){
        const {navigation} = this.props;
        return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <Header>
            <Left>
                <Button transparent onPress={() => navigation.navigate('')}>
                    <Icon name="ios-arrow-back" />
                </Button>
            </Left>
            <Body>
                <Title>Регистрация</Title>
            </Body>
            <Right/>
            </Header>
            <Content>
                <View style={styles.form}>
                    <TextInput 
                        placeholder="Email"
                        style={styles.inputFormat}
                    />
                    <TextInput 
                        placeholder="Пароль"
                        style={styles.inputFormat}
                    />
                    <TextInput 
                        placeholder="Повторите пароль"
                        style={styles.inputFormat}
                    />
                    <TouchableHighlight 
                        style={styles.buttonRegNewUser}
                        underlayColor="#573A54"
                        onPress={() => this.regNewUser()}
                    >
                        <Text style={styles.textRegNewUser}>Зарегистрироваться</Text>
                    </TouchableHighlight>
                </View>
            </Content>
        </KeyboardAvoidingView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 30,
        color: 'black',
        fontWeight: '600'
    },
    icon: {
        color: '#000000',
        fontSize: 30,
    },
    form: {
        marginTop: '15%',
        marginLeft: '5%'
    },
    inputFormat: {
        height: 30,
        width: '94%',
        borderBottomColor: '#999999',
        borderBottomWidth: 0.5,
        marginTop: '5%',
        fontWeight: '500',
        fontSize: 17
    },
    buttonRegNewUser: {
        backgroundColor: '#432E41',
        height: '26%',
        width: '94%',
        top: '16%',
        borderRadius: 3.5,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    textRegNewUser: {
        color: '#FFFFFF',
        lineHeight: 22,
        fontSize: 17,
        fontWeight: '500'
    }
});