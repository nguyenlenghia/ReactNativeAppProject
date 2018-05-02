import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { AsyncStorage } from 'react-native';
import { Header, Left, Body, Right, Title, Button, Icon } from 'native-base';
import { StackNavigator, SwitchNavigator } from 'react-navigation';

class AppHeader extends Component {
  constructor(props) {
    super(props);

    console.log(props);

    this.state = {
        username: null
    }

    const self = this;

    AsyncStorage.getItem('@app:session').then((value) => {
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

    AsyncStorage.removeItem('@app:session').then(()=>{
      navigation.navigate('Auth')
    });    
  }

  _renderHeader = () => {
      if (this.state.username) {
          return (
            <Header>
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
            <Header>
              <Left/>
              <Body>
                <Title>{this.props.title}</Title>
              </Body>
              <Right/>
            </Header>
          );
      }
  }

  render() {
    return this._renderHeader();
  }
}

export default AppHeader;