import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthStateModel } from 'src/app/Models/Auth.model';
import { login } from 'src/app/State/Auth/Auth.Actions';
import { getAuthLoadingSelector, getAuthTokenSelector } from 'src/app/State/Auth/Auth.Selectors';

@Component({
    selector: 'app-singin',
    templateUrl: './singin.component.html',
    styleUrls: ['./singin.component.scss']
})
export class SinginComponent implements OnInit {
    @Input() changeTamplate: any;
    loading: boolean = false


    constructor(private router: Router, private fb: FormBuilder, private store: Store<AuthStateModel>, private _snackBar: MatSnackBar) { }
    ngOnInit(): void {
        this.store.select(getAuthTokenSelector).subscribe((access_token) => {
            if (access_token.length) this.ShowSnackBarAlert("Logged in Successfull", "pass"), this.router.navigate(['/']);
        });
        this.store.select(getAuthLoadingSelector).subscribe((loadingState) => { this.loading = loadingState });
    }

    loginform: FormGroup = this.fb.group({
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.minLength(8)]]
    });

    handleSignin(): void {
        if (this.loginform.valid) {
            this.store.dispatch(login(this.loginform.value));
        }
    }

    ShowSnackBarAlert(message: string, resultType: string = 'fail') {
        let _class = (resultType == 'pass') ? 'green-snackbar' : 'red-snackbar';
        return this._snackBar.open(message, "OK", {
            verticalPosition: 'top',
            horizontalPosition: 'end',
            duration: 5000,
            panelClass: _class
        });
    }

}
