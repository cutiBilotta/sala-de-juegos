import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MilleniumComponent } from './millenium.component';
import { MilleniumRoutingModule } from './millenium-routing.module';
import { FormsModule } from '@angular/forms';
import { GanadorModule } from '../ganador/ganador.module';
import { PerdedorModule } from '../perdedor/perdedor.module';


@NgModule({
  declarations: [MilleniumComponent],
  imports: [
    CommonModule,
    MilleniumRoutingModule,
    FormsModule,
    GanadorModule,
    PerdedorModule 

  ],
  exports: [GanadorModule, PerdedorModule]
})
export class MilleniumModule { }