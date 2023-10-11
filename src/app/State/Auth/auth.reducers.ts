import { createReducer, on } from "@ngrx/store";
import { login, loginFailure, loginSuccess, register, registerFailure, registerSuccess } from "./auth.actions";

const initialSate = {
    user: null,
    loading: false,
    error: null
}

export const authReducer = createReducer(
    initialSate,
    on(login, (state) => ({...state, loading:true, error:null})),
    on(loginSuccess, (state, {user}) => ({...state, loading:false, error:null, user:user})),
    on(loginFailure, (state, {error}) => ({...state, loading:true, error:error})),


    on(register, (state) => ({...state, loading:true, error:null})),
    on(registerSuccess, (state, {user}) => ({...state, loading:false, error:null, user:user})),
    on(registerFailure, (state, {error}) => ({...state, loading:true, error:error})),

)