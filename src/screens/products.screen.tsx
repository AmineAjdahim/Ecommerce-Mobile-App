
import React,{useState,useEffect} from 'react';
import { View, Text, Button,StyleSheet,TouchableOpacity,Image,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Shadow } from 'react-native-shadow';
import { useDispatch, useSelector } from 'react-redux';
import { INCREMENT } from '../redux/actions/types';
import { RootState } from '../redux/store';
import { CART_ACTION_TYPE } from '../redux/actions/addtocart';



const Products = ({ route }) => {
    // const { count, incrementCounter, decrementCounter } = useCounter();
    const { imageSource, productTitle,price } = route.params;
    const [hearticon, setHearticon] = React.useState('hearto');
    const [selectedSize, setSelectedSize] = React.useState('M');
    const [cartItemCount, setCartItemCount] = React.useState(0);
    const conterstate = useSelector((state:RootState) => state.count);
    const dispatch = useDispatch();

    const toggleHeartIcon = () => {
        hearticon === 'hearto' ? setHearticon('heart') : setHearticon('hearto');
    };
    const selectSize = (size) => {
        setSelectedSize(size);
      };

      const addToCart = async () => {
        dispatch({ type: CART_ACTION_TYPE.ADD_TO_CART, payload: { imageSource, productTitle,price } });
        // dispatch({ type: INCREMENT });
        // console.log("count",conterstate);
        
      };


    return (
        <View style={styles.container}>
            <View style={{flex:.9}}>
            <ScrollView>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20,marginTop:30 }}>
                <TouchableOpacity style={{ paddingHorizontal: 10 }}>
                <View style={{position: 'relative'}}>
                        <Image source={imageSource} style={{ width: 340, height: 340, borderRadius: 180 }} />
                        <Icon style={{paddingRight:12,position: 'absolute',left:0,bottom:10}} name={hearticon} size={25} color="#5955b9" onPress={toggleHeartIcon} />
                </View>
                    
                    <TouchableOpacity style={{marginTop:30,paddingHorizontal:13,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={styles.titleProductprice}>{productTitle}</Text>
                    <Text style={{fontSize:18,fontWeight:'500',marginTop:10}}>{price}</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row' ,paddingHorizontal:35,marginTop:25}}>
                {['XXS', 'M', 'L', 'XL'].map((size) => (
                    <TouchableOpacity
                        key={size}
                        style={{
                            backgroundColor: selectedSize === size ? '#5955b9' : 'transparent',
                            paddingVertical: 25,
                            paddingHorizontal: 30,
                            borderRadius: 40,
                            borderWidth: 1,
                            borderColor: '#5955b9',
                            marginRight: 10,
                        }}
                        onPress={() => selectSize(size)}
                    >
                        <Text style={{ color: selectedSize === size ? 'white' : 'black' }}>{size}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center' ,paddingHorizontal:35,marginTop:25}}>
                <Text style={{fontSize:15}}>The Urban Chic Trench Coat. Elevate your style with this timeless piece, meticulously crafted for both comfort and sophistication.
                 Its versatile design effortlessly complements any outfit, making it a must-have addition to your wardrobe. Embrace the epitome of fashion-forward elegance with the Urban Chic Trench Coat.</Text>
                
            </View>
            </ScrollView>
            </View>
            <TouchableOpacity style={{flex:.14,justifyContent:'center', flexDirection:'row',marginTop:15,backgroundColor:'transparent'}} onPress={() => addToCart()}>
                <View style={{ 
                    width: '90%',
                    height: 80,
                    backgroundColor: '#524eb7',
                    borderRadius: 30,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.5,
                    shadowRadius: 3,
                }}>
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',paddingHorizontal:20}}>
                    
                    <Text style={{fontSize:20,color:'white',fontWeight:'500'}}>Add To Cart</Text>
                    
                    
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems:'center',
        position: 'relative',
    },
    titleProductprice:{
        fontSize:20,
        textAlign:'left',
        fontWeight:'700',
    }

});

export default Products;