import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GanadorComponent } from './ganador.component';

@NgModule({
  declarations: [GanadorComponent],
  imports: [CommonModule],
  exports: [GanadorComponent]
})
export class GanadorModule { }