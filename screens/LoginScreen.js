import React, { Component } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { AsyncStorage } from 'react-native';
import { Header, Left, Body, Right, Title, Icon } from 'native-base';
import { Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base';

import AppHeader from '../components/AppHeader';
// app
import { AppScreen } from '../commons/appcommon';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  };

  _signIn = () => {
    const self = this;

    console.log(AppScreen)

    AsyncStorage.setItem('@app:session', self.state.username).then(()=>{
      // action when setItem done
      self.props.navigation.navigate(AppScreen.Home);
    });    
  };

  _onPressButton = () => {
    Alert.alert(this.state.username + ' ' + this.state.password)

    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          text: JSON.stringify(responseJson)
        });

        this.props.navigation.navigate(AppScreen.Home)
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <Container>
        <AppHeader title="Welcome" navigation={this.props.navigation} />
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input
                onChangeText={(username) => this.setState({ username })}
              />
            </Item>
            <Item floatingLabel last>
              <Label>Mật khẩu</Label>
              <Input secureTextEntry
                onChangeText={(password) => this.setState({ password })}
              />
            </Item>
            <Button success block onPress={this._signIn}>
              <Text>Đăng nhập</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default LoginScreen;