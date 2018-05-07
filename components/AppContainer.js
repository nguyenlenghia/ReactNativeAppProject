import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { AsyncStorage } from 'react-native';
import { Container, Header, Footer, Content, Spinner } from 'native-base';
// app
import { AppScreen } from '../commons/appcommon';
// components
import { AppHeader, AppFooter } from '../components';

class AppContainer extends Component {
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
    if (this.props.isLoading) {
      return (
        <Container>
          <AppHeader
            title={this.props.title}
            navigation={this.props.navigation}
          />
            <Content>
              <Spinner color='red' />
            </Content>
          <AppFooter navigation={this.props.navigation} />
        </Container>
      );
    }

    return (
      <Container>
        <AppHeader
          title={this.props.title}
          navigation={this.props.navigation}
          hasTabs={this.props.hasTabs}
        />
          {this.props.children}
        <AppFooter navigation={this.props.navigation} />
      </Container>
    );
  }
}

export default AppContainer;