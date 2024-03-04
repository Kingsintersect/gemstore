import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "src/app/services/user.service";
import { getUserProfile, getUserProfileFailure, getUserProfileSuccess } from "./User.Actions";
import { catchError, exhaustMap, map, of } from "rxjs";

@Injectable()
export class UserEffects {

    constructor(private action$: Actions, private user: UserService) { }

    _getUserProfile = createEffect(() => {
        return this.action$.pipe(
            ofType(getUserProfile),
            exhaustMap((action) => {
                return this.user.getUserProfile().pipe(
                    map((data) => {
                        return getUserProfileSuccess({ userProfile: data });
                    }),
                    catchError((error) => {
                        return of(getUserProfileFailure({ error: error.error.message }))
                    })
                )
            })
        )
    })
}