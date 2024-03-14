import { createAction, props } from "@ngrx/store";

export const getUserProfile = createAction('[User] Get User Profile');

export const getUserProfileSuccess = createAction('[User] Get User Profile Success', props<{ profile: any }>());

export const getUserProfileFailure = createAction('[User] Get User Profile Failure', props<{ error: any }>());

export const logOut = createAction('[Auth] Logout');
export const logOutSuccess = createAction('[Auth] Logout Success', props<{ result: boolean }>());