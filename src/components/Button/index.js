
import React from 'react';
import { Button } from 'react-native-elements'
import styles from './style'

// custom Resusable App Theme button
const CustomButton = ({ title, onPress = () => { }, disabled = false, loading = false }) => {
    return (
        <Button
            onPress={onPress}
            title={title}
            buttonStyle={styles.button}
            disabled={disabled}
            titleStyle={styles.buttonTitle}
            loading={loading}
        />
    )
}

export default CustomButton