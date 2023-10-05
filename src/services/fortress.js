import AsyncStorage from "@react-native-async-storage/async-storage";

const baseUrl = "http://192.168.0.110:8000";
const request = async (method, endpoint, params, token = null) => {
    method = method.toLowerCase();
    let fullUrl = `${baseUrl}${endpoint}`;
    let body = null;

    switch (method) {
        case "get":
            let queryString = new URLSearchParams(params).toString();
            fullUrl += `?${queryString}`;
            break;
        case"post":
        case"put":
        case"delete":
            body = JSON.stringify(params);
            break;

    }

    let headers = {"Content-Type": "application/json"};
    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }

    let req = await fetch(fullUrl, {method, headers, body});

    let json = await req.json();
    return json;
};

export default {
    getToken: async () => {
        return await AsyncStorage.getItem("token");
    },
    validateToken: async () => {
        let token = await AsyncStorage.getItem("token");
        let lifetime = await AsyncStorage.getItem("lifetime");
        if (parseInt(lifetime, 10) > Date.now()) {
            json = await request("get", "/api/user", {}, token);
            return json;
        }

    },
    login: async (email, password) => {
        let json = await request('post', '/oauth/token', {
                grant_type: 'password',
                client_id: 3,
                client_secret: 'VSt2dwjLceanSO4kL8Yq9ai5gMrN9kwNhclXA8oK',
                username: email,
                password: password
            }
        );
        return json;
    },
    logout: async () => {
        let token = await AsyncStorage.getItem("token");
        json = await request("get", "/api/revokeAccessToken", {}, token);
        if (json.success) {
            await AsyncStorage.removeItem("token");
            await AsyncStorage.removeItem("user");
            await AsyncStorage.removeItem("lifetime");
            await AsyncStorage.removeItem("zeus");
            await AsyncStorage.removeItem("property");
            return json;
        } else {
            return 'false';
        }
        // let user = await AsyncStorage.getItem("token");
        // return user;
    }
};
