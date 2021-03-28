import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Login, Home, TabNAvigation, AuthLoading } from "./src/screens";
import { getAccessToken } from './src/utils/token'
import { useAuth } from './src/context/Auth'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthStack = createStackNavigator();

export default function App() {
  const { token } = useAuth()
  return (
    <SafeAreaProvider
      style={{ flex: 1, justifyContent: 'space-between' }}
    >
      <NavigationContainer>
        <>
          {
            token === null ?
              <AuthStack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName={"Loading"}>
                <AuthStack.Screen name={"Login"} component={Login} />
                <AuthStack.Screen name={"Loading"} component={AuthLoading} />
                <AuthStack.Screen name={"Root"} component={TabNAvigation} />

              </AuthStack.Navigator>
              :
              <TabNAvigation />
          }
        </>
      </NavigationContainer>
    </SafeAreaProvider>
  )

}

