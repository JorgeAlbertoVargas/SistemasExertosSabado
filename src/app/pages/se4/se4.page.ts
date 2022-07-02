import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-se4',
  templateUrl: './se4.page.html',
  styleUrls: ['./se4.page.scss'],
})
export class Se4Page implements OnInit {

  // Inyectar servicio
  constructor(private dataservice:ServiceService) { }

  ngOnInit() {

    // Consumir el servicio
    this.dataservice.getUsuarios().subscribe((Usuarios)=>{
      console.log(Usuarios);
    })
  }

  //Crear Evento
  onClick(){
    console.log('Hola Mundo');
  }
  
}
