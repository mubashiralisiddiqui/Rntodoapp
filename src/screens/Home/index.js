import React, { useState } from 'react';
import {
    SafeAreaView,
} from 'react-native';
import { Text } from 'react-native-elements'
import { TaskList, AddTaskButton, Dialog } from '../../components'
import { useTask } from '../../context/Task'

import styles from './style'

const Home = ({ navigation }) => {
    const { tasks, loading, taskLoading, handleUpdate, handleDelete } = useTask()
    const [state, setState] = useState({
        open: false,
    })
    const toggleDialog = () => {
        setState({ ...state, open: !state.open })
    }
    const completedTask = tasks.filter(task => task.status === 'completed')
    const inCompletedTask = tasks.filter(task => task.status !== 'completed')

    return (
        <SafeAreaView style={styles.root}>
            <Text h1 style={styles.heading} >Task</Text>
            <Dialog
                taskLoading={taskLoading}
                open={state.open}
                toggleDialog={toggleDialog}
            />


            <AddTaskButton
                title='Add new task'
                toggleDialog={toggleDialog}
            />
            <TaskList
                taskLoading={taskLoading}
                title='Incomplete'
                tasks={inCompletedTask}
                loading={loading}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
            />
            <TaskList
                title='Completed'
                tasks={completedTask}
                loading={loading}
                taskLoading={taskLoading}
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
            />
        </SafeAreaView>
    );
};

export default Home;
