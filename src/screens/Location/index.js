import React from 'react';
import {
    SafeAreaView,
    Text,
} from 'react-native';

const Location = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ marginBottom: 30 }}>May be Later</Text>

        </SafeAreaView>
    );
};

export default Location;
