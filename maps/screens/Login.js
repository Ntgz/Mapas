import React from 'react'
import { View, StyleSheet,Button, TouchableOpacity, Text,ImageBackground } from "react-native";

const Login = ({navigation}) => {
    return (
        
        <View style={styles.container}>
            <ImageBackground source={require('../assets/image/mapamundo.jpg')} style={styles.image}>
            <View style={{alignItems: 'center', justifyContent: 'center',}}>
                <View style={{width:'80%'}}>
                    
            <TouchableOpacity onPress={() =>{
                navigation.navigate('Home')
            }}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Iniciar</Text>
                </View>
            </TouchableOpacity>
            </View>
            </View>
            
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
        container: {
        flex: 1,
        },
        image: {
            flex: 1,
            justifyContent: "center"
        },
        buttonContainer: {
            flexDirection:'row',
            padding: 10,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8
        },
        buttonText: {
            color: 'black',
            fontSize: 18,
            fontWeight: 'bold',
        }
    });

export default Login
