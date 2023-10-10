import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
const routes: Routes = [
  { path: '', component: NotFoundComponent, },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module')
      .then(mod => mod.LoginModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module')
      .then(mod => mod.HomeModule)
  },
  {
    path: 'quien-soy', component: QuienSoyComponent,
   
  },
  {
    path: 'registro',
    loadChildren: () => import('./modules/registro/registro.module')
      .then(mod => mod.RegistroModule)
  },
  {
    path: 'mayor-o-menor',
    loadChildren: () => import('./modules/mayor-o-menor/mayor-o-menor.module')
      .then(mod => mod.MayorOMenorModule)
  },
  {
    path: 'ahorcado',
    loadChildren: () => import('./modules/ahorcado/ahorcado.module')
      .then(mod => mod.AhorcadoModule)
  },
  {
    path: 'millenium',
    loadChildren: () => import('./modules/millenium/millenium.module')
      .then(mod => mod.MilleniumModule)
  },
  {
    path: "**",
    component: NotFoundComponent
  } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
