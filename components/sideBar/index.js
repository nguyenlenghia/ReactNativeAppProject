import React, { Component } from "react";
import { Image } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge
} from "native-base";
import styles from "./style";

const drawerCover = require("../../images/drawer-cover.png");
const drawerImage = require("../../images/f_logo.png");
const datas = [
  {
    name: "Trang chủ",
    route: "Home",
    icon: "home",
    bg: "#C5F442"
  },
  {
    name: "Giao việc",
    itemDivider: true,
    icon: "today",
    bg: "#C5F442"
  },
  {
    name: "Thêm mới",
    route: "Create",
    icon: "add",
    bg: "#C5F442"
  },
  {
    name: "Khởi tạo",
    route: "Home",
    icon: "edit",
    bg: "#C5F442"
  },
  {
    name: "Chưa hoàn thành",
    route: "Home",
    icon: "timelapse",
    bg: "#C5F442"
  },
  {
    name: "Đã hoàn thành",
    route: "Home",
    icon: "check",
    bg: "#C5F442"
  },
  {
    name: "Quá hạn",
    route: "Home",
    icon: "error-outline",
    bg: "#C5F442"
  },
  {
    name: "Ủy Nhiệm",
    route: "Home",
    icon: "people-outline",
    bg: "#C5F442"
  }
];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >
          <Image source={drawerCover} style={styles.drawerCover} />
          <Image square style={styles.drawerImage} source={drawerImage} />

          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                noBorder
                itemDivider={data.itemDivider}
                onPress={() => { if (data.route) this.props.navigation.navigate(data.route); }}
              >
                <Left>
                  <Icon
                    type="MaterialIcons"
                    active
                    name={data.icon}
                    style={{ color: "#777", fontSize: 26, width: 30 }}
                  />
                  <Text style={styles.text}>
                    {data.name}
                  </Text>
                </Left>
                {data.types &&
                  <Right style={{ flex: 1 }}>
                    <Badge
                      style={{
                        borderRadius: 3,
                        height: 25,
                        width: 72,
                        backgroundColor: data.bg
                      }}
                    >
                      <Text
                        style={styles.badgeText}
                      >{`${data.types} Types`}</Text>
                    </Badge>
                  </Right>}
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;