import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { emptyaction, showalert } from "./App.actions";
import { exhaustMap, map } from "rxjs";


@Injectable()
export class AppEffect {
    constructor(private $action: Actions, private _snackbar: MatSnackBar) { }

    _showAlert = createEffect(() =>
        this.$action.pipe(
            ofType(showalert),
            exhaustMap((action) => {
                return this.ShowSnackBarAlert(action.message, action.resultType).afterDismissed().pipe(
                    map(() => {
                        return emptyaction();
                    })
                )
            })
        )
    )


    ShowSnackBarAlert(message: string, resultType: string = 'fail') {
        let _class = (resultType == 'pass') ? 'green-snackbar' : 'red-snackbar';
        return this._snackbar.open(message, "OK", {
            verticalPosition: 'top',
            horizontalPosition: 'end',
            duration: 5000,
            panelClass: _class
        });
    }

}
