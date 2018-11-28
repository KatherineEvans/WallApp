import React, { Component } from "react";
import { StyleSheet, Image, View } from 'react-native'
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Text
} from "native-base";

class WelcomeMessage extends Component {
  render() {
    return (
      <View style={styles.app}>
        <Container style={styles.topSpace}>
          <View>
            <Text style={styles.textTop}>Welcome to Nail'd It!</Text>
          </View>
        </Container>
      <Container style={styles.container}>
        <View style={styles.image}>
        <Image
          source={require('../Images/2018_wall-decor_banner.jpg')} />
        </View>
      </Container>
        <View style={styles.welcomeTextBottom}>
        <Text style={styles.textBottom}>Welcome to Nail'd It!</Text>
        <Text style={styles.textBottom}>To get started, please log in or sign up below </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 0, 
    alignSelf: 'stretch',
    height: 550,
    flexDirection: 'column',
  },
  container: {
    flex: 1,
    position: 'absolute',
    alignSelf: 'stretch',
    textAlign: 'center',
    backgroundColor: "#FFF", 
    height: 300,
  }, 
  image: {
    flex: 2, 
    width: 300,
    textAlign: 'center',
  }, 
  welcomeTextBottom: {
    flex: 4,
    alignItems: 'center',
    color: 'white',
    justifyContent: 'center',
  }, 
  textBottom: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
  }, 
  textTop: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
  },
});

export default WelcomeMessage;