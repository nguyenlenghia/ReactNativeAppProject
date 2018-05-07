import React from 'react';
import { Alert } from 'react-native';

const AppScreen = {
    Home : "Home",
    Login : "Login",
    Create : "Create"
}

const AppConfig = {
    ApiUrl : "http://10.32.42.50:45144"
}

class AppUtilObj {
    postJson = (url, data, callback) => {
        url = AppConfig.ApiUrl + url;
        // logging
        console.log(`POST: ${url}`);

        return fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            //body: data
            body: JSON.stringify(data)
        })
        .then((response) => {
            console.log(`POST-RESPONSE: ${JSON.stringify(response)}`);
            return response.json() || {};
        })
        .then((responseJson) => {
            callback(responseJson);
        })
        .catch((error) => {
            console.error(error);
        });
    }
    getJson = (url, data, callback) => {
        url = AppConfig.ApiUrl + url;
        // logging
        console.log(`GET: ${url}`);

        // add data vào url querystring
        let queryString = this.convertObjToQueryString(data);
        if(queryString) {
            if(queryString && url.includes('?'))
                url = url + '&' + queryString
            else
                url = url + '?' + queryString
        }
        console.log(url);

        return fetch(url)
        .then((response) => {
            console.log(`GET-RESPONSE: ${JSON.stringify(response)}`);
            return response.json() || {};
        })
        .then((responseJson) => {
            callback(responseJson);
        })
        .catch((error) => {
            console.error(error);
        });
    }
    // convert js object sang querystring
    convertObjToQueryString = (obj) => {
        let keyValuePairs = [];
        for (let key in obj) {
            keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
        }
        return keyValuePairs.join('&');
    }

    alert = (title, message, callback) => {
        let header = "", content = message;

        if(type == "OK") {
            header = "Thành công";
        } else if (type === "ERROR") {
            header = "Lỗi";
        } else {
            header = "Cảnh báo";
        }

        Alert.alert(
            header,
            content,
            [
                {text: 'OK', onPress: () => { if(callback) callback(); }},
            ],
            { cancelable: false }
        );
    }

    confirm = (title, message, callback) => {
        let header = "", content = message;

        if (type == "OK") {
            header = "Xác nhận thành công";
        } else if (type === "ERROR") {
            header = "Xác nhận lỗi";
        } else {
            header = "Xác nhận cảnh báo";
        }

        Alert.alert(
            header,
            content,
            [
                {text: 'Đồng ý', onPress: () => { if(callback) callback(true); }},
                {text: 'Hủy', onPress: () => { if(callback) callback(false); }},
            ],
            { cancelable: false }
        );
    }
}

const AppUtil = new AppUtilObj()


export { AppScreen, AppUtil, AppConfig };