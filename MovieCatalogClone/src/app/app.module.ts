import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderdivComponent } from './headerdiv/headerdiv.component';
import { MidpicComponent } from './midpic/midpic.component';
import { MovieCatalogComponent } from './movie-catalog/movie-catalog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderdivComponent,
    MidpicComponent,
    MovieCatalogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
