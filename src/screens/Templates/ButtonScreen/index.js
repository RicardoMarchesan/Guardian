import React, { useEffect, useRef } from "react";
import C from "./style";

const ButtonScreen = ({ size, focused }) => {

    return (

        <C.Container>
            <C.Icon
                name="list-ul" color={focused ? "#001635" : "#D9D9D9" } size={size}
            />
        </C.Container>

    );
};
export default ButtonScreen;
