import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView from "react-native-maps";
import Colors from "../constants/Colors";

class Map extends Component {

    state = {
        data: this.props.navigation.state.params
    }
    static navigationOptions = {
        title: "Map",
        headerStyle: {
            backgroundColor: Colors.accDark,
        },
        headerTitleStyle: {
            color: Colors.accLight
        },
        headerTintColor: Colors.main
    }

    render() {
        return (
            <MapView style={{flex: 1}} initialRegion={{
                latitude: this.state.data.latitude,
                longitude: this.state.data.longitude,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1
            }}>
                <MapView.Marker
                    coordinate={{
                        latitude: this.state.data.latitude,
                        longitude: this.state.data.longitude,
                    }}
                    title={this.state.data.stationName}
                    description={this.state.data.statusValue}
                />
            </MapView>
        );
    }
}

export default Map;
