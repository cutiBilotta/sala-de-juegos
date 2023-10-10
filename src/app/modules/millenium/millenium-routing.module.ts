import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MilleniumComponent } from './millenium.component';

const routes: Routes = [
  {
    path: '',
    component: MilleniumComponent // Configura la ruta para cargar el LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MilleniumRoutingModule { }
