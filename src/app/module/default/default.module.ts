import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultRoutingModule } from './default-routing.module';
import { TestComponent } from './components/test/test.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ToastComponent } from './components/toast/toast.component';
import { SkeletonComponent } from './components/skeleton/skeleton.component';


@NgModule({
  declarations: [
    TestComponent,
    SpinnerComponent,
    ToastComponent,
    SkeletonComponent
  ],
  imports: [
    CommonModule,
    DefaultRoutingModule
  ]
})
export class DefaultModule { }
