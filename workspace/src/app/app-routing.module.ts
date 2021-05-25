import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { EditEmpFormBuilderComponent } from './edit-emp-form-builder/edit-emp-form-builder.component';
import { EditEmpReactiveComponent } from './edit-emp-reactive/edit-emp-reactive.component';
import { EditEmpTemplateDrivenComponent } from './edit-emp-template-driven/edit-emp-template-driven.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { EmployeesComponent } from './employees/employees.component';
import { LoginComponent } from './login/login.component';
import { QuantityComponentComponent } from './quantity-component/quantity-component.component';
import { ViewEmpComponent } from './view-emp/view-emp.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'view-employee', component: ViewEmpComponent },
  { path: 'edit-employee', component: EditEmpComponent },
  { path: 'quantity-increment', component: QuantityComponentComponent },
  { path: 'edit-emp-template-driven', component: EditEmpTemplateDrivenComponent },
  { path: 'edit-emp-reactive', component: EditEmpReactiveComponent,  canActivate: [AuthGuard] },
  { path: 'edit-emp-reactive/:id', component: EditEmpReactiveComponent },
  { path: 'edit-emp-form-builder', component: EditEmpFormBuilderComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'employee-info', component: EmployeeInfoComponent},
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/login'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
