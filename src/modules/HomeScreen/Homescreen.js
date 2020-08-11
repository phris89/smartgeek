// @flow

import React, {Component} from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Container, Content, Header, Title, Button, Left, Right, Body, Icon } from 'native-base';
import { Constants } from 'expo';

const HEADER_COLOR = 'blue';

export default class HomeScreen extends Component {
	static navigationOptions = {
		drawerLabel: 'Главная',
		drawerIcon: () => <Icon ios="ios-home" android="md-home"/>,
	};
	
	_renderStatusBar() {
		return Platform.OS === 'ios' ? null : <View style={styles.statusBar} />;
	}

	render() {
		const {navigation} = this.props;
		return (
			<Container>
				{ this._renderStatusBar() }
				<Header  style={{backgroundColor: Platform.OS === 'ios' ? null : HEADER_COLOR}}>
					<Left>
						<Button transparent onPress={() => navigation.navigate('DrawerOpen')}>
							<Icon name='menu' />
						</Button>
					</Left>
					<Body>
						<Title>Главная</Title>
					</Body>
					<Right/>
				</Header>
				<Content>
					<View style={styles.container}>
						<View style={styles.item}>
							<Text style={styles.title}>
								Главный экран
							</Text>
						</View>
						<View style={styles.item}>
							<Button light onPress={() => navigation.navigate('MapScreen')} style={{ backgroundColor: '#4284D3' }}>
								<Text> Перейти к карте </Text>
							</Button>
						</View>
						<View style={styles.item}>
							<Button onPress={() => navigation.navigate('DrawerOpen')} style={{ backgroundColor: '#67E46F' }}>
								<Text> Открыть меню </Text>
							</Button>
						</View>
					</View>
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        margin: 10,
        height: 100,
    },
    title: {
        fontSize: 30,
        color: 'black',
    },
    icon: {
        color: '#900',
        fontSize: 30,
    },
	statusBar: {
		backgroundColor: HEADER_COLOR,
		height: Constants.statusBarHeight,
	},
});
