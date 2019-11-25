import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from "../constants/Colors";
import Bt from "./Bt";

class Item extends Component {
    state = {
        latitude: this.props.data.latitude,
        longitude: this.props.data.longitude,
        stationName: this.props.data.stationName,
        statusValue: this.props.data.statusValue,
        availableDocks: this.props.data.availableDocks,
        totalDocks: this.props.data.totalDocks
    }

    goToMap = () => {
        console.log('gotoMap');
        this.props.navigation.navigate('Map', this.state)
    }

    avalible = () => {
        if(this.state.statusValue === 'In Service') {
            return '#FF7F50'
        } else {
            return '#7FFF00'
        }
    }

    styles = StyleSheet.create({
        zajete: {
            flex: 2,
            backgroundColor: '#DC143C'
        },
        wolne: {
            flex: this.state.availableDocks,
            backgroundColor: '#00FF00'
        },
        dostepnosc: {
            flex: this.state.totalDocks,
            backgroundColor: this.avalible()
        }
    });



    render() {
        return (
            <View style={styles.cont}>
                <Text style={styles.header}>{this.state.stationName}</Text>
                <View style={styles.data}>

                    <View style={styles.textData}>
                        <Text style={styles.info}>lat: {this.state.latitude}</Text>
                        <Text style={styles.info}>long: {this.state.longitude}</Text>
                        <Text style={styles.info}>total: {this.state.totalDocks}</Text>
                    </View>

                    <View style={styles.displayData}>
                        <View style={styles.status}>
                            <Text style={this.styles.zajete}></Text>
                            <Text style={this.styles.wolne}></Text>
                        </View>
                        <Text style={this.styles.dostepnosc}>{this.state.statusValue}</Text>
                    </View>
                </View>
                <Bt text='mapa' textStyle={styles.btText} click={this.goToMap}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        margin: 2,
        borderWidth: 2,
        borderColor: Colors.main,
        borderRadius: 10,
        padding: 2
    },
    btText: {
        fontSize: 18,
        fontFamily: 'Roboto',
        color: Colors.text,
    },
    header: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.accDark,
    },
    data: {
        flex: 4,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    textData: {
        margin: 4,
        flex: 3,
    },
    displayData: {
        margin: 4,
        flex: 4,
    },
    status: {
        flex: 1,
        flexDirection: 'row'
    },
    info: {
        color: Colors.text
    }
})

export default Item;
