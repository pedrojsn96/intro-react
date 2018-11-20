import React, { Component } from 'react'
import { 
    StyleSheet, 
    Text, 
    View, 
    FlatList, 
    Image, 
    Alert, 
    TouchableOpacity 
} from 'react-native';

class ListTeachers extends Component {
    static navigationOptions = {
        title: 'Teachers List',
      };

    render() {
        return (
            <FlatList
                data={[
                    {id: 1, name: 'Vinicius Cardoso', course: 'Engenharia de Software', photo: 'https://media.licdn.com/dms/image/C5603AQGfWDdWaunxkw/profile-displayphoto-shrink_800_800/0?e=1548288000&v=beta&t=WbtQ1BBUixZPr0BoyA2q-nqtLi6P9q-SfCPkO9ZnE9Q', bio: 'Professor de Engenharia de Software'},
                    {id: 2, name: 'Kiev Gama', course: 'Sistemas de Informação', photo: 'https://media.licdn.com/dms/image/C5603AQGqJCau3TaI9Q/profile-displayphoto-shrink_800_800/0?e=1548288000&v=beta&t=524VNymqQVl57TNiIh1crS-RGb_H9VFZPA442bdezDY', bio: 'Professor de Engenharia de Software'}
                ]}
                renderItem={
                    ({item}) => 
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail', {
                        item: item
                    })}
                    accessibilityLabel= {"TeacherItem"}>  
                    <View style={styles.itemView}>
                        <Image source={{ uri: item.photo}} style={styles.photo}/>
                        <Text style={styles.itemList}>{item.name}</Text>
                    </View>
                    </TouchableOpacity>
                }
                accessibilityLabel= {"TeachersList"}
                >
        </FlatList>
        );
    }
}

const styles = StyleSheet.create({
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
    }
  });

export default ListTeachers;