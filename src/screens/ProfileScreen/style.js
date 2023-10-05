import styled from "styled-components/native";
export default {
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
    `,
    Scroller: styled.ScrollView`
        flex: 1;
    `,
    Text: styled.Text`
        margin: 10px 0px;
        font-weight: bold;
        font-size: 18px;
    `,
    LoadingContainer: styled.View`
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.5);
    `,
};
