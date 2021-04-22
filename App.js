import * as React from 'react';
import {createAppContainer, createSwithNavigator} from 'react-navigation';
import {createBottemTabNavigator} from 'react-navigation-tabs';
import HomeScreens from './Screens/HomeScreen';
import {AppTabNavigator} from './components/AppTabNavigator'; 
import { AppDrawerNavigator } from './components/AppDrawerNavigator';

export default function App() {
  return (
    <AppContainer/>
  );
}

const switchNavigator = createSwitchNavigator({
  HomeScreen:{screen:HomeScreen},
  Drawer:{screen:AppDrawerNavigator}
})

const AppContainer = createAppContainer(switchNavigator);