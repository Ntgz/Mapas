import React from 'react'
import { View, StyleSheet,Button, TouchableOpacity, Text,ImageBackground } from "react-native";

const Home = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/image/planeta.png')} style={styles.image}>

            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
        container: {
        flex: 1
        },
        image: {
            flex: 1,
            justifyContent: "center"
        },
    });

export default Home
