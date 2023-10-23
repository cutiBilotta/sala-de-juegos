import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit  {
  usuarioLogeado: any;
  nuevoMensaje: string = "";
  mensajes: any[] = [];
  email: any = "";
  info: string = "";
  mostrarChat = false;
  usuarioLogeadoBool : boolean = true;


  constructor(private authService: AuthService,private firestore: AngularFirestore) {}
 
  ngOnInit() {
    this.authService.getUserLogged().subscribe(usuario => {
      this.usuarioLogeado = usuario;
    });

 
    // Suscripción a los cambios en la colección de mensajes
    this.firestore
    this.firestore
    .collection('mensajes', ref => ref.orderBy('hora'))
    .snapshotChanges()
    .subscribe((snapshot) => {
      this.mensajes = snapshot.map((doc) => {
        const data: any = doc.payload.doc.data();
        return {
          id: doc.payload.doc.id,
          hora: data.hora,// Convertir el timestamp a objeto Date
          info: data.info, 
          emisor: data.emisor,
          texto: data.texto,
        };
      });
  
    });

}

  enviarMensaje() {
    if (this.nuevoMensaje === "" || !this.usuarioLogeado || !this.usuarioLogeado.uid) return;
  
    const d = new Date();
    const time = d; 
    
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const info = `${hours}:${minutes}`; // Formato HH:MM


    const mensaje = {
      hora: time, 
      info: info, // Campo para mostrar en el chat
      emisor: {
        uid: this.usuarioLogeado.uid,
        email: this.usuarioLogeado.email 
      },
      texto: this.nuevoMensaje
    };
  
    this.firestore.collection('mensajes').add(mensaje);
    this.nuevoMensaje = "";
  }
}

