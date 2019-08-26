import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TemplateformComponent } from './templateform/templateform.component';

@NgModule({
  declarations: [ReactiveformComponent, TemplateformComponent],
  imports: [
    CommonModule
  ]
})
export class FormsModule { }
