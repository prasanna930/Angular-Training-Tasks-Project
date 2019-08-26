import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersModule } from './orders/orders.module';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild(routes), OrdersModule],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
