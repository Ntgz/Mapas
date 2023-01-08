import React from 'react'
import { View, StyleSheet} from "react-native";
import MapView from 'react-native-maps';

const Mundo = () => {
    return (
        <View style={styles.container}>
            <MapView style={styles.map}
            />
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
    map: {
        width: '100%',
        height:'100%'
    }
});

export default Mundo
