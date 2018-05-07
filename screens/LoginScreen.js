import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { StyleSheet, Alert } from 'react-native';
import { Header, Left, Body, Right, Title, Icon } from 'native-base';
import { Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
// components
import AppHeader from '../components/AppHeader';
// app
import { AppScreen, AppUtil } from '../commons/appcommon';

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
    const postData = {
      UserName: self.state.username,
      Password: self.state.password
    };

    //AppUtil.post('http://10.32.42.50:45144/Account/ApiLogin', postData, (res) => {
    //AppUtil.post('http://workman.tanhoangminh.com.vn/Home/getWorkHome', postData, (res) => {
    AppUtil.postJson('/Account/ApiLogin', postData, (res) => {

      // TODO: test
      AsyncStorage.setItem('@app:session', 'SSID_TEST').then(()=>{
        AsyncStorage.setItem('@app:username', self.state.username).then(()=>{
          AsyncStorage.setItem('@app:isLogin', "True").then(()=>{
            // action when setItem done
            self.props.navigation.navigate(AppScreen.App);
          });
        });
      });
      return;

      if(res.Result == "OK") {
        AsyncStorage.setItem('@app:session', res.SSID).then(()=>{
          AsyncStorage.setItem('@app:username', self.state.username).then(()=>{
            AsyncStorage.setItem('@app:isLogin', "True").then(()=>{
              // action when setItem done
              self.props.navigation.navigate(AppScreen.App);
            });
          });
        });
      } else {
        Alert.alert(res.Message);
      }
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
              <Label>Tài khoản</Label>
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