import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FetureModule } from './module/feture/feture.module';
import { SharedModule } from './module/shared/shared.module';
import { MaterialModule } from './module/material.module';
import { AdminModule } from './module/admin/admin.module';
import { AuthModule } from './module/auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './State/Auth/auth.reducers';
import { userReducer } from './State/User/user.reducer';
import { HttpClientModule } from '@angular/common/http';
import { productReducer } from './State/Product/product.reducer';
import { cartReducer } from './State/Cart/cart.reducer';
import { orderReducer } from './State/Order/order.reducer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FetureModule,
    SharedModule,
    MaterialModule,
    AdminModule,
    AuthModule,
    StoreModule.forRoot(
      {
        auth: authReducer, 
        user: userReducer, 
        product:productReducer, 
        cart:cartReducer,
        order:orderReducer,
      },
      {}
    ),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
