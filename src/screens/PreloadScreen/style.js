import styled from "styled-components/native";

export default {
    Container: styled.SafeAreaView`
        flex: 1;
        justify-content: center;
        align-items: center;
        background-color: #ffffff;
    `,
    LoadingIcon: styled.ActivityIndicator``,
    Logo: styled.Image`
        margin-top: 10px;
        width: 80px;
        height: 80px;
    `,
    Button: styled.Button``,

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
