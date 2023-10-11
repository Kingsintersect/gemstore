import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/State/Auth/auth.service';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss']
})
export class SinginComponent {
  @Input() changeTamplate: any;


  constructor(private fb: FormBuilder, private store: Store, private authService: AuthService){}

  loginform: FormGroup = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(8)]]
  });

  handleSignin(): void{
    if(this.loginform.valid){
      this.authService.login(this.loginform.value);
      console.log(this.loginform.value);
    }
  }

}
