export class Usuario {
   
    email: string;
    contraseña: string;
  
    constructor(email: string, contraseña: string) {
      this.email = email;
      this.contraseña = contraseña;
    }

    public validarEmail(cadena: string): boolean {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
        
        if (regex.test(cadena)) {
          return true; 
        } else {
          return false; 
        }
      }

      
  

  public validarPassword(cadena: string): boolean {
    const regex = /^[a-zA-Z0-9]{1,10}$/; 
    
    if (regex.test(cadena)) {
      return true; 
    } else {
      return false; 
    }
  


  }
}

