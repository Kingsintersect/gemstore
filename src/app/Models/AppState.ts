import { AuthStateModel } from "./Auth.model";
// import { User } from "./User.Model";

export interface AppState {
    userProfile: UserProfile,
    auth: AuthStateModel,
    product: any,
    cart: any,
    order: any,
    error: any,
}

export interface UserProfile {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    role: string,
    mobile: string,
    address: [UserAddress],
    payment_information: [],
    review: [],
    rating: [],
}

export interface UserAddress {
    userid: string,
    streetAddress: String,
    city: number,
    state: number,
    zip_code: number,
    mobile: number,
}