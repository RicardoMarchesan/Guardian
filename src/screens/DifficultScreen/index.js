import React, {useState} from "react";
import WebView from "react-native-webview";
import {useNavigation} from "@react-navigation/native";

import {useStateValue} from "../../contexts/StateContext";

export default () => {
    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();

    return (
        <WebView
            source={{ uri: 'http://192.168.100.149:8000' }}
            style={{ flex: 1 }}
        />
    );
}
