import Icon from "react-native-vector-icons/FontAwesome";
import styled from "styled-components/native";
export default {
    Container: styled.SafeAreaView`
        flex: 1;
    `,

    Scroller: styled.ScrollView`
        flex: 1;
    `,

    Imagebackground: styled.ImageBackground`
        flex: 1;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    `,

    DifficultButtonArea: styled.TouchableOpacity`
        width: 100%;
        background-color: #D9D9D9;
        padding: 25px;
        justify-content: center;
        align-items: center;
    `,
    DifficultButtonText: styled.Text`
        color: #203367;
        font-size: 15px;
        font-weight: 300;
    `,

    ViewRow: styled.View`
        flex: 1;
        flex-direction: row;
        justify-content: center;
    `,

    ViewCenter: styled.View`
        flex: 1;
        align-items: center;
        justify-content: center;
    `,
    ViewZeus: styled.View`
        align-items: start;
        justify-content: left;
        margin-right: 150px;
    `,

    ContentWrapper: styled.View`
        flex: 1;
        margin-top: 100px;
        width: 100%;
        align-items: center;
        justify-content: center;
    `,

    Logo: styled.Image`
        margin-top: 10px;
    `,

    FieldContainer: styled.View`
        flex-direction: row;
        width: 80%;
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
    Icon: styled(Icon)`
        position: absolute;
        right: 20px;
        font-size: 16px;
        color: #706E6EB2;
    `,
    ButtonArea: styled.TouchableOpacity`
        width: 80%;
        background-color: #203367;
        padding: 10px;
        justify-content: center;
        align-items: center;
        border-radius: 25px;
        margin-bottom: 15px;
    `,
    ButtonText: styled.Text`
        color: #b2b2b2b2;
        font-size: 15px;
        font-weight: bold;
    `,

    Zeus: styled.Text`
        color: #D9D9D9;
        font-size: 80px;
        text-align: left;
        font-weight: 300;
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

    /*Container: styled.SafeAreaView`
        flex: 1;
    `,

    Imagebackground: styled.ImageBackground`
        flex: 1;
        position: relative;
        justify-content: flex-end;
    `,


    ViewRow: styled.View`
        flex: 1;
        flex-direction: row;
        justify-content: center;
    `,

    ViewCenter: styled.View`
        flex: 1;
        align-items: center;
        justify-content: center;
    `,
    ViewZeus: styled.View`
        align-items: start;
        justify-content: left;
        margin-right: 150px;
    `,

    ContentWrapper: styled.View`
        flex: 1;
        margin-top: 100px;
        width: 100%;
        align-items: center;
        justify-content: center;
    `,

    Logo: styled.Image`
        margin-top: 10px;
    `,

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
    Icon: styled(Icon)`
        position: absolute;
        right: 20px;
        font-size: 16px;
        color: #706E6EB2;
    `,
    ButtonArea: styled.TouchableOpacity`
        width: 70%;
        background-color: #203367;
        padding: 10px;
        justify-content: center;
        align-items: center;
        border-radius: 25px;
        margin-bottom: 15px;
    `,
    ButtonText: styled.Text`
        color: #b2b2b2b2;
        font-size: 15px;
        font-weight: bold;
    `,

    DifficultButtonArea: styled.TouchableOpacity`
        width: 100%;
        background-color: #D9D9D9;
        padding: 25px;
        justify-content: center;
        align-items: center;
    `,
    DifficultButtonText: styled.Text`
        color: #203367;
        font-size: 15px;
        font-weight: 300;
    `,
    Zeus: styled.Text`
        color: #D9D9D9;
        font-size: 80px;
        text-align: left;
        font-weight: 300;
    `,*/
};
