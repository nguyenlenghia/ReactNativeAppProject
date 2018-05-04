import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { StyleSheet, Alert } from 'react-native';

import { Header, Left, Right, Title } from 'native-base';
import { Container, Content, Body } from 'native-base';
import { Form, Item, Label, Text, Button, Picker, Icon, Input, Textarea, CheckBox } from 'native-base';
import { Card, CardItem, List, ListItem, Switch, FooterTab, Footer, Tabs, Tab, ScrollableTab } from 'native-base';
import moment from 'moment';

// components
import AppHeader from '../components/AppHeader';

class CreateScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // This method is called after component init
    const self = this;
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    const ThisForm = (
      <Card>
            <CardItem header bordered>
              <Text>Thêm công việc mới</Text>
            </CardItem>

            <CardItem>
              <Form>
                <Text>Switch</Text>
                <Right>
                  <Switch value={false} />
                </Right>
              </Form>
            </CardItem>
            
            <CardItem>
                <Form>
                  <Label>Input</Label>
                  <Item regular style={{ width: 200 }}>
                    <Input placeholder='Regular Textbox' />
                  </Item>
                </Form>
            </CardItem>
            
            <CardItem>
                <Form>
                  <Label>Textarea</Label>
                  <Textarea style={{ width: 200 }} rowSpan={5} bordered placeholder="Data3" />
                </Form>
            </CardItem>
            
            <CardItem>
                <Form>
                  <Label>Dropdown</Label>
                  <Picker
                    note
                    mode="dropdown"
                    style={{ width: 200 }}
                  >
                    <Picker.Item label="TATA" value="key0" />
                    <Picker.Item label="AIRTEL" value="key1" />
                  </Picker>
                </Form>
            </CardItem>

            <CardItem>
              <Left>
                <CheckBox checked={true} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem footer bordered>
              <Button light style={styles.buttonHuy}>
                <Text>Hủy</Text>
              </Button>
              <Button light style={styles.buttonLuu}>
                <Text>Lưu</Text>
              </Button>
              <Button primary style={styles.buttonGiaoViec}>
                <Text>Giao việc</Text>
              </Button>
            </CardItem>
          </Card>
    )

    return (
      <Container>
        <AppHeader title="Thêm mới" navigation={this.props.navigation} hasTabs />
        <Content>
          <Tabs renderTabBar={()=> <ScrollableTab />}>
            <Tab heading="Tab1">
              <Content padder>
                {ThisForm}
              </Content>
            </Tab>
            <Tab heading="Tab2">
              <Text>xxx</Text>
            </Tab>
            <Tab heading="Tab3">
              <Text>yyy</Text>
            </Tab>
            <Tab heading="Tab4">
              <Text>zzz</Text>
            </Tab>
            <Tab heading="Tab5">
              <Text>aaa</Text>
            </Tab>
          </Tabs>
          
        </Content>
        <Footer>
          <FooterTab>
            <Button>
              <Icon name="apps" />
            </Button>
            <Button>
              <Icon name="camera" />
            </Button>
            <Button active>
              <Icon active name="navigate" />
            </Button>
            <Button>
              <Icon name="person" />
            </Button>
          </FooterTab>
        </Footer>
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