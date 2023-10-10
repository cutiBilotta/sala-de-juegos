import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GanadorComponent } from './ganador.component';

const routes: Routes = [
  {
    path: '',
    component: GanadorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GanadorRoutingModule { }

