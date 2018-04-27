import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Setup from './boot/Setup';

export default class App extends React.Component {
  render() {
    return (
      <Setup />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  buttonStyle: {
    color: "#841584"
  },
});
