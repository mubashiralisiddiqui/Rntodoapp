import { ListItem, Avatar, CheckBox, Text, Button, Icon, Keyboard } from 'react-native-elements'
import React, { useState, useRef } from 'react';
import {
    Animated,
    Dimensions,
    StyleSheet,
    // Text,
    ActivityIndicator,
    View,
    TouchableWithoutFeedback,
    TouchableOpacity,
    FlatList
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';
import styles from './style'



const TaskList = ({ taskLoading, tasks, loading, title, handleUpdate, handleDelete }) => {
    console.log('tasks', loading)
    const animationIsRunning = useRef(false);

    const renderItem = ({ item }) => {
        return (
            <SwipeRow
                leftOpenValue={0}
                rightOpenValue={-75}
            >
                <View style={styles.standaloneRowBack}>
                    <TouchableOpacity
                        onPress={() => handleDelete(item.id)}
                    >
                        <MaterialIcon name="trash-can"
                            size={20}
                            color={'red'}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableWithoutFeedback>
                    <ListItem bottomDivider>
                        <ListItem.Content>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <CheckBox
                                    onPress={() => handleUpdate(item)}
                                    containerStyle={{ padding: 0 }}
                                    title=''
                                    checked={item.status === 'completed'}
                                />
                                <ListItem.Title>{item.title}</ListItem.Title>
                            </View>
                            <View style={{ paddingLeft: 45 }}>
                                <ListItem.Subtitle>

                                    <MaterialIcon
                                        name='alarm'
                                        size={20}
                                        style={{ marginRight: 10 }}
                                    />
                                    <Text style={{ paddingLeft: 30, }}>
                                        &nbsp; {new Date(item.due_at).toDateString()}

                                    </Text>

                                </ListItem.Subtitle>
                            </View>
                        </ListItem.Content>

                    </ListItem>
                </TouchableWithoutFeedback>
            </SwipeRow>
        )
    }

    return (
        <View style={styles.container}>

            {
                loading ?
                    <ActivityIndicator size="large" color="#000000"
                        style={{ alignSelf: 'center' }} />
                    :
                    <>
                        {
                            true &&
                            <ActivityIndicator
                                size="large" color="#000000"
                                style={styles.loading}
                            />
                        }
                        <Text h4 style={styles.title}>
                            {title}
                        </Text>
                        <FlatList
                            keyboardShouldPersistTaps="handled"
                            keyExtractor={item => item.id}
                            data={tasks}
                            renderItem={renderItem}
                        // ref={ref => flatList = ref}
                        // onContentSizeChange={() => flatList.scrollToEnd({ animated: true })}
                        // onLayout={() => flatList.scrollToEnd({ animated: true })}
                        />
                    </>
            }

        </View>
    );
}

export default TaskList