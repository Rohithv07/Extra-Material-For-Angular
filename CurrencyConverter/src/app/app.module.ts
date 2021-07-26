import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CurrencyConvertComponent } from './currency-convert/currency-convert.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrencyExchangeRateComponent } from './currency-exchange-rate/currency-exchange-rate.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CurrencyConvertComponent,
    CurrencyExchangeRateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
