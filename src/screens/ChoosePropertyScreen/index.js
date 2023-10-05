import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import C from "./style";


import { useStateValue } from "../../contexts/StateContext";
import fortress from "../../services/fortress";

export default () => {
    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();
    const [loading, setloading] = useState(true);

    useEffect(() => {
        const checkZeusSel = async () => {
            let zeus = await AsyncStorage.getItem("zeus");
            if (zeus) {
                zeus = JSON.parse(zeus);
                await chooseZeus(zeus);
            }
            setloading(false);
        };
        checkZeusSel();
    }, []);

    const handleLogoutButton = async () => {
        let result = await fortress.logout();
        if (result.success) {
            navigation.reset({
                index: 1,
                routes: [{ name: "LoginScreen" }],
            });
        } else {
            alert("Erro");
        }
    };

    const chooseZeus = async (zeus) => {
        await AsyncStorage.setItem("zeus", JSON.stringify(zeus));
        dispatch({
            type: "setZeus",
            payload: {
                zeus,
            },
        });

        navigation.reset({
            index:1,
            routes:[{name:'MainDrawer'}]
        })
    };

    return (
        <C.Container>
            <C.Imagebackground
                source={require("../../assets/zeus.png")}
                resizeMode="stretch"
                opacity={0.1}
            />
            <C.Scroller>
                {loading && <C.LoadingIcon color="#203367" size="large" />
                }
                {!loading && context.user && context.user.user.applications.length > 0 && (context.user.user.applications.some(
                    (application) => application.enterprise && application.enterprise.branch_id === 1)) && (
                    <>
                        <C.HeadTitleArea>
                            <C.HeadTitle>Escolha seu Zeus!</C.HeadTitle>
                        </C.HeadTitleArea>

                        <C.ZeusList>
                            {context.user.user.applications
                                .filter((application) => application.enterprise && application.enterprise.branch_id === 1)
                                .map((filteredApplication, index) => (
                                    <C.ButtonArea key={index}
                                                  onPress={() => chooseZeus(filteredApplication)}>
                                        {filteredApplication.enterprise.image && (
                                            <C.Logo
                                                source={{ uri: 'filteredApplication.enterprise.image' }}
                                                resizeMode="cover"
                                            />
                                        )}
                                        {!filteredApplication.enterprise.image && (
                                            <>
                                                <C.ButtonText>{filteredApplication.enterprise.name.toUpperCase()}</C.ButtonText>
                                                <C.ButtonText>{filteredApplication.enterprise.social.toUpperCase()}</C.ButtonText>
                                            </>

                                        )}
                                    </C.ButtonArea>
                                ))}
                        </C.ZeusList>
                    </>
                )}
                {!loading && context.user && context.user.user.applications.length <= 0 || (context.user.user.applications.some(
                        (application) => application.enterprise && application.enterprise.branch_id !== 1)) &&
                    <C.BigArea>
                        <C.HeadTitle>Parabéns pelo novo
                            cadastro, {context.user.user.person.name}!</C.HeadTitle>
                        <C.HeadTitle>Espere até que seu cadastro seja validado</C.HeadTitle>
                    </C.BigArea>
                }
            </C.Scroller>

            <C.ExitButtonArea onPress={handleLogoutButton}>
                <C.ExitButtonText>Sair</C.ExitButtonText>
            </C.ExitButtonArea>
        </C.Container>

    )
        ;
}
