import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, catchError, map, of } from "rxjs";
import { BASE_API_URL } from "src/app/config/api";
import { loginFailure, loginSuccess, registerFailure, registerSuccess } from "./auth.actions";

@Injectable({
    providedIn: 'root',
})

export class AuthService {
    private apiUrl = BASE_API_URL + "/api/auth";

    constructor(private http: HttpClient, private store: Store) { }

    login(loginData: any) {
        console.log(loginData)
        return this.http.post(`${this.apiUrl}/signin`, loginData).pipe(
            map((res: any) => {
                if (res.access_token) {
                    localStorage.setItem("access_token", res.access_token);
                }
                return loginSuccess(res.access_token);
            }),
            catchError((error) => {
                console.log(error.message)
                return of(
                    loginFailure(
                        (error.response && error.response.data.message) ? error.response.data.message : error.message
                    )
                )
            }),
        ).subscribe((action) => this.store.dispatch(action));
    }

    register(user: any) {
        return this.http.post(`${this.apiUrl}/signup`, user).pipe(
            map((res: any) => {
                if (res.access_token) {
                    localStorage.setItem("access_token", res.message);
                }
                return registerSuccess(res.message)
            }),
            catchError((error) => {
                return of(
                    registerFailure(
                        (error.response && error.response.data.message) ? error.response.data.message : error.message
                    )
                )
            }),
        ).subscribe((action) => this.store.dispatch(action));
    }

}