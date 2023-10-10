import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-perdedor',
  templateUrl: './perdedor.component.html',
  styleUrls: ['./perdedor.component.scss']
})
export class PerdedorComponent {

  constructor( private router: Router) {}
  irAlHome(){
    this.router.navigate(['/home'])

  }
}
