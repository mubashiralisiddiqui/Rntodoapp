import React, { useEffect, useState, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setItem, getItem } from "../../utils/helper";
import { setToken, getAccessToken } from "../../utils/token";
import { ACCESS_TOKEN, USER_KEY, LOGIN_URL } from '../../constant'
import { login } from '../../api/auth'

export const AuthContext = React.createContext(null);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [state, setState] = useState({
        token: null,
        isLoggedIn: false,
        loading: false,
        error: null,
    })
    useEffect(() => {
        getAccessToken()
    }, []);
    const getAccessToken = async () => {
        try {
            const value = await AsyncStorage.getItem(ACCESS_TOKEN)
            if (value) {
                setState({ ...state, token: value })
            }
        } catch (e) {
            // error reading value
        }
    };
    const handleLogin = async (data, cb) => {
        console.log('login trigger')
        try {
            // const response = await login(data) // closing this api as its not working
            // if (response && response.data && response.data.token) {
            setToken().then(() => {
                cb()
            })

        }
        catch (err) {
            const { response } = err
            if (response && response.data && response.data.message) {
                setState({
                    ...state,
                    error: response.data.message
                })
                return;
            }
            setState({
                ...state,
                error: 'something went wrong'
            })

        }
    }
    const logout = (navigation) => {
        try {
            AsyncStorage.removeItem(ACCESS_TOKEN).then(() => {
                if (navigation) {
                    navigation.navigate('Login');
                }
            })
        } catch (err) {
            console.log(err)
        }

    }
    return (
        <AuthContext.Provider
            value={{
                handleLogin,
                logout,
                ...state,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}