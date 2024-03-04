import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthStateModel } from "src/app/Models/Auth.model";

export const getAuthState = createFeatureSelector<AuthStateModel>('auth');


export const getAuthTokenSelector = createSelector(getAuthState, (state) => {
    return state.token;
});

export const getAuthLoadingSelector = createSelector(getAuthState, (state) => {
    return state.loading;
});

export const getAuthErrorSelector = createSelector(getAuthState, (state) => {
    return state.errormessage;
});

export const getAuthStatusSelector = createSelector(getAuthState, (state) => {
    return state.status;
});
