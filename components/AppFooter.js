import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { AsyncStorage } from 'react-native';
import { Footer, FooterTab, Button, Icon } from 'native-base';
// app
import { AppScreen } from '../commons/appcommon';

class AppFooter extends Component {
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

  render() {
    const navigation = this.props.navigation;

    if (this.state.username) {
      return (
        <Footer {...this.props}>
          <FooterTab>
            <Button active onPress={()=>navigation.navigate(AppScreen.Home)}>
              <Icon active name="home" />
            </Button>
            <Button>
              <Icon name="search" />
            </Button>
            <Button onPress={()=>navigation.navigate(AppScreen.Create)}>
              <Icon name="add" />
            </Button>
            <Button>
              <Icon name="person" />
            </Button>
          </FooterTab>
        </Footer>
      );
    } else {
      return (
        <Footer/>
      );
    }
  }
}

export default AppFooter;