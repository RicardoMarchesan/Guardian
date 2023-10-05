import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome";
import {Platform} from "react-native";

export default {
    Container: styled.View`
        top: ${Platform.OS === 'ios' ? '-10px' : '-20px'};
        flex: 1;
        position: absolute;
        width: ${Platform.OS === 'ios' ? '50px' : '60px'};
        height: ${Platform.OS === 'ios' ? '50px' : '60px'};
        border-radius: ${Platform.OS === 'ios' ? '20px' : '30px'};
        background-color: #1BBFDD;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-bottom: 60px;
        overflow: visible;
    `,

    Text: styled.Text``,
    Icon: styled(Icon)`
    `,
};
