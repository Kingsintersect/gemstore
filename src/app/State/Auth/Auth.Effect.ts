import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "src/app/services/auth.service";
import { login, loginFailure, loginSuccess, register, registerFailure, registerSuccess } from "./Auth.Actions";
import { catchError, exhaustMap, map, of, switchMap } from "rxjs";
import { showalert } from "../Generic/App.actions";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffect {

    constructor(private router: Router, private action$: Actions, private auth: AuthService) { }

    _login = createEffect(() => {
        return this.action$.pipe(
            ofType(login),
            exhaustMap((action) => {
                let login_data = { email: action.email, password: action.password }
                return this.auth.login(login_data).pipe(
                    map((res: any) => {
                        if (res.access_token) {
                            localStorage.setItem("access_token", res.access_token);
                        }
                        return loginSuccess({ token: res.access_token });
                    }),
                    catchError((_error) => {
                        let msg = (_error.error.message) ? _error.error.message : "Failed To Login"
                        return of(
                            loginFailure(msg),
                            showalert({ message: msg, resultType: 'fail', })
                        )
                    }),
                )
            })
        )
    })

    _register = createEffect(() => {
        return this.action$.pipe(
            ofType(register),
            switchMap((action) => {
                return this.auth.register(action.inputdata).pipe(
                    switchMap((res: any) => {
                        console.log(res.access_token)
                        if (res.access_token) {
                            localStorage.setItem("access_token", res.access_token);
                        }
                        return of(
                            registerSuccess(res),
                            showalert({ message: 'User Registaration Successfull.', resultType: 'pass' })
                        )
                    }),
                    catchError((_error) => of(
                        registerFailure(_error.error.message),
                        showalert({
                            message: 'User Registration Failed!', resultType: 'fail'
                        })
                    ))
                )
            })
        )
    })
}