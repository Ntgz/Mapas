import React from 'react'
import { createDrawerNavigator,DrawerItemList,DrawerItem } from "@react-navigation/drawer";
import { View, StyleSheet,Button, TouchableOpacity, Text,ScrollView,Alert } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Mapas from '../screens/Mapas';
import Home from '../screens/Home';

const Drawer = createDrawerNavigator();

function Menu(props){
    return(
        <View style={styles.container}>
            <View style={styles.borderContainer}>
                <TouchableOpacity>
                    <View style={styles.userContainer}>
                        {/* <Image
                        style={styles.image}
                        source={require('../images/country.png')}
                        /> */}
                        <Text style={styles.texto}>¡Bienvenido!</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <DrawerItemList {...props}/>
                <DrawerItem
                    icon={() => <MaterialCommunityIcons color='#D60404' size={18} name="power-settings" />}
                    label="Cerrar sesión"
                    labelStyle={{color: '#D60404',fontSize:18,fontWeight:'400',justifyContent:'flex-end'}}
                    onPress={()=>{Alert.alert(
                        "Cerrar sesión",
                        "¿Estás seguro que quieres cerrar sesión?",
                        [
                            {
                                text: "Si"
                            },
                            {
                                text: "No",
                                onDismiss: () =>
                                <Text></Text>,
                                style: "cancel",
                            }
                            ],
                        );}}
                />
            </ScrollView>
        </View>
    )
}


const DraweMenu = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props)=> <Menu {...props}/>}
            screenOptions= {{
                drawerActiveTintColor: "#fff",
                drawerActiveBackgroundColor: "black"
            }}
        >
            <Drawer.Screen name="Home" component ={ Home }/>
            <Drawer.Screen name="Mapa" component ={ Mapas }/>
        </Drawer.Navigator>
    )
}
const styles = StyleSheet.create({
    image: {
        width: 90,
        height: 90,
        borderRadius: 35,
    },
    container: {
        flex:1,
        backgroundColor: '#fff'
        
    },
    borderContainer: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#A0A0A0',
    },
    userContainer:{
        backgroundColor:'black',
        justifyContent: 'flex-start'
    },
    texto:{
        paddingTop:'30%',
        fontWeight:'500',
        fontSize:24,
        color:'#fff',
        marginLeft: 10
    }  
});

export default DraweMenu
