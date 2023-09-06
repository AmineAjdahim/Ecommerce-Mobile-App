export const CART_ACTION_TYPE = {
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
    INCREMENT_QUANTITY: "INCREMENT_QUANTITY",
    DECREMENT_QUANTITY: "DECREMENT_QUANTITY",
}

export const addtocart = (product) => {
    return {
        type: CART_ACTION_TYPE.ADD_TO_CART,
        payload: product
    };
}

export const incrementQuantity = (productName:any) => {
    return {
        type: CART_ACTION_TYPE.INCREMENT_QUANTITY,
        payload: productName
    };
}
export const decrementQuantity = (productName:any) => {
    return {
        type: CART_ACTION_TYPE.DECREMENT_QUANTITY,
        payload: productName
    };
}