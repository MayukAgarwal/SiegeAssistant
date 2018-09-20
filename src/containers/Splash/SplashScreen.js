import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

class SplashScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Splash Screen </Text>
            </View>
        );
    }
}
export default SplashScreen
    ;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#434250'
    }
});