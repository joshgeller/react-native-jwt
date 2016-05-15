/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  Text,
  View
} from 'react-native';

var HomeView = require('./views/HomeView');

class Client extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
        title: 'JWT Auth Example',
        component: HomeView,
      }}/>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('client', () => Client);

module.exports = Client;
