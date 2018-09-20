import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

class HomeScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title} > Home </Text>
                <View style={styles.carousel}> 
                    <View style={styles.card}> 

                    </View>
                </View>
                <Text style={styles.subtitle}> Explore More </Text>
                <View style={styles.appDrawer}> 
                    <View style={styles.eachApp}> 
                        <View style={styles.app}>
                        
                        </View>
                        <Text style={styles.smText}> Stats </Text>
                    </View>

                    <View style={styles.eachApp}> 
                        <View style={styles.app}>
                        
                        </View>
                        <Text style={styles.smText}> Dokki </Text>
                    </View>

                    <View style={styles.eachApp}> 
                        <View style={styles.app}>
                        
                        </View>
                        <Text style={styles.smText}> Maps </Text>
                    </View>

                    <View style={styles.eachApp}> 
                        <View style={styles.app}>
                        
                        </View>
                        <Text style={styles.smText}> Operators </Text>
                    </View>
                    
                    
                </View> 
                <View style={styles.empty}>
                    
                </View>               
            </View>
        );
    }
}
export default HomeScreen
    ;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#12165C',
        padding : 25
    },
    title: {
        flex: 1,
        fontSize: 30,
        fontWeight: 'bold',
        color : 'white',
    },
    subtitle: {
        flex: 1,
        fontSize: 22,
        paddingVertical: 15,
        fontWeight: 'bold',
        color : 'white',
    },
    carousel: {
        flex: 4,
    },
    card: {
        flex: 1,
        borderRadius: 6,
        backgroundColor: '#3D327E',
        elevation:4,
        opacity: 0.75
    },
    appDrawer: {
        flex: 3,
        flexWrap : 'wrap',
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    eachApp: { 
        flex: 1,
        width: 50,
        margin: 2,
        justifyContent: 'center',
    },
    app: { 
        width: 70,
        height: 70,
        marginVertical: 2,
        elevation:4,
        borderRadius: 100,
        alignSelf: 'center',
        opacity: 0.75,
        backgroundColor: '#3D327E'
    },
    smText: { 
        flex: 1,
        margin: 2,
        elevation:4,
        alignSelf: 'center',
        color : '#ffffff'
    },
    empty: {
        flex: 5,
    },

});