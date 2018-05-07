import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { StyleSheet, Alert } from 'react-native';
import { Header, Left, Right, Title } from 'native-base';
import { Container, Content, Body } from 'native-base';
import { Form, Item, Label, Text, Button, Picker, Icon, Input, Textarea } from 'native-base';
import { Card, CardItem, List, ListItem, Switch } from 'native-base';
import moment from 'moment';

// components
import AppHeader from '../components/AppHeader';
import { VSelect, VTextField } from '../components/VSelect';
// app
import { AppScreen, AppUtil } from '../commons/appcommon';

class CreateScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      piority: null,
      rootWork: null,
      rootWorks: [],
      fileName: '',
      fileUrl: '',
      file: '',
      startDate: moment().format('YYYY-MM-DD'),
      startTime: moment().format('HH:mm'),
      finishTime: null,
      finishDate: null,
      group: null,
      groups: [
          {
              Value: '',
              Text: ''
          }],
      workGroup: null,
      workGroups: [
          {
              Value: '',
              Text: ''
          }],
      piorityList: [
          {
              Value: '',
              Text: ''
          }],
      receiverHeaders: [
        {
            text: 'Tên đăng nhập',
            value: 'UserName'
        },
        {
            text: 'Họ và tên',
            value: 'FullName'
        },
        {
            text: 'Nhóm',
            value: 'GroupName'
        },
        {
            text: 'Chức vụ',
            value: 'Position'
        },
        {
            text: '',
            value: 'Action'
        }
      ],
      receiverName: '',
      receiverItems: [],
      receiverSelected: [],
      addReceiverDialog: false,
      assignTo: [],
      workName: '',
      workContent: '',
      menuStartTime: false,
      menuFinishTime: false,
      dateFrom: '',
      menuStartDate: false,
      menuFinishDate: false,
      // dialog nhóm công việc
      addWorkGroupDialog: false,
      newWorkGroup: '',
      eoffice: '',
      assignToCc: [],
      addAssignToCcDialog: false,
      assignToCcItems: [],
      assignToCcSelected: []
    };
  }

  componentDidMount() {
    // This method is called after component init
    const self = this;

    // AppUtil.postJson("/Work/CreateInit", {}, (res) => {
    //   if (res.Result === "OK") {
    //     const data = res.Data;
    //     self.setState({
    //       workGroups: data.listWorkGroup,
    //       piorityList: data.listPriority,
    //       groups: data.listDepartments,
    //       receiverItems: data.listReceiver,
    //       assignToCcItems: data.listReceiver,
    //       rootWorks: data.listRootWork
    //     });
    //   }
    //   console.log(self.state.workGroups)
    // });
  }

  onWorkGroupChange = (value) => {
    const self = this;

    self.setState({
      workGroup: value
    });
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <Container>
        <AppHeader title="Thêm mới" navigation={this.props.navigation} />
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text>Thêm công việc mới</Text>
            </CardItem>
            {/* <CardItem>
              <Text>Data1</Text>
            </CardItem>
            <CardItem>
              <Item floatingLabel>
                <Label>Data2</Label>
                <Input/>
              </Item>
            </CardItem>
            <CardItem>
            <Textarea style={{width: undefined}} rowSpan={5} bordered placeholder="Data3" />
            </CardItem> */}
            <CardItem>
              <List>
                <ListItem icon>
                  <Left>
                    <Icon name="plane" />
                  </Left>
                  <Body>
                    <Text>Airplane Mode</Text>
                  </Body>
                  <Right>
                    <Switch value={false} />
                  </Right>
                </ListItem>

                <ListItem icon>
                  <Left>
                    <Icon name="wifi" />
                  </Left>
                  <Body>
                    <Text>Wi-Fi</Text>
                  </Body>
                  <Right>
                    <Text>GeekyAnts</Text>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
                <ListItem icon>
                  <Left>
                    <Icon name="bluetooth" />
                  </Left>
                  <Body>
                    <Text>Bluetooth</Text>
                  </Body>
                  <Right>
                    <Text>On</Text>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
              </List>
            </CardItem>

            {/* <CardItem bordered>
              <Body>
                <Form>
                  <List>
                  <VSelect
                    items={this.state.workGroups}
                    v_model={this.state.workGroup}
                    item_value="Value"
                    item_text="Text"
                    label="Nhóm công việc"
                    change={(value) => this.setState({workGroup:value})}
                  />
                  <VSelect
                    items={this.state.rootWorks}
                    v_model={this.state.rootWork}
                    item_value="Value"
                    item_text="Text"
                    label="Từ công việc"
                    change={(value) => this.setState({rootWork:value})}
                  />                  
                  <VTextField
                    label="Tên công việc"
                    v_model={this.state.workName}
                    change={(value) => this.setState({workName:value})}
                  />
                  <VTextField
                    label="Test 1"
                    v_model={this.state.workName}
                    change={(value) => this.setState({workName:value})}
                  />
                  <VTextField
                    label="Test 2"
                    v_model={this.state.workName}
                    change={(value) => this.setState({workName:value})}
                  />
                  <VSelect
                    items={this.state.piorityList}
                    v_model={this.state.piority}
                    item_value="Value"
                    item_text="Text"
                    label="Mức ưu tiên"
                    change={(value) => this.setState({piority:value})}
                  />
                  </List>
                </Form>
              </Body>
            </CardItem> */}
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