import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity,Image, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { CART_ACTION_TYPE, decrementQuantity, incrementQuantity } from '../redux/actions/addtocart';
// import { cartItems } from '../redux/reducers/counterReducer';
import { CartItemsModel } from '../models/cartItems.model';

const Shoppingcart = () => {
    const cart:CartItemsModel[] = useSelector((state: RootState) => state.cartItems);
    const dispatch = useDispatch();

    const decrementCounter = (productTitle: string, quantity: number): void => {
        console.log("decrementCounter");
        if (quantity > 1) {
            dispatch(decrementQuantity(productTitle));
        }
    }
    const incrementCounter = (productTitle: string): void => {
        console.log("incrementCounter");
        dispatch(incrementQuantity(productTitle));
    }
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center' ,paddingHorizontal:20,marginTop:20}}>
                <Text style={styles.textCollection}>Shopping Cart</Text>
                <Icon style={{paddingRight:12}} name="ellipsis-h" size={25} color="#e85a27" />
            </View>

            <View style={styles.viewProducts}>
            {cart.map((item, index) => (
              <TouchableOpacity style={styles.carts} key={index}>
                <TouchableOpacity style={styles.cart}>
                <Image source={item.imageSource} style={{ width: 80, height: 80, borderRadius: 40 }} />
                <TouchableOpacity onPress={() => alert('Button clicked')} style={{paddingHorizontal:19,flexDirection:'column', justifyContent:'center'}}>
                  <Text style={{ textAlign: 'left', marginTop: 8,color:'white' }}>{item.productTitle}</Text>
                  <Text style={{ textAlign: 'left', marginTop: 8,color:'white' }}>{item.price}</Text>
                </TouchableOpacity>
                </TouchableOpacity>
                    <View style={{paddingHorizontal:10,flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
                    <TouchableOpacity style={{ marginRight: 24}} onPress={() =>decrementCounter(item.productTitle,item.quantity)}>
                        <Icon name="minus" size={20} color="white" />
                    </TouchableOpacity>
                    <Text style={{ marginRight: 24, color: 'white' }}>{item.quantity}</Text>
                    <TouchableOpacity  onPress={() => incrementCounter(item.productTitle)}>
                        <Icon name="plus" size={20} color="white" />
                    </TouchableOpacity>
                  </View>
              </TouchableOpacity>
            ))}
        </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    textCollection:{
        fontSize:35,
        fontWeight:'500',
        color:'black',
        marginLeft:20,
    },
    viewProducts:{
        flexDirection: 'column',
        marginTop:20,
        justifyContent:'flex-start',
        alignItems: 'flex-start',
        paddingHorizontal: 10 
    },
    carts:{
        width:'100%',
        backgroundColor:'#524eb7',
        margin:2,
        padding:10,
        borderRadius:10,
        // flex:1
        flexDirection:'row',
        justifyContent:'space-between',
    },
    cart:{
        flexDirection:'row',
        alignItems:'center',
        
    }


})

export default Shoppingcart