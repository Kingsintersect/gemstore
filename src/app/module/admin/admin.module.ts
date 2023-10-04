import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './components/admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { CustomersComponent } from './components/customers/customers.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { SharedModule } from "../shared/shared.module";


@NgModule({
    declarations: [
        AdminComponent,
        DashboardComponent,
        AdminProductsComponent,
        AdminOrdersComponent,
        CustomersComponent,
        CreateProductComponent
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        FormsModule,
        MaterialModule,
        SharedModule,
    ]
})
export class AdminModule { }
