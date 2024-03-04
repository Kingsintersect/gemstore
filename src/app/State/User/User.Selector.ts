import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState, UserProfile } from "src/app/Models/AppState";

export const getUserProfile = createFeatureSelector<AppState>('user');

export const getuserprofiledata = createSelector(getUserProfile, (state) => {
    return state.userProfile
});
