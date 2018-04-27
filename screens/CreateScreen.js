import React, { Component } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { Header, Left, Body, Right, Title } from 'native-base';
import { Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    return (
      <Container>
        <Header>
          <Left/>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Label>HELLO</Label>
        </Content>
      </Container>
    );
  }
}

export default HomeScreen;