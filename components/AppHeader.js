import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { AsyncStorage } from 'react-native';
import { Header, Left, Body, Right, Title, Button, Icon } from 'native-base';
// app
import { AppScreen } from '../commons/appcommon';

class AppHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
        username: null
    }

    const self = this;

    AsyncStorage.getItem('@app:username').then((value) => {
      self.setState({username: value});
    });
  }

  _openSideBar = () => {
    const self = this;
    const navigation = self.props.navigation;

    navigation.navigate("DrawerOpen");
  }

  _signOut = () => {
    const self = this;
    const navigation = self.props.navigation;

    AsyncStorage.clear().then(()=>{
      navigation.navigate(AppScreen.Login)
    });    
  }

  _renderHeader = () => {
      
  }

  render() {
    if (this.state.username) {
      return (
        <Header {...this.props}>
          <Left>
            <Button transparent onPress={()=>this._openSideBar()}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>{this.props.title + ' ' + this.state.username}</Title>
          </Body>
          <Right>
            <Button transparent onPress={()=>this._signOut()}>
              <Icon name="log-out" />
            </Button>
          </Right>
        </Header>
      );
    } else {
        return (
          <Header {...this.props}>
            <Left/>
            <Body>
              <Title>{this.props.title}</Title>
            </Body>
            <Right/>
          </Header>
        );
    }
  }
}

export default AppHeader;