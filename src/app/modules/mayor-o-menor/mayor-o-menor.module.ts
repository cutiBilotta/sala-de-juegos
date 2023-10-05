import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MayorOMenorRoutingModule } from './mayor-o-menor-routing.module';
import { MayorOMenorComponent } from './mayor-o-menor.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [MayorOMenorComponent],
  imports: [
    CommonModule,
    MayorOMenorRoutingModule,
    FormsModule
  ]
})
export class MayorOMenorModule { }

