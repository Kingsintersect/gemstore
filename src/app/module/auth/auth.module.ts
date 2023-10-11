import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinginComponent } from './singin/singin.component';
import { SingupComponent } from './singup/singup.component';
import { AuthComponent } from './auth.component';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SinginComponent,
    SingupComponent,
    AuthComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    // SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }
