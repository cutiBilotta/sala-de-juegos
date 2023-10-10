import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-millenium',
  templateUrl: './millenium.component.html',
  styleUrls: ['./millenium.component.scss']
})
export class MilleniumComponent implements OnInit {
  
  

  ngOnInit(){
    this.textoInicio = "Comencemos!";

  }
  
    public numerosElegidos : number[] = [];
    public cubilete : number [] = [];
    public puntos : number = 0;
    public vidas: number = 1;
    public vidasString:string = "❤ ❤ ❤";
    public imagenesDados : string[] = [];
    public flagEncontrado: boolean = false;
    public textoInicio: string ="";
    public partidaGanada : boolean = false;
    public partidaPerdida : boolean = false;

    gameEnabled: boolean = true;


  iniciarRonda(){
    this.textoInicio="";
    this.flagEncontrado=false;
    this.numerosElegidos = [];

    let cantidadSeleccionados:number=0;
    const checkboxElements = document.querySelectorAll<HTMLInputElement>('.inputCheck');

    checkboxElements.forEach((checkbox: HTMLInputElement) => {
      if (checkbox.checked) {
        this.numerosElegidos.push(parseInt(checkbox.value, 10));
        cantidadSeleccionados +=1;
        checkbox.checked = false;
      }
    });
  
      if(cantidadSeleccionados== 2){
        for(let i=0 ; i<5 ; i++){
          this.cubilete[i] = Math.floor(Math.random() * (7 - 1) + 1);
        }
      
        
        this.setearImagen();


        for(let i=0 ; i<5 ; i++){
          if(this.cubilete[i] == this.numerosElegidos[1] || this.cubilete[i] == this.numerosElegidos[0] ){
            this.puntos+=100;
            this.flagEncontrado=true;
          } 
        }
    }else{
      console.log("DEBE SELECCIONAR DOS NUMEROS");
    }

    if(!this.flagEncontrado){
      this.puntos-=200;
      this.vidasString ="";
      this.vidas--;
      for(let i=0 ; i<this.vidas; i ++){
        this.vidasString += " ❤ ";
      }
      if(this.vidas ==0){
        this.partidaPerdida=true;
        this.gameEnabled=false;
      }      
    }

    if(this.puntos >= 1000){
      this.partidaGanada=true;
      this.gameEnabled = false;
    }
  }

      

  setearImagen(){
    for(let i=0 ; i<5 ; i++){
        switch(this.cubilete[i]){
          case 1:
              this.imagenesDados[i] = "../../../assets/img/dados/uno.png"
              break;
          case 2:
            this.imagenesDados[i] = "../../../assets/img/dados/dos.png"
              break;
          case 3:
            this.imagenesDados[i] = "../../../assets/img/dados/tres.png"
              break;
          case 4:
            this.imagenesDados[i] = "../../../assets/img/dados/cuatro.png"
              break;
          case 5:
            this.imagenesDados[i] = "../../../assets/img/dados/cinco.png"
              break;
          case 6:
            this.imagenesDados[i] = "../../../assets/img/dados/seis.png"
              break;
  
        }
      
    }

  }


}




















/*
  public cubilete : number[] = [];
  public puntos : number=0;
  public vidas : number =3;
  public vidasStr : string = "❤ ❤ ❤";
  public puntosRonda:number=0;
  public flag : boolean = false;




  tirarDados(){

    this.puntosRonda=0;

    for(let i=0 ; i<4 ; i++){
      this.cubilete[i] = Math.floor(Math.random() * (7 - 1) + 1)
    }
    this.flag=false;

    for(let i=0 ; i<4 ; i++){
      if(this.cubilete[i] == 1){
        this.puntos += 100 ;
        this.puntosRonda+=100;
        this.flag = true;
      }else if(this.cubilete[i]== 5){
        this.puntos+=50;
        this.puntosRonda+=50;
        this.flag = true;
      }
    }

    if(this.flag == false){
      this.vidas--;
      if(this.vidas==2){
        this.vidasStr = " ❤ ❤ ";

      }else if(this.vidas==1){
        this.vidasStr = "❤";

      }else if(this.vidas==0){
        //pierde
      }

    if(this.puntos >=1000){
      //gano partida;
    }


  }


}
}
*/