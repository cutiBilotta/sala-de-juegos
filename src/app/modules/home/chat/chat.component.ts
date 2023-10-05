import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {


  usuarioLogeado: any;
  nuevoMensaje:string="";
  mensajes:any[] =[];
  email:any="";

  mostrarChat = false;

  info:string ="";

  constructor(private authService : AuthService){}

  ngOnInit(){

  
    this.authService.getUserLogged().subscribe(usuario =>{
      this.usuarioLogeado = usuario;

    });

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

  enviarMensaje(){

    console.log(this.nuevoMensaje);
    if(this.nuevoMensaje =="") return;

    var d = new Date();
    var hours = d.getHours();
    var minutes = d.getMinutes()
  

    this.info = hours + ":" + minutes+"  ";
    let mensaje={
      hora: this.info ,emisor:this.usuarioLogeado.uid, texto:this.nuevoMensaje
    }

    this.mensajes.push(mensaje);

    this.nuevoMensaje="";

      
    setTimeout(() => {
      this.scrollHastaUltimoMensaje();
  });
}

scrollHastaUltimoMensaje() {
  const contenedor = document.getElementById('contenedorDeMensajes');
  if (contenedor) {
      contenedor.scrollTop = contenedor.scrollHeight;
  }
}
}