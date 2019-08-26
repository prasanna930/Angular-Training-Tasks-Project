import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {InputTextModule} from 'primeng/inputtext';
const primeng=[
  InputTextModule
]
@NgModule({
  declarations: [],
  imports: [primeng],
  exports: [primeng]

})
export class PrimengModule { }
