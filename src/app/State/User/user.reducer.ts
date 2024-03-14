import { createReducer, on } from "@ngrx/store";
import { getUserProfile, getUserProfileFailure, getUserProfileSuccess, logOutSuccess } from "./User.Actions";
import { UserState } from "./User.state";



export const UserReducer = createReducer(
    UserState,

    on(getUserProfile, (state) => ({ ...state, loading: true, error: null })),
    on(getUserProfileSuccess, (state, action) => ({ ...state, loading: false, error: null, profile: action.profile })),
    on(getUserProfileFailure, (state, { error }) => ({ ...state, loading: true, error: error })),

    on(logOutSuccess, () => UserState),

)