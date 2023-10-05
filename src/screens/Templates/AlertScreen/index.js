import React, { useEffect, useRef } from "react";
import { Animated, TouchableOpacity } from "react-native";
import C from "./style";

const AlertScreen = ({ visible, message, onClose, kind }) => {
    const swingAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const swing = () => {
            Animated.sequence([
                Animated.timing(swingAnim, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                }),
                Animated.timing(swingAnim, {
                    toValue: -1,
                    duration: 500,
                    useNativeDriver: true,
                }),
                Animated.timing(swingAnim, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                }),
                Animated.timing(swingAnim, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: true,
                }),
            ]).start();
        };

        swing();
    }, [swingAnim]);

    const interpolateRotation = swingAnim.interpolate({
        inputRange: [-1, 0, 1],
        outputRange: ["-10deg", "0deg", "6deg"],
    });

    return (
        <C.Modal transparent={true} visible={visible} animationType="fade">
            <TouchableOpacity
                activeOpacity={1}
                style={{ flex: 1 }}
                onPress={onClose}
            >
                <C.Container>
                    <Animated.View
                        style={[
                            {
                                transform: [{ rotate: interpolateRotation }],
                                position: "absolute",
                                top: 20,
                                right: 10,
                            },
                        ]}
                    >
                        <C.AlertBox
                            kind={kind}
                        >
                            <C.CloseButton onPress={onClose}>
                                <C.Close
                                    name="times"
                                />
                            </C.CloseButton>
                            <C.Icon
                                name={(
                                    kind == "error" ? "ban" :
                                    kind == "warning" ? "exclamation-triangle" :
                                    kind == "info" ? "exclamation-circle" : "check-circle"
                                )}
                            />
                            <C.Message>{message}</C.Message>
                        </C.AlertBox>
                    </Animated.View>
                </C.Container>
            </TouchableOpacity>
        </C.Modal>
    );
};
export default AlertScreen;
