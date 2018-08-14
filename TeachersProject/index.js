import React, { Component } from 'react'
import { 
  StyleSheet, 
  AppRegistry, 
  View 
} from 'react-native';

import ListTearchers from './Components/ListTeachers'


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ListTearchers />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  }
});

AppRegistry.registerComponent('TeachersProject', () => App);