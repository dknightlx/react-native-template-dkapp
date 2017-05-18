import React, { Component } from 'react';
import {
    Platform,
} from 'react-native';
import {TabNavigator} from 'react-navigation';
import Home from './Home';
const IndexPage = TabNavigator({
    HomePage:{
        screen:Home,
        navigationOptions:{
            title:'Home'
        }
    }
},{
    animationEnabled:true,
    swipeEnabled:true,
    tabBarPosition:'bottom',    //top||bottom
    // tabBarComponent:
    lazy:true,
    tabBarOptions:{

    }
})

export default IndexPage;