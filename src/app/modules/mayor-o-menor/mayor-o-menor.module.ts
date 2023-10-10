import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MayorOMenorRoutingModule } from './mayor-o-menor-routing.module';
import { MayorOMenorComponent } from './mayor-o-menor.component';
import { FormsModule } from '@angular/forms';
import { GanadorModule } from '../ganador/ganador.module';
import { PerdedorModule} from '../perdedor/perdedor.module'

@NgModule({
  declarations: [MayorOMenorComponent],
  imports: [
    CommonModule,
    MayorOMenorRoutingModule,
    FormsModule,
    GanadorModule,
    PerdedorModule
  ],
   exports: [GanadorModule, PerdedorModule]
})
export class MayorOMenorModule { }

