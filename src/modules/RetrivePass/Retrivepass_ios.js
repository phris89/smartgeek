import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, KeyboardAvoidingView } from 'react-native';
import { Content  } from 'native-base';

export default class RetrivePassword extends Component {

    render(){
        return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <Content>
                <View style={styles.form}>
                    <TextInput 
                        placeholder="Email"
                        style={styles.inputFormat}
                    />
                    <View style={styles.pureTextBox}>
                        <Text style={styles.pureText}>На Ваш Email будет выслано письмо с инструкциями по восстановлению пароля</Text>
                    </View>
                    <TouchableHighlight 
                        style={styles.buttonRetrivePass}
                        underlayColor="#573A54"
                        onPress={() => this.retrivePass()}
                    >
                        <Text style={styles.textRetrivePass}>Восстановить пароль</Text>
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
    form: {
        marginTop: '20%',
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
    pureTextBox: {
        flex: 1,
        marginTop: '12%'
    },
    pureText: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 14,
        color: 'rgba(0, 0, 0, 0.54)'
    },
    buttonRetrivePass: {
        backgroundColor: '#432E41',
        height: '30%',
        width: '94%',
        top: '18%',
        borderRadius: 3.5,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    textRetrivePass: {
        color: '#FFFFFF',
        lineHeight: 22,
        fontSize: 17,
        fontWeight: '500'
    }
});