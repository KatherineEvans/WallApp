import React, { Component } from "react";
import {
  Image,
  View,
  Text,
  AppRegistry,
  StyleSheet,
  Button,
  TouchableOpacity
} from "react-native";
import NavHead from "../screens/NavHead";
import WelcomeMessage from "../screens/WelcomeMessage";

class myapp extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to Nail'd It!</Text>
        <TouchableOpacity>
          <View>
          <View style={styles.image}>
            <Image
              source={require('../Images/2018_wall-decor_banner.jpg')} />
          </View>
        <View style={styles.buttonContainer}>
            <Button
              style={styles.button}
              title="LOGIN"
              onPress={() => this.props.navigation.navigate("login")}
            />
            <Button
              style={styles.button}
              title="SIGNUP"
              onPress={() => this.props.navigation.navigate("signup")}
            />
            <Button
              style={styles.button}
              title="CAMERA"
              onPress={() => this.props.navigation.navigate("camera")}
            />
          </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default myapp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0FFF0',
    height: '100%',
    alignItems: 'center',
  },
  text: {
    color: "#006400",
    textAlign: 'center',
    fontSize: 26,
  },
  image: {
    height: 350,
  },
  button: {
    color: "#006400",
    fontSize: 26,
  },
  buttonContainer: {
    height: 200,
    alignSelf: 'center',

  },
});

AppRegistry.registerComponent("myapp", () => myapp);
