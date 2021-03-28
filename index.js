/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { AuthProvider } from './src/context/Auth'
import { TaskProvider } from './src/context/Task'
// import { } from './src/context/Location'

const _XHR = GLOBAL.originalXMLHttpRequest ?
    GLOBAL.originalXMLHttpRequest :
    GLOBAL.XMLHttpRequest

// XMLHttpRequest = _XHR
const EnhancedApp = () => {
    return (
        <AuthProvider>
            <TaskProvider>
                <App />
            </TaskProvider>
        </AuthProvider>
    )
}

import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => EnhancedApp);
