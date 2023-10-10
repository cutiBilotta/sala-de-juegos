import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ganador',
  templateUrl: './ganador.component.html',
  styleUrls: ['./ganador.component.scss']
})
export class GanadorComponent {

  constructor( private router: Router) {}
  irAlHome(){
    this.router.navigate(['/home'])

  }
}
