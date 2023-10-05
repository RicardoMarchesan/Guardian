import styled from "styled-components/native";
import { Platform } from "react-native";

export default {


    FieldContainer: styled.View`
        flex-direction: row;
        width: 70%;
        justify-content: center;
        align-items: center;
        margin-bottom: 15px;
    `,

    Field: styled.TextInput`
        flex: 1;
        width: 100%;
        border-width: 1px;
        border-color: #CCC;
        background-color: ${({ isFocused }) => (isFocused ? "#D0D0D0B2" : "#e8e8e8")};
        border-radius: 25px;
        color: black;
        font-size: 15px;
        padding: 10px 40px 10px 10px;
    `,

    Imagebackground: styled.Image`
        flex: 1;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    `,
    Container: styled.SafeAreaView`
        flex: 1;
        //background-color: #FFFFFF;
    `,
    Scroller: styled.ScrollView`
        flex: 1;
    `,
    LoadingIcon: styled.ActivityIndicator``,
    HeadTitleArea: styled.View`
        background-color: #D9D9D9D9;
        padding: 12px;
        justify-content: center;
        align-items: center;
    `,
    HeadTitle: styled.Text`
        font-size: 16px;
        color: #001635;
        text-align: center;
    `,
    BigArea: styled.View`
        margin: 50px 50px;
        align-items: center;
    `,
    ExitButtonArea: styled.TouchableOpacity`
        background-color: #001635;
        padding: 12px;
        justify-content: center;
        align-items: center;
    `,
    ExitButtonText: styled.Text`
        color: #D9D9D9D9;
        font-size: 15px;
        font-weight: bold;
    `,
    ButtonArea: styled.TouchableOpacity`
        background-color: #FFFFFF;
        border-width: 2px;
        border-color: #FFFFFF;
        padding: 30px;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        margin-bottom: 10px;
        ${
                Platform.select({
                    ios: `
                  shadow-color: black;
                  shadow-offset: { width: 0, height: 2 };
                  shadow-opacity: 0.3;
                  shadow-radius: 3;
                `,
                    android: `
                    elevation: 15;
                `,
                })
        }
    `,
    ButtonText: styled.Text`
        color: #203367;
        font-size: 16px;
        font-weight: bold;
        
    `
    ,
    ZeusList: styled.View`
        margin: 40px 20px;
    `,

    Logo: styled.Image`
        max-height: 150px;
        max-width: 150px;
    `,
};
