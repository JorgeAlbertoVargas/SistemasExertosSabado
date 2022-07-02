import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    //Declarara Modulo
    HeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    //Exportar Modulo Header Personalizado
    HeaderComponent
  ]
})
export class ComponenteModule { }
