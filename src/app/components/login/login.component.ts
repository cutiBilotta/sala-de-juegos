import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { Usuario } from 'src/app/clases/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router) {}

  public usuario: string = "";
  public password: string = "";
 
  public usuarioIngreso: string = "";
  public passwordIngreso: string = "";
  
  public usuarioValido: boolean=false;
  public passwordValido: boolean=false;
  public mensajeIngreso: string = "";
  public mensajeRegistro: string = "";


  registrarUsuario(): void {

    const nuevoUsuario = new Usuario(this.usuario, this.password);

    if (nuevoUsuario.validarCadena(this.usuario) && nuevoUsuario.validarCadena(this.password)){

      if(this.verificarUsuarioExistente(nuevoUsuario)){
        this.mensajeRegistro= "Ustes ya está registrado";
      
      }else{

          if (localStorage.getItem('usuarios')!= null){
            
            let array:Usuario[] = [];

            let usuariosStr = localStorage.getItem('usuarios');   
            let usuariosObj = usuariosStr ? JSON.parse(usuariosStr) :[] ;   

            for(let i =0 ; i< usuariosObj.length ; i++){
              if(array.length==0){
                array[0] = usuariosObj[0];
              }else{
                array.push(usuariosObj[i]);
              }
            }
            array.push(nuevoUsuario);

            localStorage.setItem('usuarios', JSON.stringify(array));  
            console.log("usuario agregado");

            this.router.navigate(['/home']); 
          
          }
          else{
            localStorage.setItem('usuarios',JSON.stringify(nuevoUsuario));
            console.log("usuario agregado");
            this.router.navigate(['/home']); 
          }
        }
    
    }else{
      this.mensajeRegistro= "Nombre de usuario o contraseña inválidos";
    }
    
  }
  
  
  ingresarUsuario(): void {
    const nuevoUsuario = new Usuario(this.usuarioIngreso, this.passwordIngreso);
    if(this.verificarUsuarioExistente(nuevoUsuario)){
      if(this.verificarContraseñaCorrecta(nuevoUsuario)){
        this.router.navigate(['/home']); 

      }else{
        this.mensajeIngreso= "Contraseña incorrecta";

      }

    }
    else{
      this.mensajeIngreso= "El usuario debe registrarse";

    }
  }

  verificarUsuarioExistente(user: Usuario): boolean {
    let usuariosRegistrados = localStorage.getItem('usuarios');
    let array: Usuario[] = usuariosRegistrados ? JSON.parse(usuariosRegistrados) : [];
  
    for (let u of array) {
      if (u.nombre === user.nombre) {
        return true;
      }
    }
  
    return false;
  }

  verificarContraseñaCorrecta(user: Usuario): boolean {
    let usuariosRegistrados = localStorage.getItem('usuarios');
    let array: Usuario[] = usuariosRegistrados ? JSON.parse(usuariosRegistrados) : [];
  
    for (let u of array) {
      if (u.nombre === user.nombre && u.contraseña==user.contraseña) {
        return true;
      }
    }
  
    return false;
  }




}
