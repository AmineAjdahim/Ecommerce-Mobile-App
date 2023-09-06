import { StyleSheet, Text, View, Button, Alert, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { INCREMENT } from '../redux/actions/types';
import { RootState } from '../redux/store';


const Collection = ({ navigation }) => {
    const dispatch = useDispatch();
    const collectionData = useSelector((state: RootState) => state.collectionData);
    const newinData = useSelector((state: RootState) => state.products);

    const incrementCounter = () => {
        dispatch({ type: INCREMENT });
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.textCollection}>Collections</Text>
                <Icon style={{ paddingRight: 12 }} name="ellipsis-h" size={25} color="#e85a27" />
            </View>

            <View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginTop: 20 }} >
                    <View style={styles.itemContainer}>
                        {collectionData.map((item, index) => (
                            <TouchableOpacity style={{ paddingHorizontal: 10 }} key={index} onPress={() => navigation.navigate("NewIn")}>
                                <Image source={item.imageSource} style={{ width: 80, height: 80, borderRadius: 40 }} />
                                <TouchableOpacity onPress={() => alert('Button clicked')}>
                                    <Text style={{ textAlign: 'center', marginTop: 8 }}>{item.text}</Text>
                                </TouchableOpacity>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
            </View>

            <View style={styles.headerNewin}>
                <Text style={{ fontSize: 29 }}>New In</Text>
                <Text style={styles.seeAll} onPress={() => navigation.navigate("NewIn")}>See All</Text>
            </View>

            <View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginTop: 20 }} >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20 }}>
                        {newinData.map((item, index) => (
                            <TouchableOpacity style={{ paddingHorizontal: 10 }} key={index} onPress={() => navigation.navigate("Products", { imageSource: item.imageSource, productTitle: item.productTitle, price: item.price })}>
                                <Image source={item.imageSource} style={{ width: 220, height: 300, borderRadius: 35 }} />
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <TouchableOpacity onPress={() => alert('Button clicked')}>
                                        <Text style={{ textAlign: 'left', marginTop: 12, paddingHorizontal: 20, fontWeight: '500', fontSize: 20 }}>{item.price}</Text>
                                        <Text style={{ textAlign: 'left', marginTop: 8, paddingHorizontal: 20, fontWeight: '500', fontSize: 18 }}>{item.productTitle}</Text>
                                    </TouchableOpacity>
                                    <Ionicons name="add" paddingLeft={25} size={25} color="black" fontWeight='normal' backgroundColor='transparent' onPress={() => incrementCounter()} />
                                </View>

                            </TouchableOpacity>
                        ))}
                    </View>

                </ScrollView>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row', marginTop: 30 }}>
                <View style={{ width: '90%', height: 90, backgroundColor: '#524eb7', borderRadius: 30, flexDirection: 'column', justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20 }}>
                        <View style={{ width: 65, height: 65, borderRadius: 50, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingLeft: 10 }}>
                            <Icon.Button name="search" size={30} color="black" backgroundColor='transparent' />
                        </View>
                        <Text style={{ fontSize: 20, color: 'white', fontWeight: '500' }}>Find Something</Text>
                        <Icon.Button name="bars" size={30} color="white" backgroundColor='transparent' />
                    </View>
                </View>
            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1,
        backgroundColor: '#fff',
    },
    textCollection: {
        fontSize: 35,
        fontWeight: '500',
        color: 'black',
        marginLeft: 9,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 12
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    headerNewin: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 35,
        marginTop: 25
    },
    seeAll: {
        color: 'gray',
        fontSize: 16,
        fontWeight: '500',
        paddingRight: 12
    }
});

export default Collection;