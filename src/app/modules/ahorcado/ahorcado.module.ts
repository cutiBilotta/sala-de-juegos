import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AhorcadoComponent } from './ahorcado.component';
import { AhorcadoRoutingModule } from './ahorcado-routing.module';
import { FormsModule } from '@angular/forms';
import { GanadorModule } from '../ganador/ganador.module';
import { PerdedorModule} from '../perdedor/perdedor.module';
@NgModule({
  declarations: [AhorcadoComponent],
  imports: [
    CommonModule,
    AhorcadoRoutingModule,
    FormsModule,
    GanadorModule, 
    PerdedorModule
  ],
  exports: [GanadorModule, PerdedorModule]
})
export class AhorcadoModule { }
