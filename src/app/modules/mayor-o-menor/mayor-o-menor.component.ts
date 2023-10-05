import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mayor-o-menor',
  templateUrl: './mayor-o-menor.component.html',
  styleUrls: ['./mayor-o-menor.component.scss']
})
export class MayorOMenorComponent {

  constructor(private router: Router){}


  public mazo : any = [];
  public cartaActual: any;
  public valor : any;
  public figura : string ="";
  public opcion : any;
  public cartaAnterior:any;
  public primerMano : boolean = true;
  public puntos : number =0;

  ngOnInit(){

  this.mazo = [];

    const palos = ['♥', '♦', '♣', '♠'];
    //const valores = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'];
    const valores = [1,2,3,4,5,6,7,8,9,10];

    for (const palo of palos) {
      for (const valor of valores) {
        const carta = { valor, figura: palo };
        this.mazo.push(carta);
      }
    }
    this.mostrarCarta();
  }

  mostrarCarta(){
    const indiceCartaAleatoria = Math.floor(Math.random() * this.mazo.length);

    this.cartaActual = this.mazo[indiceCartaAleatoria];
    this.valor= this.cartaActual.valor;
    this.figura = this.cartaActual.figura;
   
    if(!this.primerMano){
      this.evaluarMano();
    }else{
      this.cartaAnterior= this.cartaActual;
      this.primerMano = false;

    }
  }

  evaluarMano(){
 

    if(this.opcion == "menor"){

      if(this.cartaActual.valor < this.cartaAnterior.valor){
        this.puntos=this.puntos+10
      }else if(this.cartaActual.valor > this.cartaAnterior.valor){
        this.puntos=this.puntos-10

      }else if(this.cartaActual.valor == this.cartaAnterior.valor){
        this.puntos= this.puntos;
      }

    }else if(this.opcion == "mayor"){
      
      if(this.cartaActual.valor> this.cartaAnterior.valor){
        this.puntos=this.puntos+10

      }else if(this.cartaActual.valor < this.cartaAnterior.valor){
        this.puntos=this.puntos-10

      }else if(this.cartaActual.valor == this.cartaAnterior.valor){
        this.puntos= this.puntos;
      }
    }


    this.cartaAnterior= this.cartaActual;

    if(this.puntos<-50){
     // this.router.navigate
    }else if(this.puntos>30){
      this.router.navigate(['/winner']);
    }


  }










  

}
