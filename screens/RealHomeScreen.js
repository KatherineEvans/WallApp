import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Footer,
  FooterTab,
  Body,
  Left,
  Right,
  Icon
} from "native-base";
import NavFootLanding from "../screens/NavFootLanding";
import NavHead from "../screens/NavHead";
import WelcomeMessage from "../screens/WelcomeMessage";
import Expo from 'expo';
import { createStackNavigator } from 'react-navigation'; 
import App from "../screens/App";

export default class Application extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.navHead}>
      <NavHead />
      </View>
      <View style={styles.content}>
      <WelcomeMessage />
      </View>
      <View style={styles.navFoot}>
      <NavFootLanding />
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#006400',
    height: '100%',
    justifyContent: 'center',
  },
  navHead: {
    flex: 2, 
  },

  Content: {
    flex: 3,
  },
  navFoot: {
    flex: 1,
  }
});