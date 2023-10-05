import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import HomeScreen from "../screens/HomeScreen";
import ChoosePropertyScreen from "../screens/ChoosePropertyScreen";
import EventScreen from "../screens/EventScreen";
import GroupScreen from "../screens/GroupScreen";
import MenuScreen from "../screens/MenuScreen";

import ButtonScreen from "../screens/Templates/ButtonScreen";
import { Platform, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";


const Tab = createBottomTabNavigator();
export default () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    left: 0,
                    elevation: 0,
                    backgroundColor: "#001635",
                    borderTopWidth: 0,
                    height: 60,
                },
                tabBarActiveTintColor: "#1BBFDD",
                tabBarInactiveTintColor: "#D9D9D9",
            }}
            /*sceneContainerStyle={{ backgroundColor: "transparent" }}*/
            initialRouteName="Início"
        >
            <Tab.Screen
                name="Início"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <FontAwesome name="home" size={size} color={color} />
                    ),

                }}

            />
            <Tab.Screen
                name="Zeus"
                component={ChoosePropertyScreen}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <FontAwesome name="bolt" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Eventos"
                component={EventScreen}
                options={{
                    tabBarIcon: ({size, color, focused}) => {
                        return (
                            <View
                                style={{
                                    top: Platform.OS === 'ios' ? -10 : -20,
                                    width: Platform.OS === 'ios' ? 50 : 60,
                                    height: Platform.OS === 'ios' ? 50 : 60,
                                    borderRadius: Platform.OS === 'ios' ? 20 : 30,
                                    backgroundColor: "#1BBFDD",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textAlign: "center",
                                }}
                            >
                            </View>
                        )
                    }
                    /*tabBarIcon: ({ size, color, focused }) => (
                        <ButtonScreen size={size} color={color} focused={focused} />
                    ),*/
                }}

            />
            <Tab.Screen
                name="Meu Grupo"
                component={GroupScreen}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <FontAwesome name="users" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Menu"
                component={MenuScreen}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <FontAwesome name="bars" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
