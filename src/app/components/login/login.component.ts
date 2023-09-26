import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataBaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public mensaje :string = '';

    public emailTest :string = 'test@test.com';
    public passwordTest: string = 'passTest';
  
  

  usuario = {
    email: '',
    password: '',
  }

  ngOnInit() {
 
  }

  constructor(private authService: AuthService, private router: Router) { }

  Ingresar() {
    const { email, password } = this.usuario;
    this.authService.login(email, password).then(user => {
      console.log("Bienvenido ", user);
      if(!user) {
        this.mensaje= ("Datos incorrectos, si no tenes cuenta registrate!");
        return;
      };
      this.router.navigate(['/home'])
    }).catch(err=>{
      console.log(err)
    })
  }


  logout() {
    this.authService.logout();

  }

  autocompletarUsuario(){

    this.usuario.email= 'test@test.com';
    this.usuario.password= 'passTest';
  }
}


 