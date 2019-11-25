import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from "../constants/Colors";
import Bt from "../components/Bt";

class Main extends Component {

    static navigationOptions = {
        header: null,
    };

    clickBt = () => {
        this.props.navigation.navigate('Auth');

    };

    render() {
        return (
            <View style={styles.cont}>
                <View style={styles.display}>
                    <Text style={{fontSize: 36, color: Colors.text}}>FireBase App</Text>
                    <Text style={{fontSize: 20, color: Colors.text}}>
                        {'Firebase Authentication\nfirebase database'}
                    </Text>
                </View>
                <View style={styles.buttons}>
                    <Bt text={"START"} click={this.clickBt}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        backgroundColor: Colors.bc
    },

    display: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.main
    },

    buttons: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

})


export default Main;
