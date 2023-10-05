import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataBaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  usuarios: any;
  usuario = {
    email: '',
    password: ''  }
  public mensaje : string="";

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

  constructor(private authService: AuthService, private database: DataBaseService, private router: Router) { }
  
  registrarse() {

    const { email, password } = this.usuario;

    let lista = [...this.usuarios];
    let existe = lista.find(user => user.email == email);
    if(!existe){
    this.authService.register(email, password).then(user => {
      console.log("se registro: ", user);
     

        console.log("USUARIO NUEVO CREADO")
        this.database.crear('users', this.usuario);
        this.router.navigate(['/home']);
    }).catch(err => {
      //console.log(err)
    })
  }else{
    this.mensaje = "El usuario ya se encuentra registrado";
  }
  }




  /*
  registrarse() {
    const { email, password } = this.usuario;
    this.authService.register(email, password).then(user => {
      console.log("se registro: ", user);
      let lista = [...this.usuarios];
      let existe = lista.find(user => user.email == email);

      if (!existe) {
        console.log("USUARIO NUEVO CREADO")
        this.database.crear('users', this.usuario);
        this.router.navigate(['/home']);

      }else{
        this.mensaje = "El usuario ya se encuentra registrado";
      }

    }).catch(err => {
      //console.log(err)
    })
  }*/



}