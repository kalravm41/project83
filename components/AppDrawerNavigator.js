import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
import SettingsScreen from '../screens/SettingsScreen';
import BarterrerDetailsScreen from '../screens/BartererDetailsScreen';
import MyBarters from '../screens/MyBarters';
import Notification from '../screens/Notification';


export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator
    },
    settings: {screen: SettingsScreen},

    // BarterScreen: {screen: BarterrerDetailsScreen},   

    MyBarters: {screen: MyBarters},
    
    Notification: {screen: Notification}
  },
  
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home_Screen'
  })
