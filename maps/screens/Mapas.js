import * as React from 'react'
import * as Location from 'expo-location';
import { View, StyleSheet,Button, TouchableOpacity, Text,ImageBackground } from "react-native";
import MapView, { Marker, Polyline } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions'

const Mapas = () => {

    const carImage = require('../assets/image/ferrari.png')
    // const carImageDos = require('../assets/image/chiquito.png')

    const [origin, setOrigin] = React.useState({

        latitude:4.664653,
        longitude:-74.119364

    });

    const [destination, setDestination] = React.useState({

        latitude:4.6653825,
        longitude:-74.1206198

    });
    React.useEffect(()=>{
        getLocationPermission()
    }, [])


    async function getLocationPermission() {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if(status !== 'granted') {
            alert('Permiso denegado');
            return;
        }
        let location = await Location.getCurrentPositionAsync({});
        const current = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
        }
        setOrigin(current);
    }

    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                initialRegion={{
                    latitude: origin.latitude,
                    longitude: origin.longitude,
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.04
                }}
            >
                <Marker
                    draggable={true}
                    coordinate={origin}
                    image={carImage}
                    onDragEnd={(direction) => setOrigin(direction.nativeEvent.coordinate)}
                />
                <Marker
                    draggable={true} 
                    coordinate={destination}
                    onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}
                />
                <MapViewDirections
                
                    origin={origin}
                    destination={destination}
                    strokeColor='cyan'
                    strokeWidth={6}

                />
                {/* <Polyline
                    coordinates={[origin,destination]}
                    strokeColor='pink'
                    strokeWidth={8}
                /> */}
            </MapView>
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


export default Mapas
