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
      <NavHead />
      <WelcomeMessage />
      <NavFootLanding />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#006400',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  greenTop: {

  }
});