export interface UserModel {
    profile: User,
    loading: boolean,
    error: null
}

export interface User {
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

