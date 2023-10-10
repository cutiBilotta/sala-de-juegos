import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.scss'],

})
export class AhorcadoComponent {

  constructor(private router: Router){}

  public letraSeleccionada: string = '';
  public palabras :string[] = ['lavadora', 'linterna', 'derramar', 'pasaporte', 'cosquillas', 'alimentos','envasado', 'zapatos', 'dictador', 'mascota','presentacion','esmalte', 'convencion', 'cortina', 'desayuno', 'medianoche', 'burbujas'];
  public palabraSeleccionada : string ="";
  public solucion: string[]= [];
  public vidas:number = 5;
  public solucionString : string="";
  public vidasString : string = "❤ ❤ ❤ ❤ ❤";
  public flagLetra : boolean = false;
  public flagGuion : boolean = false;
  public partidaGanada : boolean = false;
  public partidaPerdida : boolean = false;

  gameEnabled: boolean = true;

 
  ngOnInit(){
    const indiceArray = Math.floor(Math.random() * this.palabras.length);
    this.palabraSeleccionada = this.palabras[indiceArray];
    console.log(this.palabraSeleccionada);
    for(let i=0 ; i<this.palabraSeleccionada.length ; i++){
      this.solucionString = this.solucionString + " __ ";
      this.solucion.push(" __ ");
    }

  }


  manejarClicTeclado(event: MouseEvent) {
    this.flagGuion= false;
    this.flagLetra=false;
    const target = event.target as HTMLElement;
    if (target.classList.contains('key')) {

      this.letraSeleccionada = target.textContent || '';

    } else if (target.classList.contains('return')) {
      

      if (this.letraSeleccionada) {

        if(this.palabraSeleccionada.includes(this.letraSeleccionada)){
          this.solucionString = "";



          for(let i=0; i<this.palabraSeleccionada.length;i++){
              if(this.palabraSeleccionada[i] == this.letraSeleccionada){
                this.solucion[i]=this.letraSeleccionada;
                console.log(this.solucion);
              }
          }



        console.log(`Letra seleccionada: ${this.letraSeleccionada}`);
        console.log(this.palabraSeleccionada);

        for(let i=0; i<this.solucion.length ; i++){

          if(this.solucion[i].match(/[a-z]/i)){

            this.solucionString = this.solucionString + "             " + this.solucion[i] + "                ";
            this.flagLetra = true;
          }else{
            this.solucionString = this.solucionString + " __ ";
            this.flagGuion= true;
          }
        }

        if(this.flagLetra && !this.flagGuion){
          this.partidaGanada=true;    
          this.gameEnabled = false;
        }
  
        this.letraSeleccionada = '';

        }else{
          this.vidasString ="";
          console.log("Esa letra no se encuentra en la palabra");
          this.vidas--;
          for(let i=0 ; i<this.vidas; i ++){
            this.vidasString += " ❤ ";
          }
          
          if(this.vidas==0){
            this.partidaPerdida=true;
            this.gameEnabled=false;
          }
          
        }
      

        
      } else {
        // No se ha seleccionado ninguna letra antes de presionar "return"
        console.log('Ninguna letra seleccionada.');
      }
    }
  }
}





