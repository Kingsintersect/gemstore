import { createAction, props } from "@ngrx/store";
import { User } from "src/app/Models/User.Model";

export const login = createAction('[Auth] Login', props<{ email: string, password: string }>());

export const loginSuccess = createAction('[Auth] Login Success', props<{ token: any }>());

export const loginFailure = createAction('[Auth] Login Failure', props<{ errormessage: any }>());



export const register = createAction('[Auth] Register', props<{ inputdata: User }>());

export const registerSuccess = createAction('[Auth] Register Success', props<{ user: any }>());

export const registerFailure = createAction('[Auth] Register Failure', props<{ error: any }>());

