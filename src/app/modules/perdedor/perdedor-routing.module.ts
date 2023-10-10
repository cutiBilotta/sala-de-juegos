import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerdedorComponent } from './perdedor.component';

const routes: Routes = [
  {
    path: '',
    component: PerdedorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerdedorRoutingModule { }

