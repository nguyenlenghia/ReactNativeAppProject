import React, { Component } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { Header, Left, Right, Title } from 'native-base';
import { Container, Content, Body } from 'native-base';
import { Form, Text, Button, Picker, Icon } from 'native-base';
import { Card, CardItem } from 'native-base';

// components
import AppHeader from '../components/AppHeader';
// app
import { AppScreen } from '../commons/appcommon';

class CreateScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workGroup: null,
      workGroups: [],
    };
  }

  onWorkGroupChange = (value) => {
    const self = this;

    self.setState({
      workGroup: value
    });
  };

  render() {
    return (
      <Container>
        <AppHeader title="Thêm mới" navigation={this.props.navigation} />
        <Content>
          <Card>
            <CardItem header bordered>
              <Text>Thêm công việc mới</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Form>
                  <Text>
                    //Your text here 
                    // workGroup: {this.state.workGroup}
                  </Text>
                  <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="ios-arrow-down-outline" />}
                    placeholder="Nhóm công việc"
                    placeholderStyle={{ color: "#bfc6ea" }}
                    placeholderIconColor="#007aff"
                    style={{ width: undefined }}
                    selectedValue={this.state.workGroup}
                    onValueChange={this.onWorkGroupChange.bind(this)}
                  >
                    <Picker.Item label="Wallet" value="key0" />
                    <Picker.Item label="ATM Card" value="key1" />
                    <Picker.Item label="Debit Card" value="key2" />
                    <Picker.Item label="Credit Card" value="key3" />
                    <Picker.Item label="Net Banking" value="key4" />
                  </Picker>

                </Form>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Button style={styles.buttonHuy}>
                <Text>Hủy</Text>
              </Button>
              <Button style={styles.buttonLuu}>
                <Text>Lưu</Text>
              </Button>
              <Button blue style={styles.buttonGiaoViec}>
                <Text>Giao việc</Text>
              </Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

var styles = StyleSheet.create({
  buttonHuy: {
    marginLeft: 10
  },
  buttonLuu: {
    marginLeft: 10
  },
  buttonGiaoViec: {
    marginLeft: 10
  },
});

export default CreateScreen;