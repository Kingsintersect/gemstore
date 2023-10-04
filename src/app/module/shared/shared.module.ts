import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavMenuComponent } from './components/navbar/nav-menu/nav-menu.component';
import { MaterialModule } from '../material.module';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { AddressCardComponent } from './components/address-card/address-card.component';
import { PriceDetailCardComponent } from './components/price-detail-card/price-detail-card.component';
import { OrderTrackerComponent } from './components/order-tracker/order-tracker.component';
import { ShareButtonsComponent } from './components/share-buttons/share-buttons.component';
import { GenericButtonComponent } from './components/generic-button/generic-button.component';
import { BreadCrumpComponent } from './components/bread-crump/bread-crump.component';
import { DataSummaryComponent } from './admin/data-summary/data-summary.component';
import { EmptyStateComponent } from './components/empty-state/empty-state.component';



@NgModule({
  declarations: [
    NavbarComponent,
    NavMenuComponent,
    FooterComponent,
    SearchFilterComponent,
    ProductCardComponent,
    StarRatingComponent,
    CartItemComponent,
    AddressCardComponent,
    PriceDetailCardComponent,
    OrderTrackerComponent,
    ShareButtonsComponent,
    GenericButtonComponent,
    BreadCrumpComponent,
    DataSummaryComponent,
    EmptyStateComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    NavbarComponent,
    NavMenuComponent,
    FooterComponent,
    SearchFilterComponent,
    ProductCardComponent ,
    StarRatingComponent,
    CartItemComponent,
    AddressCardComponent,
    PriceDetailCardComponent,
    OrderTrackerComponent,
    ShareButtonsComponent,
    GenericButtonComponent,
    BreadCrumpComponent,
    DataSummaryComponent,
    EmptyStateComponent,
  ]
})
export class SharedModule { }
