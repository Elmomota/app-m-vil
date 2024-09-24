import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperacionPassPageRoutingModule } from './recuperacion-pass-routing.module';

import { RecuperacionPassPage } from './recuperacion-pass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperacionPassPageRoutingModule
  ],
  declarations: [RecuperacionPassPage]
})
export class RecuperacionPassPageModule {}
