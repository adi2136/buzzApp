import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContanier} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Facebook from './Facebook';
import Instagram from './instagram';

export default class App extends React.Component  {
  render(){
  return (
    <AppContainer/>
  );
}
}

const TabNavigator=createBottomTabNavigator({
  Facebook:{screen:Facebook},
  Instagram:{screen:Instagram},
})
const AppContainer=createAppContanier(TabNavigator);

