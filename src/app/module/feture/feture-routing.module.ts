import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomeComponent } from './components/home/home.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { OrderComponent } from './components/order/order.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsComponent } from './components/products/products.component';
import { FetureComponent } from './components/feture.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';

const routes: Routes = [
  {
    path: "", component: FetureComponent, children: [
      { path: "", component: HomeComponent },
      { path: "user/profile", component: UserprofileComponent },
      { path: "cart", component: CartComponent },
      { path: "product-details/:id", component: ProductDetailsComponent },
      { path: "checkout", component: CheckoutComponent },
      { path: "checkout/payment/:id", component: PaymentComponent },
      { path: "payment-success", component: PaymentSuccessComponent },
      { path: "account/orders", component: OrderComponent },
      { path: "order/:id", component: OrderDetailsComponent },

      { path: ':levelOne/:levelTwo/:levelThree', component: ProductsComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FetureRoutingModule { }
