import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PreguntadosRoutingModule } from './preguntados-routing.module';
import { PreguntadosComponent } from './preguntados/preguntados.component';
import { GanadorModule } from '../ganador/ganador.module';
import { PerdedorModule } from '../perdedor/perdedor.module';
import { ApiService } from 'src/app/services/api.service';

@NgModule({
  declarations: [
    PreguntadosComponent
  ],
  imports: [
    CommonModule,
    PreguntadosRoutingModule,
    PerdedorModule, GanadorModule, HttpClientModule
  ],
  providers: [ApiService]
})
export class PreguntadosModule { }
