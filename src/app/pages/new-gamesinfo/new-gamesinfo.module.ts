import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewGamesinfoPageRoutingModule } from './new-gamesinfo-routing.module';

import { NewGamesinfoPage } from './new-gamesinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewGamesinfoPageRoutingModule
  ],
  declarations: [NewGamesinfoPage]
})
export class NewGamesinfoPageModule {}
