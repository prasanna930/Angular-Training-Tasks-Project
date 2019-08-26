import { HttpService } from './../http.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { GetUsersComponent } from './get-users/get-users.component';


@NgModule({
  declarations: [GetUsersComponent],
  imports: [
    CommonModule,
    CrudRoutingModule,

  ],
  providers: [HttpService]
})
export class CrudModule { }
