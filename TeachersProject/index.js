import React, { Component } from 'react'
import { 
  StyleSheet, 
  AppRegistry, 
  View 
} from 'react-native';
import {
  createStackNavigator,
} from 'react-navigation';

import ListTeachers from './Components/ListTeachers'
import DetailTeacher from './Components/DetailTeacher'

const RootStack = createStackNavigator(
  {
    Home: ListTeachers,
    Detail: DetailTeacher
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
);
export default class App extends Component {
  render() {
    return (
      // <View style={styles.container}>
      //   <ListTeachers />
      // </View>
      <RootStack />
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