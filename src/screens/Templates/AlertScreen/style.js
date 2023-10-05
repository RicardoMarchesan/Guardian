import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome";

export default {
    Container: styled.SafeAreaView`
        flex: 1;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.5);
    `,
    Modal: styled.Modal`
`,
    AlertBox: styled.View`
        background-color: ${({ kind }) => (
            kind == "error" ? "#dc3545" : 
            kind == "warning" ? "#ffc107" : 
            kind == "info" ? "#17a2b8" : "#28a745"
        )};
        position: absolute;
        top: 10px;
        right: 10px;
        border-radius: 10px;
        padding: 20px;
        width: 300px;
        justify-content: center;
        align-items: center;
    `,
    Message: styled.Text`
        color: #ffff;
        font-size: 16px;
        font-weight: bold;
        padding-left: 20px;
    `,
    CloseButton: styled.TouchableOpacity`
        border-radius: 5px;
        padding: 10px;
        position: absolute;
        top: 10px;
        right: 10px;
    `,
    Close: styled(Icon)`
        position: absolute;
        font-size: 16px;
        color: #ffff;
    `,

    Icon: styled(Icon)`
        position: absolute;
        left: 15px;
        font-size: 20px;
        font-weight: 500;
        color: #ffff;
    `,
};
