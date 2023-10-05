import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import C from "./style";
import { useStateValue } from "../../contexts/StateContext";

export default () => {
    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();
    const [loading, setloading] = useState(true);


    return (
        <C.Container>
            <C.Text>
                Menu
            </C.Text>

        </C.Container>
    );
}
