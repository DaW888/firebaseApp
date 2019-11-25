import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import SettingsFirebase from "../constants/SettingsFirebase";
import firebase from "firebase";
import Bt from "../components/Bt";
import Colors from "../constants/Colors";

firebase.initializeApp(SettingsFirebase);

class Auth extends Component {

    static navigationOptions = {
        title: "Auth",
        headerStyle: {
            backgroundColor: Colors.accLight,
        },
        headerTitleStyle: {
            color: Colors.main
        },
        headerTintColor: Colors.main
    }

    state = {
        email: '',
        password: '',
        errorMessage: ''
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.props.navigation.navigate('Stations')
            } else {
                this.setState({errorMessage: 'Nie jesteś zalogowany'})
            }
        })
    }

    login = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => this.props.navigation.navigate('Stations'))
            .catch(error => this.setState({errorMessage: error.message}))

    };

    register = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => this.props.navigation.navigate('Stations'))
            .catch(error => this.setState({errorMessage: error.message}))

    };


    render() {
        return (
            <View style={styles.cont}>
                <View style={styles.inputs}>
                    <TextInput style={styles.input} placeholder='email'
                               onChangeText={email => this.setState({email})}
                               value={this.state.email}/>
                    <TextInput style={styles.input} placeholder='password'
                               onChangeText={password => this.setState({password})}
                               value={this.state.password}/>
                    <Bt text="Login" click={this.login}/>
                    <Bt text="Register" click={this.register}/>
                    <Text style={styles.errorInfo}>{this.state.errorMessage}</Text>
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
    inputs: {
        marginTop: 20,
        flex: 1,
    },
    input: {
        borderBottomWidth: 1,
        marginBottom: 3,
        borderBottomColor: Colors.accLight,
        height: 30,
        fontSize: 20,
        color: Colors.text
    },
    errorInfo: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: Colors.main
    }
})

export default Auth;
