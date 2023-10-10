import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'firebase/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  public userLogged: User | null = null;
  public email :string | null ="";
  userEmail:any;

  constructor(private authService: AuthService, private router: Router) {}
  


  ngOnInit() {
      this.authService.getUserEmail().subscribe((email) => {
        this.userEmail = email;
      });
  }
  

  logOut(){
    this.authService.logout();
    this.email= "Bienvenido!";

  }

  quienSoy(){

    this.router.navigate(['/quien-soy']);

  }
 
}




 

 

  


