import { UserModel } from "src/app/Models/User.Model";

export const UserState: UserModel = {
    profile: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        role: '',
        mobile: '',
        address: [{
            userid: '',
            streetAddress: '',
            city: 0,
            state: 0,
            zip_code: 0,
            mobile: 0,
        }],
        payment_information: [],
        review: [],
        rating: [],
    },
    loading: false,
    error: null
}
