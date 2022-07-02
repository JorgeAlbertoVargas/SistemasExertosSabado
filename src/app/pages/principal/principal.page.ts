import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //Crear la funcion onClickSE1()
  onClickSE1(){
    console.log("Navegando a la Pagina SE1")
  }
  onClickSE2(){
    console.log("Navegando a la Pagina SE2")
  }
  onClickSE3(){
    console.log("Navegando a la Pagina SE3")
  }
  onClickSE4(){
    console.log("Navegando a la Pagina SE4")
  }
}
