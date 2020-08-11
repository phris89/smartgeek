// @flow

import React, {Component} from 'react';
import {Alert, Dimensions, StyleSheet, View, Platform } from 'react-native';
import {Container, Content, Header, Title, Button, Left, Right, Body, Icon} from 'native-base';
import {Constants, Location, Permissions, MapView} from 'expo';

//Регион по умолчанию - Москва
const DEFAULT_LATITUDE = 55.755814;
const DEFAULT_LONGITUDE = 37.617635;
const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = 0.01;
const API_KEY = 'AIzaSyBKMNJ05R-C2p4sQmUdMiaUH9eC1ISmsa4';
const HEADER_COLOR = 'blue';


export default class MapScreen extends Component {

    constructor() {
        super();
        this.state = {
            region: {
                latitude: DEFAULT_LATITUDE,
                longitude: DEFAULT_LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            },
            errorMessage: null,
			userLocation: {
				latitude: DEFAULT_LATITUDE,
				longitude: DEFAULT_LONGITUDE,
			},
			markers: [],
        };
		this.initialUserLocation = false;
		this.watchUserLocation = null;
    }



    static navigationOptions = {
        drawerLabel: 'Карта',
        drawerIcon: () => <Icon ios="ios-map" android="md-map"/>,
    };

    componentWillMount() {
        Location.setApiKey(API_KEY);
        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
                errorMessage: 'This will not work in an Android emulator. Try it on your device!',
            });
            Alert.alert('Error', 'Try maps on your device');
        } else {
            this._getUserLocationAsync();
        }
    }
	
	componentWillUnmount() {
		this.watchUserLocation.remove();
	}

    _getUserLocationAsync = async () => {
        let {status} = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            Alert.alert('Warning', 'Can\'t get access to device location');
        }

        this.watchUserLocation = await Location.watchPositionAsync({enableHighAccuracy: true, distanceInterval: 10}, (location) => {
			this.setState({
				region: {
					...this.state.region,
					latitude: location.coords.latitude,
					longitude: location.coords.longitude,
				},
				userLocation: {
					latitude: location.coords.latitude,
					longitude: location.coords.longitude,
				},
			});
			if(!this.initialUserLocation) {
				this.initialUserLocation = !this.initialUserLocation;
				this._generateMarkers(location);
			}
		});

    };

    _renderStatusBar() {
        return Platform.OS === 'ios' ? null : <View style={styles.statusBar}/>;
    }
	
	_generateMarkers(location){
		const radius = 0.001;
		let newMarkers = Array.from({length: 10}, (value,key) => {
			let min = -10;
			let max = 10;
			let latitude = location.coords.latitude + (Math.floor(Math.random() * (max - min)) + min) * radius;
			let longitude  = location.coords.longitude + (Math.floor(Math.random() * (max - min)) + min)  * radius;
			let marker = {
				id: key,
				title: key.toString(),
				coordinates: {
				  latitude: latitude,
				  longitude: longitude,
				},
			};
			return marker;
		});
		this.setState({	markers: newMarkers });
	}

    render() {
        const {navigation} = this.props;
        const {region} = this.state;
		const {userLocation}  = this.state;
        const {width, height} = Dimensions.get('window');
        const ratio = width / height;

        return (
            <Container>
                { this._renderStatusBar() }
                <Header style={{backgroundColor: Platform.OS === 'ios' ? null : HEADER_COLOR}}>
                    <Left>
                        <Button transparent onPress={() => navigation.navigate('DrawerOpen')}>
                            <Icon name='menu'/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>Карта</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content scrollEnabled={false}>
                    <View style={{width, height}}>
                        <MapView
                            style={ styles.map }
                            region={ region }
							showUserLocation = {false}
							followUserLocation = {false}
                        >
                            <MapView.Marker
                                coordinate={{
                                    latitude: userLocation.latitude,
                                    longitude: userLocation.longitude,
                                }}
                                title={ 'You\'re here' }
                                description={ 'Yes, here!' }
                            />
							  {this.state.markers.map(marker => (
								<MapView.Marker
									key={marker.id}
									coordinate={marker.coordinates}
									title={marker.title}
									pinColor={'#000000'}
								/>
							  ))}
                        </MapView>
                    </View>
                </Content>
            </Container>
        );
    }

}

const styles = StyleSheet.create({
    content: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        color: '#900',
        fontSize: 30,
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    statusBar: {
        backgroundColor: HEADER_COLOR,
        height: Constants.statusBarHeight,
    },
});