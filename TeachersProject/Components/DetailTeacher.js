import React, { Component } from 'react'
import { 
    StyleSheet, 
    Text, 
    View, 
    Image
} from 'react-native';

class DetailTeacher extends Component {
    static navigationOptions = {
        title: 'Teacher Details',
      };
    render() {
        const { navigation } = this.props;
        const teacher  = navigation.getParam('item');
        return (
            <View style={styles.container}>
                <View style={styles.img}>
                    <Image style={styles.photo}
                        source={{uri: teacher.photo}}
                    />
                </View>
                <View style={styles.contentTitle}><Text style={{fontSize:20}}>Nome</Text></View>
                <Text style={styles.name}>{teacher.name}</Text>
                <View style={styles.contentTitle}><Text style={{fontSize:20}}>Bio</Text></View>
                <Text style={styles.bio}>{teacher.bio}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 40,
    },
    contentTitle: {
        flexDirection: 'row',
        backgroundColor: 'powderblue',
        justifyContent: 'center',
        marginBottom: 5,
        fontSize: 20,
        height: 30
    },
    name: {
        padding: 10,
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bio: {
        padding: 10,
        fontSize: 20,
        alignItems: 'center'
    },
    img: {
        marginBottom: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    photo: {
        width: 100,
        height: 100,
        marginBottom: 10
    }
  });

export default DetailTeacher;