import React, { Component } from "react";
import { StyleSheet } from 'react-native'
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Footer,
  FooterTab,
  Text,
  Body,
  Left,
  Right,
  Icon
} from "native-base";
import AppStackNavigator from "../screens/HomeScreen"


class NavFootLanding extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      tab1: false,
      tab2: false,
      tab3: false,
      // tab4: false
    };
  }
  toggleTab1() {
    this.setState({
      tab1: true,
      tab2: false,
      tab3: false,
      // tab4: false
    });
  }
  toggleTab2() {
    this.setState({
      tab1: false,
      tab2: true,
      tab3: false,
      // tab4: false
    });
  }
  toggleTab3() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: true,
      // tab4: false
    });
  }
  // toggleTab4() {
  //   this.setState({
  //     tab1: false,
  //     tab2: false,
  //     tab3: false,
  //     tab4: true
  //   });
  // }
  render() {
    return (
      <Container style={styles.container}>
        <Content padder />
        <Footer>
          <FooterTab>
            <Button active={this.state.tab1} onPress={() => this.toggleTab2()}>
              <Text>Log In</Text>
            </Button>
            <Button active={this.state.tab2} onPress={() => this.toggleTab2()}>
              <Text>Sign Up</Text>
            </Button>
            <Button active={this.state.tab3} onPress={() => this.props.navigation.navigate("signup")}>
              <Text>Camera</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NavFootLanding;