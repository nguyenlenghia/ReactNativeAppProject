import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Form, Item, Label, Text, Input, Button, Picker, Icon, ListItem, Left, Body, Right } from 'native-base';

class VSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
  render() {
    return (
        <ListItem icon>
            <Left>
                <Icon name="arrow-dropdown" />
            </Left>
            <Body>
              <Label>{this.props.label}</Label>
            </Body>
            <Right>
                <Picker
                    note
                    mode="dropdown"
                    iosIcon={<Icon name="ios-arrow-down-outline" />}
                    placeholder={this.props.label}
                    placeholderStyle={{ color: "#bfc6ea" }}
                    placeholderIconColor="#007aff"
                    style={{ width: 120 }}
                    selectedValue={this.props.v_model}
                    onValueChange={this.props.change}
                >
                {this.props.items.map((itm, idx) => (<Picker.Item key={idx} value={itm[this.props.item_value]} label={itm[this.props.item_text]} />))}
                </Picker>
            </Right>
        </ListItem>
    );
  }
}

class VTextField extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
  render() {
    return (
        <ListItem>
            <Left>
                <Icon name="arrow-dropdown" />
            </Left>
            <Body>
              <Item floatingLabel>
                <Label>{this.props.label}</Label>
                <Input
                        style={{ color: "#000" }}
                        value={this.props.v_model}
                        onChangeText={this.props.change}
                        />
                </Item>
            </Body>
            <Right/>
        </ListItem>
    );
  }
}

export { VSelect, VTextField };