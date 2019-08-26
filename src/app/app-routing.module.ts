import { ArrayMethodsComponent } from './array-methods/array-methods.component';
import { PipesComponent } from './pipes/pipes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Form1Component } from './form1/form1.component';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import { ParentComponent } from './parent/parent.component';
import { OutputComponent } from './output/output.component';
import { ServicesComponent } from './services/services.component';
import { PostComponent } from './post/post.component';
import { DirectivesComponent } from './directives/directives.component';
import { EdituserComponent } from './edituser/edituser.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { AddressformatComponent } from './addressformat/addressformat.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ComponentcommunicationComponent } from './componentcommunication/componentcommunication.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ObservablesComponent } from './rxjs/observables/observables.component';
import { FormeventpatternComponent } from './rxjs/formeventpattern/formeventpattern.component';
import { ProxyserverComponent } from './proxyserver/proxyserver.component';
import { DynamiccheckboxComponent } from './dynamiccheckbox/dynamiccheckbox.component';
import { MultiplecheckboxesComponent } from './multiplecheckboxes/multiplecheckboxes.component';
import { SalesComponent } from './customers/orders/sales/sales.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'form1', component: Form1Component },
  { path: 'template', component: TemplatedrivenformComponent },
  {
    path: 'communication', component: ComponentcommunicationComponent,
    children: [
      { path: 'parent/:id', component: OutputComponent },
      { path: 'parent', component: ParentComponent },
      { path: 'parent1', component: OutputComponent }
    ]
  },
  { path: 'services', component: ServicesComponent },
  { path: 'post', component: PostComponent },
  { path: 'directive', component: DirectivesComponent },
  { path: 'edit/:id', component: EdituserComponent },
  { path: 'array', component: FormArrayComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'address', component: AddressformatComponent },
  { path: 'data', component: DataBindingComponent },
  { path: 'arraymethods', component: ArrayMethodsComponent },
  { path: 'observables', component: ObservablesComponent },
  { path: 'fromeventpattern', component: FormeventpatternComponent },
  { path: 'proxy', component: ProxyserverComponent },
  { path: 'dynamiccheckbox', component: DynamiccheckboxComponent },
  { path: 'multicheckbox', component: MultiplecheckboxesComponent },
  {
    path: 'customers',
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
