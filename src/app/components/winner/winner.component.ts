import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.scss']
})
export class WinnerComponent {

  constructor(private router:Router){ }
  home(){

    this.router.navigate(['/home']);


  }
}
