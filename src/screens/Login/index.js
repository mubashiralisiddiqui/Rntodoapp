import React, { useEffect, useState } from 'react'
import { View, KeyboardAvoidingView, Platform } from 'react-native'
import { validations } from './schema'
import { Formik } from 'formik';
import { Text, Input, Button } from 'react-native-elements'
import { useAuth } from '../../context/Auth'
import { browserDetect } from '../../utils/helper'
import styles from './style'
import { getUniqueId, getManufacturer } from 'react-native-device-info';

export default function Login({ navigation }) {
    const [manufacture, setManufacturer] = useState('')
    useEffect(() => {
        handleManufature()
    }, [])
    const handleManufature = (() => {
        getManufacturer().then((manufacturer) => {
            if (manufacturer) {
                setManufacturer(manufacturer)
            }
        })
    })
    const { handleLogin, error, loading } = useAuth();
    const onSubmit = (values) => {
        try {
            const osName = Platform.OS
            const device_name = osName + ',' + manufacture
            const { email, password, } = values;
            let formData = new FormData();
            formData.append('email', email)
            formData.append('password', password)
            formData.append('device_name', device_name)
            const cb = () => {
                navigation.navigate('Root')
            }
            if (password && email) {
                handleLogin(formData, cb)
            }
        } catch (err) {
            console.log(err)
        }

    };
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.root}
        >
            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={onSubmit}
                validationSchema={validations}
            >
                {({
                    handleSubmit,
                    setFieldValue,
                    handleBlur,
                    values,
                    errors,
                    touched,
                    handleChange,
                    dirty,
                    isValid
                }) => (
                    <View style={styles.form}>
                        <View style={styles.header}>
                            <Text h1> Login</Text>
                        </View>
                        <Input
                            id='email'
                            name='email'
                            keyboardType="email-address"
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            type="email"
                            inputContainerStyle={styles.inputContainer}
                            inputStyle={styles.inputStyle}
                            placeholder='Email'
                            errorStyle={{ color: 'red' }}
                            errorMessage={!!(errors.email && touched.email) ? errors.email : ''}
                        />
                        <Input
                            id='password'
                            secureTextEntry
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            inputStyle={styles.inputStyle}
                            name='password'
                            inputContainerStyle={styles.inputContainer}
                            placeholder='Password'
                            errorStyle={{ color: 'red' }}
                            errorMessage={!!(errors.password && touched.password) ? errors.password : ''}

                        />
                        <Button
                            onPress={handleSubmit}
                            title='Login'
                            buttonStyle={styles.button}
                            disabled={!isValid || !dirty}
                            titleStyle={styles.buttonTitle}
                        />
                    </View>
                )}
            </Formik>
        </KeyboardAvoidingView>

    );

}
