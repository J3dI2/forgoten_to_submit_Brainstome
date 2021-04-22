import React from 'react';
import {Image} from 'react-native';
import {createBottemTabNavigator} from 'react-navigation-tabs';
import CompletedProjectsScreen from '../Screens/CompletedProjectsScreen';
import PendingProjectsScreen from '../Screens/PendingProjectsScreen';

export const AppTabNavigator = createBottemTabNavigator({
    CompletedProjects:{
        screen:CompletedProjectsScreen,
        navigationOption:{
            tabBarIcon:<Image source={require("")} style={{width:20, height:20}}/>,
            tabBarLable:"Completed Projects"
        }
    },
    PendingProjects:{
        screen:PendingProjectsScreen,
        navigationOption:{
            tabBarIcon:<Image source={require("")} style={{width:20, height:20}}/>,
            tabBarLable:"Pending Projects"
        }
    }
})