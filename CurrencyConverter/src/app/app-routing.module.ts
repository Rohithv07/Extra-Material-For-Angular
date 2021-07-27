import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard/auth-guard';
import { AuthComponent } from './auth/auth.component';
import { CurrencyConvertComponent } from './currency-convert/currency-convert.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'currency', component: CurrencyConvertComponent, canActivate:[AuthGuard]},
  { path: 'login', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
