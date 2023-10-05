import styled from 'styled-components/native';

export default {
    Container: styled.SafeAreaView`
        flex: 1;
        justify-content: center; /* Centralizar verticalmente */
        align-items: center; /* Centralizar horizontalmente */
        background-color: #D9D9D9;
    `,
    Logo: styled.Image`
        width: 250px;
        height: 200px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 20px;
    `,
    Field: styled.TextInput`
        width: 90%; /* Ocupa a largura total */
        border-width: 1px;
        border-color: #CCC;
        background-color: #D0D0D0B2;
        border-radius: 5px;
        color: black;
        font-size: 15px;
        padding: 10px;
        margin-bottom: 15px;
    `,
    ButtonArea: styled.TouchableOpacity`
        width: 90%; /* Ocupa a largura total */
        background-color: #203367;
        padding: 12px;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        margin-bottom: 15px;
    `,
    ButtonText: styled.Text`
        color: #b2b2b2b2;
        font-size: 15px;
        font-weight: bold;
    `,
};
