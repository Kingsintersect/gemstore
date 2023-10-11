import { createReducer, on } from "@ngrx/store";
import * as cartActions from "./cart.actions";


export interface CartState {
    cartItems: any[],
    loading: boolean,
    error: any,
    cart: any,
}

const initialSate: CartState = {
    cartItems: [],
    loading: false,
    error: null,
    cart: null,
}

export const cartReducer = createReducer(
    initialSate,

    on(
        cartActions.addItemToCartRequest, cartActions.getCartRequest, 
        cartActions.removeCartItemRequest,
        cartActions.updateCartItemRequest,
        (state) => ({
        ...state, 
        loading:false,
        error: null,
    })),
    on(cartActions.addItemToCartSuccess, (state, action) => ({
        ...state, 
        loading:false,
        cartItems: [...state.cartItems, action.payload]
    })),
    on(
        cartActions.addItemToCartFailure,
        cartActions.getCartFailure,
        cartActions.removeCartItemsFailure,
        cartActions.updateCartItemFailure,
        (state, action) => ({
        ...state,
        loading:false,
        error:action.error,
    })),

    on(cartActions.getCartSuccess, (state, action) => ({
        ...state, 
        loading:false,
        cartItems: action.payload.cartItems,
        cart: action.payload
    })),

    on(cartActions.removeCartItemSuccess, (state, action) => ({
        ...state, 
        loading:false,
        cartItems: state.cartItems.filter((item) => item.id !== action.cartItemId),
    })),

    on(cartActions.updateCartItemSuccess, (state, action) => ({
        ...state, 
        loading:false,
        cartItems: state.cartItems.map((item) => item.id === action.payload.id ? action.payload : item),
    })),

    

     

)