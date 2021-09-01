import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEmpTemplateDrivenComponent } from './edit-emp-template-driven/edit-emp-template-driven.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { QuantityIncrementComponent } from './quantity-increment/quantity-increment.component';
import { ViewEmpComponent } from './view-emp/view-emp.component';

const routes: Routes = [
  { path: '', redirectTo: 'view-employee', pathMatch: 'full' },
  { path: 'view-employee', component: ViewEmpComponent },
  { path: 'edit-employee', component: EditEmpComponent },
  { path: 'quantity-increment', component: QuantityIncrementComponent },
  { path: 'edit-emp-template-driven', component: EditEmpTemplateDrivenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
