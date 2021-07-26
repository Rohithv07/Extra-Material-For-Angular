import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { CurrencyConvertComponent } from './currency-convert/currency-convert.component';
import { CurrencyExchangeRateComponent } from './currency-exchange-rate/currency-exchange-rate.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'currency', component: CurrencyConvertComponent},
  // { path: 'currencyExchange', component: CurrencyExchangeRateComponent},
  { path: 'login', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
