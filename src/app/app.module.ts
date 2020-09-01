import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {InicioComponent} from './components/inicio/inicio.component';
import {NavComponent} from './components/nav/nav.component';
import {ArticulosComponent} from './components/articulos/articulos.component';
import {ArticulosFamiliaComponent} from './components/articulos-familia/articulosfamilia.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavComponent,
    ArticulosComponent,
    ArticulosFamiliaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
