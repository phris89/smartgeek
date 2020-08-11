// @flow

import React, {Component} from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import {Spinner} from 'native-base';
import Expo from 'expo';

import Router from './src';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            isReady: false
        };
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            Ionicons: require('native-base/Fonts/Ionicons.ttf')
        });
        this.setState({
            isReady: true
        });
    }

    render() {
        return !this.state.isReady ?
            <View style={styles.container}>
                <Spinner color="grey"/>
            </View>
            : <Router/>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
