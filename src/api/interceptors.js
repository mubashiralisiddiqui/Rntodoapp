import axios from "axios";

import { getAccessToken } from '../utils/token'
import { TOKEN_BASE, AUTHORIZATION } from '../constant'
axios.defaults.baseURL = 'https://todo-test.digitaltolk.com';
// axios.defaults.withCredentials = true;
axios.interceptors.request.use(
    (config) => {
        const token = "Zl49StyUu9721TFoRHfDqGmEVikCKNhJayGUgDvK";
        if (token) {
            config.headers[AUTHORIZATION] = `${TOKEN_BASE} ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const originalRequest = error.config;
        if (!error.response) {
            return Promise.reject('network error');
        }
        if (
            error.response.status === 401
        ) {
            return Promise.reject(error);
        }
        return Promise.reject(error);
    }
);
