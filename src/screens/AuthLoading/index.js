import React, { useEffect } from 'react';
import {
    SafeAreaView,
    Text,
    ActivityIndicator
} from 'react-native';
import { useAuth } from '../../context/Auth'
import { ACCESS_TOKEN } from '../../constant'
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthCheck = ({ navigation }) => {
    console.log(navigation)
    useEffect(() => {
        getAccessToken()

    }, [])
    const getAccessToken = async () => {
        try {
            const value = await AsyncStorage.getItem('accessToken')
            if (value) {
                navigation.navigate('Root')
            } else {
                {
                    navigation.navigate('Login')
                }
            }
        } catch (e) {
            console.log(e)
            navigation.navigate('Login')
            // error reading value
        }
    };
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator size="large" color="black" />
        </SafeAreaView>
    );
};

export default AuthCheck;
