import { DECREMENT, INCREMENT } from "../actions/types";
import { CART_ACTION_TYPE } from "../actions/addtocart";
import {collectionData,newinData} from '../../data/collectionsData';
import { AppStateModel } from "../../models/appState.model";

const initialState:AppStateModel = {
    count: 0,
    cartItems: [],
    collectionData:collectionData,
    products: newinData,
}

const counterReducer = (state:AppStateModel = initialState, action:any) => {
    switch (action.type) {
        case CART_ACTION_TYPE.ADD_TO_CART:{
            let newcartItems = [...state.cartItems];
            const item = newcartItems.findIndex((products) => products.productTitle === action.payload.productTitle);
            if (item <= -1) {
                newcartItems = newcartItems.concat({...action.payload, quantity: 1});
            } else {
                newcartItems = newcartItems.map((products) => {
                    if (products.productTitle === action.payload.productTitle) {
                        return {...products, quantity: products.quantity + 1};
                    }
                    return products;
                })
            }
            return {...state,
                cartItems: newcartItems,
            }}
        case CART_ACTION_TYPE.INCREMENT_QUANTITY:{
            let newcartItems = [...state.cartItems];
            newcartItems = newcartItems.map((products) => {
                if (products.productTitle === action.payload) {
                    return {...products, quantity: products.quantity + 1};
                }
                return products;
            })
            return {...state,
                cartItems: newcartItems,}
        }
        case CART_ACTION_TYPE.DECREMENT_QUANTITY:{
            let newcartItems = [...state.cartItems];
            newcartItems = newcartItems.map((products) => {
                if (products.productTitle === action.payload) {
                    return {...products, quantity: products.quantity - 1};
                }
                return products;
            })
            return {...state,
                cartItems: newcartItems,}
        }
        default:
            return state;
    }
}

export default counterReducer;