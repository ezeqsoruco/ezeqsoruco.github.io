import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from './components/inicio/inicio.component';
import {ArticulosComponent} from './components/articulos/articulos.component';
import {ArticulosFamiliaComponent} from './components/articulos-familia/articulosfamilia.component';

const routes: Routes = [
  { path: '', component: InicioComponent, pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'articulos', component: ArticulosComponent },
  {path: 'articulosfamilia', component: ArticulosFamiliaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
