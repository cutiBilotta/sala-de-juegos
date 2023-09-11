export class Usuario {
   
    nombre: string;
    contraseña: string;
  
    constructor(nombre: string, contraseña: string) {
      this.nombre = nombre;
      this.contraseña = contraseña;
    }

    public validarCadena(cadena: string): boolean {
        const regex = /^[a-zA-Z0-9]+$/; 
        
        if (cadena.length <= 10 && regex.test(cadena)) {
          return true; 
        } else {
          return false; 
        }
      }
  }
