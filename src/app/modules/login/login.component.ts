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

  usuarios: any;

  public usuario = {
    email: '',
    password: '',
    fecha:''
  }

    public mensaje :string = '';
    public emailTest :string = 'test@test.com';
    public passwordTest: string = 'passTest';
    
  ngOnInit() {
    this.database.obtenerTodos("users").subscribe((usuariosRef) => {
     // console.log("usuariosRef: ", usuariosRef);
      this.usuarios = usuariosRef.map(userRef => {
        let usuario: any = userRef.payload.doc.data();
        usuario['id'] = userRef.payload.doc.id;
        return usuario;
      });
      //console.log(this.usuarios)
    })
  }

  constructor(private authService: AuthService, private router: Router, private database: DataBaseService) { }

  Ingresar() {
    const { email, password } = this.usuario;
    let lista = [...this.usuarios];
    let existe = lista.find(user => user.email == email);
  
    if (existe) {
      this.authService.login(email, password).then(user => {
        if (user !== null) {
          this.router.navigate(['/home']);
        } else {
          this.mensaje="Error. Ingrese datos validos";
        }
      }).catch(err => {
        console.log(err);
      });
    } else {
      this.mensaje = "Si no tienes cuenta, regístrate!";
    }
  }


  logout() {
    this.authService.logout();

  }

  autocompletarUsuario(){

    this.usuario.email= 'test@test.com';
    this.usuario.password= 'passTest';
  }
}


 