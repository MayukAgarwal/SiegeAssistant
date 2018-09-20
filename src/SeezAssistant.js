import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { createSwitchNavigator, createStackNavigator, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation'
import SplashScreen from './containers/Splash/SplashScreen'
import LoginScreen from './containers/Login/LoginScreen'
import HomeScreen from './containers/Home/HomeScreen'

export default createSwitchNavigator({
    Home : HomeScreen,
    Splash : SplashScreen,
    Login : LoginScreen,
  })