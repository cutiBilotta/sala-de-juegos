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

  constructor(private authService: AuthService, private router: Router) {}
  


  ngOnInit() {
    this.authService.getUserEmail().subscribe(
      (email: string | null) => {
        this.email = email;
        if (email !== null) {
          console.log('Correo electrónico:', email);
        } else {
          console.log('Usuario no autenticado');
        }
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  logOut(){
    this.authService.logout();
    this.email= "Bienvenido!";

  }

  quienSoy(){

    this.router.navigate(['/quien-soy'])

  }
 
}




 

 

  


