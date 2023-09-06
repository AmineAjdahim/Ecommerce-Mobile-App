import React,{useEffect,useState} from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { AppParamList } from '../types/navigation.type';

// type Props = NativeStackScreenProps<AppParamList,'shoppingCart'>;

const CustomHeaderRight = ({ navigation }) => {
    const contercart:number = useSelector((state:RootState) => state.cartItems.length);

    return (
    
    <View style={{ marginRight: -2, marginTop: -10 }}>                 
        
      <TouchableOpacity style={{ position: 'relative' }} onPress={() => navigation.navigate("shoppingCart")}>
        <TouchableOpacity
          style={{
            width: 16,
            height: 16,
            borderRadius: 50,
            backgroundColor: '#5955b9',
            position: 'absolute',
            right: 0,
            top: -5,
            flex: 1,
            justifyContent: 'center',
          }}
        >
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 10 }}>
               {contercart}
          </Text>
        </TouchableOpacity>
        <Icon
          name="shoppingcart"
          size={25}
          color="black"
          backgroundColor="transparent"
          marginRight={10}
        />
      </TouchableOpacity>
   </View>
    );
        };

export default CustomHeaderRight;
  