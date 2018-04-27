import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { AsyncStorage } from 'react-native';
import { Header, Left, Body, Right, Title, Button, Icon } from 'native-base';
import { StackNavigator, SwitchNavigator } from 'react-navigation';
class AppHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
        myKey: null
    }

    this.getKey('myKey')
  }

  getKey = async (key) => {
    try {
      const value = await AsyncStorage.getItem('userToken');
      this.setState({myKey: value});
    } catch (error) {
      console.log("Error retrieving data" + error);
    }
  }

  setKey = async (key, value) => {
    try {
      await AsyncStorage.setItem('userToken', value);
    } catch (error) {
      console.log("Error saving data" + error);
    }
  }

  removeKey = async (key) => {
    try {
      await AsyncStorage.removeItem('userToken');
      await getKey(key)
    } catch (error) {
      console.log("Error resetting data" + error);
    }
  }

  _openSideBar = () => {
    this.props.navigation.navigate("DrawerOpen");
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear(()=>this.props.navigation.navigate('Auth'));
    
  }

  _renderHeader = () => {
      if (this.state.myKey) {
          return (
            <Header>
              <Left>
                <Button transparent onPress={()=>this._openSideBar()}>
                  <Icon name="menu" />
                </Button>
              </Left>
              <Body>
                <Title>{this.props.title + this.state.myKey}</Title>
              </Body>
              <Right>
                <Button transparent onPress={()=>this._signOutAsync()}>
                  <Icon name="log-out" />
                </Button>
              </Right>
            </Header>
          );
      } else {
          return null;
      }
  }

  render() {
    return this._renderHeader();
  }
}

export default AppHeader;