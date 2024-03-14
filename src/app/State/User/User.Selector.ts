import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserModel } from "src/app/Models/User.Model";

export const getUserProfile = createFeatureSelector<UserModel>('user');

export const getuserprofiledata = createSelector(getUserProfile, (state) => {
    return state.profile
});
