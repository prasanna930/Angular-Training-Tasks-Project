import { ObservablesComponent } from './rxjs/observables/observables.component';
import { RxjsModule } from './rxjs/rxjs.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { PrimengModule } from './primeng/primeng.module';
import { Form1Component } from './form1/form1.component';


import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { ChipsModule } from 'primeng/chips';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AccordionModule } from 'primeng/accordion';
import { InputMaskModule } from 'primeng/inputmask';
import { TableModule } from 'primeng/table';
import { SliderModule } from 'primeng/slider';
import { RatingModule } from 'primeng/rating';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';

import { CrossfieldvalidationDirective } from './crossfieldvalidation.directive';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ToolbarModule } from 'primeng/toolbar';
import { ComponentcommunicationComponent } from './componentcommunication/componentcommunication.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { OutputComponent } from './output/output.component';
import { ServicesComponent } from './services/services.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { PostComponent } from './post/post.component';
import { DirectivesComponent } from './directives/directives.component';
import { DialogModule } from 'primeng/dialog';
import { CrudModule } from './crud/crud.module';
import { ToastModule } from 'primeng/toast';
import { EdituserComponent } from './edituser/edituser.component';
import { HighlightDirective } from './highlight.directive';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { CustomdirectiveDirective } from './customdirective.directive';
import { FormArrayComponent } from './form-array/form-array.component';
import { PipesComponent } from './pipes/pipes.component';
import { SqrtPipe } from './sqrt.pipe';
import { MessageService } from 'primeng/api';
import { AddressformatComponent } from './addressformat/addressformat.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { ArrayMethodsComponent } from './array-methods/array-methods.component';
// import { FormeventpatternComponent } from './rxjs/formeventpattern/formeventpattern.component';
import { KeyFilterModule } from 'primeng/keyfilter';
import { ProxyserverComponent } from './proxyserver/proxyserver.component';
import { Geturl } from './services/gettingurl';
import { DynamiccheckboxComponent } from './dynamiccheckbox/dynamiccheckbox.component';
import { MultiplecheckboxesComponent } from './multiplecheckboxes/multiplecheckboxes.component';




@NgModule({
  declarations: [
    AppComponent,
    ObservablesComponent,
    HomeComponent,
    Form1Component,
    TemplatedrivenformComponent,
    CrossfieldvalidationDirective,
    ToolbarComponent,
    ComponentcommunicationComponent,
    ParentComponent,
    ChildComponent,
    Child1Component,
    Child2Component,
    OutputComponent,
    ServicesComponent,
    PostComponent,
    DirectivesComponent,
    EdituserComponent,
    HighlightDirective,
    CustomdirectiveDirective,
    FormArrayComponent,
    PipesComponent,
    SqrtPipe,
    AddressformatComponent,
    DataBindingComponent,
    PageNotFoundComponent,
    TypescriptComponent,
    ArrayMethodsComponent,
    ProxyserverComponent,
    DynamiccheckboxComponent,
    MultiplecheckboxesComponent


  ],
  imports: [
    DialogModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    PrimengModule,
    RxjsModule,
    InputTextModule,
    TooltipModule,
    RadioButtonModule,
    FormsModule,
    AutoCompleteModule,
    CheckboxModule,
    DropdownModule,
    ChipsModule,
    ReactiveFormsModule,
    ButtonModule,
    CalendarModule,
    InputTextareaModule,
    AccordionModule,
    InputMaskModule,
    TableModule,
    SliderModule,
    RatingModule,
    SidebarModule,
    PanelMenuModule,
    ToolbarModule,
    HttpClientModule,
    CrudModule,
    ToastModule,
    ToggleButtonModule,
    KeyFilterModule
  ],
  providers: [HttpService, MessageService, Geturl],
  bootstrap: [AppComponent]
})
export class AppModule { }
