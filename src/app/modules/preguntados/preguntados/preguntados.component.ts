import { Component, OnInit} from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.scss']
})
export class PreguntadosComponent implements OnInit {

  constructor(private api: ApiService){}
  paises:any[] = [];
  randomIndex:number = 0;
  partidaGanada:boolean = false;
  partidaPerdida:boolean=false;
  actualFlag: any;
  opcionesString:string[] = [];
  opcionesIndex:number=0;
  mostrarBandera:boolean=false;
  opcionSeleccionada:string="";
  opcionCorrecta:string="";
  gameEnabled:boolean =true;
  mensajeUsuario:string="";
  rondaPaises:boolean =false;
  

  puntos:number = 0;
  public vidas: number = 3;
  public vidasString:string = "❤ ❤ ❤";

  ngOnInit(): void {
    this.api.obtenerTodosLosPaises().subscribe((data) => {
      this.paises = data; // Asigna la respuesta de la API a la variable paises
      console.log(this.paises); // Ahora puedes acceder a los datos aquí
      });
     
  }
generarOpcionContinente(i:number){
  
      
    if (i == 0) {
      this.opcionesIndex = Math.floor(Math.random() * 251);
      this.opcionesString.push(this.paises[this.opcionesIndex].continents.toString());
    
    } else {
      this.opcionesIndex = Math.floor(Math.random() * 251);
      let nuevaOpcion = this.paises[this.opcionesIndex].continents.toString();

      while (this.opcionesString.includes(nuevaOpcion)) {
        this.opcionesIndex = Math.floor(Math.random() * 251);
        nuevaOpcion = this.paises[this.opcionesIndex].continents.toString();
      }

      this.opcionesString.push(nuevaOpcion);
    }
  
}


comenzar(){
  this.opcionesString=[];
  this.randomIndex = Math.floor(Math.random() * 251);
  this.actualFlag= this.paises[this.randomIndex].flags.png;
  this.opcionCorrecta = this.paises[this.randomIndex].continents.toString();  

  if (this.puntos >= 0 && this.puntos <= 300) {
    this.rondaPaises=false;
    this.mensajeUsuario = "Adivina el Continente";
  
    for (let i = 0; i < 3; i++) {
    this.generarOpcionContinente(i);
    }
  
    this.opcionesIndex = Math.floor(Math.random() * 5);

    if(this.opcionesString.includes(this.opcionCorrecta)){
      
      const indice = this.opcionesString.indexOf(this.opcionCorrecta);
      this.opcionesString.splice(indice, 1);
      this.opcionesString.push(this.opcionCorrecta);
      this.generarOpcionContinente(1);
      
    }else{
      this.opcionesString.splice(this.opcionesIndex, 0, this.opcionCorrecta);

    }
  }else{
    this.rondaPaises=true;
    this.mensajeUsuario="Adivina el País";

    this.opcionCorrecta = this.paises[this.randomIndex].name.common;
    for(let i=0; i<3 ; i++){
      this.opcionesIndex = ( Math.floor(Math.random() * 251));
      this.opcionesString.push(this.paises[this.opcionesIndex].name.common); 
    }
  
    this.opcionesIndex = ( Math.floor(Math.random() * 5));
    this.opcionesString.splice(this.opcionesIndex , 0 ,this.opcionCorrecta );
  
    console.log(this.opcionesString);
    console.log(this.opcionCorrecta);

  }
  console.log(this.opcionCorrecta);
  this.mostrarBandera=true;

}

guardarRespuesta(opcion: string): void {
  this.opcionSeleccionada = opcion;
}

enviarRespuesta(){

  if(this.opcionSeleccionada == this.opcionCorrecta){
    this.puntos +=100;
    if(this.puntos == 500){
      this.partidaGanada=true;
      this.gameEnabled=false;

    }


  }else{
    this.vidasString ="";
    this.vidas--;
    for(let i=0 ; i<this.vidas; i ++){
      this.vidasString += " ❤ ";
    }
    if(this.vidas == 0){
      this.partidaPerdida=true;
      this.gameEnabled=false;
      return;
    }      


  } 

  this.comenzar();
}
}




