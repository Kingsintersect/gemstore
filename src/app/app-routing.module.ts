import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRoutingModule } from './module/admin/admin-routing.module';
import { FetureRoutingModule } from './module/feture/feture-routing.module';
import { AuthComponent } from './module/auth/auth.component';
import { DefaultRoutingModule } from './module/default/default-routing.module';

const routes: Routes = [
  { path: "login", component: AuthComponent },
  { path:"admin", loadChildren: ()=>import("./module/admin/admin-routing.module").then(m=>AdminRoutingModule) },
  { path:"default", loadChildren: ()=>import("./module/default/default-routing.module").then(m=>DefaultRoutingModule) },
  { path:"", loadChildren: ()=>import("./module/feture/feture-routing.module").then(m=>FetureRoutingModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
