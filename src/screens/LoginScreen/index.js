import React, { useState } from "react";
import {
    Platform,
    Keyboard,
    TouchableWithoutFeedback,
    KeyboardAvoidingView, Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Loading from "../Templates/LoadingScreen";
import AlertScreen from "../Templates/AlertScreen";
import C from "./style";


import { useStateValue } from "../../contexts/StateContext";
import fortress from "../../services/fortress";

export default () => {
    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
    const [loading, setloading] = useState(false);
    const [alert, setAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [kind, setKind] = useState("");

    const MAX_RETRY_ATTEMPTS = 10;
    const RETRY_INTERVAL = 1000;
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleEmailFocus = () => {
        setIsEmailFocused(true);
        setIsPasswordFocused(false);
    };

    const handleEmailBlur = () => {
        setIsEmailFocused(false);
    };

    const handlePasswordFocus = () => {
        setIsPasswordFocused(true);
        setIsEmailFocused(false);
    };

    const handlePasswordBlur = () => {
        setIsPasswordFocused(false);
    };

    const handleLoginButton = async () => {
        if (password && email) {
            setloading(true);
            let retryAttempts = 0;
            let result = await fortress.login(email, password);
            if (result.access_token) {
                token = await dispatch({
                    type: "setToken",
                    payload: {
                        token: result.access_token,
                    },
                });
                lifetime = await dispatch({
                    type: "setLifeTime",
                    payload: {
                        lifetime: (Date.now() + result.expires_in * 1000).toString(),
                    },
                });

                let tokenFromStorage = await fortress.getToken();

                while (!tokenFromStorage && retryAttempts < MAX_RETRY_ATTEMPTS) {
                    tokenFromStorage = await fortress.getToken();

                    if (!tokenFromStorage) {
                        await new Promise((resolve) => setTimeout(resolve, RETRY_INTERVAL));
                        retryAttempts++;
                    }
                }

                if (tokenFromStorage) {
                    let userFortress = await fortress.validateToken();
                    if (userFortress.id) {
                        await dispatch({
                            type: "setUser",
                            payload: {
                                user: userFortress,
                            },
                        });

                        navigation.reset({
                            index: 1,
                            routes: [{ name: "ChoosePropertyScreen" }],
                        });
                    }
                }
            } else {
                setloading(false);
                switch (result.error) {
                    case "invalid_request":
                        setAlertMessage("Preencha todos os campos!");
                        setKind("error");
                        setAlert(true);
                        break;
                    case "invalid_grant":
                        setAlertMessage("E-mail e/ou senha incorretos! Tente novamente!");
                        setKind("error");
                        setAlert(true);
                        break;
                    default:
                        setAlertMessage("Tente novamente.");
                        setKind("error");
                        setAlert(true);
                        break;
                }
            }

        } else {
            setloading(false);
            setAlertMessage("Preencha todos os campos");
            setKind("error");
            setAlert(true);
        }
    };

    const handleDifficultButton = () => {
        navigation.navigate("DifficultScreen");
    };
    const { height } = Dimensions.get("window");

    return (
        <C.Container>
            <C.Container>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <KeyboardAvoidingView
                        flex={1}
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                        enabled
                    >
                        <C.Imagebackground
                            source={require("../../assets/zeus.png")}
                            resizeMode="stretch"
                            opacity={0.1}
                            style={{
                                position: "absolute",
                                top: -1,
                                height,
                                width: "100%",
                            }}
                        />
                        <C.ViewCenter>
                            <C.Logo
                                source={require("../../assets/vertical_branco.png")}
                                resizeMode="cover"
                            />
                            <C.ContentWrapper>
                                <C.FieldContainer>
                                    <C.Field
                                        placeholder="Entre com seu E-mail"
                                        value={email}
                                        onChangeText={t => setEmail(t)}
                                        isFocused={isEmailFocused}
                                        onFocus={handleEmailFocus}
                                        onBlur={handleEmailBlur}
                                    />
                                </C.FieldContainer>
                                <C.FieldContainer>
                                    <C.Field
                                        placeholder="Entre com sua senha"
                                        secureTextEntry={!showPassword}
                                        value={password}
                                        onChangeText={t => setPassword(t)}
                                        isFocused={isPasswordFocused}
                                        onFocus={handlePasswordFocus}
                                        onBlur={handlePasswordBlur}
                                    />
                                    <C.Icon
                                        name={showPassword ? "eye" : "eye-slash"}
                                        onPress={toggleShowPassword}
                                    />
                                </C.FieldContainer>
                                <C.ButtonArea onPress={handleLoginButton}>
                                    <C.ButtonText>Acessar</C.ButtonText>
                                </C.ButtonArea>
                            </C.ContentWrapper>
                            <C.ViewZeus>
                                <C.Zeus>ZEUS</C.Zeus>
                            </C.ViewZeus>
                        </C.ViewCenter>
                        <C.DifficultButtonArea onPress={handleDifficultButton}>
                            <C.DifficultButtonText>Estou com diificuldade no acesso</C.DifficultButtonText>
                        </C.DifficultButtonArea>
                    </KeyboardAvoidingView>
                </TouchableWithoutFeedback>
            </C.Container>
            {loading && (
                <C.LoadingContainer>
                    <Loading />
                </C.LoadingContainer>
            )}
            {alert && (
                <AlertScreen
                    visible={alert}
                    message={alertMessage}
                    kind={kind}
                    onClose={() => setAlert(false)}
                />
            )}
        </C.Container>
    );
}
