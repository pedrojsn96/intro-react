import React, { Component } from 'react'
import { 
  StyleSheet, 
  AppRegistry, 
  View 
} from 'react-native';

import ListTeachers from './Components/ListTeachers'
import DetailTeacher from './Components/DetailTeacher'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <DetailTeacher />
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