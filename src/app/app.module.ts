import { NgModule, isDevMode } from '@angular/core';
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
import { authReducer } from './State/Auth/Auth.Reducers';
import { UserReducer } from './State/User/User.Reducer';
import { HttpClientModule } from '@angular/common/http';
import { productReducer } from './State/Product/product.reducer';
import { cartReducer } from './State/Cart/cart.reducer';
import { orderReducer } from './State/Order/order.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppEffect } from './State/Generic/App.effect';
import { AuthEffect } from './State/Auth/Auth.Effect';
import { UserEffects } from './State/User/user.Effects';

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
        user: UserReducer,
        product: productReducer,
        cart: cartReducer,
        order: orderReducer,
      },
      {}
    ),
    HttpClientModule,
    EffectsModule.forRoot([AppEffect, AuthEffect, UserEffects]),
    // StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
