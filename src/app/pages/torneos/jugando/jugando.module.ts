import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JugandoPageRoutingModule } from './jugando-routing.module';

import { JugandoPage } from './jugando.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JugandoPageRoutingModule
  ],
  declarations: [JugandoPage]
})
export class JugandoPageModule {}
