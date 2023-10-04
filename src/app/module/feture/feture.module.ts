import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FetureComponent } from './components/feture.component';
import { HomeComponent } from './components/home/home.component';
import { MainCarouselComponent } from './components/home/main-carousel/main-carousel.component';
import { ProductSliderComponent } from './components/home/product-slider/product-slider.component';
import { HomeProductCardComponent } from './components/home/home-product-card/home-product-card.component';
import { MaterialModule } from '../material.module';
import { ProductsComponent } from './components/products/products.component';
import { SharedModule } from "../shared/shared.module";
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';
import { OrderComponent } from './components/order/order.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { FetureRoutingModule } from './feture-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductReviewCardComponent } from './components/product-details/product-review-card/product-review-card.component';
import { AddressFormComponent } from './components/checkout/address-form/address-form.component';
import { OrderCardComponent } from './components/order/order-card/order-card.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';



@NgModule({
    declarations: [
        FetureComponent,
        HomeComponent,
        HomeProductCardComponent,
        MainCarouselComponent,
        ProductSliderComponent,
        ProductsComponent,
        CartComponent,
        ProductDetailsComponent,
        CheckoutComponent,
        PaymentComponent,
        PaymentSuccessComponent,
        OrderComponent,
        OrderDetailsComponent,
        ProductReviewCardComponent,
        AddressFormComponent,
        OrderCardComponent,
        PageNotFoundComponent,
    ],
    exports: [
        FetureComponent,
        HomeComponent,
        ProductsComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FetureRoutingModule,
        MaterialModule,
        SharedModule,
    ]
})
export class FetureModule { }
