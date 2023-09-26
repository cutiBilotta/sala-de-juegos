import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { QuienSoyComponent } from '../quien-soy/quien-soy.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  public userLogged: User | null = null;
  public email :string | null ="";

  constructor(private authService: AuthService, private afAuth: AngularFireAuth, private router: Router) {
    // Suscríbete al observable para obtener el usuario
    this.authService.getUserLogged().subscribe((user: any) => {
      this.userLogged = user;
      console.log(user);
      if (this.userLogged) {
        console.log('Correo electrónico:', this.userLogged.email);
        let aux= this.userLogged.email;
        this.email= aux;

      } else {
        console.log('Usuario no autenticado');
      }
    });

  }
  


  ngOnInit(): void {
  }

  logOut(){
    this.authService.logout();
    this.email= "Bienvenido!";

  }

  quienSoy(){

    this.router.navigate(['/quien-soy'])

  }
 
}




 

 

  


