import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEmpFormBuilderComponent } from './edit-emp-form-builder/edit-emp-form-builder.component';
import { EditEmpReactiveComponent } from './edit-emp-reactive/edit-emp-reactive.component';
import { EditEmpTemplateDrivenComponent } from './edit-emp-template-driven/edit-emp-template-driven.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { QuantityIncrementComponent } from './quantity-increment/quantity-increment.component';
import { ViewEmpComponent } from './view-emp/view-emp.component';

const routes: Routes = [
  { path: '', redirectTo: 'view-employee', pathMatch: 'full' },
  { path: 'view-employee', component: ViewEmpComponent },
  { path: 'edit-employee', component: EditEmpComponent },
  { path: 'quantity-increment', component: QuantityIncrementComponent },
  { path: 'edit-emp-template-driven', component: EditEmpTemplateDrivenComponent },
  { path: 'edit-emp-reactive', component: EditEmpReactiveComponent },
  { path: 'edit-emp-reactive/:id', component: EditEmpReactiveComponent },
  { path: 'edit-emp-form-builder', component: EditEmpFormBuilderComponent },
  { path: 'employee-list', component: EmployeeListComponent },
  { path: 'employee-info', component: EmployeeInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
