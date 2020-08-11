import { DrawerNavigator } from 'react-navigation';
import { Platform, StatusBar } from 'react-native';

import HomeScreen from './modules/HomeScreen/Homescreen';
import MapScreen from './modules/MapScreen/Mapscreen';
import AuthScreen from './modules/AuthScreen/Authscreen_ios';

export default DrawerNavigator(
	{
		HomeScreen: { screen: HomeScreen },
		MapScreen: { screen: MapScreen },
		AuthScreen: { screen: AuthScreen }
	},
	{
		initialRouteName: 'AuthScreen',
        drawerPosition: 'left',
		contentOptions: {
			itemsContainerStyle: {
				paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
			},
		}
	}
);