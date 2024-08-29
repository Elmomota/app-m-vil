import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValorantPageRoutingModule } from './valorant-routing.module';

import { ValorantPage } from './valorant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValorantPageRoutingModule
  ],
  declarations: [ValorantPage]
})
export class ValorantPageModule {}
