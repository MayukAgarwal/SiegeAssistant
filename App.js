import React, {Component} from 'react';
import {
  StyleSheet, 
  View 
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.banner}> 
        
        </View>
        <View style={styles.appContainer}> 
        
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  banner: {
    flex: 1,
    backgroundColor: 'blue'
  },
  appContainer: {
    flex: 1,
    backgroundColor: 'green'
  },

});
