/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import EventList from './EventList';//Import eventlist into app.js
import {NavigationScreenOptions,createStackNavigator,createAppContainer} from 'react-navigation';
import EventForm from './EventForm';


const MainNav =  createStackNavigator ({
  list:{
    screen:EventList,
  },
  form:{
    screen:EventForm,
  },
});

export default createAppContainer(MainNav);
