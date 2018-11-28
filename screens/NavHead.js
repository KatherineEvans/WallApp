import React, { Component } from "react";
import { StyleSheet } from 'react-native'
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

class NavHead extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left />
          <Body>
            <Title>Nail'd It!</Title>
          </Body>
          <Right />
        </Header>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    textAlign: 'center',
    backgroundColor: "#FFF"
  }
});

export default NavHead;