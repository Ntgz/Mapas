import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DraweMenu from './DraweMenu';
import Ajustes from '../screens/Ajustes';
import Mundo from '../screens/Mundo';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

const BottomMenu = () => {
    return (
        <Tab.Navigator
        screenOptions= {{
            tabBarActiveTintColor: "black",
            tabBarLabelStyle:[{        
                fontSize: 14,
                fontWeight:'400'
                }]      

            
        }}>
            <Tab.Screen
                name="Inicio"  component={DraweMenu} options={{
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="human-scooter" color='black' size={25}/>
                    ),
                    headerShown: false}}
            />
            <Tab.Screen
                name="Planeta"  component={Mundo}  options={{
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="earth" color='black' size={25}/>
                    )}}
            />
            <Tab.Screen
                name="Ajustes"  component={Ajustes}  options={{
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="pac-man" color='black' size={25}/>
                    )}}
            />
        </Tab.Navigator>
    )
}

export default BottomMenu
