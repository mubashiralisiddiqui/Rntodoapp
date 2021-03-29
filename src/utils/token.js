import { ACCESS_TOKEN } from "../constant";
import { getItem, setItem, removeItem, clearStorage } from "./helper";
import AsyncStorage from '@react-native-async-storage/async-storage';
export const getAccessToken = async () => {
    try {
        const value = await AsyncStorage.getItem(ACCESS_TOKEN)
        return value
    } catch (e) {
        // error reading value
    }
};

export const setToken = async (accessToken) => {
    return await AsyncStorage.setItem(ACCESS_TOKEN, "Zl49StyUu9721TFoRHfDqGmEVikCKNhJayGUgDvK")
};

export const removeToken = () => {
    removeItem(ACCESS_TOKEN);
    clearStorage();
};
