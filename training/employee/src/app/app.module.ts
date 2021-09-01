import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewEmpComponent } from './view-emp/view-emp.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuantityIncrementComponent } from './quantity-increment/quantity-increment.component';
import { EditEmpTemplateDrivenComponent } from './edit-emp-template-driven/edit-emp-template-driven.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewEmpComponent,
    EditEmpComponent,
    NavbarComponent,
    QuantityIncrementComponent,
    EditEmpTemplateDrivenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
