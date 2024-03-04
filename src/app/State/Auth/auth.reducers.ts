import { createReducer, on } from "@ngrx/store";
import { login, loginFailure, loginSuccess, register, registerFailure, registerSuccess } from "./Auth.Actions";
import { AuthState } from "./Auth.State";


export const authReducer = createReducer(
    AuthState,
    on(login, (state) => ({
        ...state,
        loading: true,
        errormessage: null
    })),
    on(loginSuccess, (state, action) => ({
        ...state,
        loading: false,
        errormessage: null,
        token: action.token
    })),
    on(loginFailure, (state, action) => ({
        ...state,
        loading: false,
        errormessage: action.errormessage
    })),


    on(register, (state) => ({ ...state, loading: true, error: null })),
    on(registerSuccess, (state, { user }) => ({ ...state, loading: false, error: null, status: true, user: user })),
    on(registerFailure, (state, { error }) => ({ ...state, loading: false, error: error })),

)