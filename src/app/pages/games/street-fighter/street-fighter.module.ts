import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StreetFighterPageRoutingModule } from './street-fighter-routing.module';

import { StreetFighterPage } from './street-fighter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StreetFighterPageRoutingModule
  ],
  declarations: [StreetFighterPage]
})
export class StreetFighterPageModule {}
