import React from 'react';

const AppScreen = {
    Home : "Home",
    Login : "Login",
    Create : "Create"
}

class AppUtilObj {
    postJson = (url, data, callback) => {
        return fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            //body: data
            body: JSON.stringify(data)
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
            callback(responseJson);
        })
        .catch((error) => {
            console.error(error);
        });
    }
    getJson = (url, data, callback) => {
        // add data vào url querystring
        const queryString = this.convertObjToQueryString(data);
        if(queryString) {
            if(queryString && url.includes('?'))
                url = url + '&' + queryString
            else
                url = url + '?' + queryString
        }
        console.log(url);

        return fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            //console.log(responseJson);
            callback(responseJson);
        })
        .catch((error) => {
            console.error(error);
        });
    }
    // convert js object sang querystring
    convertObjToQueryString = (obj) => {
        const keyValuePairs = [];
        for (const key in obj) {
            keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
        }
        return keyValuePairs.join('&');
    }
}

const AppUtil = new AppUtilObj()


export { AppScreen, AppUtil };