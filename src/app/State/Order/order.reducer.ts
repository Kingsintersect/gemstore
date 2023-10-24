import { createReducer, on } from "@ngrx/store";
import * as OrderActions from "./order.actions";


export interface OrderState {
    orders: any[],
    order: any | null,
    loading: boolean,
    error: any,
}

const initialSate: OrderState = {
    orders: [],
    order: null,
    loading: false,
    error: null,
}

export const orderReducer = createReducer(
    initialSate,

    on(
        OrderActions.createOrderRequest,
        OrderActions.getOrderByIdRequest,
        OrderActions.getOrderHistoryRequest,
        (state) => ({
        ...state, 
        loading:false,
        error: null,
    })),
    on(OrderActions.createOrderSuccess,
        OrderActions.getOrderByIdSuccess,
         (state, { order }) => ({
        ...state, 
        loading:false,
        order,
    })),
    on(OrderActions.createOrderFailure,
        OrderActions.getOrderByIdFailure,
        OrderActions.getOrderHistoryFailure,
        (state, {error}) => ({
        ...state,
        loading:false,
        error,
    })),

    on(OrderActions.getOrderByIdSuccess,
         (state, { order }) => ({
        ...state, 
        loading:false,
        order,
    })),

    on(OrderActions.getOrderHistorySuccess,
         (state, { orders }) => ({
        ...state, 
        loading:false,
        orders,
    })),

)