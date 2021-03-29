
import React from 'react'
import { Text } from 'react-native-elements';
import { TouchableOpacity } from 'react-native'
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
        </TouchableOpacity>
    )
}
export default AddTaskButton