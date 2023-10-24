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
import { AreaChartComponent } from './shared/area-chart/area-chart.component';
import { ColumnChartComponent } from './shared/column-chart/column-chart.component';
import { DonutChartComponent } from './shared/donut-chart/donut-chart.component';
import { PieChartComponent } from './shared/pie-chart/pie-chart.component';


@NgModule({
    declarations: [
        AdminComponent,
        DashboardComponent,
        AdminProductsComponent,
        AdminOrdersComponent,
        CustomersComponent,
        CreateProductComponent,
        AreaChartComponent,
        ColumnChartComponent,
        DonutChartComponent,
        PieChartComponent
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
