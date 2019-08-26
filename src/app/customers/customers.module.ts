import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { OrdersModule } from './orders/orders.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    OrdersModule
  ]
})
export class CustomersModule { }