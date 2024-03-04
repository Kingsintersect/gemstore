import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/Models/User.Model';
import { register } from 'src/app/State/Auth/Auth.Actions';
import { getAuthLoadingSelector, getAuthStatusSelector, getAuthTokenSelector } from 'src/app/State/Auth/Auth.Selectors';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss'],
})
export class SingupComponent implements OnInit {
  @Input() changeTamplate: any;
  loading: boolean = false

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.store.select(getAuthLoadingSelector).subscribe((loadingState) => { this.loading = loadingState });
  }
  ShowSnackBarAlert(arg0: string, arg1: string) {
    throw new Error('Method not implemented.');
  }

  registerForm: FormGroup = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
  });

  handleSignup(): void {
    if (this.registerForm.valid) {
      const _obj: User = this.registerForm.value
      this.store.dispatch(register({ inputdata: _obj }));
      this.store.select(getAuthStatusSelector).subscribe((status) => {
        if (status) this.router.navigate(['/']);
      });
    }
  }
}
