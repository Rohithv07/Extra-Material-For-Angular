import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewEmpComponent } from './view-emp/view-emp.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { HeaderComponent } from './header/header.component';
import { QuantityComponentComponent } from './quantity-component/quantity-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditEmpTemplateDrivenComponent } from './edit-emp-template-driven/edit-emp-template-driven.component';
import { EditEmpReactiveComponent } from './edit-emp-reactive/edit-emp-reactive.component';
import { EditEmpFormBuilderComponent } from './edit-emp-form-builder/edit-emp-form-builder.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    ViewEmpComponent,
    EditEmpComponent,
    HeaderComponent,
    QuantityComponentComponent,
    EditEmpTemplateDrivenComponent,
    EditEmpReactiveComponent,
    EditEmpFormBuilderComponent,
    EmployeesComponent,
    EmployeeInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
