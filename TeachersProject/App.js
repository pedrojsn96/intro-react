import React, { Component } from 'react'
import { StyleSheet, AppRegistry, Text, View, FlatList, Image } from 'react-native';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {name: 'Vinicius Cardoso', course: 'Sistemas de Informação', photo: 'https://cdn1.iconfinder.com/data/icons/occupations-3/100/21-512.png', bio: 'Professor de Engenharia de Software'},
            {name: 'Carla Silva', course: 'Sistemas de Informação', photo: 'https://cdn3.iconfinder.com/data/icons/education-5-2/256/Teacher-512.png', bio: 'Professor de Engenharia de Software'}
          ]}
          renderItem={
            ({item}) => 
            <View style={styles.itemView}>
              <Image source={{ uri: item.photo}} style={styles.photo}/>
              <Text style={styles.itemList}>{item.name}</Text>
            </View>
          }
        >
        </FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  itemView: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemList: {
    padding: 10,
    fontSize: 18,
    height: 44,
    marginTop: 20,
    marginLeft: 12
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  }
});

AppRegistry.registerComponent('TeachersProject', () => App);