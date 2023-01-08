import React from 'react'
import Login from '../screens/Login'
import BottomMenu from './BottomMenu';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        
            <Stack.Navigator>
                <Stack.Screen
                    name="Login" component={Login} options= {{headerShown: false}}
                />
                <Stack.Screen
                    name="Home" component={BottomMenu} options= {{headerShown: false}}
                />
            </Stack.Navigator>
    )
}

export default Navigation
