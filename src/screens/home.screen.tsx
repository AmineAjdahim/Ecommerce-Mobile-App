
import React from 'react';
import { View, Text, Button,StyleSheet } from 'react-native';


const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
        <Button
          title="Go to Products"
          onPress={() => navigation.navigate("Collection")}
        />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        alignItems:'center'
    }
});


export default Home;