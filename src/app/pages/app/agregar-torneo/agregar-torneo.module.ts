import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarTorneoPageRoutingModule } from './agregar-torneo-routing.module';

import { AgregarTorneoPage } from './agregar-torneo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarTorneoPageRoutingModule
  ],
  declarations: [AgregarTorneoPage]
})
export class AgregarTorneoPageModule {}
