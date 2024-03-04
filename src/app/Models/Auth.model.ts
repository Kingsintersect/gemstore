import { User } from "./User.Model";

export interface AuthStateModel {
    token: string,
    errormessage: null,
    loading: boolean,
    status: boolean,
}