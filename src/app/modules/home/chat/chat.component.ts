import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  usuarioLogeado: any;
  nuevoMensaje: string = "";
  mensajes: any[] = [];
  email: any = "";
  info: string = "";
  mostrarChat = true;
  usuarioLogeadoBool : boolean = true;

  @ViewChild('contenedorDeMensajes', { static: false }) private contenedorDeMensajes!: ElementRef;

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
          info: data.info, // Campo para mostrar en el chat
          emisor: data.emisor,
          texto: data.texto,
        };
      });
  
      this.scrollHastaUltimoMensaje();
    });

}

 

  // Función para desplazarse hasta el último mensaje
  scrollHastaUltimoMensaje() {
    try {
      const container = this.contenedorDeMensajes.nativeElement;
      container.scrollTop = container.scrollHeight;
    } catch (err) {
      console.error('Error al desplazar hasta el último mensaje:', err);
    }
  }

  enviarMensaje() {
    if (this.nuevoMensaje === "" || !this.usuarioLogeado || !this.usuarioLogeado.uid) return;
  
    const d = new Date();
    const time = d; // Obtener la marca de tiempo del servido
    
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const info = `${hours}:${minutes}`; // Formato HH:MM


    const mensaje = {
      hora: time, // Utiliza el timestamp para la hora
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

