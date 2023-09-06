import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React,{useState,useEffect} from 'react';
import { Button,View,TouchableOpacity,Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Home from '../screens/home.screen';
import NewIn from '../screens/newIn.screen';
import Collectios from '../screens/collections.screen';
import Products from '../screens/products.screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomHeaderRight from '../components/customHeaderRight.component';
import ShoppingCart from '../screens/shoppingCart.screen';


const ProductStack = createNativeStackNavigator()

const ProductStackNav = ({navigation}) =>{
    return( <ProductStack.Navigator>
        <ProductStack.Screen name='Home'  component={Home} options={{
             headerShadowVisible: false, 
            
        }}/>
        <ProductStack.Screen name='Collection'  component={Collectios} options={({navigation})=>({
            headerTitle:'Collection',
            headerTitleAlign: 'center',
            headerLeft: () => (
                <View style={{ marginTop:-10 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="left" size={25} color="black" />
                    </TouchableOpacity>
                </View>
              ),
                headerRight: () => <CustomHeaderRight navigation={navigation}/>,
              headerShadowVisible: false, 
            
        })}/>
        <ProductStack.Screen name='NewIn'  component={NewIn} options={({navigation})=>({
            headerTitle:'New In',
            headerTitleAlign: 'center',
            headerLeft: () => (
                <View style={{ marginTop:-10 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="left" size={25} color="black" />
                    </TouchableOpacity>
                </View>
              ),
                headerRight: () => <CustomHeaderRight navigation={navigation} />,
              headerShadowVisible: false, 

        })}/>

<ProductStack.Screen name='Products'  component={Products} options={({navigation})=>({
            headerTitle:'Products',
            headerTitleAlign: 'center',
            headerLeft: () => (
                <View style={{ marginTop:-10 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="left" size={25} color="black" />
                    </TouchableOpacity>
                </View>
              ),
                headerRight: () => <CustomHeaderRight navigation={navigation}/>,
              headerShadowVisible: false, 

        })}/>

        <ProductStack.Screen name='shoppingCart' component={ShoppingCart} options={({ navigation }) => ({
            headerTitle: 'Shopping Cart',
            headerTitleAlign: 'center',
            headerLeft: () => (
                <View style={{ marginTop: -10 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="left" size={25} color="black" />
                    </TouchableOpacity>
                </View>
            ),
            headerRight: () => <CustomHeaderRight navigation={navigation} />,
            headerShadowVisible: false,
        })} />


    </ProductStack.Navigator>
);}

export default ProductStackNav;