
import React from 'react'
import { Button, Text, CheckBox } from 'react-native-elements';

import { View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style'


const AddTaskButton = ({ title = '', toggleDialog = () => { } }) => {
    return (
        <TouchableOpacity
            style={styles.root}
            onPress={toggleDialog}
        >
            <Icon
                name="plus"
                size={15}
            />
            <Text style={styles.title}>
                &nbsp;&nbsp;&nbsp;{title}
            </Text>
            {/* <Button
                onPress={toggleDialog}
                icon={
                    <Icon
                        name="plus"
                        size={15}
                        color="white"
                    />
                }
                title={title}
            /> */}
        </TouchableOpacity>
    )
}
export default AddTaskButton