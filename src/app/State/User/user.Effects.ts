import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "src/app/services/user.service";
import { getUserProfile, getUserProfileFailure, getUserProfileSuccess, logOut, logOutSuccess } from "./User.Actions";
import { catchError, exhaustMap, map, of } from "rxjs";

@Injectable()
export class UserEffects {

    constructor(private action$: Actions, private userServices: UserService) { }

    _getUserProfile = createEffect(() => {
        return this.action$.pipe(
            ofType(getUserProfile),
            exhaustMap((action) => {
                return this.userServices.getUserProfile().pipe(
                    map((data) => {
                        return getUserProfileSuccess({ profile: data });
                    }),
                    catchError((error) => {
                        return of(getUserProfileFailure({ error: error.error.message }))
                    })
                )
            })
        )
    })

    _logout = createEffect(() => {
        return this.action$.pipe(
            ofType(logOut),
            exhaustMap((action) => {
                return this.userServices.logOut().pipe(
                    map((data) => logOutSuccess({ result: data.result }))
                );
            })
        )
    })
}