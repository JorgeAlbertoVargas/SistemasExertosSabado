import { Injectable } from '@angular/core';

//Agregar HTTPCliente
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  //Injectar el Controlador del servicio
  constructor(private http: HttpClient) { }

// Crear Metodo para Traer Usuarios
getUsuarios(){
 return  this.http.get('https://jsonplaceholder.typicode.com/users')
}

}
