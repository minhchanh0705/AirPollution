import React from 'react';
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator, HeaderBackButton } from "react-navigation-stack";
import ForYouScreen from '../Screens/ForYouScreen';
import MapScreen from '../Screens/MapScreen';
import RankingScreen from '../Screens/RankingScreen';
import CommunityScreen from '../Screens/CommunityScreen';
import MoreScreen from '../Screens/MoreScreen';
import AirQualityScreen from '../Screens/ForYou/Detail/AirQualityScreen'
import WaterQualityScreen from '../Screens/ForYou/Detail/WaterQualityScreen'
import LocationScreen from '../Screens/ForYou/Detail/LocationScreen'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ForYouStack = createStackNavigator({
  ForYouScreen: { screen: ForYouScreen },
  AirQualityScreen: { screen: AirQualityScreen },
  WaterQualityScreen: { screen: WaterQualityScreen },
  LocationScreen: { screen: LocationScreen },
});
const MapStack = createStackNavigator({
  MapScreen: { screen: MapScreen }
});
const RankingStack = createStackNavigator({
  RankingScreen: { screen: RankingScreen }
});
const CommunityStack = createStackNavigator({
  CommunityScreen: { screen: CommunityScreen }
});
const MoreStack = createStackNavigator({
  MoreScreen: { screen: MoreScreen }
});


export default createAppContainer(createBottomTabNavigator(
  {
    ForYou: { screen: ForYouStack },
    Map: { screen: MapStack },
    Ranking: { screen: RankingStack },
    Community: { screen: CommunityStack },
    More: { screen: MoreStack }
  },

  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'ForYou') {
          iconName = `microsoft`;
        } else if (routeName === 'Map') {
          iconName = `earth`;
        } else if (routeName === 'Ranking') {
          iconName = `shuffle`;
        } else if (routeName === 'Community') {
          iconName = `compass-outline`;
        } else if (routeName === 'More') {
          iconName = `menu`;
        }
        return <MaterialCommunityIcons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#007AFF',
      inactiveTintColor: '#8F9BB3',
      style: {
        backgroundColor: '#FFFFFF',
      },

    }
  },

));