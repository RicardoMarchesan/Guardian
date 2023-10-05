import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import PreloadScreen from "../screens/PreloadScreen";
import LoginScreen from "../screens/LoginScreen";
import DifficultScreen from "../screens/DifficultScreen";
import ChoosePropertyScreen from "../screens/ChoosePropertyScreen";
import MainDrawer from "./MainDrawer";

const Stack = createNativeStackNavigator();

export default () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="PreloadScreen"
                component={PreloadScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="DifficultScreen"
                component={DifficultScreen}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#000',
                    },
                    headerTintColor: '#b2b2b2b2',
                    headerTitle: 'Fortress',}}
            />
            <Stack.Screen
                name="ChoosePropertyScreen"
                component={ChoosePropertyScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="MainDrawer"
                component={MainDrawer}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
}
