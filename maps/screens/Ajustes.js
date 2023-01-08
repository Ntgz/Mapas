import React from 'react'
import { View, StyleSheet,Button, TouchableOpacity, Text,ImageBackground } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Ajustes = () => {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name="content-save-settings-outline" color='black' size={400}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
});

export default Ajustes
