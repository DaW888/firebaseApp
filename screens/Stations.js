import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Bt from "../components/Bt";
import Toasts from "../components/Toasts";
import Colors from "../constants/Colors";
import Item from "../components/Item";

import firebase from "firebase";

class Stations extends Component {

    constructor(props) {
        super(props);
        this.stations = this.getFirebase().child("stations_big");
    }


    getFirebase = () => {
        return firebase.database().ref();
    }

    state = {
        email: 'TESTOWY LOGInn',
        stations: null
    }

    static navigationOptions = {
        title: "Stations",
        headerStyle: {
            backgroundColor: Colors.accLight,
        },
        headerTitleStyle: {
            color: Colors.main
        },
        headerTintColor: Colors.main
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({email: user.email})
            }
        })

        this.stations.on("value", el => {
            const stations = [];
            el.forEach(item => {
                stations.push(item.val());
            })
            console.log(stations);
            this.setState({
                stations
            })
        })
    }

    logout = () => {
        firebase.auth()
            .signOut()
            .then(() => this.props.navigation.goBack())
            .catch((error) => alert(error))

    }

    render() {
        return (
            <View style={styles.cont}>
                <View style={styles.buttons}>
                    <Text style={styles.loginText}>{this.state.email}</Text>
                    <Bt text='logout' click={this.logout}/>
                </View>
                <View style={styles.list}>
                    {/*<Text>{JSON.stringify(this.state.stations, null, 4)}</Text>*/}
                    <FlatList
                        data={this.state.stations} keyExtractor={(item, index) => item + index}
                        renderItem={({item}) => <Item key={'key'} data={item} navigation={this.props.navigation}/>}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        backgroundColor: Colors.bc,
    },
    loginText: {
        fontSize: 16,
        color: Colors.accLight,
    },
    buttons: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row'
    },
    list: {
        flex: 10,
    }
});

export default Stations;
