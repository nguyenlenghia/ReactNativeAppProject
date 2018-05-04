import React from "react";
import { Root } from "native-base";
import { StackNavigator, DrawerNavigator, SwitchNavigator } from "react-navigation";

import SideBar from "../components/sideBar";

import AuthLoadingScreen from '../screens/AuthLoadingScreen';

import HomeScreen from '../screens/HomeScreen';
import TestScreen from '../screens/TestScreen';
import LoginScreen from '../screens/LoginScreen';
import CreateScreen from '../screens/CreateScreen';

// Navigator các form kèm SideBar (left menu)
const Drawer = DrawerNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        Test: {
            screen: TestScreen
        },
        Login: {
            screen: LoginScreen
        },
        Create: {
            screen: CreateScreen
        },
    },
    {
        initialRouteName: "Test",
        contentOptions: {
            activeTintColor: "#e91e63"
        },
        contentComponent: props => <SideBar {...props} />
    }
);

// Navigator các form đã xác thực login
const AppStack = StackNavigator(
    {
        Drawer: { screen: Drawer }
    },
    {
        initialRouteName: 'Drawer',
        headerMode: "none" // không hiển thị header mặc định của react-navigation để sử dụng header của native-base
    }
);
// Navigator các form chưa xác thực login
const AuthStack = StackNavigator(
    { 
        Login: LoginScreen 
    },
    {
        initialRouteName: 'Login',
        headerMode: "none" // không hiển thị header mặc định của react-navigation để sử dụng header của native-base
    });
// Navigator quản lý trạng thái login
const AuthSwitch = SwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
);

export default () =>
    <Root>
        <AuthSwitch />
    </Root>;