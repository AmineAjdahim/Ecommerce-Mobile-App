import React from 'react';
import { View, Text, Button,StyleSheet,ScrollView,TouchableOpacity,Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialIcons from 'react-native-vector-icons/Fontisto';


const NewIn = ({navigation}) => {
    const products = [
        { imageSource: require('../assets/man.jpg'), text: 'Man' },
        { imageSource: require('../assets/kids.jpg'), text: 'Kids' },
        { imageSource: require('../assets/pets.jpg'), text: 'Pets' },
        { imageSource: require('../assets/healthy.jpg'), text: 'Healthy' },
        { imageSource: require('../assets/man.jpg'), text: 'Man' },
        { imageSource: require('../assets/man.jpg'), text: 'Man' },
        { imageSource: require('../assets/man.jpg'), text: 'Man' },
      ];

    return (
        <View style={styles.container}>
            <ScrollView >
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center' ,paddingHorizontal:20,marginTop:12}}>
                <Text style={styles.textCollection}>New In</Text>
                <Icon style={{paddingRight:12}} name="ellipsis-h" size={25} color="#e85a27" />
            </View>
            <View>
            <View style={styles.viewProducts}>
            {products.map((item, index) => (
              <TouchableOpacity  style={{marginTop:20, paddingHorizontal: 10 }} key={index} onPress={() => navigation.navigate("NewIn")}>
                <View style={{position: 'relative'}}>
                    <Image source={item.imageSource} style={{ width: 140, height: 140, borderRadius: 70 }} />
                    <MaterialIcons style={{paddingRight:12,position: 'absolute',right:0,bottom:10}} name="shopping-basket-add" size={25} color="#d4788b" />
                </View>

                <TouchableOpacity onPress={() => alert('Button clicked')}>
                  <Text style={{ textAlign: 'center', marginTop: 8 }}>{item.text}</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1,
        backgroundColor: '#fff',
    },
    textCollection:{
        fontSize:35,
        fontWeight:'500',
        color:'black',
        marginLeft:20,
    },
    viewProducts:{
        flexDirection: 'row',
        marginTop:20,
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 40 
    },
});

export default NewIn;