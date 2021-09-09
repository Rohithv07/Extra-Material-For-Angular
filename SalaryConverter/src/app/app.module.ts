import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsdComponent } from './usd/usd.component';
import { YenComponent } from './yen/yen.component';
import { MetreComponent } from './metre/metre.component';
import { KmComponent } from './km/km.component';
import { CmComponent } from './cm/cm.component';
import { KgComponent } from './kg/kg.component';
import { GComponent } from './g/g.component';

@NgModule({
  declarations: [
    AppComponent,
    UsdComponent,
    YenComponent,
    MetreComponent,
    KmComponent,
    CmComponent,
    KgComponent,
    GComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
