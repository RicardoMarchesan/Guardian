import React, { useState, useEffect } from "react";
import { Animated, Easing } from "react-native";
import { useNavigation } from "@react-navigation/native";
import C from "./style";
import Loading from "../Templates/LoadingScreen"

import { useStateValue } from "../../contexts/StateContext";
import fortress from "../../services/fortress";

export default () => {
    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();

    useEffect(() => {
        const checkLogin = async () => {
            let token = await fortress.getToken();
            if (token) {
                let result = await fortress.validateToken();
                if (result.id) {
                    dispatch({
                        type: "setUser",
                        payload: {
                            user: result,
                        },
                    });
                    navigation.reset({
                        index: 1,
                        routes: [{ name: "ChoosePropertyScreen" }],
                    });
                } else {
                    alert(result.error);
                    dispatch({
                        type: "setToken",
                        payload: {
                            token: "",
                        },
                    });
                    dispatch({
                        type: "setLifeTime",
                        payload: {
                            lifetime: "",
                        },
                    });
                    navigation.reset({
                        index: 1,
                        routes: [{ name: "LoginScreen" }],
                    });
                }
            } else {
                navigation.reset({
                    index: 1,
                    routes: [{ name: "LoginScreen" }],
                });
            }
        };
        checkLogin();
    }, []);

    return (
        <C.Container>
            <C.LoadingContainer>
                <Loading />
            </C.LoadingContainer>
        </C.Container>
    );
}
