import React, { Component } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { WebView } from 'react-native';


class WebViewScreen extends Component {
  render() {
    return (
      <WebView
        //source={{uri: 'https://datxe.tanhoangminh.com.vn'}}
        source={{uri: 'http://workman.tanhoangminh.com.vn'}}
        style={{marginTop: 22}}
      />
    );
  }
}

export default WebViewScreen;