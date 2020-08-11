import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableHighlight, KeyboardAvoidingView, Image } from 'react-native';
import { Content, Header, Title, Button, Left, Right, Body, Icon  } from 'native-base';

import { InputForm } from '../../components/inputForReg';
//import InputStyles from '../components/inputForReg';

export default class AuthScreen extends Component {

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
                <Title>Авторизация</Title>
            </Body>
            <Right/>
            </Header>
            <Content>
                <View style={styles.form}>
                    { InputForm }
                    <TextInput 
                        placeholder="Email"
                        style={styles.inputFormat}
                    />
                    <TextInput 
                        placeholder="Пароль"
                        style={styles.inputFormat}
                    />
                    <TouchableOpacity 
                        style={styles.linkBox} 
                        onPress={() => navigation.navigate('RetrivePassword')}
                    >
                        <Text style={styles.linkToRetrivePass}>
                            Забыли пароль?
                        </Text>
                    </TouchableOpacity>
                    <TouchableHighlight 
                        style={styles.buttonEnter}
                        underlayColor="#573A54"
                    >
                        <Text style={styles.textEnter}>Войти</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.buttonReg}
                        underlayColor="#F7E9F6"
                        onPress={() => navigation.navigate('RegScreen')}
                    >
                        <Text style={styles.textReg}>Регистрация</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.pureTextBox}>
                    <Text style={styles.pureText}>Войти через аккаунт</Text>
                </View>
                <View style={styles.socialAuth}>
                    <TouchableOpacity style={styles.socialButton}>
                        <Image source={require('./assets/google_logo_button.png')}/>
                        <Image source={require('./assets/google_logo_plus.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton}>
                        <Image source={require('./assets/fb_logo_button.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton}>   
                    <Image source={require('./assets/vk_logo_button.png')}/>
                    </TouchableOpacity>
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
        fontWeight: '500',
        fontSize: 17,
        borderBottomColor: '#999999',
        borderBottomWidth: 0.5,
        marginTop: '5%'
    },
    linkBox: {
        right: '6%',
        top: '5%',
        left: '67%'
    },
    linkToRetrivePass: {
        color: '#4FADF9',
        lineHeight: 22,
        fontSize: 12,
        fontWeight: '500'
    },
    buttonEnter: {
        backgroundColor: '#432E41',
        height: '20%',
        width: '94%',
        top: '16%',
        borderRadius: 3.5,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    textEnter: {
        color: '#FFFFFF',
        lineHeight: 22,
        fontSize: 17,
        fontWeight: '500'
    },
    buttonReg: {
        backgroundColor: '#FFFFFF',
        height: '20%',
        width: '94%',
        top: '25%',
        borderWidth: 0.75,
        borderRadius: 3.5,
        borderColor: '#432E41',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    textReg: {
        color: '#432E41',
        lineHeight: 22,
        fontSize: 17,
        fontWeight: '500'
    },
    pureTextBox: {
        flex: 1,
        alignItems: 'center',
        marginTop: '15%'
    },
    pureText: {
        fontSize: 17,
        fontWeight: '500',
        lineHeight: 22,
        color: '#828282'
    },
    socialAuth: {
        width: '75%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        top: '5%',
        left: '12.5%'
    },
    socialButton: {
        top: '20%',
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#FF4C43',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
});