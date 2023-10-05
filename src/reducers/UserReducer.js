import AsyncStorage from '@react-native-async-storage/async-storage'

const initialState = {
    token: "",
    lifetime: "",
    user: {},
    zeus: {},
    property: {},
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case "setToken":
            AsyncStorage.setItem('token', action.payload.token);
            return {...state, token: action.payload.token};
            break;
        case "setLifeTime":
            AsyncStorage.setItem('lifetime', action.payload.lifetime);
            return {...state, lifetime: action.payload.lifetime};
            break;
        case "setUser":
            return {...state, user: action.payload.user};
            break;
        case "setZeus":
            return {...state, zeus: action.payload.zeus};
            break;
        case "setProperty":
            return {...state, property: action.payload.property};
            break;
    }
    return state;
};
