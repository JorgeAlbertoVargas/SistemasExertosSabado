import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SE2PageRoutingModule } from './se2-routing.module';

import { SE2Page } from './se2.page';
import { ComponenteModule } from '../../componente/componente.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SE2PageRoutingModule,
    ComponenteModule
  ],
  declarations: [SE2Page]
})
export class SE2PageModule {}
