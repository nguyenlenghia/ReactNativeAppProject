import React, { Component } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { Header, Left, Body, Right, Title } from 'native-base';
import { Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base';

import AppHeader from '../components/AppHeader';

class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <AppHeader title="Home" />
        <Content>
          <Label>HELLO</Label>
        </Content>
      </Container>
    );
  }
}

export default HomeScreen;