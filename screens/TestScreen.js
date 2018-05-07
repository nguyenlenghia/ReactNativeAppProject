import React, { Component } from 'react';
import { StyleSheet, AsyncStorage } from 'react-native';

import { Left, Right, Body } from 'native-base';
import { Card, CardItem } from 'native-base';
import { List, ListItem } from 'native-base';
import { Tabs, Tab, ScrollableTab } from 'native-base';
import { Content, Form, Item, Label, Text, Button, Picker, Icon, Input, Textarea, CheckBox, Switch } from 'native-base';

import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

// components
import { AppContainer } from '../components';

class TestScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      
      startDate: null,
      isDateTimePickerVisible: false,
    };
  }

  componentDidMount() {
    // This method is called after component init
    const self = this;

    self.setState({
      // loading complete
      isLoading: false
    })
  }

  render() {
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
                  <Label>Textarea2</Label>
                  <Item regular style={{ width: 200 }}>
                    <Input placeholder='Regular Textbox' multiline = {true}    numberOfLines = {4} />
                  </Item>
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

            <CardItem>
              <Form>
                <Label>DateTimePicker</Label>
                <Item regular style={{ width: 200 }}>
                  <Input placeholder='DateTimePicker Textbox' editable={false} value={this.state.startDate}  />
                  <Icon active type="MaterialIcons" name='today' onPress={()=>this.setState({isDateTimePickerVisible: true})} />
                </Item>
                <DateTimePicker
                  date={moment(this.state.startDate || '', 'YYYY-MM-DD')||new Date()}
                  isVisible={this.state.isDateTimePickerVisible}
                  onConfirm={(date) => {
                    console.log('A date has been picked: ', date);
                    // hide picker
                    this.setState({
                      startDate: moment(date).format('YYYY-MM-DD'),
                      isDateTimePickerVisible: false
                    })
                  }}
                  onCancel={()=>this.setState({isDateTimePickerVisible: false})}
                />
              </Form>
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
      <AppContainer
        title="Thêm mới"
        navigation={this.props.navigation}
        isLoading={this.state.isLoading}
        hasTabs>
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
      </AppContainer>
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

export default TestScreen;