import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SE1PageRoutingModule } from './se1-routing.module';

import { SE1Page } from './se1.page';
import { ComponenteModule } from '../../componente/componente.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SE1PageRoutingModule,

    //Estoy importanto el Moddulo de Header Personalizado
    ComponenteModule
  ],
  declarations: [SE1Page]
})
export class SE1PageModule {}
