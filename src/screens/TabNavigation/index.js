import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Home from '../Home'
import Location from '../Location'
const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: 'black',
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Task',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="clipboard-text-outline" color={'gray'} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="ABC"
                component={Home}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesignIcon name="pluscircle" color={'black'} size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name="Location"
                component={Location}
                options={{
                    tabBarLabel: 'Location',
                    tabBarIcon: ({ color, size }) => (
                        <SimpleLineIcons name="location-pin" color={'gray'} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
export default MyTabs