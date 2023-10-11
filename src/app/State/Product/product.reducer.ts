import { createReducer, on } from "@ngrx/store";
import { findProductByCategoryFailure, findProductByCategorySuccess, findProductByIdFailure, findProductByIdSuccess } from "./product.actions";

const initialSate = {
    products: [],
    loading: false,
    error: null,
    product: null
}

export const productReducer = createReducer(
    initialSate,
    on(findProductByCategorySuccess, (state, {payload}) => ({
        ...state, 
        products:payload,
        content:payload.content,
        loading:false
    })),

    on(findProductByIdSuccess, (state, {payload}) => ({
        ...state, 
        product:payload,
        loading:false
    })),

    on(
        findProductByCategoryFailure, findProductByIdFailure, 
        (state, {error}) => ({
        ...state, 
        error:error,
        loading:true
    })),

)