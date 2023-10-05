import React, { useState, useEffect } from "react";
import { Animated, Easing } from "react-native";
import C from "./style";

const Loading = () => {
    const [animation] = useState(new Animated.Value(0));

    //Início Efeito 3 Quique e aumento de escala
    useEffect(() => {
        let animations = [];
        animations.push(
            // Fase 1: Subir a imagem
            Animated.timing(animation, {
                toValue: 2,
                duration: 1000, // duração da subida em milissegundos
                easing: Easing.linear,
                useNativeDriver: true,
            }),
        );
        animations.push(
            // Fase 2: Descer a imagem
            Animated.timing(animation, {
                toValue: 0,
                duration: 1000, // duração da descida em milissegundos
                easing: Easing.linear,
                useNativeDriver: true,
            }),
        );
        const sequence = Animated.sequence(animations);
        Animated.loop(sequence).start();
    }, []);

    const animatedStyle = {
        transform: [
            {
                scale: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.5, 1], // Diminui para 50% e aumenta para 100%
                }),
            },
        ],
    };

    return (
        <C.Container>
            <Animated.Image
                source={require("../../../assets/selo.png")}
                style={[animatedStyle, { width: 50, height: 50 }]}
            />
        </C.Container>
    );
};
export default Loading;
